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
	readonly permittedOperations: PermittedOperations
	readonly properties: Properties
	readonly tasks: unknown[]
	readonly text: string
	readonly updatedDate: number
	readonly version: number
}

export interface PermittedOperations {
	readonly deletable: boolean
	readonly editable: boolean
}

export interface Project {
	readonly id: number
	readonly key: string
	readonly name: string
	readonly public: boolean
	readonly type: string
}

export interface Properties {
	readonly repositoryId: number
}

/** A user comments on a commit in a repository. This payload comes with an
 * event key of `repo:comment:added`. */
export interface RepoCommentAdded {
	/** The user who comments on the commit. */
	readonly actor: Actor
	/** The comment created. */
	readonly comment: Comment
	/** The hash. */
	readonly commit: string
	readonly date: string
	readonly eventKey: `repo:comment:added`
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
