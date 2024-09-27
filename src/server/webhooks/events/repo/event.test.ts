import { describe, test } from "vitest"
import type { Event } from "../event.js"
import { isRepoEvent, isRepoEventKey } from "./event.js"

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
describe("isRepoEvent", () => {
	test("mirror:repo_synchronized", ({ expect }) => {
		const result = isRepoEvent({
			eventKey: "mirror:repo_synchronized",
		} as Event)
		expect(result).toBe(true)
	})

	test("project:modified", ({ expect }) => {
		const result = isRepoEvent({ eventKey: "project:modified" } as Event)
		expect(result).toBe(false)
	})
})
