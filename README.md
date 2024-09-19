# `@coderabbitai/bitbucket`

[![Node.js CI](https://github.com/coderabbitai/bitbucket/actions/workflows/node.js.yaml/badge.svg)](https://github.com/coderabbitai/bitbucket/actions/workflows/node.js.yaml) [![Dependabot Updates](https://github.com/coderabbitai/bitbucket/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/coderabbitai/bitbucket/actions/workflows/dependabot/dependabot-updates) [![GitHub Pages](https://github.com/coderabbitai/bitbucket/actions/workflows/github-pages.yaml/badge.svg)](https://github.com/coderabbitai/bitbucket/actions/workflows/github-pages.yaml) [![GitHub Downloads](https://img.shields.io/github/downloads/coderabbitai/bitbucket/total?logo=github&color=0969da)](https://github.com/coderabbitai/bitbucket/releases) [![NPM Downloads](https://img.shields.io/npm/dt/%40coderabbitai/bitbucket?logo=npm&color=CB3837)](https://www.npmjs.com/package/@coderabbitai/bitbucket)

CodeRabbit's TypeScript API client for connecting to Bitbucket Cloud and Bitbucket Data Center.

- Bitbucket Cloud API docs: <https://developer.atlassian.com/cloud/bitbucket/rest>
- Bitbucket Data Center API docs: <https://developer.atlassian.com/server/bitbucket/rest>

This client is auto-generated by [openapi-typescript](https://github.com/openapi-ts/openapi-typescript) using the OpenAPI schema from the documentation above.

## Usage

```sh
pnpm i @coderabbitai/bitbucket
```

### Cloud

```ts
import { createBitbucketCloudClient, toBase64 } from "@coderabbitai/bitbucket"
import {
	BITBUCKET_CLOUD_APP_PASSWORD,
	BITBUCKET_CLOUD_URL,
	BITBUCKET_CLOUD_USERNAME,
} from "./env.js"

const basic = toBase64(
	BITBUCKET_CLOUD_USERNAME + ":" + BITBUCKET_CLOUD_APP_PASSWORD,
)

const client = createBitbucketCloudClient({
	baseUrl: BITBUCKET_CLOUD_URL.toString(),
	headers: { Accept: "application/json", Authorization: `Basic ${basic}` },
})
```

### Server

```ts
import { createBitbucketServerClient } from "@coderabbitai/bitbucket"
import { BITBUCKET_SERVER_TOKEN, BITBUCKET_SERVER_URL } from "./env.js"

const server = createBitbucketServerClient({
	baseUrl: BITBUCKET_SERVER_URL,
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${BITBUCKET_SERVER_TOKEN}`,
	},
})
```
