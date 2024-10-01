import { createBitbucketServerClient } from "../../src/server/index.js"
import { BITBUCKET_SERVER_TOKEN, BITBUCKET_SERVER_URL } from "../env.js"

export const client = createBitbucketServerClient({
	baseUrl: BITBUCKET_SERVER_URL.toString(),
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${BITBUCKET_SERVER_TOKEN}`,
	},
})
