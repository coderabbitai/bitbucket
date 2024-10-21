import type { Event } from "../event.ts"
import type { RepoCommentAdded } from "./comment_added.ts"
import type { RepoCommentDeleted } from "./comment_deleted.ts"
import type { RepoCommentEdited } from "./comment_edited.ts"
import type { RepoForked } from "./forked.ts"
import type { RepoModified } from "./modified.ts"
import type { RepoRefsChanged } from "./refs_changed.ts"
import type { RepoSecretDetected } from "./secret_detected.ts"
import type { MirrorRepoSynchronized } from "./synchronized.ts"

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
export type RepoEventKey = RepoEvent["eventKey"]

export function isRepoEvent(event: Event): event is RepoEvent {
	return isRepoEventKey(event.eventKey)
}

export function isRepoEventKey(key: unknown): key is RepoEventKey {
	return Object.values<unknown>(repoEventKeys).includes(key)
}

export const repoEventKeys = {
	"mirror:repo_synchronized": "mirror:repo_synchronized",
	"repo:comment:added": "repo:comment:added",
	"repo:comment:deleted": "repo:comment:deleted",
	"repo:comment:edited": "repo:comment:edited",
	"repo:forked": "repo:forked",
	"repo:modified": "repo:modified",
	"repo:refs_changed": "repo:refs_changed",
	"repo:secret_detected": "repo:secret_detected",
} as const

repoEventKeys satisfies Record<RepoEventKey, RepoEventKey>
