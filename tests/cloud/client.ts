import { createBitbucketCloudClient } from "../../src/cloud/index.js"
import { toBase64 } from "../../src/index.js"
import {
	BITBUCKET_CLOUD_APP_PASSWORD,
	BITBUCKET_CLOUD_URL,
	BITBUCKET_CLOUD_USERNAME,
} from "../env.js"

const basic = toBase64(
	`${BITBUCKET_CLOUD_USERNAME}:${BITBUCKET_CLOUD_APP_PASSWORD}`,
)

export const client = createBitbucketCloudClient({
	baseUrl: BITBUCKET_CLOUD_URL.toString(),
	headers: { Accept: "application/json", Authorization: `Basic ${basic}` },
})
