import type {
	SchemaPullRequest,
	SchemaRepository,
} from "../../../openapi/openapi-typescript.ts"

export interface Actor {
	readonly active: boolean
	readonly displayName: string
	readonly emailAddress: string
	readonly id: number
	readonly name: string
	readonly slug: string
	readonly type: string
}

/** A user marks a pull request as changes requested. This payload comes with an
 * event key of `pr:reviewer:needs_work`. */
export interface PRReviewerChangesRequested {
	/** The user who marked the PR as "Changes requested". */
	readonly actor: Actor
	readonly date: string
	readonly eventKey: "pr:reviewer:changes_requested"
	/** Details of the PR participant status of the user making the change. */
	readonly participant: Participant
	/** The state of the approval before this change. */
	readonly previousStatus: string
	/** Details of the pull request marked "Changes requested". */
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
