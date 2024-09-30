import type { SchemaRepository } from "../../../openapi/openapi-typescript.js"

export interface Actor {
	readonly active: boolean
	readonly backingCrowdUser: null
	readonly crowdBacked: boolean
	readonly deletedDate: null
	readonly displayName: string
	readonly emailAddress: null
	readonly id: number
	readonly locale: null
	readonly name: string
	readonly slug: string
	readonly timeZone: null
	readonly type: string
	readonly username: string
}

export interface Project {
	readonly id: number
	readonly key: string
	readonly name: string
	readonly public: boolean
	readonly type: string
}

/** A user pushes one or more commits that contain a secret to a repository.
 * This payload comes with an event key of `repo:secret_detected`. */
export interface RepoSecretDetected {
	/** The user who pushed the commits. */
	readonly actor: Actor
	readonly date: string
	readonly eventKey: "repo:secret_detected"
	/** The details of the commits that contain a secret. */
	readonly secretLocations: SecretLocation[]
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

export interface SecretLocation {
	readonly commitId: string
	readonly line: number
	readonly path: string
	readonly repository: Repository
	readonly ruleName: string
}
