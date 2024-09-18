import createClient, { type Client, type ClientOptions } from "openapi-fetch"
import type { paths } from "./openapi/index.js"

export const createBitbucketCloudClient: (
	clientOptions?: ClientOptions,
) => Client<paths, "application/json"> = createClient<paths, "application/json">
