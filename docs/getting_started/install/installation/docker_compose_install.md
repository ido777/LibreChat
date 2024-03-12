---
title: 🐳 Docker Compose ✨(Recommended)
description: "Docker Compose Installation Guide: Docker Compose installation is recommended for most use cases. It's the easiest, simplest, and most reliable method to get started."
weight: -10
---

# Docker Compose Installation Guide

Docker Compose installation is recommended for most use cases. It's the easiest, simplest, and most reliable method to get started.

## Video Guides

If you prefer to watch a video, we have video guides as well.

### Windows

Video guide for [Windows](./windows_install.md#recommended).

### Ubuntu

Video guide for [Ubuntu 22.04 LTS](./linux_install.md#recommended).

## Docker Compose Installation

### Prerequisites

if you hadn't done it already, make sure you have all the prerequisites(../prerequisites.md).

### Obtain the Source Code

Start by cloning the repository or downloading it to your desired location:

```bash
  git clone https://github.com/danny-avila/LibreChat.git
```

### Running LibreChat

**Note:** MongoDB does not support older ARM CPUs like those found in Raspberry Pis. However, you can make it work by setting MongoDB’s version to mongo:4.4.18 in docker-compose.yml, the most recent version compatible with. For more details see [TBA](TBA)

Now Let's run the application:

```bash
   cp .env.example .env
   docker compose up
```

You will probably see some waring and other messages and the screen will be full with messages.
Wait until you see the line a line similar to

> LibreChat | 2024-03-12 11:22:11 info: Server listening on all interfaces at port 3080. Use http://localhost:3080 to access it

Now you can access the application at `http://localhost:3080` and you will redirect to the login page.

Easy, no?

**Installation is done**, but LibreChat requires some minimal configuration to be able to do real work. So please continue to read.

### LibreChat Minimal Configuration

Actually, if you really try to login and do something, you will probably see that although the application is running, you can't really use it to get answers from LLM
Configuration the application is required not only for the docker compose installation but to any installation, so go ahead to the [minimal configuration guide](../configuration/initial_configuration.md) to learn how to configure your LibreChat installation.

> ⚠️ Note: If you're having trouble, before creating a new issue, please search for similar ones on our [#issues thread on our discord](https://discord.librechat.ai) or our [troubleshooting discussion](https://github.com/danny-avila/LibreChat/discussions/categories/troubleshooting) on our Discussions page. If you don't find a relevant issue, feel free to create a new one and provide as much detail as possible.
