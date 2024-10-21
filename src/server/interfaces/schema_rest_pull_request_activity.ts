import type {
	SchemaRestComment,
	SchemaRestPullRequestActivity as SchemaRestPullRequestActivityBase,
} from "../openapi/index.ts"

export type SchemaRestPullRequestActivity =
	| SchemaRestPullRequestActivityCommented
	| SchemaRestPullRequestActivityOpened
	| SchemaRestPullRequestActivityUpdated
type User = SchemaRestPullRequestActivityBase["user"]

export interface SchemaRestPullRequestActivityCommented
	extends SchemaRestPullRequestActivityBase {
	readonly action: "COMMENTED"
	readonly comment?: SchemaRestComment
	readonly commentAnchor?: SchemaRestComment["anchor"]
}

export interface SchemaRestPullRequestActivityOpened
	extends SchemaRestPullRequestActivityBase {
	readonly action: "OPENED"
}

export interface SchemaRestPullRequestActivityUpdated
	extends SchemaRestPullRequestActivityBase {
	readonly action: "UPDATED"
	readonly addedReviewers: User[]
	readonly removedReviewers: User[]
}

export function isSchemaRestPullRequestActivityCommented(
	activity?: SchemaRestPullRequestActivity | SchemaRestPullRequestActivityBase,
): activity is SchemaRestPullRequestActivityCommented {
	return activity?.action === "COMMENTED"
}

export function isSchemaRestPullRequestActivityOpened(
	activity?: SchemaRestPullRequestActivity | SchemaRestPullRequestActivityBase,
): activity is SchemaRestPullRequestActivityOpened {
	return activity?.action === "OPENED"
}

export function isSchemaRestPullRequestActivityUpdated(
	activity?: SchemaRestPullRequestActivity | SchemaRestPullRequestActivityBase,
): activity is SchemaRestPullRequestActivityUpdated {
	return activity?.action === "UPDATED"
}
