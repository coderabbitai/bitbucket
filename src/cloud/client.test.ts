import { test } from "vitest"
import { createBitbucketCloudClient } from "./client.ts"

test("createBitbucketCloudClient", async ({ expect }) => {
	const client = createBitbucketCloudClient()
	expect(client).toBeDefined()

	await client.POST("/repositories/{workspace}/{repo_slug}/refs/branches", {
		params: {
			path: {
				repo_slug: "repo_slug",
				workspace: "workspace",
			},
		},
		body: {
			name: "name",
			target: { hash: "hash" },
		},
	})
})
