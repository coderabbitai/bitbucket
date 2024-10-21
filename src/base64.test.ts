import { test } from "vitest"
import { fromBase64, toBase64 } from "./base64.ts"

test("toBase64", ({ expect }) => {
	const based = toBase64("Copyright © 2024 CodeRabbit")
	expect(based).toBe("Q29weXJpZ2h0IMKpIDIwMjQgQ29kZVJhYmJpdA==")
})

test("fromBase64", ({ expect }) => {
	const debased = fromBase64("Q29weXJpZ2h0IMKpIDIwMjQgQ29kZVJhYmJpdA==")
	expect(debased).toBe("Copyright © 2024 CodeRabbit")
})
