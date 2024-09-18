import { createBitbucketServerClient } from "../../src/index.js"
import { BITBUCKET_SERVER_TOKEN, BITBUCKET_SERVER_URL } from "../env.js"

export const server = createBitbucketServerClient({
	baseUrl: BITBUCKET_SERVER_URL.toString(),
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${BITBUCKET_SERVER_TOKEN}`,
	},
})
