import { describe, test } from "vitest"
import {
	BITBUCKET_SERVER_TEST_PROJECT_KEY,
	BITBUCKET_SERVER_TEST_PROJECT_NAME,
} from "../env.ts"
import { client } from "./client.ts"

describe("Projects", () => {
	const key = BITBUCKET_SERVER_TEST_PROJECT_KEY
	const name = BITBUCKET_SERVER_TEST_PROJECT_NAME

	// The API, even with a token with Project Admin permissions, cannot create
	// or delete projects.

	test("Get projects", async ({ expect }) => {
		const page = await client.GET("/api/latest/projects", {
			params: { query: { name } },
		})
		expect(page.data?.size).toBeTypeOf("number")

		const found = page.data?.values?.find(p => p.key === key)
		expect(found).toMatchObject({ key, name })
	})

	test("Get a project", async ({ expect }) => {
		const project = await client.GET("/api/latest/projects/{projectKey}", {
			params: { path: { projectKey: key } },
		})
		expect(project.data).toMatchObject({ key, name })
	})
})
