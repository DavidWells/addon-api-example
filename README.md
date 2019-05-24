# Building Netlify Addons with Netlify Functions

This is an example implementation of the Netlify Addon Provider API.

For more information on addons [see the repo](https://github.com/netlify/addons).

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

## Setup


1. Fork this repo
2. Clone down your fork
3. Initialize a new netlify site (or link it)

	```bash
	netlify init
	```

	Or link to existing site

	```bash
	netlify link
	```

3. Run build

		npm run build

4. Deploy the functions

		npm run deploy


This will deploy your netlify site + the addons api (as a serverless function)
