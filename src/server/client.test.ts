import { test } from "vitest"
import { BitbucketServerClient } from "./client.ts"

test("BitbucketServerClient", ({ expect }) => {
	const client = new BitbucketServerClient()
	expect(client).toBeDefined()
})
