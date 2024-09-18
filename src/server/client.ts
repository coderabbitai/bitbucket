import type { Client, ClientOptions } from "openapi-fetch"
import createClient from "openapi-fetch"
import type { paths } from "./openapi/index.js"

/**
 * Creates an `openapi-fetch` client using {@link createClient}.
 *
 * @example
 * export const client = createBitbucketServerClient({
 * 	baseUrl: "https://example.org/rest",
 * 	headers: {
 * 		Accept: "application/json",
 * 		Authorization: `Bearer ${BITBUCKET_SERVER_TOKEN}`,
 * 	},
 * })
 */
export const createBitbucketServerClient: (
	clientOptions?: ClientOptions,
) => Client<paths, "application/json"> = createClient<paths, "application/json">
