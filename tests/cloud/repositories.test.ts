import { test } from "vitest"
import { SKIP_BITBUCKET_CLOUD } from "../env.ts"
import { client } from "./client.ts"

test.skipIf(SKIP_BITBUCKET_CLOUD)("GET /repositories", async ({ expect }) => {
	const got = await client.GET("/repositories")

	expect(got.data?.next).toBeTypeOf("string")
	expect(got.data?.pagelen).toBeTypeOf("number")
	expect(got.data?.values).toBeDefined()
})
