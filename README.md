# Netlify Provider API as via Netlify Functions

This is an example implementation of the Netlify provider API to create a Netlify addon using Netlify functions to run the provisioning logic.

## Install

Install the dependencies

```bash
npm install

cd functions && npm install
```

Install the netlify CLI

```
npm install netlify-cli -g
```

## Deploying


1. Create a new netlify site
2. Link the site locally

		netlify link

3. Run build

		npm run build

4. Deploy the functions

		npm run deploy

## About

This is an example addons api for netlify using just functions