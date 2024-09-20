export interface Actor {
	readonly active: boolean
	readonly displayName: string
	readonly emailAddress: string
	readonly id: number
	readonly name: string
	readonly slug: string
	readonly type: string
}

export interface Project {
	readonly id: number
	readonly key: string
	readonly name: string
	readonly public: boolean
	readonly type: string
}

/** A user updates the **Name** of a repository. This payload comes with an
 * event key of `repo:modified`. */
export interface RepoModified {
	/** The user who made the update. */
	readonly actor: Actor
	readonly date: string
	readonly eventKey: "repo:modified"
	/** The defaults of the current version of the repository. */
	readonly new: Repository
	/** The details of the old version of the repository. */
	readonly old: Repository
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
