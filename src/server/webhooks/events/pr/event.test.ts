import { describe, test } from "vitest"
import type { Event } from "../event.ts"
import { isPrEvent, isPrEventKey } from "./event.ts"

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

describe("isPrEvent", () => {
	test("pr:comment:added", ({ expect }) => {
		const result = isPrEvent({ eventKey: "pr:comment:added" } as Event)
		expect(result).toBe(true)
	})

	test("project:modified", ({ expect }) => {
		const result = isPrEvent({ eventKey: "project:modified" } as Event)
		expect(result).toBe(false)
	})
})
