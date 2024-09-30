import type { SchemaRepository } from "../../../openapi/openapi-typescript.js"

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
	readonly emailAddress: string
	readonly name: string
}

export interface Change {
	readonly fromHash: string
	readonly ref: Ref
	readonly refId: string
	readonly toHash: string
	readonly type: string
}

export interface Commit {
	readonly author: Author
	readonly authorTimestamp: number
	readonly committer: Author
	readonly committerTimestamp: number
	readonly displayId: string
	readonly id: string
	readonly message: string
	readonly parents: Parent[]
}

export interface Parent {
	readonly displayId: string
	readonly id: string
}

export interface Project {
	readonly description: string
	readonly id: number
	readonly key: string
	readonly name: string
	readonly public: boolean
	readonly type: string
}

export interface Ref {
	readonly displayId: string
	readonly id: string
	readonly type: string
}

/** A user pushes one or more commits to a repository. This payload comes with
 * an event key of `repo:refs_changed`. */
export interface RepoRefsChanged {
	/** The user who pushed the commits. */
	readonly actor: Actor
	/** The details of the push. */
	readonly changes: Change[]
	/**
	 * The details of the commit pushed.
	 *
	 * By default, the maximum number of commits included is 5. If the number of
	 * commits pushed is greater than the limit set, the list will include only
	 * the most recent commits.
	 */
	readonly commits: Commit[]
	readonly date: string
	readonly eventKey: "repo:refs_changed"
	/** The repository with the commits. */
	readonly repository: Repository
	readonly toCommit: ToCommit
}

export interface Repository {
	readonly archived: boolean
	readonly forkable: boolean
	readonly hierarchyId: string
	readonly id: number
	readonly name: string
	readonly project: Project
	readonly public: boolean
	readonly scmId: string
	readonly slug: string
	readonly state: SchemaRepository["state"]
	readonly statusMessage: string
}

export interface ToCommit {
	readonly author: Author
	readonly authorTimestamp: number
	readonly committer: Author
	readonly committerTimestamp: number
	readonly displayId: string
	readonly id: string
	readonly message: string
	readonly parents: Commit[]
}
