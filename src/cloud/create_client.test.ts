import { test } from "vitest"
import { createBitbucketCloudClient } from "./create_client.ts"

test("createBitbucketCloudClient", ({ expect }) => {
	const client = createBitbucketCloudClient()
	expect(client).toBeDefined()
})
