export function fromBase64(base64: string): Buffer | Uint8Array | string {
	const string = atob(base64)
	const bytes = Uint8Array.from(string, v => v.codePointAt(0) ?? 0)
	return new TextDecoder().decode(bytes)
}

export function toBase64(input: string): string {
	const bytes = new TextEncoder().encode(input)
	const string = String.fromCodePoint(...bytes)
	return btoa(string)
}
