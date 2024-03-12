---
title: 🐳 Ubuntu Docker Quick Installation  Guide
description: These instructions are designed for someone starting from scratch for a Docker Installation on an Ubuntu server
weight: 15
---




### **6. As part of this guide, I will recommend you have git and npm installed:**

Though not technically required, having git and npm will make installing/updating very simple:

```bash
sudo apt install git nodejs npm
```

Cue the matrix lines.

You can confirm these packages installed successfully with the following:

```bash
git --version
node -v
npm -v
```

![image](https://github.com/danny-avila/LibreChat/assets/110412045/fbba1a38-95cd-4e8e-b813-04001bb82b25)

> Note: this will install some pretty old versions, for npm in particular. For the purposes of this guide, however, this is fine, but this is just a heads up in case you try other things with node in the droplet. Do look up a guide for getting the latest versions of the above as necessary.

**Ok, now that you have set up the Droplet, you will now setup the app itself**

---

## Part II: Setup LibreChat

### **1. Clone down the repo**

From the _droplet_ commandline (as your user, not root):

```bash
# clone down the repository
git clone https://github.com/danny-avila/LibreChat.git

# enter the project directory
cd LibreChat/
```

### **2. Create a global environment file.**

The default values are enough to get you started and running the app, allowing you to provide your credentials from the web app.

```bash
# Copies the example file as your global env file
cp .env.example .env
```

However, if you'd like to provide any credentials for all users of your instance to consume, you can add them to the .env file as follows:

```bash
nano .env

# then, add your credentials
OPENAI_API_KEY=sk-yourKey
```

**That's it!**

For thorough configuration, however, you should edit your .env file as needed, and do read the comments in the file and the resources below.

```bash
# if editing the .env file
nano .env
```

This is one such env variable to be mindful of. This disables external signups, in case you would like to set it after you've created your account.

```shell
ALLOW_REGISTRATION=false
```

**Resources:**

- [Tokens/Apis/etc](../install/configuration/ai_setup.md)
- [User/Auth System](../install/configuration/user_auth_system.md)

### **3. Start docker, and then run the installation/update script**

```bash
# should already be running, but just to be safe
sudo systemctl start docker

# confirm docker is running
docker info
```

Now we can start the app container. For the first time, we'll use the full command and later we can use a shorthand command

```bash
sudo docker-compose -f ./deploy-compose.yml up -d
```

![image](https://github.com/danny-avila/LibreChat/assets/110412045/5e2f6627-8ca4-4fa3-be73-481539532ee7)

It's safe to close the terminal if you wish -- the docker app will continue to run.

> Note: this is using a special compose file optimized for this deployed environment. If you would like more configuration here, you should inspect the deploy-compose.yml and Dockerfile.multi files to see how they are setup. We are not building the image in this environment since it's not enough RAM to properly do so. Instead, we pull the latest dev-api image of librechat, which is automatically built after each push to main.

> If you are setting up a domain to be used with LibreChat, this compose file is using the nginx file located in client/nginx.conf. Instructions on this below in part V.

### **4. Once the app is running, you can access it at `http://yourserverip`**

### Go back to the droplet page to get your server ip, copy it, and paste it into your browser!

![image](https://github.com/danny-avila/LibreChat/assets/110412045/d8bbad29-6015-46ec-88ce-a72a43d8a313)

### Sign up, log in, and enjoy your own privately hosted, remote LibreChat :)

![image](https://github.com/danny-avila/LibreChat/assets/110412045/85070a54-eb57-479f-8011-f63c14116ee3)

![image](https://github.com/danny-avila/LibreChat/assets/110412045/b3fc2152-4b6f-46f9-81e7-4200b76bc468)

## Part III: Updating LibreChat

I've made this step pretty painless, provided everything above was installed successfully and you haven't edited the git history.

> Note: If you are working on an edited branch, with your own commits, for example, such as with edits to client/nginx.conf, you should inspect config/deployed-update.js to run some of the commands manually as you see fit. See part V for more on this.

Run the following for an automated update

```bash
npm run update:deployed
```

**Stopping the docker container**

```bash
npm run stop:deployed
```

> This simply runs `docker-compose -f ./deploy-compose.yml down`

**Starting the docker container**

```bash
npm run start:deployed
```

> This simply runs `docker-compose -f ./deploy-compose.yml up -d`

**Check active docker containers**

```bash
docker ps
```

## Part IV: Editing the NGINX file (for custom domains and advanced configs)

In case you would like to edit the NGINX file for whatever reason, such as pointing your server to a custom domain, use the following:

```bash
# First, stop the active instance if running
npm run stop:deployed

# now you can safely edit
nano client/nginx.conf
```

I won't be walking you through custom domain setup or any other changes to NGINX, you can look into the [Cloudflare guide](./cloudflare.md) or the [NGINX guide](./nginx.md) to get you started with custom domains.

However, I will show you what to edit on the LibreChat side for a custom domain with this setup.

Since NGINX is being used as a proxy pass by default, I only edit the following:

```shell
# before
server_name localhost;

# after
server_name custom.domain.com;
```

Exit nano with

> Note: this works because the deploy-compose.yml file is using NGINX by default, unlike the main docker-compose.yml file. As always, you can configure the compose files as you need.

Now commit these changes to a separate branch:

```bash
# create a new branch
# example: git checkout -b edit
git checkout -b <branchname>

# stage all file changes
git add .
```

To commit changes to a git branch, you will need to identify yourself on git. These can be fake values, but if you would like them to sync up with GitHub, should you push this branch to a forked repo of LibreChat, use your GitHub email

```bash
# these values will work if you don't care what they are
git config --global user.email "you@example.com"
git config --global user.name "Your Name"

# Now you can commit the change
git commit -m "edited nginx.conf"
```

Updating on an edited branch will work a little differently now

```bash
npm run rebase:deployed
```

You should be all set!

> :warning: You will experience merge conflicts if you start significantly editing the branch and this is not recommended unless you know what you're doing

> Note that any changes to the code in this environment won't be reflected because the compose file is pulling the docker images built automatically by GitHub

## Part V: Use the Latest Stable Release instead of Latest Main Branch

By default, this setup will pull the latest updates to the main branch of Librechat. If you would rather have the latest "stable" release, which is defined by the [latest tags](https://github.com/danny-avila/LibreChat/releases), you will need to edit deploy-compose.yml and commit your changes exactly as above in Part V. Be aware that you won't benefit from the latest feature as soon as they come if you do so.

Let's edit `deploy-compose.yml`:

```bash
nano deploy-compose.yml
```

Change `librechat-dev-api` to `librechat-api`:

```yaml
image: ghcr.io/danny-avila/librechat-api:latest
```

Stage and commit as in Part V, and you're all set!

---

### Note: If you're still having trouble, before creating a new issue, please search for similar ones on our [#issues thread on our discord](https://discord.librechat.ai) or our [troubleshooting discussion](https://github.com/danny-avila/LibreChat/discussions/categories/troubleshooting) on our Discussions page. If you don't find a relevant issue, feel free to create a new one and provide as much detail as possible.
