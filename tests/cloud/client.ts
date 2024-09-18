import type { Client } from "openapi-fetch"
import type { paths } from "../../src/cloud/openapi/openapi-typescript.js"
import { createBitbucketCloudClient } from "../../src/index.js"
import {
	BITBUCKET_CLOUD_APP_PASSWORD,
	BITBUCKET_CLOUD_URL,
	BITBUCKET_CLOUD_USERNAME,
} from "../env.js"

const basic = Buffer.from(
	BITBUCKET_CLOUD_USERNAME + ":" + BITBUCKET_CLOUD_APP_PASSWORD,
).toString("base64")

export const cloud: Client<paths, "application/json"> =
	createBitbucketCloudClient({
		baseUrl: BITBUCKET_CLOUD_URL,
		headers: { Accept: "application/json", Authorization: `Basic ${basic}` },
	})
