import type {
	SchemaApplicationUser,
	SchemaProject,
	SchemaPullRequest,
	SchemaRepository,
	SchemaRestMinimalRef,
} from "../../../openapi/openapi-typescript.js"

export interface Actor {
	readonly active: boolean
	readonly displayName: string
	readonly emailAddress: string
	readonly id: number
	readonly links: ActorLinks
	readonly name: string
	readonly slug: string
	readonly type: SchemaApplicationUser["type"]
}

export interface ActorLinks {
	readonly self: Self[]
}

export interface Author {
	readonly approved: boolean
	readonly role: string
	readonly status: string
	readonly user: Actor
}

export interface Clone {
	readonly href: string
	readonly name: string
}

export interface PRReviewerUpdated {
	/** The user who created the pull request. */
	readonly actor: Actor
	/** Users that have been added as reviewers */
	readonly addedReviewers: Actor[]
	readonly date: string
	readonly eventKey: "pr:reviewer:updated"
	/** Details of the pull request created. */
	readonly pullRequest: PullRequest
	/** Users that are no longer reviewers */
	readonly removedReviewers: Actor[]
}

export interface Project {
	readonly id: number
	readonly key: string
	readonly links: ActorLinks
	readonly name: string
	readonly owner?: Actor
	readonly public: boolean
	readonly type: SchemaProject["type"]
}

export interface PullRequest {
	readonly author: Author
	readonly closed: boolean
	readonly createdDate: number
	readonly description: string
	readonly draft: boolean
	readonly fromRef: Ref
	readonly id: number
	readonly links: ActorLinks
	readonly locked: boolean
	readonly open: boolean
	readonly participants: Author[]
	readonly reviewers: Author[]
	readonly state: SchemaPullRequest["state"]
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
	readonly type: SchemaRestMinimalRef["type"]
}

export interface Repository {
	readonly archived: boolean
	readonly forkable: boolean
	readonly hierarchyId: string
	readonly id: number
	readonly links: RepositoryLinks
	readonly name: string
	readonly project: Project
	readonly public: boolean
	readonly scmId: string
	readonly slug: string
	readonly state: SchemaRepository["state"]
	readonly statusMessage: string
}

export interface RepositoryLinks {
	readonly clone: Clone[]
	readonly self: Self[]
}

export interface Self {
	readonly href: string
}
