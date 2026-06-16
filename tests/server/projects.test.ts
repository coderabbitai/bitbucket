import { describe, test } from "vitest"
import type { SchemaRestProject } from "../../src/server/openapi/index.ts"
import {
	BITBUCKET_SERVER_TEST_PROJECT_KEY,
	BITBUCKET_SERVER_TEST_PROJECT_NAME,
	SKIP_BITBUCKET_SERVER,
} from "../env.ts"
import { client } from "./client.ts"

describe.skipIf(SKIP_BITBUCKET_SERVER)("Projects", () => {
	const key = BITBUCKET_SERVER_TEST_PROJECT_KEY
	const name = BITBUCKET_SERVER_TEST_PROJECT_NAME

	// The API, even with a token with Project Admin permissions, cannot create
	// or delete projects.

	test("Get projects", async ({ expect }) => {
		const page = await client.GET("/api/latest/projects", {
			params: { query: { name } },
		})
		expect(page.data?.size).toBeTypeOf("number")

		const values: ArrayLike<SchemaRestProject> = page.data?.values ?? []
		const found = Array.from(values).find(p => p.key === key)
		expect(found).toMatchObject({ key, name })
	})

	test("Get a project", async ({ expect }) => {
		const project = await client.GET("/api/latest/projects/{projectKey}", {
			params: { path: { projectKey: key } },
		})
		expect(project.data).toMatchObject({ key, name })
	})
})
