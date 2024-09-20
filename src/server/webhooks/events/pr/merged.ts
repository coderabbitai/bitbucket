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

export interface MergeCommit {
	readonly displayId: string
	readonly id: string
}

/** A user merges a pull request for a repository. This payload comes with an
 * event key of `pr:merged`. */
export interface PRMerged {
	/** The user who merged the pull request. */
	readonly actor: Actor
	readonly date: string
	readonly eventKey: "pr:merged"
	/** Details of the pull request merged. */
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
	readonly mergeCommit: MergeCommit
}

export interface PullRequest {
	readonly author: Author
	readonly closed: boolean
	readonly closedDate: number
	readonly createdDate: number
	readonly draft: boolean
	readonly fromRef: Ref
	readonly id: number
	readonly locked: boolean
	readonly open: boolean
	readonly participants: Author[]
	readonly properties: Properties
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
