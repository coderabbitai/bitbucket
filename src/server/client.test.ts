import { test } from "vitest"
import { createBitbucketServerClient } from "./client.js"

test("createBitbucketServerClient", ({ expect }) => {
	const client = createBitbucketServerClient()
	expect(client).toBeDefined()
})
