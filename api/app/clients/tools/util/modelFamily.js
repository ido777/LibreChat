// modelFamily.js
const determineModelFamily = (modelName) => {
  if (typeof modelName === 'string' && modelName.startsWith('claude-3')) {
    return 'anthropic';
  } else {
    return 'openai';
  }
};

module.exports = { determineModelFamily };
