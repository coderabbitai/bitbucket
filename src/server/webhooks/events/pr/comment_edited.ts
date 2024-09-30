import type {
	SchemaApplicationUser,
	SchemaProject,
	SchemaPullRequestParticipant,
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
	readonly role: SchemaPullRequestParticipant["role"]
	readonly status: SchemaPullRequestParticipant["status"]
	readonly user: Actor
}

export interface Clone {
	readonly href: string
	readonly name: string
}

export interface Comment {
	readonly author: Actor
	readonly comments: unknown[]
	readonly createdDate: number
	readonly id: number
	readonly properties: Properties
	readonly severity: string
	readonly state: string
	readonly text: string
	readonly threadResolved: boolean
	readonly threadResolvedDate: number
	readonly threadResolver: Actor
	readonly updatedDate: number
	readonly version: number
}

/** This payload comes with an event key of `pr:comment:edited`. */
export interface PRCommentEdited {
	/** The user that edited the comment. */
	readonly actor: Actor
	/** The comment edited. */
	readonly comment: Comment
	/** Id of the parent comment if one exists. */
	readonly commentParentId?: number
	readonly date: string
	readonly eventKey: "pr:comment:edited"
	/** Text of the previous comment. */
	readonly previousComment: string
	/** The pull request where the comment exists. */
	readonly pullRequest: PullRequest
}

export interface Project {
	readonly id: number
	readonly key: string
	readonly links: ActorLinks
	readonly name: string
	readonly public: boolean
	readonly type: SchemaProject["type"]
}

export interface Properties {
	readonly repositoryId: number
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
