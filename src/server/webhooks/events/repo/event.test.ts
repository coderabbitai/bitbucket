import { test } from "vitest"
import { isRepoEventKey } from "./event.js"

test("isRepoEventKey", ({ expect }) => {
	const result = isRepoEventKey("mirror:repo_synchronized")
	expect(result).toBe(true)
})
