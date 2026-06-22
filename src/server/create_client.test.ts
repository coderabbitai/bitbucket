import { test } from "vitest"
import { createBitbucketServerClient } from "./create_client.ts"

test("createBitbucketServerClient", ({ expect }) => {
	const client = createBitbucketServerClient()
	expect(client).toBeDefined()
})
