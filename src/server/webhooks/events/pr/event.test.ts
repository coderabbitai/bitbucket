import { test } from "vitest"
import { isPrEventKey } from "./event.js"

test("isPrEventKey", ({ expect }) => {
	const result = isPrEventKey("pr:comment:added")
	expect(result).toBe(true)
})
