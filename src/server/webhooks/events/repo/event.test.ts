import { describe, test } from "vitest"
import { isRepoEventKey } from "./event.js"

describe("isRepoEventKey", () => {
	test("mirror:repo_synchronized", ({ expect }) => {
		const result = isRepoEventKey("mirror:repo_synchronized")
		expect(result).toBe(true)
	})

	test("project:modified", ({ expect }) => {
		const result = isRepoEventKey("project:modified")
		expect(result).toBe(false)
	})
})
