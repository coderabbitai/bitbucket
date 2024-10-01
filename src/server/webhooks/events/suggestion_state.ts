export const suggestionState = {
	UNAPPLIED: "UNAPPLIED",
} as const

export type SuggestionState =
	(typeof suggestionState)[keyof typeof suggestionState]
