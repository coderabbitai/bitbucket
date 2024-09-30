import type {
	SchemaPullRequest,
	SchemaRepository,
} from "../../../openapi/openapi-typescript.js"

export interface Actor {
	readonly active: boolean
	readonly displayName: string
	readonly emailAddress: string
	readonly id: number
	readonly name: string
	readonly slug: string
	readonly type: string
}

export interface Links {
	readonly self: null[]
}

/** A user approves a pull request for a repository. This payload comes with an
 * event key of `pr:reviewer:approved`. */
export interface PRReviewerApproved {
	/** The user which made the approval. */
	readonly actor: Actor
	readonly date: string
	readonly eventKey: "pr:reviewer:approved"
	/** Details of the PR participant status of the user making the change */
	readonly participant: Participant
	/** The state of the approval before this change */
	readonly previousStatus: string
	/** Details of the pull request approved. */
	readonly pullRequest: PullRequest
}

export interface Participant {
	readonly approved: boolean
	readonly lastReviewedCommit?: string
	readonly role: string
	readonly status: string
	readonly user: Actor
}

export interface Project {
	readonly id: number
	readonly key: string
	readonly name: string
	readonly public: boolean
	readonly type: string
}

export interface PullRequest {
	readonly author: Participant
	readonly closed: boolean
	readonly createdDate: number
	readonly description: string
	readonly draft: boolean
	readonly fromRef: Ref
	readonly id: number
	readonly links: Links
	readonly locked: boolean
	readonly open: boolean
	readonly participants: Participant[]
	readonly reviewers: Participant[]
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
