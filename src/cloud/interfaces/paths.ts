import type { paths as openapi } from "../openapi/openapi-typescript.ts"

/**
 * Overrides Bitbucket Cloud's OpenAPI schema.
 */
export interface paths extends Omit<
	openapi,
	"/repositories/{workspace}/{repo_slug}/refs/branches"
> {
	readonly "/repositories/{workspace}/{repo_slug}/refs/branches": Omit<
		openapi["/repositories/{workspace}/{repo_slug}/refs/branches"],
		"post"
	> & {
		readonly post: Omit<
			openapi["/repositories/{workspace}/{repo_slug}/refs/branches"]["post"],
			"requestBody"
		> & {
			readonly requestBody: {
				readonly content: {
					readonly "application/json": CreateBranchRequest
				}
			}
		}
	}
}

/** Request to create a branch. */
export interface CreateBranchRequest {
	/** Name of the new branch */
	readonly name: string
	/** Where to point the new branch to */
	readonly target: Target
}

export interface Target {
	readonly hash: string
}
