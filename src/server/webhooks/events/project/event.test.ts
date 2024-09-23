import { test } from "vitest"
import { isProjectEventKey } from "./event.js"

test("isProjectEventKey", ({ expect }) => {
	const result = isProjectEventKey("project:modified")
	expect(result).toBe(true)
})
