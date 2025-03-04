import { test } from "vitest"
import { createBitbucketCloudClient } from "./client.ts"

test("createBitbucketCloudClient", ({ expect }) => {
	const client = createBitbucketCloudClient()
	expect(client).toBeDefined()
})
