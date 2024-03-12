---
title: 🐳 Ubuntu Docker Quick Installation  Guide
description: These instructions are designed for someone starting from scratch for a Docker Installation on an Ubuntu server
weight: 20
---

# Ubuntu Docker Quick Installation Guide

### Part I: Installing Docker and Other Dependencies:

There are many ways to setup Docker on Debian systems. I'll walk you through the best and the recommended way [based on this guide](https://www.smarthomebeginner.com/install-docker-on-ubuntu-22-04/).

> Note that the "Best" way for Ubuntu docker installation does not mean the "fastest" or the "easiest". It means, the best way to install it for long-term benefit (i.e. faster updates, security patches, etc.).

### **1. Update and Install Docker Dependencies**

First, let's update our packages list and install the required docker dependencies.

```bash
sudo apt update
```

Then, use the following command to install the dependencies or pre-requisite packages.

```bash
sudo apt install apt-transport-https ca-certificates curl software-properties-common gnupg lsb-release
```

### **Notes:**

- Input "Y" for all [Y/n] (yes/no) terminal prompts throughout this entire guide.
- After the first [Y/n] prompt, you will get the first of a few **purple screens** asking to restart services.
  - Each time this happens, you can safely press ENTER for the default, already selected options:

![image](https://github.com/danny-avila/LibreChat/assets/110412045/05cf165b-d3d8-475a-93b3-254f3c63f59b)

- If at any point your droplet console disconnects, do the following and then pick up where you left off:
  - Access the console again as indicated above
  - Switch to the user you created with `su - <yourusername>`

### **2. Add Docker Repository to APT Sources**

While installing Docker Engine from Ubuntu repositories is easier, adding official docker repository gives you faster updates. Hence why this is the recommended method.

First, let us get the GPG key which is needed to connect to the Docker repository. To that, use the following command.

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

Next, add the repository to the sources list. While you can also add it manually, the command below will do it automatically for you.

```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

The above command will automatically fill in your release code name (jammy for 22.04, focal for 20.04, and bionic for 18.04).

Finally, refresh your packages again.

```bash
sudo apt update
```

If you forget to add the GPG key, then the above step would fail with an error message. Otherwise, let's get on with installing Docker on Ubuntu.

### **3. Install Docker**

> What is the difference between docker.io and docker-ce?

> docker.io is the docker package that is offered by some popular Linux distributions (e.g. Ubuntu/Debian). docker-ce on the other hand, is the docker package from official Docker repository. Typically docker-ce more up-to-date and preferred.

We will now install the docker-ce (and not docker.io package)

```bash
sudo apt install docker-ce
```

Purple screen means press ENTER. :)

Recommended: you should make sure the created user is added to the docker group for seamless use of commands:

```bash
sudo usermod -aG docker $USER
```

Now let's reboot the system to make sure all is well.

```bash
sudo reboot
```

After rebooting, if using the browser droplet console, you can click reload and wait to get back into the console.

![image](https://github.com/danny-avila/LibreChat/assets/110412045/2ad7b739-a3db-4744-813f-39af7dabfce7)

**Reminder:** Any time you reboot with `sudo reboot`, you should switch to the user you setup as before with `su - <yourusername>`.

### **4. Verify that Docker is Running on Ubuntu**

There are many ways to check if Docker is running on Ubuntu. One way is to use the following command:

```bash
sudo systemctl status docker
```

You should see an output that says **active (running)** for status.

![image](https://github.com/danny-avila/LibreChat/assets/110412045/6baea405-8dfb-4d9d-9327-6e9ecf800471)

Exit this log by pressing CTRL (or CMD) + C.

### **5. Install the Latest Version of Docker Compose**

The version of docker-compose packaged with the Linux distribution is probably old and will not work for us.

Checking the releases on the [Docker Compose GitHub](https://github.com/docker/compose/releases), the last release is v2.20.2 (as of 8/9/23).

You will have to manually download and install it. But fear not, it is quite easy.

First, download the latest version of Docker Compose using the following command:

```bash
sudo curl -L https://github.com/docker/compose/releases/download/v2.20.2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
```

Next, make it executable using the following command:

```bash
sudo chmod +x /usr/local/bin/docker-compose
```

Docker Compose should now be installed on your Ubuntu system. Let's check to be sure.

```bash
docker-compose -v
# output should be: Docker Compose version v2.20.2
```

If you get a permission denied error, like I did, reboot/switch to your created user again, and run `sudo chmod +x /usr/local/bin/docker-compose` again

---

### Note: If you're still having trouble, before creating a new issue, please search for similar ones on our [#issues thread on our discord](https://discord.librechat.ai) or our [troubleshooting discussion](https://github.com/danny-avila/LibreChat/discussions/categories/troubleshooting) on our Discussions page. If you don't find a relevant issue, feel free to create a new one and provide as much detail as possible.
