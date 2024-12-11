# Fres Space

This is my personal space, her I will be sharing my thoughts, projects, and ideas.

This is a blog or personal site or whatever you want to call it, but my personal definition is **"my internet space"** I really like this concept,
that's why I call it "Fres Space".

## Technical Stuff

This website is built on top of [Quartz](https://quartz.jzhao.xy) a beautiful static site generator build with `Javascript` and `Node.js`.

### Theme

The theme is just the default one with a personal touch

### Hosting

The website is online thanks to my 5$ VPS by Hetzner, I'm using `Caddy` as a reverse proxy to serve the website.

### Deployment Workflow

To deploy the website to my VPS, I use a streamlined workflow that automates the process. Below is an overview of the steps involved:

1. **Build the Code**: The code is built using the `build` script defined in the `package.json` file. This script compiles the static files needed for the website.

2. **Push to Repository**: Once the code is built, I push the changes to my GitHub repository. This triggers a GitHub Actions workflow.

3. **GitHub Actions**: The workflow file `.github/workflows/deploy.yml` is configured to automate the deployment process. It performs the following steps:
   - Checks out the repository.
   - Installs the necessary dependencies.
   - Builds the static files.
   - Deploys the built files to the VPS using `rsync` over SSH.

4. **VPS Setup**: On the VPS, `Caddy` is configured to serve the static files from the deployment directory. The reverse proxy setup ensures that the website is accessible online.

This automated workflow ensures that any changes pushed to the repository are quickly and efficiently deployed to the VPS, keeping the website up-to-date with minimal manual intervention.

## Acknowledgment

Build with ❤️  by me.
