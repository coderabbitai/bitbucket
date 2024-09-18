import type { Client, ClientOptions } from "openapi-fetch"
import createClient from "openapi-fetch"
import type { paths } from "./openapi/index.js"

export const createBitbucketServerClient: (
	clientOptions?: ClientOptions,
) => Client<paths, "application/json"> = createClient<paths, "application/json">
