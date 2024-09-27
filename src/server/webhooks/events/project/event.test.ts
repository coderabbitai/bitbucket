import { describe, test } from "vitest"
import type { Event } from "../event.js"
import { isProjectEvent, isProjectEventKey } from "./event.js"

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

describe("isProjectEvent", () => {
	test("project:modified", ({ expect }) => {
		const result = isProjectEvent({ eventKey: "project:modified" } as Event)
		expect(result).toBe(true)
	})

	test("mirror:repo_synchronized", ({ expect }) => {
		const result = isProjectEvent({
			eventKey: "mirror:repo_synchronized",
		} as Event)
		expect(result).toBe(false)
	})
})
