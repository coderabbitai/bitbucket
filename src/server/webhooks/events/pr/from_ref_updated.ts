export interface Actor {
	readonly active: boolean
	readonly displayName: string
	readonly emailAddress: string
	readonly id: number
	readonly links: ActorLinks
	readonly name: string
	readonly slug: string
	readonly type: string
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

export interface PRFromRefUpdated {
	/** The user who created the pull request. */
	readonly actor: Actor
	readonly date: string
	readonly eventKey: "pr:from_ref_updated"
	/** Previous from-ref hash */
	readonly previousFromHash: string
	/** Details of the pull request created. */
	readonly pullRequest: PullRequest
}

export interface Project {
	readonly id: number
	readonly key: string
	readonly links: ActorLinks
	readonly name: string
	readonly public: boolean
	readonly type: string
}

export interface PullRequest {
	readonly author: Author
	readonly closed: boolean
	readonly createdDate: number
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
}

export interface Repository {
	readonly forkable: boolean
	readonly hierarchyId: string
	readonly id: number
	readonly links: RepositoryLinks
	readonly name: string
	readonly project: Project
	readonly public: boolean
	readonly scmId: string
	readonly slug: string
	readonly state: string
	readonly statusMessage: string
}

export interface RepositoryLinks {
	readonly clone: Clone[]
	readonly self: Self[]
}

export interface Self {
	readonly href: string
}
