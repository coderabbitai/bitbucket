import type { Event } from "../event.ts"
import type { PRCommentAdded } from "./comment_added.ts"
import type { PRCommentDeleted } from "./comment_deleted.ts"
import type { PRCommentEdited } from "./comment_edited.ts"
import type { PRDeclined } from "./declined.ts"
import type { PRDeleted } from "./deleted.ts"
import type { PRFromRefUpdated } from "./from_ref_updated.ts"
import type { PRMerged } from "./merged.ts"
import type { PRModified } from "./modified.ts"
import type { PROpened } from "./opened.ts"
import type { PRReviewerApproved } from "./reviewer_approved.ts"
import type { PRReviewerChangesRequested } from "./reviewer_changes_requested.ts"
import type { PRReviewerUnapproved } from "./reviewer_unapproved.ts"
import type { PRReviewerUpdated } from "./reviewer_updated.ts"

/** You can create webhooks for events that occur on a pull request. */
export type PrEvent =
	| PRCommentAdded
	| PRCommentDeleted
	| PRCommentEdited
	| PRDeclined
	| PRDeleted
	| PRFromRefUpdated
	| PRMerged
	| PRModified
	| PROpened
	| PRReviewerApproved
	| PRReviewerChangesRequested
	| PRReviewerUnapproved
	| PRReviewerUpdated
export type PrEventKey = PrEvent["eventKey"]

export function isPrEvent(event: Event): event is PrEvent {
	return isPrEventKey(event.eventKey)
}

export function isPrEventKey(key: unknown): key is PrEventKey {
	return Object.values<unknown>(prEventKeys).includes(key)
}

export const prEventKeys = {
	"pr:comment:added": "pr:comment:added",
	"pr:comment:deleted": "pr:comment:deleted",
	"pr:comment:edited": "pr:comment:edited",
	"pr:declined": "pr:declined",
	"pr:deleted": "pr:deleted",
	"pr:from_ref_updated": "pr:from_ref_updated",
	"pr:merged": "pr:merged",
	"pr:modified": "pr:modified",
	"pr:opened": "pr:opened",
	"pr:reviewer:approved": "pr:reviewer:approved",
	"pr:reviewer:changes_requested": "pr:reviewer:changes_requested",
	"pr:reviewer:unapproved": "pr:reviewer:unapproved",
	"pr:reviewer:updated": "pr:reviewer:updated",
} as const

prEventKeys satisfies Record<PrEventKey, PrEventKey>
