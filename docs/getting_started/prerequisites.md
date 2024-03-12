---
title: 🐳 Prerequisites Guide
description: These instructions are designed for someone starting from scratch for a Docker Installation on a remote Ubuntu server
weight: 10
---

# Prerequisites

Before you begin working on the project, ensure you have the following software installed on your machine:

## 1. Git

Git is a distributed version control system that lets you track the changes in your code over time. This project uses Git following the GitFlow workflow.

- **Install Git on Ubuntu**:

```bash
sudo apt update
sudo apt install git
```

- **Other os? Facing trouble? go to the Official Installation guide**:

  - Visit the Git official website: [Git](https://git-scm.com/)
  - Download and install the version for your operating system.

- **Verify installation**:

  - Verify the installation by running `git --version` in your terminal.

- **Initial configuration**:
  - Set up your user name and email address with the following commands:
    - `git config --global user.name "Your Name"`
    - `git config --global user.email "your.email@example.com"`

Once these prerequisites are installed, you can proceed with setting up the project environment and starting the application as outlined in the project documentation.

## 2. Node.js and npm

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, and npm is the Node.js package manager. They are used to run the server-side JavaScript code and to manage project dependencies, respectively.

- **Install Git on Ubuntu**:

```bash
sudo apt install nodejs npm
```

- - **Other os? Facing trouble? go to the Official Installation guide**::

  - Visit the Node.js official website: [Node.js](https://nodejs.org/)
  - Download and install the version recommended for most users.

- **Verify installation**:
  - To check if you have Node.js installed, run `node -v` in your terminal.
  - To confirm that npm is installed, you can run `npm -v`.

## 3. Docker

Docker is a set of platform-as-a-service products that use OS-level virtualization to deliver software in packages called containers. The project uses Docker & Docker compose for containerization of the application. **[Docker Desktop](https://www.docker.com/products/docker-desktop/)** is a user-friendly interface for managing Docker container environments on all major operating systems.

- **Official Installation guide**:

In most cases you can give a try to our quick guides designed to bring you up to speed with no hassle, but if you have unique environment or if you face trouble -
the most up-to-date and accurate guide is the official one, but you might.

- Go to the Docker official site: [Docker](https://docs.docker.com/get-docker/)
- Go to the Docker official site and start from the [Docker](https://docs.docker.com/get-docker/) starting page, or simply (recommended) jump directly to **[Docker Desktop](https://www.docker.com/products/docker-desktop/)**
- Choose your operating system and follow the installation instructions.

- **Ubuntu Ubuntu 22.04 (LTS) x64 guide**:

See [Our Ubuntu Docker Quick installation Guide](./ubuntu_docker_quick_install_guide.md).

- **Verify installation**:
  - Verify the installation by running `docker --version` and `docker-compose --version` in your terminal.

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
