import type {
	SchemaApplicationUser,
	SchemaComment,
	SchemaProject,
	SchemaPullRequest,
	SchemaPullRequestParticipant,
	SchemaRepository,
	SchemaRestMinimalRef,
} from "../../../openapi/openapi-typescript.js"
import type { SuggestionState } from "../suggestion_state.js"

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
	readonly status: string
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
	readonly state: SchemaComment["state"]
	readonly tasks?: unknown[]
	readonly text: string
	readonly threadResolved: boolean
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
	readonly commentParentId?: number
	readonly date: string
	readonly eventKey: "pr:comment:added"
	/** The pull request comment on. */
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
	readonly suggestionState?: SuggestionState
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
