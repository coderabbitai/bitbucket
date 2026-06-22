import { test } from "vitest"
import { BitbucketCloudClient } from "./client.ts"

test("BitbucketCloudClient", ({ expect }) => {
	const client = new BitbucketCloudClient()
	expect(client).toBeDefined()
})
