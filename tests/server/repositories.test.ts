import { test } from "vitest"
import { server } from "./client.js"

test("GET /api/latest/repos", async ({ expect }) => {
	const got = await server.GET("/api/latest/repos")

	expect(got.data).toMatchObject({
		size: 1,
	})
})
