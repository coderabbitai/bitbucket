import type { Client } from "openapi-fetch"
import { createBitbucketServerClient } from "../../src/index.js"
import type { paths } from "../../src/server/openapi/openapi-typescript.js"
import { BITBUCKET_SERVER_TOKEN, BITBUCKET_SERVER_URL } from "../env.js"

export const server: Client<paths, "application/json"> =
	createBitbucketServerClient({
		baseUrl: BITBUCKET_SERVER_URL,
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${BITBUCKET_SERVER_TOKEN}`,
		},
	})
