export interface Actor {
	readonly active: boolean
	readonly displayName: string
	readonly emailAddress: string
	readonly id: number
	readonly name: string
	readonly slug: string
	readonly type: string
}

export interface Author {
	readonly approved: boolean
	readonly role: string
	readonly status: string
	readonly user: Actor
}

export interface Comment {
	readonly author: Actor
	readonly comments: unknown[]
	readonly createdDate: number
	readonly id: number
	readonly properties: Properties
	readonly tasks: unknown[]
	readonly text: string
	readonly updatedDate: number
	readonly version: number
}

/** A user comments on a pull request. This payload comes with an event key of `pr:comment:added`. */
export interface PRCommentAdded {
	/** The user that created the comment. */
	readonly actor: Actor
	/** The comment created. */
	readonly comment: Comment
	/** Id of the parent comment if one exists. */
	readonly commentParentId: number
	readonly date: string
	readonly eventKey: "pr:comment:added"
	/** The pull request comment on. */
	readonly pullRequest: PullRequest
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

export interface PullRequest {
	readonly author: Author
	readonly closed: boolean
	readonly createdDate: number
	readonly draft: boolean
	readonly fromRef: Ref
	readonly id: number
	readonly locked: boolean
	readonly open: boolean
	readonly participants: unknown[]
	readonly reviewers: unknown[]
	readonly state: string
	readonly title: string
	readonly toRef: Ref
	readonly updatedDate: number
	readonly version: number
}

export interface Ref {
	readonly displayId: string
	readonly id: string
	readonly latestCommit: string
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
