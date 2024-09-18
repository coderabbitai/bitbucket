import type { Client, ClientOptions } from "openapi-fetch"
import createClient from "openapi-fetch"
import type { paths } from "./openapi/index.js"

/**
 * Creates an `openapi-fetch` client using {@link createClient}.
 *
 * @example
 * const client = createBitbucketCloudClient({
 * 	baseUrl: "https://api.bitbucket.org/2.0",
 * 	headers: { Accept: "application/json", Authorization: `Basic ${basic}` },
 * })
 */
export const createBitbucketCloudClient: (
	clientOptions?: ClientOptions,
) => Client<paths, "application/json"> = createClient<paths, "application/json">
