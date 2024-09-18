import { test } from "vitest"
import { cloud } from "./client.js"

test("GET /repositories", async ({ expect }) => {
	const got = await cloud.GET("/repositories")

	expect(got.data?.next).toBeTypeOf("string")
	expect(got.data?.pagelen).toBeTypeOf("number")
	expect(got.data?.values).toBeDefined()
})
