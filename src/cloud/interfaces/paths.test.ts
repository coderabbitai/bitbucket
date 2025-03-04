import { test } from "vitest"
import { createBitbucketCloudClient } from "../client.js"
import type { CreateBranchRequest } from "./paths.ts"

async function fetch() {
	const response = new Response(JSON.stringify({}), { status: 200 })
	return Promise.resolve(response)
}

const client = createBitbucketCloudClient({
	baseUrl: "https://api.bitbucket.org/2.0",
	fetch,
})

test("CreateBranchRequest", async ({ expect }) => {
	const example: CreateBranchRequest = {
		name: "smf/create-feature",
		target: { hash: "default" },
	}

	const { response } = await client.POST(
		"/repositories/{workspace}/{repo_slug}/refs/branches",
		{
			params: { path: { repo_slug: "repo_slug", workspace: "workspace" } },
			body: example,
		},
	)

	expect(response.status).toBe(200)
})
