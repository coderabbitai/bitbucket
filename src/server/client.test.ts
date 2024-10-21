import { test } from "vitest"
import { createBitbucketServerClient } from "./client.ts"

test("createBitbucketServerClient", ({ expect }) => {
	const client = createBitbucketServerClient()
	expect(client).toBeDefined()
})
