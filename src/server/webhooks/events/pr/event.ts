import type { PRCommentAdded } from "./comment_added.js"
import type { PRCommentDeleted } from "./comment_deleted.js"
import type { PRCommentEdited } from "./comment_edited.js"
import type { PRDeclined } from "./declined.js"
import type { PRDeleted } from "./deleted.js"
import type { PRFromRefUpdated } from "./from_ref_updated.js"
import type { PRMerged } from "./merged.js"
import type { PRModified } from "./modified.js"
import type { PROpened } from "./opened.js"
import type { PRReviewerApproved } from "./reviewer_approved.js"
import type { PRReviewerChangesRequested } from "./reviewer_changes_requested.js"
import type { PRReviewerUnapproved } from "./reviewer_unapproved.js"
import type { PRReviewerUpdated } from "./reviewer_updated.js"

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

export type PrEventKey =
	| PRCommentAdded["eventKey"]
	| PRCommentDeleted["eventKey"]
	| PRCommentEdited["eventKey"]
	| PRDeclined["eventKey"]
	| PRDeleted["eventKey"]
	| PRFromRefUpdated["eventKey"]
	| PRMerged["eventKey"]
	| PRModified["eventKey"]
	| PROpened["eventKey"]
	| PRReviewerApproved["eventKey"]
	| PRReviewerChangesRequested["eventKey"]
	| PRReviewerUnapproved["eventKey"]
	| PRReviewerUpdated["eventKey"]
