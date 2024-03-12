* [index.md](/index.md)
    * 🪶 Features
    * 📃 All-In-One AI Conversations with LibreChat
    * ⭐ Star History
    * ✨ Contributors
    * 💖 This project exists in its current state thanks to all the people who contribute
* [contributions/index.md](/contributions/index.md)
    * Contributing to LibreChat
* [contributions/translation_contribution.md](/contributions/translation_contribution.md)
    * How to add a new language to LibreChat 🌍
    * Minimum Requirements:
    * Language Translation
    * Preparation
    * Add your language to `Translation.tsx`:
    * Create your new language file
    * Delete the Language list after `com_nav_setting_general: 'General',` near the bottom of the file (You do not need to translate the individual language names), except for `com_nav_setting_data: 'Data controls'` (you need to translate it)
    * Add your language to `Eng.tsx`
    * Add your language to the menu
    * Summary
    * Commit and create a new PR
* [contributions/documentation_guidelines.md](/contributions/documentation_guidelines.md)
    * Documentation Guidelines
    * New Documents
    * Markdown Formatting
    * Important Notes
    * Tips
    * Example of HTML image embedding:
* [contributions/how_to_contribute.md](/contributions/how_to_contribute.md)
    * How to Contribute in a Quick and Easy Way
    * Installation of Tools
    * How to Use?
    * Example of a Pull Request (PR)
    * Testing
    * How?
    * Possible Various Problems
* [contributions/testing.md](/contributions/testing.md)
    * Locally test the app during development
    * WIP
    * Run the tests
    * 1. Install the global dependencies
    * 2. Run tests
* [contributions/coding_conventions.md](/contributions/coding_conventions.md)
    * Coding Conventions
    * Node.js API Server
    * 1. General Guidelines
    * 2. API Design
    * 3. File Structure
    * Routes
    * Controllers
    * Services
    * Models
    * 4. Database Access (MongoDB and Mongoose)
    * 5. Testing and Documentation
    * React Client
    * General TypeScript and React Best Practices
    * Data Services
    * State Management
* [install/index.md](/install/index.md)
    * Installation and Configuration
    * **[Installation](./installation/index.md)**
    * **[Configuration](./configuration/index.md)**
* [install/installation/container_install.md](/install/installation/container_install.md)
    * Container Installation Guide (Podman)
    * Creating the base image
    * Build the base container image (which contains the LibreChat stack - api, client and data providers)
    * Setting up the env file
    * Creating a network for LibreChat
    * Creating dependant containers
    * Mongodb
    * Meilisearch
    * Starting LibreChat
    * Auto-starting containers on boot (podman + Linux only)
    * !/bin/bash
    * Install podman container as systemd container
    * Backing up volume containers (podman only)
    * backup the
    * Updating LibreChat
    * Update the git repo
    * (ONLY if using systemd auto start) Stop the service
    * Remove the librechat container
    * Destroy the local image
    * Rebuild the image
    * Recreate the container (using the Starting LibreChat step)
    * Stop the container (if it's confirmed to be running) and restart the service
    * Integrating the Configuration File in Podman Setup
* [install/installation/index.md](/install/installation/index.md)
    * Installation
* [install/installation/docker_compose_install.md](/install/installation/docker_compose_install.md)
    * Docker Compose Installation Guide
    * Installation and Configuration
    * Preparation
    * Docker Installation
    * LibreChat Configuration
    * [AI Setup](../configuration/ai_setup.md) (Required)
    * [Custom Endpoints & Configuration](../configuration/custom_config.mddocker-setup) (Optional)
    * [Manage Your MongoDB Database](../../features/manage_your_database.md) (Optional)
    * [User Authentication System Setup](../configuration/user_auth_system.md) (Optional)
    * Running LibreChat
    * Updating LibreChat
    * Stop the container (if running)
    * Switch to the repo's main branch
    * Pull the latest changes to the main branch from Github
    * Prune all LibreChat Docker images
    * Remove all unused dangling Docker images.
    * Be careful, as this will delete all dangling docker images on your
    * computer, also those not created by LibreChat!
    * Building a new LibreChat image without cache
    * Start LibreChat
    * Advanced Settings
    * Config notes for docker-compose.yml file
    * ...
    * ...
    * **[Create a MongoDB database](../configuration/mongodb.md)** (Not required if you'd like to use the local database installed by Docker)
* [install/installation/windows_install.md](/install/installation/windows_install.md)
    * Windows Installation Guide
    * **Recommended:**
    * Timestamps
    * Instructions
    * **Manual Installation**
    * Download and Install Node.js (Required)
    * Download and Install Git (Recommended)
    * [Create a MongoDB database](../configuration/mongodb.md) (Required)
    * [Setup your AI Endpoints](../configuration/ai_setup.md) (Required)
    * Download LibreChat (Required)
    * Enable the Conversation search feature: (optional)
    * [User/Auth System](../configuration/user_auth_system.md) (Optional)
    * Setup and Run LibreChat
    * To setup the app:
    * To use the app:
    * Using a batch file
    * **Update**
    * Windows PowerShell terminal
    * Step 1: Get the latest changes
    * Fetch the latest changes from Github
    * Switch to the repo's main branch
    * Pull the latest changes to the main branch from Github
    * Step 2: Delete all node_modules directories
    * Define he list of directories we will delete
    * Loop over each directory and delete the node_modules folder if it exists
    * Step 3: Clean the npm cache
    * Step 4: Install dependencies
    * Step 5: Build client-side (frontend) code
    * Start LibreChat
* [install/installation/linux_install.md](/install/installation/linux_install.md)
    * Linux Installation Guide
    * **Recommended:**
    * Timestamps
    * Instructions
    * **Manual Installation:**
    * Prerequisites
    * Clone the repository:
    * Extract the content in your desired location:
    * Enable the Conversation search feature: (optional)
    * Install Node.js:
    * [Create a MongoDB database](../configuration/mongodb.md) (Required)
    * [Setup your AI Endpoints](../configuration/ai_setup.md) (Required)
    * [User/Auth System](../configuration/user_auth_system.md) (Optional)
    * Run the project
    * Using the command line (in the root directory)
    * Start the app:
    * Using a shell script
    * !/bin/bash
    * the meilisearch executable needs to be at the root of the LibreChat directory
    * ↑↑↑ meilisearch is the name of the meilisearch executable, put your own master key there
    * this shell script goes at the root of the LibreChat directory (/home/user/LibreChat/)
    * Update the app version
    * Bash Terminal
    * Step 1: Get the latest changes
    * Fetch the latest changes from Github
    * Switch to the repo's main branch
    * Pull the latest changes to the main branch from Github
    * Step 2: Delete all node_modules directories
    * Define the list of directories we will delete
    * Loop over each directory and delete the node_modules folder if it exists
    * Step 3: Clean the npm cache
    * Step 4: Install dependencies
    * Step 5: Build client-side (frontend) code
    * Start LibreChat
* [install/installation/mac_install.md](/install/installation/mac_install.md)
    * Mac Installation Guide
    * **Recommended : [Docker Install](docker_compose_install.md)**
    * **Manual Installation**
    * Install the prerequisites (Required)
    * Download LibreChat (Required)
    * Create a MongoDB database (Required)
    * [Setup your AI Endpoints](../configuration/ai_setup.md) (Required)
    * [User/Auth System](../configuration/user_auth_system.md) (Optional)
    * **Download MeiliSearch for macOS (Optional):**
    * Start LibreChat
    * Optional but recommended:
    * !/bin/bash
    * Replace "your_master_key_goes_here" with your MeiliSearch Master Key
    * Update LibreChat
    * Terminal on macOS, prefix commands with `sudo` as needed
    * Step 1: Get the latest changes
    * 1a - Fetch the latest changes from Github
    * 1b - Switch to the repo's main branch
    * 1c - Pull the latest changes to the main branch from Github
    * Step 2: Delete all node_modules directories
    * 2a - Define the list of directories we will delete
    * 2b - Loop over each directory and delete the node_modules folder if it exists
    * Step 3: Clean the npm cache
    * Step 4: Install dependencies
    * Step 5: Build client-side (frontend) code
    * Start LibreChat
* [install/configuration/litellm.md](/install/configuration/litellm.md)
    * Using LibreChat with LiteLLM Proxy
    * Start LiteLLM Proxy Server
    * 1. Uncomment desired sections in docker-compose.override.yml
    * Caching with Redis
    * Performance Monitoring with Langfuse
    * 2. Create a config.yaml for LiteLLM proxy
    * 3. Configure LibreChat
    * Why use LiteLLM?
* [install/configuration/azure_openai.md](/install/configuration/azure_openai.md)
    * Azure OpenAI
    * Setup
    * Required Fields
    * Group-Level Configuration
    * Model-Level Configuration
    * Special Considerations
    * Model Deployments
    * Example Azure OpenAI Object Structure
    * Using Plugins with Azure
    * Example Azure OpenAI Object Structure
    * Using a Specified Base URL with Azure
    * librechat.yaml file, under an Azure group:
    * OR
    * Cloudflare example
    * Enabling Auto-Generated Titles with Azure
    * Example Azure OpenAI Object Structure
    * Using GPT-4 Vision with Azure
    * Generate images with Azure OpenAI Service (DALL-E)
    * Serverless Inference Endpoints
    * serverless examples
    * ⚠️ Legacy Setup ⚠️
    * .env file
    * .env file
    * .env file
    * .env file
    * MUST be a real OpenAI model, named exactly how it is recognized by OpenAI API (not Azure)
    * .env file
    * OR
    * Cloudflare example
    * .env file
    * Cloudflare example
* [install/configuration/mongodb.md](/install/configuration/mongodb.md)
    * Set Up an Online MongoDB Database
    * Create an account
    * Create a project
    * Build a database
    * Choose your cloud environment
    * Name your cluster
    * Database credentials
    * Select environment
    * Complete database configuration
    * Go to your database
    * Network access
    * Add IP adress
    * Allow access
    * Get your connection string
* [install/configuration/misc.md](/install/configuration/misc.md)
    * Using LibreChat behind a reverse proxy with Basic Authentication
    * Basic Authentication (Basic Auth)
    * Reverse Proxy
    * The Issue with LibreChat and Basic Auth
    * Nginx Configuration
    * https://librechat.domain.com
* [install/configuration/free_ai_apis.md](/install/configuration/free_ai_apis.md)
    * Free AI APIs
    * NagaAI
    * 
    * OpenAI Endpoint:
    * 
    * Reverse proxy settings for OpenAI:
    * OPENAI_MODELS=gpt-3.5-turbo,gpt-3.5-turbo-16k,gpt-3.5-turbo-0301,gpt-4,gpt-4-0314,gpt-4-0613
    * That's it! You're all set. 🎉
    * Here's me using Llama2 via NagaAI
    * Plugins also work with this reverse proxy (OpenAI models). [More info on plugins here](https://docs.librechat.ai/features/plugins/introduction.html)
* [install/configuration/ollama.md](/install/configuration/ollama.md)
    * Ollama
    * 1. Install Ollama
    * Mac, Linux, Windows Install
    * Docker Install
    * 2. Load Models in Ollama
    * 3. Configure LibreChat
* [install/configuration/index.md](/install/configuration/index.md)
    * Configuration
* [install/configuration/ai_endpoints.md](/install/configuration/ai_endpoints.md)
    * Compatible AI Endpoints
    * Intro
    * Groq
    * Mistral AI
    * Openrouter
    * Anyscale
    * Fireworks
    * Perplexity
    * together.ai
    * LiteLLM
    * Ollama
* [install/configuration/dotenv.md](/install/configuration/dotenv.md)
    * .env File Configuration
    * Server Configuration
    * Port
    * MongoDB Database
    * Application Domains
    * Prevent Public Search Engines Indexing
    * Logging
    * Permission
    * librechat.yaml path
    * Endpoints
    * General Config
    * Known Endpoints - librechat.yaml
    * Anthropic
    * Azure
    * .env file
    * Cloudflare example
    * BingAI
    * Google
    * all available models as of 12/16/23
    * OpenAI
    * Optional
    * Assistants
    * OpenRouter
    * Plugins
    * General Configuration:
    * Azure AI Search
    * DALL-E:
    * Google Search
    * SerpAPI
    * Stable Diffusion (Automatic1111)
    * Tavily
    * Traversaal
    * WolframAlpha
    * Zapier
    * Search (Meilisearch)
    * User System
    * Moderation
    * Basic Moderation Settings
    * Score for each violation
    * Login and registration rate limiting.
    * Message rate limiting (per user & IP)
    * Limiters
    * Balance
    * Registration and Login
    * Social Logins
    * [Discord Authentication](../configuration/user_auth_system.mddiscord)
    * Discord
    * [Facebook Authentication](../configuration/user_auth_system.mdfacebook)
    * Facebook
    * [GitHub Authentication](../configuration/user_auth_system.mdgithub)
    * GitHub
    * [Google Authentication](../configuration/user_auth_system.mdgoogle)
    * Google
    * [OpenID Authentication](../configuration/user_auth_system.mdopenid-with-aws-cognito)
    * OpenID
    * Email Password Reset
    * UI
    * Other
* [install/configuration/ai_setup.md](/install/configuration/ai_setup.md)
    * AI Setup
    * General
    * [Free AI APIs](free_ai_apis.md)
    * Setting a Default Endpoint
    * .env file
    * No spaces between values
    * Setting a Default Preset
    * OpenAI
    * Assistants
    * without spaces
    * Anthropic
    * Google
    * Generative Language API (Gemini)
    * Vertex AI (PaLM 2 & Codey)
    * 1. Once signed up, Enable the Vertex AI API on Google Cloud:
    * 2. Create a Service Account with Vertex AI role:
    * 3. Create a JSON key to Save in your Project Directory:
    * Note: this configures both the Vertex AI Service Account JSON key file
    * and the Generative Language API key to be provided from the frontend.
    * Azure OpenAI
    * Please see the dedicated [Azure OpenAI Setup Guide.](./azure_openai.md)
    * [OpenRouter](https://openrouter.ai/)
    * [Review the Custom Config Guide (click here)](./custom_config.md) to add an `OpenRouter` Endpoint
    * Setup (legacy):
    * Notes (legacy):
    * Unofficial APIs
    * BingAI
    * copilot-gpt4-service
    * Conclusion
* [install/configuration/custom_config.md](/install/configuration/custom_config.md)
    * LibreChat Configuration Guide
    * Intro
    * Compatible Endpoints
    * Setup
    * Docker Setup
    * For more details on the override file, see the Docker Override Guide:
    * https://docs.librechat.ai/install/configuration/docker_override.html
    * Example Config
    * fileStrategy: "firebase"   If using Firebase CDN
    * Config Structure
    * Version
    * Cache Settings
    * File Strategy
    * File Configuration
    * Rate Limiting
    * Registration
    * Endpoints
    * Endpoint File Config Object Structure
    * **Overview**
    * Example
    * **disabled**:
    * **fileLimit**:
    * **fileSizeLimit**:
    * **totalSizeLimit**:
    * **supportedMimeTypes**:
    * **serverFileSizeLimit**:
    * **avatarSizeLimit**:
    * Registration Object Structure
    * Example Registration Object Structure
    * **socialLogins**:
    * **allowedDomains**:
    * Assistants Endpoint Object Structure
    * Example
    * **disableBuilder**:
    * **pollIntervalMs**:
    * **timeoutMs**:
    * **supportedIds**:
    * **excludedIds**:
    * Custom Endpoint Object Structure
    * Example
    * Example Endpoint Object Structure
    * **name**:
    * **apiKey**:
    * **baseURL**:
    * **iconURL**:
    * **models**:
    * **titleConvo**:
    * **titleMethod**:
    * **titleModel**:
    * **summarize**:
    * **summaryModel**:
    * **forcePrompt**:
    * **modelDisplayLabel**:
    * **addParams**:
    * **dropParams**:
    * **headers**:
    * Additional Notes
    * Default Parameters
    * Breakdown of Default Params
    * Azure OpenAI Object Structure
    * Example Configuration
    * Example Azure OpenAI Object Structure
    * **groups**:
    * **plugins**:
    * Group Configuration Parameters
    * **group**:
    * **apiKey**:
    * **instanceName**:
    * **version**:
    * **baseURL**:
    * **additionalHeaders**:
    * **serverless**:
    * **addParams**:
    * **dropParams**:
    * **forcePrompt**:
    * **models**:
    * Model Configuration Parameters
    * **deploymentName**:
    * **version**:
    * Notes:
* [install/configuration/default_language.md](/install/configuration/default_language.md)
    * Default Language 🌍
    * How to change the default language
* [install/configuration/docker_override.md](/install/configuration/docker_override.md)
    * How to Use the Docker Compose Override File
    * Step 1: Create a `docker-compose.override.yml` file
    * Step 2: Edit the override file
    * Examples
    * Step 3: Apply the changes
    * Step 4: Verify the changes
    * Important Considerations
    * MongoDB Authentication
    * Step 1: Creating an Admin User
    * example input/output
    * example input/output
    * example input/output
    * Step 2: Enabling Authentication and Creating a User with `readWrite` Access
    * example input/output
    * ensure container is shut down
    * start mongo container
    * enter mongosh as admin
    * check LibreChat db users first; if persisted, exit after this
    * Exit if you see user output. If not, run the create user command again
    * Step 3: Update the `MONGO_URI` to Use the New Credentials
    * TL;DR
    * Step 1:
    * Step 2:
    * Edit override file with --auth flag
    * Step 3:
    * Edit override file with new connection string
    * Example
* [install/configuration/user_auth_system.md](/install/configuration/user_auth_system.md)
    * User Authentication System
    * Basic Configuration:
    * General
    * Session Expiry and Refresh Token
    * JWT Secret and Refresh Secret
    * Automated Moderation System (optional)
    * **Email and Password Reset**
    * General setup
    * Setup with Gmail
    * Setup with custom mail server
    * Social Authentication - Setup and Configuration
    * Discord
    * Create a new Discord Application
    * Discord Application Configuration
    * .env Configuration
    * Facebook - WIP
    * Create a Facebook Application
    * Facebook Application Configuration
    * .env Configuration
    * GitHub
    * Create a GitHub Application
    * GitHub Application Configuration
    * .env Configuration
    * Google
    * Create a Google Application
    * Google Application Configuration
    * .env Configuration
    * OpenID with AWS Cognito
    * Create a new User Pool in Cognito
    * Configure sign-in experience
    * Configure Security Requirements
    * Configure sign-up experience
    * Configure message delivery
    * Integrate your app
    * Review and create
    * Get your environment variables
    * OpenID with Azure AD
* [features/token_usage.md](/features/token_usage.md)
    * Token Usage
    * Listing of balances
    * Notes
    * More details
    * Preview
* [features/bing_jailbreak.md](/features/bing_jailbreak.md)
    * Bing Jailbreak
    * Use the default message as a template for writing your own system message and follow the guidelines
    * Default System Message for Jailbreak mode (Sydney)
    * Guidelines
    * References
* [features/index.md](/features/index.md)
    * Features
* [features/logging_system.md](/features/logging_system.md)
    * General
    * Setup
    * in a production environment
* [features/firebase.md](/features/firebase.md)
    * Firebase CDN Setup
    * Steps to Set Up Firebase
    * Create a New Project
    * Configure `fileStrategy` in `librechat.yaml`
* [features/mod_system.md](/features/mod_system.md)
    * Automated Moderation System (optional)
    * Notes
    * Rate Limiters
    * Setup
    * The score for each violation
    * Login and registration rate limiting.
    * Message rate limiting (per user & IP)
    * Note: You can utilize both limiters, but default is to limit by IP only.
    * OpenAI moderation text
    * OPENAI_MODERATION
    * OPENAI_MODERATION_API_KEY
    * OPENAI_MODERATION_REVERSE_PROXY
    * OPENAI_MODERATION_REVERSE_PROXY=false
* [features/manage_your_database.md](/features/manage_your_database.md)
    * Manage Your MongoDB Database with Mongo Express
    * Mongo-Express Setup
    * Setting up Mongo Express service
    * Security Notice
    * Launching and accessing Mongo Express
    * Removing Mongo Express
* [features/presets.md](/features/presets.md)
    * Guide to Using the "Presets" Feature
    * Create a Preset:
    * Parameters Explained:
    * Importing/Exporting Presets
    * Setting Default Preset
    * Sharing on Discord
* [features/third_party.md](/features/third_party.md)
    * Third-Party Tools
    * ❗Note: If you would like to include your own tool in the list, you're welcome to submit a Pull Request.
    * [LibreChat Discord Bot](https://github.com/Berry-13/LibreChat-DiscordBot)
    * [LibreChat Android App](https://github.com/goodair220917/LibreChat-Android-App)
    * [LibreChat Windows Installer](https://github.com/fuegovic/LibreChat-Windows-Installer)
    * [LibreChat Azure Deployment](https://github.com/thunderbug1/LibreChatAzureDeployment)
    * [LibreChat Enhanced Docker Compose Deployment](https://github.com/CXwudi/librechat-docker-deployment)
* [features/plugins/google_search.md](/features/plugins/google_search.md)
    * Google Search Plugin
    * 1\. Go to the [Programmable Search Engine docs](https://developers.google.com/custom-search/docs/tutorial/creatingcse) to get a Search engine ID
    * 2\. Click on "Control Panel" under "Defining a Programmable Engine in Control Panel"
    * 3\. Register yourself a new account/Login to the Control Panel
    * 4\. Create a new search engine
    * 5\. Copy your Search engine ID to your .env file
    * 6\. Go to [custom-search docs](https://developers.google.com/custom-search/v1/introduction) to get a Google search API key
    * 7\. Click "Get a Key":
    * 8\. Name your project and agree to the Terms of Service
    * 9\. Copy your Google search API key to your .env file
* [features/plugins/wolfram.md](/features/plugins/wolfram.md)
    * Wolfram Alpha Plugin
    * Make an account
    * Get your AppID
    * Configure it in LibreChat
    * Select the plugin and enjoy!
* [features/plugins/index.md](/features/plugins/index.md)
    * Plugins
* [features/plugins/stable_diffusion.md](/features/plugins/stable_diffusion.md)
    * Stable Diffusion Plugin
    * 1. Follow download and installation instructions from **[stable-diffusion-webui readme](https://github.com/AUTOMATIC1111/stable-diffusion-webui)**
    * 2. Edit your run script settings
    * Windows
    * Others (not tested but should work)
    * 3. Run Stable Diffusion (either .sh or .bat file according to your operating system)
    * 4. In the app, select the plugins endpoint, open the plugins store, and install Stable Diffusion
    * **Note: The default port for Gradio is `7860`. If you changed it, please update the value accordingly.**
    * Docker Install
    * Local Install
    * Select the plugins endpoint
    * Open the Plugin store and Install Stable Diffusion
    * 5. Select the plugin and enjoy!
* [features/plugins/chatgpt_plugins_openapi.md](/features/plugins/chatgpt_plugins_openapi.md)
    * Using official ChatGPT Plugins / OpenAPI specs
    * Intro
    * **[Plugin Manifest File:](https://platform.openai.com/docs/plugins/getting-started/plugin-manifest)**
    * **[OpenAPI Spec](https://platform.openai.com/docs/plugins/getting-started/openapi-definition)**
    * Adding a Plugin
    * Editing Manifest Files
    * Override Parameter Values
    * Add Header Fields
    * Custom OpenAPI Spec files
    * Plugins with Authentication
    * Showcase
    * Disclaimers
* [features/plugins/azure_ai_search.md](/features/plugins/azure_ai_search.md)
    * Azure AI Search Plugin
    * Configurations
    * Required
    * AZURE_AI_SEARCH_SERVICE_ENDPOINT
    * AZURE_AI_SEARCH_INDEX_NAME
    * AZURE_AI_SEARCH_API_KEY
    * Introduction to tutorial
    * Create or log in to your account on Azure Portal
    * Create the Azure AI Search service
    * Create your index
    * Get the Endpoint
    * Configure in LibreChat:
    * Conclusion
    * Optional
    * AZURE_AI_SEARCH_API_VERSION
    * AZURE_AI_SEARCH_SEARCH_OPTION_QUERY_TYPE
    * AZURE_AI_SEARCH_SEARCH_OPTION_TOP
    * AZURE_AI_SEARCH_SEARCH_OPTION_SELECT
* [features/plugins/make_your_own.md](/features/plugins/make_your_own.md)
    * Making your own Plugin
    * Key Takeaways
    * StructuredTools
    * Step 1: Import Required Modules
    * Step 2: Define Your Tool Class
    * Step 3: Define Helper Methods
    * Step 4: Implement the `_call` Method
    * Step 5: Export Your Plugin and import into handleTools.js
    * Step 6: Export your Plugin into index.js
    * Step 7: Add your Plugin to manifest.json
    * Example: WolframAlphaAPI Tool
* [features/plugins/introduction.md](/features/plugins/introduction.md)
    * Plugins Endpoint
    * Using Plugins
    * Notes
    * Plugins Setup Instructions
    * Showcase
* [deployment/docker_ubuntu_deploy.md](/deployment/docker_ubuntu_deploy.md)
    * Ubuntu Docker Deployment Guide
    * Part I: Installing Docker and Other Dependencies:
    * **1. Update and Install Docker Dependencies**
    * **Notes:**
    * **2. Add Docker Repository to APT Sources**
    * **3. Install Docker**
    * **4. Verify that Docker is Running on Ubuntu**
    * **5. Install the Latest Version of Docker Compose**
    * output should be: Docker Compose version v2.20.2
    * **6. As part of this guide, I will recommend you have git and npm installed:**
    * Part II: Setup LibreChat
    * **1. Clone down the repo**
    * clone down the repository
    * enter the project directory
    * **2. Create a global environment file.**
    * Copies the example file as your global env file
    * then, add your credentials
    * if editing the .env file
    * **3. Start docker, and then run the installation/update script**
    * should already be running, but just to be safe
    * confirm docker is running
    * **4. Once the app is running, you can access it at `http://yourserverip`**
    * Go back to the droplet page to get your server ip, copy it, and paste it into your browser!
    * Sign up, log in, and enjoy your own privately hosted, remote LibreChat :)
    * Part III: Updating LibreChat
    * Part IV: Editing the NGINX file (for custom domains and advanced configs)
    * First, stop the active instance if running
    * now you can safely edit
    * before
    * after
    * create a new branch
    * example: git checkout -b edit
    * stage all file changes
    * these values will work if you don't care what they are
    * Now you can commit the change
    * Part V: Use the Latest Stable Release instead of Latest Main Branch
    * Note: If you're still having trouble, before creating a new issue, please search for similar ones on our [issues thread on our discord](https://discord.librechat.ai) or our [troubleshooting discussion](https://github.com/danny-avila/LibreChat/discussions/categories/troubleshooting) on our Discussions page. If you don't find a relevant issue, feel free to create a new one and provide as much detail as possible.
* [deployment/ngrok.md](/deployment/ngrok.md)
    * Ngrok Installation
    * Sign up
    * Docker Installation 🐳
    * Windows Installation 💙
    * Linux Installation 🐧
    * Mac Installation 🍎
    * Note:
* [deployment/huggingface.md](/deployment/huggingface.md)
    * Hugging Face Deployment 🤗
    * Create and Configure your Database (Required)
    * Getting Started
    * Deployment
    * Update
    * Conclusion
    * 🎉 Congratulation, you've sucessfully deployed LibreChat on Hugging Face! 🤗
* [deployment/digitalocean.md](/deployment/digitalocean.md)
    * Digital Ocean Setup
    * **Click the banner to get a $200 credit and to directly support LibreChat!**
    * Table of Contents
    * Part I: Starting from Zero:
    * **1. [Click here](https://m.do.co/c/4486923fcf00) or on the banner above to get started on DigitalOcean**
    * **a) Click on ["Explore our control panel"](https://cloud.digitalocean.com/projects) or simply navigate to the [Projects page](https://cloud.digitalocean.com/projects)**
    * **b) Click on "Spin up a Droplet" to start the setup**
    * **2. Access your droplet console**
    * **3. Once you have logged in, immediately create a new, non-root user:**
    * example: adduser danny
    * you will then be prompted for a password and user details
    * example: usermod -aG sudo danny
    * example: su - danny
    * **4. Firewall Setup**
    * Note: If you're still having trouble, before creating a new issue, please search for similar ones on our [issues thread on our discord](https://discord.librechat.ai) or our [troubleshooting discussion](https://github.com/danny-avila/LibreChat/discussions/categories/troubleshooting) on our Discussions page. If you don't find a relevant issue, feel free to create a new one and provide as much detail as possible.
* [deployment/cloudflare.md](/deployment/cloudflare.md)
    * Cloudflare
    * if you are new to Domain, here's a quick guide to use setup a domain with Cloudflare:
    * Google Domains and Cloudflare
    * Cloudflare Zero Trust extra protection (optional)
    * Setup Application Login: (optional)
    * Setup Authentication Method:
    * Cloudflare Tunnels
    * Installation Steps
    * Windows Installation
    * Docker Installation
    * Tunnel Configuration
    * You did it! You have successfully set up a working tunnel.
    * Note: If you're still having trouble, before creating a new issue, please search for similar ones on our [issues thread on our discord](https://discord.librechat.ai) or our [troubleshooting discussion](https://github.com/danny-avila/LibreChat/discussions/categories/troubleshooting) on our Discussions page. If you don't find a relevant issue, feel free to create a new one and provide as much detail as possible.
* [deployment/index.md](/deployment/index.md)
    * Deployment
* [deployment/render.md](/deployment/render.md)
    * Render Deployment
    * Note:
    * Create an account
    * Add Environement Variables
    * Create and Configure your Database
    * Complete the Environment Variables configuration
    * Deployment
    * Conclusion
    * Note: If you're still having trouble, before creating a new issue, please search for similar ones on our [issues thread on our discord](https://discord.librechat.ai) or our [troubleshooting discussion](https://github.com/danny-avila/LibreChat/discussions/categories/troubleshooting) on our Discussions page. If you don't find a relevant issue, feel free to create a new one and provide as much detail as possible.
* [deployment/nginx.md](/deployment/nginx.md)
    * Deploying Application in the Cloud with HTTPS and NGINX
    * FAQ
    * Why do I need reverse proxy?
    * Why do I need HTTPS?
    * Prerequisites
    * Initial Setup
    * Pointing Your Domain to Your Website
    * Configure DNS:
    * Verify Domain Propagation
    * Obtain a SSL/TLS Certificate
    * Install Certbot
    * Obtain the Certificate
    * Set Up NGINX as a Reverse Proxy
    * Using the `deploy-compose.yml` Docker Compose (the recommended way)
    * Normal Host based deployment
    * Configuration without Basic Authentication
    * Use Case
    * User Perspective
    * Administrator Perspective
    * Configuration Example
    * Configuration with Basic Authentication
    * Use Case
    * User Perspective
    * Administrator Perspective
    * Configuration Example
    * Summary of Differences
    * Option A: Configure NGINX without Basic Authentication using Docker Compose with SSL
    * Secure default configuration with SSL enabled
    * Based on Mozilla SSL Configuration Generator and provided configuration
    * Block to handle direct IP access and undefined server names
    * Redirect HTTP to HTTPS for your domain
    * HTTPS server configuration for your domain
    * Option B: Configure NGINX without Basic Authentication on the host
    * Run the application
* [deployment/linode.md](/deployment/linode.md)
    * Linode
    * Create a Linode Account and a Linode Server
    * Install Docker:
    * [Install LibreChat](../install/installation/docker_compose_install.md)
    * Install and Setup NGINX Proxy Manager:
    * Start NGINX Proxy Manager
    * Login to NGINX Proxy Manager
    * Login to NGINX Proxy Manager.
    * Note: If you're still having trouble, before creating a new issue, please search for similar ones on our [issues thread on our discord](https://discord.librechat.ai) or our [troubleshooting discussion](https://github.com/danny-avila/LibreChat/discussions/categories/troubleshooting) on our Discussions page. If you don't find a relevant issue, feel free to create a new one and provide as much detail as possible.
* [deployment/meilisearch_in_render.md](/deployment/meilisearch_in_render.md)
    * Utilize Meilisearch by running LibreChat on Render
    * Create a new account or a new project on Render
    * Click on Advanced to add Environment Variables
    * Add the Environment Variables
    * In LibreChat Project
    * Deployment
    * Conclusion
    * Note: If you are still having issues, before creating a new issue, please search for similar issues on our [issues thread on our discord](https://discord.librechat.ai) or on our [troubleshooting discussion](https://github.com/danny-avila/LibreChat/discussions/categories/troubleshooting) on our Discussion page. If you cannot find a relevant issue, feel free to create a new one and provide as many details as possible.
* [deployment/introduction.md](/deployment/introduction.md)
    * Deployment Introduction
    * Comparative Table
    * Hosting Services
    * Network Services
    * Cloud Vendor Integration and Configuration
    * Essential Security Considerations
    * Choosing the Cloud vendor (e.g. platform)
    * Choosing the Right Deployment Option for Your Needs
    * 1. IaaS (Infrastructure as a Service)
    * For Iaas we recommend Docker Compose
    * 2. IaC (Infrastructure as Code)
    * 3. PaaS (Platform as a Service)
    * 4. One Click Deployment (PaaS)
    * Other / Network Services
    * 1. Tunneling
    * 2. DNS Service
    * Conclusion
* [deployment/hetzner_ubuntu.md](/deployment/hetzner_ubuntu.md)
    * Hetzner Ubuntu Setup
    * Starting from Zero:
    * Tokens/Apis/etc:
    * [Setup your AI Endpoints](../install/configuration/ai_setup.md) (Required)
    * [User/Auth System](../install/configuration/user_auth_system.md) (Optional)
    * [Plugins](../features/plugins/introduction.md)
    * Using Docker to Install the Service
    * 1. **Recommended: [Docker Install](../install/installation/docker_compose_install.md)**
    * 2. Create a global environment file and open it up to begin adding the tokens/keys you prepared in the PreReqs section.
    * 3. In addition to adding all your api tokens and other tokens that you prepared above, change:
    * 4. Since you're using docker, you can also change the following:
    * 5. After everything file has been updated, run  `docker compose build` then `docker compose up`
    * Once the app is running, you can access it at `http://yourserverip:3080`
    * Note: If you're still having trouble, before creating a new issue, please search for similar ones on our [issues thread on our discord](https://discord.librechat.ai) or our [troubleshooting discussion](https://github.com/danny-avila/LibreChat/discussions/categories/troubleshooting) on our Discussions page. If you don't find a relevant issue, feel free to create a new one and provide as much detail as possible.
* [deployment/heroku.md](/deployment/heroku.md)
    * Heroku Deployment
    * 1. **Create a new Dockerfile for your API named `Dockerfile-api`:**
    * Base node image
    * Node API setup
    * 2. **Create a new Dockerfile for your Client named `Dockerfile-client`:**
    * Base node image
    * React client build
    * Nginx setup
    * 3. **Build and deploy your apps using the Heroku CLI:**
    * Login to Heroku:
    * Login to the Heroku Container Registry:
    * Create a Heroku app for your API:
    * Set environment variables for your API app:
    * Build and deploy your API app:
    * Create a Heroku app for your client:
    * Build and deploy your client app:
    * 4. **Open your apps in a web browser:**
    * Using Heroku Dashboard:
    * Setting up MongoDB Atlas:
    * Deploying MeiliSearch on Heroku:
    * Create a new Heroku app for MeiliSearch:
    * Set the buildpack:
    * Set the master key for MeiliSearch:
    * Replace your-master-key with a secure master key.
    * Deploy MeiliSearch:
    * Get the MeiliSearch URL: After deployment, you can find the MeiliSearch URL by visiting your app's settings page in the Heroku Dashboard. The URL will be displayed under the "Domains" section.
    * Update environment variables in LibreChat:
    * Note: If you're still having trouble, before creating a new issue, please search for similar ones on our [issues thread on our discord](https://discord.librechat.ai) or our [troubleshooting discussion](https://github.com/danny-avila/LibreChat/discussions/categories/troubleshooting) on our Discussions page. If you don't find a relevant issue, feel free to create a new one and provide as much detail as possible.
* [deployment/azure-terraform.md](/deployment/azure-terraform.md)
    * Azure deployment
    * Prerequisites
    * Steps
    * Teardown
* [deployment/zeabur.md](/deployment/zeabur.md)
    * Zeabur Deployment
    * Sign up for a Zeabur account
    * Deploy with button
    * Bind a domain
    * Conclusion
* [general_info/project_origin.md](/general_info/project_origin.md)
    * Origin
* [general_info/tech_stack.md](/general_info/tech_stack.md)
    * Tech Stack
    * This project uses:
* [general_info/multilingual_information.md](/general_info/multilingual_information.md)
    * Multilingual Information
* [general_info/index.md](/general_info/index.md)
    * General Information
* [general_info/breaking_changes.md](/general_info/breaking_changes.md)
    * ⚠️ Breaking Changes
    * 🔎Meilisearch v1.6
    * 🥷🪦 Ninja - March 4, 2024
    * 🐋 docker-compose.yml - February 22nd, 2024
    * Update to `docker-compose.yml`
    * **.env** changes v0.6.6 -> v0.6.9
    * ENDPOINTS=openAI,assistants,azureOpenAI,bingAI,chatGPTBrowser,google,gptPlugins,anthropic
    * OPENAI_MODELS=gpt-3.5-turbo-0125,gpt-3.5-turbo-0301,gpt-3.5-turbo,gpt-4,gpt-4-0613,gpt-4-vision-preview,gpt-3.5-turbo-0613,gpt-3.5-turbo-16k-0613,gpt-4-0125-preview,gpt-4-turbo-preview,gpt-4-1106-preview,gpt-3.5-turbo-1106,gpt-3.5-turbo-instruct,gpt-3.5-turbo-instruct-0914,gpt-3.5-turbo-16k
    * ====================
    * Assistants API
    * ====================
    * ASSISTANTS_API_KEY=
    * ASSISTANTS_BASE_URL=
    * ASSISTANTS_MODELS=gpt-3.5-turbo-0125,gpt-3.5-turbo-16k-0613,gpt-3.5-turbo-16k,gpt-3.5-turbo,gpt-4,gpt-4-0314,gpt-4-32k-0314,gpt-4-0613,gpt-3.5-turbo-0613,gpt-3.5-turbo-1106,gpt-4-0125-preview,gpt-4-turbo-preview,gpt-4-1106-preview
    * PLUGIN_MODELS=gpt-4,gpt-4-turbo-preview,gpt-4-0125-preview,gpt-4-1106-preview,gpt-4-0613,gpt-3.5-turbo,gpt-3.5-turbo-0125,gpt-3.5-turbo-1106,gpt-3.5-turbo-0613
    * SHOW_BIRTHDAY_ICON=true
    * Previous changes:
    * DALL·E
    * ----------------
    * DALLE_API_KEY=
    * DALLE3_API_KEY=
    * DALLE2_API_KEY=
    * DALLE3_SYSTEM_PROMPT=
    * DALLE2_SYSTEM_PROMPT=
    * DALLE_REVERSE_PROXY=
    * DALLE3_BASEURL=
    * DALLE2_BASEURL=
    * DALL·E (via Azure OpenAI)
    * Note: requires some of the variables above to be set
    * ----------------
    * DALLE3_AZURE_API_VERSION=
    * DALLE2_AZURE_API_VERSION=
    * January 31th 2024
    * January 30th 2024
    * v0.6.6
    * v0.6.x
    * v0.5.9
    * v0.5.8
    * v0.5.7
    * v0.5.5
    * v0.5.4
    * 
    * User System:
    * 
    * Allow Public Registration
    * Allow Social Registration
    * 
    * Anthropic Endpoint:
    * 
    * Access key from https://console.anthropic.com/
    * Leave it blank to disable this feature.
    * Set to "user_provided" to allow the user to provide their API key from the UI.
    * Note that access to claude-1 may potentially become unavailable with the release of claude-2.
    * v0.5.3
    * v0.5.0
    * Summary
    * Configuration
    * Docker
    * Local Install
