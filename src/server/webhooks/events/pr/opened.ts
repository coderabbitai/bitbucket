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

export interface Links {
	readonly self: null[]
}

export interface PROpened {
	/** The user who created the pull request. */
	readonly actor: Actor
	readonly date: string
	readonly eventKey: "pr:opened"
	/** Details of the pull request created. */
	readonly pullRequest: PullRequest
}

export interface Project {
	readonly id: number
	readonly key: string
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
	readonly links: Links
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
	readonly id: number
	readonly name: string
	readonly project: Project
	readonly public: boolean
	readonly scmId: string
	readonly slug: string
	readonly state: string
	readonly statusMessage: string
}
