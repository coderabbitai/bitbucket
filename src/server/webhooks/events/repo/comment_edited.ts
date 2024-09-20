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

/** A user edits a comment on a commit in a repository. This payload comes with
 * an event key of `repo:comment:edited`. */
export interface RepoCommentEdited {
	/** The user who edits the commit. */
	readonly actor: Actor
	/** The comment edited. */
	readonly comment: Comment
	/** The hash of the commit. */
	readonly commit: string
	readonly date: string
	readonly eventKey: "repo:comment:edited"
	/** The text of the comment prior to editing. */
	readonly previousComment: string
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
	readonly state: string
	readonly statusMessage: string
}
