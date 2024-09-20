import type { RepoCommentAdded } from "./comment_added.js"
import type { RepoCommentDeleted } from "./comment_deleted.js"
import type { RepoCommentEdited } from "./comment_edited.js"
import type { RepoForked } from "./forked.js"
import type { RepoModified } from "./modified.js"
import type { RepoRefsChanged } from "./refs_changed.js"
import type { RepoSecretDetected } from "./secret_detected.js"
import type { MirrorRepoSynchronized } from "./synchronized.js"

/** You can create webhooks for events that occur in a repository. */
export type RepoEvent =
	| MirrorRepoSynchronized
	| RepoCommentAdded
	| RepoCommentDeleted
	| RepoCommentEdited
	| RepoForked
	| RepoModified
	| RepoRefsChanged
	| RepoSecretDetected
export type RepoEventKey =
	| MirrorRepoSynchronized["eventKey"]
	| RepoCommentAdded["eventKey"]
	| RepoCommentDeleted["eventKey"]
	| RepoCommentEdited["eventKey"]
	| RepoForked["eventKey"]
	| RepoModified["eventKey"]
	| RepoRefsChanged["eventKey"]
	| RepoSecretDetected["eventKey"]
