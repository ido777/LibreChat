const {
  EModelEndpoint,
  mapModelToAzureConfig,
  resolveHeaders,
} = require('librechat-data-provider');
const { getUserKeyValues, checkUserKeyExpiry } = require('~/server/services/UserService');
const { isEnabled, isUserProvided } = require('~/server/utils');
const { getAzureCredentials } = require('~/utils');
const { determineModelFamily } = require('~/app/clients/tools/util');
const { PluginsClient, AnthropicPluginsClient } = require('~/app');

const initializeClient = async ({ req, res, endpointOption }) => {
  let modelName = null;
  if (endpointOption.modelOptions) {
    modelName = endpointOption.modelOptions.model;
  }
  // TODO: check why we need two models to endpointOption, one as modelOptions.model and one as agentOptions.model
  if (endpointOption.agentOptions) {
    endpointOption.agentOptions.model = modelName;
  }
  // Determine the model family based on the model name or other logic
  const modelFamily = determineModelFamily(modelName);
  switch (modelFamily) {
    case 'openai':
      return await initializeOpenAiClient({ req, res, endpointOption });
    case 'anthropic':
      return await initializeAnthropicClient({ req, res, endpointOption });

    default:
      throw new Error('Unsupported model family', modelFamily);
  }
};

const initializeAnthropicClient = async ({ req, res, endpointOption }) => {
  const { ANTHROPIC_API_KEY, ANTHROPIC_SUMMARIZE, DEBUG_PLUGINS } = process.env;

  const { key: expiresAt } = req.body;
  const contextStrategy = isEnabled(ANTHROPIC_SUMMARIZE) ? 'summarize' : null;

  let endpoint = EModelEndpoint.anthropic;

  const credentials = {
    [EModelEndpoint.anthropic]: ANTHROPIC_API_KEY,
  };

  const userProvidesKey = isUserProvided(credentials[endpoint]);

  let userValues = null;
  if (expiresAt && userProvidesKey) {
    checkUserKeyExpiry(expiresAt, endpoint);
    userValues = await getUserKeyValues({ userId: req.user.id, name: endpoint });
  }

  let apiKey = userProvidesKey ? userValues?.apiKey : credentials[endpoint];

  const clientOptions = {
    contextStrategy,
    debug: isEnabled(DEBUG_PLUGINS),
    proxy: null,
    req,
    res,
    ...endpointOption,
  };

  if (!apiKey) {
    throw new Error(`${endpoint} API key not provided. Please provide it again.`);
  }

  const client = new AnthropicPluginsClient(apiKey, clientOptions);
  return {
    client,
    anthropicApiKey: apiKey,
  };
};

const initializeOpenAiClient = async ({ req, res, endpointOption }) => {
  const {
    PROXY,
    OPENAI_API_KEY,
    AZURE_API_KEY,
    PLUGINS_USE_AZURE,
    OPENAI_REVERSE_PROXY,
    AZURE_OPENAI_BASEURL,
    OPENAI_SUMMARIZE,
    DEBUG_PLUGINS,
  } = process.env;

  const { key: expiresAt, model: modelName } = req.body;
  const contextStrategy = isEnabled(OPENAI_SUMMARIZE) ? 'summarize' : null;

  let useAzure = isEnabled(PLUGINS_USE_AZURE);
  let endpoint = useAzure ? EModelEndpoint.azureOpenAI : EModelEndpoint.openAI;

  /** @type {false | TAzureConfig} */
  const azureConfig = req.app.locals[EModelEndpoint.azureOpenAI];
  useAzure = useAzure || azureConfig?.plugins;

  if (useAzure && endpoint !== EModelEndpoint.azureOpenAI) {
    endpoint = EModelEndpoint.azureOpenAI;
  }

  const credentials = {
    [EModelEndpoint.openAI]: OPENAI_API_KEY,
    [EModelEndpoint.azureOpenAI]: AZURE_API_KEY,
  };

  const baseURLOptions = {
    [EModelEndpoint.openAI]: OPENAI_REVERSE_PROXY,
    [EModelEndpoint.azureOpenAI]: AZURE_OPENAI_BASEURL,
  };

  const userProvidesKey = isUserProvided(credentials[endpoint]);
  const userProvidesURL = isUserProvided(baseURLOptions[endpoint]);

  let userValues = null;
  if (expiresAt && (userProvidesKey || userProvidesURL)) {
    checkUserKeyExpiry(expiresAt, endpoint);
    userValues = await getUserKeyValues({ userId: req.user.id, name: endpoint });
  }

  let apiKey = userProvidesKey ? userValues?.apiKey : credentials[endpoint];
  let baseURL = userProvidesURL ? userValues?.baseURL : baseURLOptions[endpoint];

  const clientOptions = {
    contextStrategy,
    debug: isEnabled(DEBUG_PLUGINS),
    reverseProxyUrl: baseURL ? baseURL : null,
    proxy: PROXY ?? null,
    req,
    res,
    ...endpointOption,
  };

  if (useAzure && azureConfig) {
    const { modelGroupMap, groupMap } = azureConfig;
    const {
      azureOptions,
      baseURL,
      headers = {},
      serverless,
    } = mapModelToAzureConfig({
      modelName,
      modelGroupMap,
      groupMap,
    });

    clientOptions.reverseProxyUrl = baseURL ?? clientOptions.reverseProxyUrl;
    clientOptions.headers = resolveHeaders({ ...headers, ...(clientOptions.headers ?? {}) });

    clientOptions.titleConvo = azureConfig.titleConvo;
    clientOptions.titleModel = azureConfig.titleModel;
    clientOptions.titleMethod = azureConfig.titleMethod ?? 'completion';

    const groupName = modelGroupMap[modelName].group;
    clientOptions.addParams = azureConfig.groupMap[groupName].addParams;
    clientOptions.dropParams = azureConfig.groupMap[groupName].dropParams;
    clientOptions.forcePrompt = azureConfig.groupMap[groupName].forcePrompt;

    apiKey = azureOptions.azureOpenAIApiKey;
    clientOptions.azure = !serverless && azureOptions;
  } else if (useAzure || (apiKey && apiKey.includes('{"azure') && !clientOptions.azure)) {
    clientOptions.azure = userProvidesKey ? JSON.parse(userValues.apiKey) : getAzureCredentials();
    apiKey = clientOptions.azure.azureOpenAIApiKey;
  }

  if (!apiKey) {
    throw new Error(`${endpoint} API key not provided. Please provide it again.`);
  }

  const client = new PluginsClient(apiKey, clientOptions);
  return {
    client,
    azure: clientOptions.azure,
    openAIApiKey: apiKey,
  };
};

module.exports = { initializeClient };
