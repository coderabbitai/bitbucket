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

/** A user updates the **Name** of a project. This payload comes with an event
 * key of `project:modified`. */
export interface ProjectModified {
	/** The user who made the update. */
	readonly actor: Actor
	readonly date: string
	readonly eventKey: "project:modified"
	/** The defaults of the current version of the project. */
	readonly new: Project
	/** The details of the old version of the project. */
	readonly old: Project
}
