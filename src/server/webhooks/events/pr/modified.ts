import type {
	SchemaPullRequest,
	SchemaRepository,
} from "../../../openapi/index.ts"

export interface Actor {
	readonly active: boolean
	readonly displayName: string
	readonly emailAddress: string
	readonly id: number
	readonly name: string
	readonly slug: string
	readonly type: string
	readonly links: ActorLinks
}

export interface ActorLinks {
	readonly self: Self[]
}

export interface Self {
	readonly href: string
}

export interface Author {
	readonly approved: boolean
	readonly role: string
	readonly status: string
	readonly user: Actor
}

export interface PRModified {
	/** The user who created the pull request. */
	readonly actor: Actor
	readonly date: string
	readonly eventKey: "pr:modified"
	/** Previous description of the pull request, may not have changed */
	readonly previousDescription: string
	readonly previousDraft: boolean
	/** Previous target of the pull request, may not have changed */
	readonly previousTarget: Ref
	/** Previous title of the pull request, may not have changed */
	readonly previousTitle: string
	/** Details of the pull request created. */
	readonly pullRequest: PullRequest
}

export interface Ref {
	readonly displayId: string
	readonly id: string
	readonly latestChangeset?: string
	readonly latestCommit: string
	readonly type: string
	readonly repository?: Repository
}

export interface Project {
	readonly id: number
	readonly key: string
	readonly name: string
	readonly owner?: Actor
	readonly type: string
	readonly public: boolean
	readonly links: ActorLinks
}

export interface PullRequest {
	readonly author: Author
	readonly closed: boolean
	readonly createdDate: number
	readonly description: string
	readonly draft: boolean
	readonly fromRef: Ref
	readonly id: number
	readonly locked: boolean
	readonly open: boolean
	readonly participants: Author[]
	readonly reviewers: Author[]
	readonly state: SchemaPullRequest["state"]
	readonly title: string
	readonly toRef: Ref
	readonly updatedDate: number
	readonly version: number
	readonly links: ActorLinks
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
	readonly hierarchyId: string
	readonly archived: boolean
	readonly links: RepositoryLinks
}

export interface RepositoryLinks {
	readonly clone: Clone[]
	readonly self: Self[]
}

export interface Clone {
	readonly href: string
	readonly name: string
}
