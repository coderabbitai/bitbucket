import { describe, test } from "vitest"
import { isPrEventKey } from "./event.js"

describe("isPrEventKey", () => {
	test("pr:comment:added", ({ expect }) => {
		const result = isPrEventKey("pr:comment:added")
		expect(result).toBe(true)
	})

	test("project:modified", ({ expect }) => {
		const result = isPrEventKey("project:modified")
		expect(result).toBe(false)
	})
})
