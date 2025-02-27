import { describe, test } from "vitest"
import {
	BITBUCKET_SERVER_TEST_PROJECT_KEY,
	BITBUCKET_SERVER_TEST_PROJECT_NAME,
	SKIP_BITBUCKET_SERVER,
} from "../env.ts"
import { client } from "./client.ts"

describe.skipIf(SKIP_BITBUCKET_SERVER)(
	"Repositories",
	{ concurrent: false, sequential: true },
	() => {
		const projectKey = BITBUCKET_SERVER_TEST_PROJECT_KEY
		const projectName = BITBUCKET_SERVER_TEST_PROJECT_NAME
		const slug = "test-repository"
		const name = "Test Repository"

		test("Create repository", async ({ expect }) => {
			const created = await client.POST(
				"/api/latest/projects/{projectKey}/repos",
				{
					params: { path: { projectKey } },
					body: { name, scmId: "git", slug },
				},
			)

			if (created.error)
				console.error("Failed to create a repository", created.error)

			expect(created).toMatchObject({
				data: {
					slug,
					name,
					project: { key: projectKey, name: projectName },
					scmId: "git",
				},
				response: { status: 201 },
			})
		})

		test("Get a repository", async ({ expect }) => {
			const repository = await client.GET(
				"/api/latest/projects/{projectKey}/repos/{repositorySlug}",
				{ params: { path: { projectKey, repositorySlug: slug } } },
			)

			if (repository.error)
				console.error("Failed to get a repository", repository.error)

			expect(repository.data).toMatchObject({
				slug,
				name,
				project: { key: projectKey, name: projectName },
				scmId: "git",
			})
		})

		test("Delete a repository", async ({ expect }) => {
			const deleted = await client.DELETE(
				"/api/latest/projects/{projectKey}/repos/{repositorySlug}",
				{ params: { path: { projectKey, repositorySlug: slug } } },
			)

			if (deleted.error)
				console.error("Failed to delete a repository", deleted.error)

			expect(deleted.response.status).toBe(202)
		})
	},
)
