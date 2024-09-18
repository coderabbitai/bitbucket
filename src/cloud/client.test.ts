import { test } from "vitest"
import { createBitbucketCloudClient } from "./client.js"

test("createBitbucketCloudClient", ({ expect }) => {
	const client = createBitbucketCloudClient()
	expect(client).toBeDefined()
})
