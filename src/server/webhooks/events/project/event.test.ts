import { describe, test } from "vitest"
import { isProjectEventKey } from "./event.js"

describe("isProjectEventKey", () => {
	test("project:modified", ({ expect }) => {
		const result = isProjectEventKey("project:modified")
		expect(result).toBe(true)
	})

	test("mirror:repo_synchronized", ({ expect }) => {
		const result = isProjectEventKey("mirror:repo_synchronized")
		expect(result).toBe(false)
	})
})
