import type { SchemaRepository } from "../../../openapi/openapi-typescript.ts"

export interface Actor {
	readonly active: boolean
	readonly displayName: string
	readonly emailAddress: string
	readonly id: number
	readonly name: string
	readonly slug: string
	readonly type: string
}

export interface Comment {
	readonly author: Actor
	readonly comments: unknown[]
	readonly createdDate: number
	readonly id: number
	readonly tasks: unknown[]
	readonly text: string
	readonly updatedDate: number
	readonly version: number
}

export interface Project {
	readonly id: number
	readonly key: string
	readonly name: string
	readonly public: boolean
	readonly type: string
}

/** A user deletes a comment on a commit in a repository. This payload comes
 * with an event key of `repo:comment:deleted`. */
export interface RepoCommentDeleted {
	/** The user who deletes the commit. */
	readonly actor: Actor
	/** The comment deleted. */
	readonly comment: Comment
	/** The hash of the commit. */
	readonly commit: string
	readonly date: string
	readonly eventKey: "repo:comment:deleted"
	/** The repository with the commit. */
	readonly repository: Repository
}

export interface Repository {
	readonly forkable: boolean
	readonly id: number
	readonly name: string
	readonly project: Project
	readonly public: boolean
	readonly scmId: string
	readonly slug: string
	readonly state: SchemaRepository["state"]
	readonly statusMessage: string
}
