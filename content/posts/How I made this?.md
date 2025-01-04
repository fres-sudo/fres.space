---
title: How I made this? 
date: 2025-01-04
---

If you are curious about how I made this blog, you may wanna also check this beautiful [project]().

Quartz is a static site generator that uses markdown files to generate a `HTML` content. It is designed to work smoothly with [Obsidian](https://obsidian.md/), a note-taking app that you might be already familiar with.

I'll not go into the details of how to set up Quartz or Obsidian, but I would like to give you a brief on how I deployed it.

As real indie hacker (🤠) the goals were simple:

- Do it myself, no premade solutions,
- Keep the cost as low as possible,
- Learn a ton during the process.

I know, I know...At this point you might complaining about the fact that Quartz itself is a premade solution. 
As you might also imagine I already experimented with some custom blog solution.

At first I also did a cool site with [[Svelte]], but for me, it was too much. I wanted to focus on writing, not on building a blog. And go with a fully fledged solution like Svelte was a bit overkill for me.
Quartz come in handy since it is customizable enough to make it feel like my own and it works very good with Obsidian.

But let's come to the interesting part. How I deployed it?

Ofc I have my 5€ VPS 😆, so why not use it?

The problem now is, how can I avoid ssh into the VPS, pull the lataest changes, build quartz and restart the server everytime I wanna make some changes?

The solution was simple: [[Github Actions]]!!!!

So I set up a simple workflow that triggers on every push to the main branch. There is no docker image and no code lives inside the VPS. The workflow handle the build process in itand copy the generated artifacts to the VPS.

Ok but **how**?

If you took a look into Quartz you probably noticed that there are already some GHA set up for you, but I had to tweak them a lil bit.

Here's the code:


```yml
name: Build and Deploy

on:
  push:
    branches:
      - main

jobs:
  build_and_deploy:
    name: Build and Deploy Static Site
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Cache Node Modules
        uses: actions/cache@v4
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-

      - name: Install Dependencies
        run: npm ci

      - name: Build the Static Site
        run: npx quartz build --bundleInfo

      - name: Install SSH Key
        run: |
          mkdir -p ~/.ssh
          echo "${{ secrets.SSH_PRIVATE_KEY }}" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan -H ${{ secrets.SSH_HOST }} >> ~/.ssh/known_hosts

      - name: Deploy Artifact to VPS
        run: |
          rsync -avz --delete ./public/ ${{ secrets.SSH_USER }}@${{ secrets.SSH_HOST }}:${{ secrets.WORK_DIR }}
```
You also need ofc to set up some secrets in your repo settings, and to genereate a ssh key pair to allow the workflow to connect to your VPS.

I hope this article helped someone to set up Quartz with Github Actions. If you have any questions, feel free to connect with me on [Linkedin](https://linkedin.com/in/francesco-calicchio) or via [email](francescocalicchio@hotmail.com)

Cheers! 🍻
```
