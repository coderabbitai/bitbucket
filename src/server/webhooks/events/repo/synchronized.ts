import type { SchemaRepository } from "../../../openapi/openapi-typescript.ts"

export interface Change {
	readonly fromHash: string
	readonly ref: Ref
	readonly refId: string
	readonly toHash: string
	readonly type: string
}

export interface Clone {
	readonly href: string
	readonly name: string
}

export interface Links {
	readonly clone: Clone[]
	readonly self: Self[]
}

/** A mirror has finished synchronizing this repository. This payload comes with
 * an event key of `mirror:repo_synchronized`. */
export interface MirrorRepoSynchronized {
	/** The ref changes for this push. */
	readonly changes: Change[]
	readonly date: string
	readonly eventKey: "mirror:repo_synchronized"
	/** The mirror which synchronized the changes. This JSON object contains both
	 * the name and the `id` of the `mirrorServer` which synchronized the
	 * changes. */
	readonly mirrorServer: MirrorServer
	/** If this value is `true`, the list of changes will be empty because it
	 * exceeded the limit of refs that can be included. */
	readonly refLimitExceeded: boolean
	/** The repository. */
	readonly repository: Repository
	/**
	 * The sync type the mirror used to synchronize the changes which are
	 * announced by this webhook.
	 *
	 * This value can be `snapshot` or `incremental` for mirrors 6.7 and higher.
	 * It defaults to `smartMirror` for mirrors before version 6.7.
	 */
	readonly syncType: string
}

export interface MirrorServer {
	readonly id: string
	readonly name: string
}

export interface Project {
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

export interface Repository {
	readonly forkable: boolean
	readonly id: number
	/** This JSON object contains the HTTP and SSH clone URLs of the primary
	 * server as well as the mirror that synchronized these changes. It also
	 * contains a link to view this repository in Bitbucket. */
	readonly links: Links
	readonly name: string
	readonly project: Project
	readonly public: boolean
	readonly scmId: string
	readonly slug: string
	readonly state: SchemaRepository["state"]
	readonly statusMessage: string
}

export interface Self {
	readonly href: string
}
