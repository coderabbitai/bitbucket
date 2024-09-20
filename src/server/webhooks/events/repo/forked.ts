export interface Actor {
	readonly active: boolean
	readonly displayName: string
	readonly emailAddress: string
	readonly id: number
	readonly name: string
	readonly slug: string
	readonly type: string
}

export interface Origin {
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

export interface Project {
	readonly id: number
	readonly key: string
	readonly name: string
	readonly owner?: Actor
	readonly public?: boolean
	readonly type: string
}

/** A user forks a repository. This payload comes with an event key of
 * `repo:forked`. */
export interface RepoForked {
	/** The user who forks the repository. This user is also the owner of the
	 * fork. */
	readonly actor: Actor
	readonly date: string
	readonly eventKey: "repo:forked"
	/** The new repository. */
	readonly repository: Repository
}

export interface Repository {
	readonly forkable: boolean
	readonly id: number
	readonly name: string
	/** The original repository that was forked. */
	readonly origin: Origin
	readonly project: Project
	readonly public: boolean
	readonly scmId: string
	readonly slug: string
	readonly state: string
	readonly statusMessage: string
}
