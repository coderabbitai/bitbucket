import type {
	Client,
	ClientOptions,
	FetchResponse,
	MaybeOptionalInit,
} from "openapi-fetch"
import createClient from "openapi-fetch"
import type { InitParam } from "openapi-fetch/src/index.js"
import type { paths } from "./openapi/openapi-typescript.ts"

export class BitbucketServerClient {
	readonly openapi: Client<paths, "application/json">

	constructor(clientOptions?: ClientOptions) {
		this.openapi = createClient<paths, "application/json">(clientOptions)
	}

	/** Get project HTTP tokens
	 *
	 * Get all access tokens associated with the given project.
	 */
	async getAllAccessTokens(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/access-tokens/latest/projects/{projectKey}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/access-tokens/latest/projects/{projectKey}"]["get"],
			MaybeOptionalInit<
				paths["/access-tokens/latest/projects/{projectKey}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/access-tokens/latest/projects/{projectKey}",
			...init,
		)
	}

	/** Create project HTTP token
	 *
	 * Create an access token for the project according to the given request.
	 */
	async createAccessToken(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/access-tokens/latest/projects/{projectKey}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/access-tokens/latest/projects/{projectKey}"]["put"],
			MaybeOptionalInit<
				paths["/access-tokens/latest/projects/{projectKey}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/access-tokens/latest/projects/{projectKey}",
			...init,
		)
	}

	/** Get repository HTTP tokens
	 *
	 * Get all access tokens associated with the given repository.
	 */
	async getAllAccessTokens_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/access-tokens/latest/projects/{projectKey}/repos/{repositorySlug}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/access-tokens/latest/projects/{projectKey}/repos/{repositorySlug}"]["get"],
			MaybeOptionalInit<
				paths["/access-tokens/latest/projects/{projectKey}/repos/{repositorySlug}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/access-tokens/latest/projects/{projectKey}/repos/{repositorySlug}",
			...init,
		)
	}

	/** Create repository HTTP token
	 *
	 * Create an access token for the repository according to the given request.
	 */
	async createAccessToken_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/access-tokens/latest/projects/{projectKey}/repos/{repositorySlug}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/access-tokens/latest/projects/{projectKey}/repos/{repositorySlug}"]["put"],
			MaybeOptionalInit<
				paths["/access-tokens/latest/projects/{projectKey}/repos/{repositorySlug}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/access-tokens/latest/projects/{projectKey}/repos/{repositorySlug}",
			...init,
		)
	}

	/** Get HTTP token by ID
	 *
	 * Get the access token identified by the given ID.
	 */
	async getById_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/access-tokens/latest/projects/{projectKey}/repos/{repositorySlug}/{tokenId}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/access-tokens/latest/projects/{projectKey}/repos/{repositorySlug}/{tokenId}"]["get"],
			MaybeOptionalInit<
				paths["/access-tokens/latest/projects/{projectKey}/repos/{repositorySlug}/{tokenId}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/access-tokens/latest/projects/{projectKey}/repos/{repositorySlug}/{tokenId}",
			...init,
		)
	}

	/** Update HTTP token
	 *
	 * Modify an access token according to the given request. Any fields not specified will not be altered.
	 */
	async updateAccessToken_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/access-tokens/latest/projects/{projectKey}/repos/{repositorySlug}/{tokenId}"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/access-tokens/latest/projects/{projectKey}/repos/{repositorySlug}/{tokenId}"]["post"],
			MaybeOptionalInit<
				paths["/access-tokens/latest/projects/{projectKey}/repos/{repositorySlug}/{tokenId}"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/access-tokens/latest/projects/{projectKey}/repos/{repositorySlug}/{tokenId}",
			...init,
		)
	}

	/** Delete a HTTP token
	 *
	 * Delete the access token identified by the given ID.
	 */
	async deleteById_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/access-tokens/latest/projects/{projectKey}/repos/{repositorySlug}/{tokenId}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/access-tokens/latest/projects/{projectKey}/repos/{repositorySlug}/{tokenId}"]["delete"],
			MaybeOptionalInit<
				paths["/access-tokens/latest/projects/{projectKey}/repos/{repositorySlug}/{tokenId}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/access-tokens/latest/projects/{projectKey}/repos/{repositorySlug}/{tokenId}",
			...init,
		)
	}

	/** Get HTTP token by ID
	 *
	 * Get the access token identified by the given ID.
	 */
	async getById(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/access-tokens/latest/projects/{projectKey}/{tokenId}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/access-tokens/latest/projects/{projectKey}/{tokenId}"]["get"],
			MaybeOptionalInit<
				paths["/access-tokens/latest/projects/{projectKey}/{tokenId}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/access-tokens/latest/projects/{projectKey}/{tokenId}",
			...init,
		)
	}

	/** Update HTTP token
	 *
	 * Modify an access token according to the given request. Any fields not specified will not be altered.
	 */
	async updateAccessToken(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/access-tokens/latest/projects/{projectKey}/{tokenId}"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/access-tokens/latest/projects/{projectKey}/{tokenId}"]["post"],
			MaybeOptionalInit<
				paths["/access-tokens/latest/projects/{projectKey}/{tokenId}"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/access-tokens/latest/projects/{projectKey}/{tokenId}",
			...init,
		)
	}

	/** Delete a HTTP token
	 *
	 * Delete the access token identified by the given ID.
	 */
	async deleteById(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/access-tokens/latest/projects/{projectKey}/{tokenId}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/access-tokens/latest/projects/{projectKey}/{tokenId}"]["delete"],
			MaybeOptionalInit<
				paths["/access-tokens/latest/projects/{projectKey}/{tokenId}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/access-tokens/latest/projects/{projectKey}/{tokenId}",
			...init,
		)
	}

	/** Get personal HTTP tokens
	 *
	 * Get all access tokens associated with the given user.
	 */
	async getAllAccessTokens_2(
		...init: InitParam<
			MaybeOptionalInit<paths["/access-tokens/latest/users/{userSlug}"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/access-tokens/latest/users/{userSlug}"]["get"],
			MaybeOptionalInit<paths["/access-tokens/latest/users/{userSlug}"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/access-tokens/latest/users/{userSlug}",
			...init,
		)
	}

	/** Create personal HTTP token
	 *
	 * Create an access token for the user according to the given request.
	 */
	async createAccessToken_2(
		...init: InitParam<
			MaybeOptionalInit<paths["/access-tokens/latest/users/{userSlug}"], "put">
		>
	): Promise<
		FetchResponse<
			paths["/access-tokens/latest/users/{userSlug}"]["put"],
			MaybeOptionalInit<paths["/access-tokens/latest/users/{userSlug}"], "put">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/access-tokens/latest/users/{userSlug}",
			...init,
		)
	}

	/** Get HTTP token by ID
	 *
	 * Get the access token identified by the given ID.
	 */
	async getById_2(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/access-tokens/latest/users/{userSlug}/{tokenId}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/access-tokens/latest/users/{userSlug}/{tokenId}"]["get"],
			MaybeOptionalInit<
				paths["/access-tokens/latest/users/{userSlug}/{tokenId}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/access-tokens/latest/users/{userSlug}/{tokenId}",
			...init,
		)
	}

	/** Update HTTP token
	 *
	 * Modify an access token according to the given request. Any fields not specified will not be altered.
	 */
	async updateAccessToken_2(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/access-tokens/latest/users/{userSlug}/{tokenId}"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/access-tokens/latest/users/{userSlug}/{tokenId}"]["post"],
			MaybeOptionalInit<
				paths["/access-tokens/latest/users/{userSlug}/{tokenId}"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/access-tokens/latest/users/{userSlug}/{tokenId}",
			...init,
		)
	}

	/** Delete a HTTP token
	 *
	 * Delete the access token identified by the given ID.
	 */
	async deleteById_2(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/access-tokens/latest/users/{userSlug}/{tokenId}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/access-tokens/latest/users/{userSlug}/{tokenId}"]["delete"],
			MaybeOptionalInit<
				paths["/access-tokens/latest/users/{userSlug}/{tokenId}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/access-tokens/latest/users/{userSlug}/{tokenId}",
			...init,
		)
	}

	/** Get build status statistics for multiple commits
	 *
	 * Produces a list of the build statistics for multiple commits. Commits <em>without any builds associated with them</em> will not be returned.<br> For example if the commit <code>e00cf62997a027bbf785614a93e2e55bb331d268</code> does not have any build statuses associated with it, it will not be present in the response.
	 */
	async getMultipleBuildStatusStats(
		...init: InitParam<
			MaybeOptionalInit<paths["/build-status/latest/commits/stats"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/build-status/latest/commits/stats"]["post"],
			MaybeOptionalInit<paths["/build-status/latest/commits/stats"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/build-status/latest/commits/stats",
			...init,
		)
	}

	/** Get build status statistics for commit
	 *
	 * Gets statistics regarding the builds associated with a commit
	 */
	async getBuildStatusStats(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/build-status/latest/commits/stats/{commitId}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/build-status/latest/commits/stats/{commitId}"]["get"],
			MaybeOptionalInit<
				paths["/build-status/latest/commits/stats/{commitId}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/build-status/latest/commits/stats/{commitId}",
			...init,
		)
	}

	/** Get build statuses for commit
	 *
	 * Gets build statuses associated with a commit.
	 *
	 * <strong>Deprecated in 7.14, please use the repository based builds resource instead.</strong>
	 */
	async getBuildStatus(
		...init: InitParam<
			MaybeOptionalInit<paths["/build-status/latest/commits/{commitId}"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/build-status/latest/commits/{commitId}"]["get"],
			MaybeOptionalInit<
				paths["/build-status/latest/commits/{commitId}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/build-status/latest/commits/{commitId}",
			...init,
		)
	}

	/** Create build status for commit
	 *
	 * Associates a build status with a commit.The <code>state</code>, the <code>key</code> and the <code>url</code> fields are mandatory. The <code>name</code> and<code>description</code> fields are optional.All fields (mandatory or optional) are limited to 255 characters, except for the <code>url</code>,which is limited to 450 characters.Supported values for the <code>state</code> are <code>SUCCESSFUL</code>, <code>FAILED</code>and <code>INPROGRESS</code>.The authenticated user must have <strong>LICENSED</strong> permission or higher to call this resource.
	 *
	 * <strong>Deprecated in 7.14, please use the repository based builds resource instead.</strong>
	 */
	async addBuildStatus(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/build-status/latest/commits/{commitId}"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/build-status/latest/commits/{commitId}"]["post"],
			MaybeOptionalInit<
				paths["/build-status/latest/commits/{commitId}"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/build-status/latest/commits/{commitId}",
			...init,
		)
	}

	/** Create a required builds merge check
	 *
	 * Create a required build merge check for the given repository.
	 *
	 * The authenticated user must have **REPO_ADMIN** permission for the target repository to register a required build merge check.
	 *
	 * The contents of the required build merge check request are:
	 *
	 * These fields are **required**:
	 *
	 * - **buildParentKeys**: A non-empty list of build parent keys that require green builds for this merge check to pass
	 * - **refMatcher.id**: The value to match refs against in the target branch
	 * - **refMatcher.type.id**: The type of ref matcher, one of: "ANY_REF", "BRANCH", "PATTERN", "MODEL_CATEGORY" or "MODEL_BRANCH"
	 *
	 *
	 * These fields are optional:
	 *
	 * - **exemptRefMatcher.id** The value to exempt refs in the source branch from this check
	 * - **exemptRefMatcher.type.id**: The type of exempt ref matcher, one of: "ANY_REF", "BRANCH", "PATTERN", "MODEL_CATEGORY" or "MODEL_BRANCH"
	 *
	 *
	 *
	 */
	async createRequiredBuildsMergeCheck(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/required-builds/latest/projects/{projectKey}/repos/{repositorySlug}/condition"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/required-builds/latest/projects/{projectKey}/repos/{repositorySlug}/condition"]["post"],
			MaybeOptionalInit<
				paths["/required-builds/latest/projects/{projectKey}/repos/{repositorySlug}/condition"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/required-builds/latest/projects/{projectKey}/repos/{repositorySlug}/condition",
			...init,
		)
	}

	/** Update a required builds merge check
	 *
	 * Update the required builds merge check for the given ID.
	 *
	 * The authenticated user must have **REPO_ADMIN** permission for the target repository to update a required build merge check.
	 *
	 * The contents of the required build merge check request are:
	 *
	 * These fields are **required**:
	 *
	 * - **buildParentKeys**: A non-empty list of build parent keys that require green builds for this merge check to pass
	 * - **refMatcher.id**: The value to match refs against in the target branch
	 * - **refMatcher.type.id**: The type of ref matcher, one of: "ANY_REF", "BRANCH", "PATTERN", "MODEL_CATEGORY" or "MODEL_BRANCH"
	 *
	 *
	 * These fields are optional:
	 *
	 * - **exemptRefMatcher.id** The value to exempt refs in the source branch from this check
	 * - **exemptRefMatcher.type.id**: The type of exempt ref matcher, one of: "ANY_REF", "BRANCH", "PATTERN", "MODEL_CATEGORY" or "MODEL_BRANCH"
	 *
	 *
	 *
	 */
	async updateRequiredBuildsMergeCheck(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/required-builds/latest/projects/{projectKey}/repos/{repositorySlug}/condition/{id}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/required-builds/latest/projects/{projectKey}/repos/{repositorySlug}/condition/{id}"]["put"],
			MaybeOptionalInit<
				paths["/required-builds/latest/projects/{projectKey}/repos/{repositorySlug}/condition/{id}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/required-builds/latest/projects/{projectKey}/repos/{repositorySlug}/condition/{id}",
			...init,
		)
	}

	/** Delete a required builds merge check
	 *
	 * Deletes a required build existing merge check, given it's ID.
	 *
	 * The authenticated user must have **REPO_ADMIN** permission for the target repository to delete a required build merge check.
	 */
	async deleteRequiredBuildsMergeCheck(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/required-builds/latest/projects/{projectKey}/repos/{repositorySlug}/condition/{id}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/required-builds/latest/projects/{projectKey}/repos/{repositorySlug}/condition/{id}"]["delete"],
			MaybeOptionalInit<
				paths["/required-builds/latest/projects/{projectKey}/repos/{repositorySlug}/condition/{id}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/required-builds/latest/projects/{projectKey}/repos/{repositorySlug}/condition/{id}",
			...init,
		)
	}

	/** Get required builds merge checks
	 *
	 * Returns a page of required build merge checks that have been configured for this repository.
	 *
	 * The authenticated user must have **REPO_READ** permission for the target repository to request a page of required build merge checks.
	 */
	async getPageOfRequiredBuildsMergeChecks(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/required-builds/latest/projects/{projectKey}/repos/{repositorySlug}/conditions"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/required-builds/latest/projects/{projectKey}/repos/{repositorySlug}/conditions"]["get"],
			MaybeOptionalInit<
				paths["/required-builds/latest/projects/{projectKey}/repos/{repositorySlug}/conditions"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/required-builds/latest/projects/{projectKey}/repos/{repositorySlug}/conditions",
			...init,
		)
	}

	/** Dismiss retention config notification
	 *
	 * Dismisses the retention config review notification displayed by the audit plugin for the user that's currently logged in.
	 */
	async dismissRetentionConfigReviewNotification(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/audit/latest/notification-settings/retention-config-review"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/audit/latest/notification-settings/retention-config-review"]["delete"],
			MaybeOptionalInit<
				paths["/audit/latest/notification-settings/retention-config-review"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/audit/latest/notification-settings/retention-config-review",
			...init,
		)
	}

	/** Create branch
	 *
	 *  Creates a branch in the specified repository.
	 *
	 *
	 * The authenticated user must have an effective <strong>REPO_WRITE</strong> permission to call this resource. If
	 * branch permissions are set up in the repository, the authenticated user must also have access to the branch name
	 * that is to be created.
	 */
	async createBranch(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/branch-utils/latest/projects/{projectKey}/repos/{repositorySlug}/branches"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/branch-utils/latest/projects/{projectKey}/repos/{repositorySlug}/branches"]["post"],
			MaybeOptionalInit<
				paths["/branch-utils/latest/projects/{projectKey}/repos/{repositorySlug}/branches"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/branch-utils/latest/projects/{projectKey}/repos/{repositorySlug}/branches",
			...init,
		)
	}

	/** Delete branch
	 *
	 *  Deletes a branch in the specified repository.
	 *
	 *
	 *  If the branch does not exist, this operation will not raise an error. In other words after calling this resource
	 *  and receiving a 204 response the branch provided in the request is guaranteed to not exist in the specified
	 *  repository any more, regardless of its existence beforehand.
	 *
	 *
	 *  The optional 'endPoint' parameter of the request may contain a commit ID that the provided ref name is
	 *  expected to point to. Should the ref point to a different commit ID, a 400 response will be returned with
	 *  appropriate error details.
	 *
	 *
	 *  The authenticated user must have an effective <strong>REPO_WRITE</strong> permission to call this resource. If
	 *  branch permissions are set up in the repository, the authenticated user must also have access to the branch name
	 *  that is to be deleted.
	 */
	async deleteBranch(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/branch-utils/latest/projects/{projectKey}/repos/{repositorySlug}/branches"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/branch-utils/latest/projects/{projectKey}/repos/{repositorySlug}/branches"]["delete"],
			MaybeOptionalInit<
				paths["/branch-utils/latest/projects/{projectKey}/repos/{repositorySlug}/branches"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/branch-utils/latest/projects/{projectKey}/repos/{repositorySlug}/branches",
			...init,
		)
	}

	/** Get branch
	 *
	 * Gets the branch information associated with a single commit from a given repository.
	 */
	async findByCommit(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/branch-utils/latest/projects/{projectKey}/repos/{repositorySlug}/branches/info/{commitId}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/branch-utils/latest/projects/{projectKey}/repos/{repositorySlug}/branches/info/{commitId}"]["get"],
			MaybeOptionalInit<
				paths["/branch-utils/latest/projects/{projectKey}/repos/{repositorySlug}/branches/info/{commitId}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/branch-utils/latest/projects/{projectKey}/repos/{repositorySlug}/branches/info/{commitId}",
			...init,
		)
	}

	/** Get a page of default tasks
	 *
	 * Retrieves the default tasks for the supplied repository.
	 *
	 * The authenticated user must have **REPO_VIEW** permission for this repository to call the resource.
	 */
	async getDefaultTasks_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks"]["get"],
			MaybeOptionalInit<
				paths["/default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks",
			...init,
		)
	}

	/** Add a default task
	 *
	 * Creates a default task for the supplied repository.
	 *
	 * The authenticated user must have **REPO_ADMIN** permission for this repository to call the resource.
	 */
	async addDefaultTask_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks"]["post"],
			MaybeOptionalInit<
				paths["/default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks",
			...init,
		)
	}

	/** Deletes all default tasks for the repository
	 *
	 * Delete all the default tasks for the supplied repository
	 *
	 * The authenticated user must have **REPO_ADMIN** permission for this repository to call the resource.
	 */
	async deleteAllDefaultTasks_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks"]["delete"],
			MaybeOptionalInit<
				paths["/default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks",
			...init,
		)
	}

	/** Update a default task
	 *
	 * Updates a default task for the supplied repository.
	 *
	 * The authenticated user must have **REPO_ADMIN** permission for this repository to call the resource.
	 */
	async updateDefaultTask_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks/{taskId}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks/{taskId}"]["put"],
			MaybeOptionalInit<
				paths["/default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks/{taskId}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks/{taskId}",
			...init,
		)
	}

	/** Delete a specific default task
	 *
	 * Delete a specific default task for a repository.
	 *
	 * The authenticated user must have **REPO_ADMIN** permission for this repository to call the resource.
	 */
	async deleteDefaultTask_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks/{taskId}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks/{taskId}"]["delete"],
			MaybeOptionalInit<
				paths["/default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks/{taskId}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks/{taskId}",
			...init,
		)
	}

	/** Get a page of default tasks
	 *
	 * Retrieves the default tasks for the supplied project.
	 *
	 * The authenticated user must have **PROJECT_VIEW** permission for this project to call the resource.
	 */
	async getDefaultTasks(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/default-tasks/latest/projects/{projectKey}/tasks"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/default-tasks/latest/projects/{projectKey}/tasks"]["get"],
			MaybeOptionalInit<
				paths["/default-tasks/latest/projects/{projectKey}/tasks"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/default-tasks/latest/projects/{projectKey}/tasks",
			...init,
		)
	}

	/** Add a default task
	 *
	 * Creates a default task for the project.
	 *
	 * The authenticated user must have **PROJECT_ADMIN** permission for this project to call the resource.
	 */
	async addDefaultTask(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/default-tasks/latest/projects/{projectKey}/tasks"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/default-tasks/latest/projects/{projectKey}/tasks"]["post"],
			MaybeOptionalInit<
				paths["/default-tasks/latest/projects/{projectKey}/tasks"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/default-tasks/latest/projects/{projectKey}/tasks",
			...init,
		)
	}

	/** Deletes all default tasks for the project
	 *
	 * Delete all the default tasks for the supplied project
	 *
	 * The authenticated user must have **PROJECT_ADMIN** permission for this project to call the resource.
	 */
	async deleteAllDefaultTasks(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/default-tasks/latest/projects/{projectKey}/tasks"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/default-tasks/latest/projects/{projectKey}/tasks"]["delete"],
			MaybeOptionalInit<
				paths["/default-tasks/latest/projects/{projectKey}/tasks"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/default-tasks/latest/projects/{projectKey}/tasks",
			...init,
		)
	}

	/** Update a default task
	 *
	 * Updates a default task for the supplied project.
	 *
	 * The authenticated user must have **PROJECT_ADMIN** permission for this project to call the resource.
	 */
	async updateDefaultTask(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/default-tasks/latest/projects/{projectKey}/tasks/{taskId}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/default-tasks/latest/projects/{projectKey}/tasks/{taskId}"]["put"],
			MaybeOptionalInit<
				paths["/default-tasks/latest/projects/{projectKey}/tasks/{taskId}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/default-tasks/latest/projects/{projectKey}/tasks/{taskId}",
			...init,
		)
	}

	/** Delete a specific default task
	 *
	 * Delete a specific default task for a project.
	 *
	 * The authenticated user must have **PROJECT_ADMIN** permission for this project to call the resource.
	 */
	async deleteDefaultTask(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/default-tasks/latest/projects/{projectKey}/tasks/{taskId}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/default-tasks/latest/projects/{projectKey}/tasks/{taskId}"]["delete"],
			MaybeOptionalInit<
				paths["/default-tasks/latest/projects/{projectKey}/tasks/{taskId}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/default-tasks/latest/projects/{projectKey}/tasks/{taskId}",
			...init,
		)
	}

	/** React to a comment
	 *
	 * Add an emoticon reaction to a comment
	 */
	async react(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/comment-likes/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId}/reactions/{emoticon}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/comment-likes/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId}/reactions/{emoticon}"]["put"],
			MaybeOptionalInit<
				paths["/comment-likes/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId}/reactions/{emoticon}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/comment-likes/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId}/reactions/{emoticon}",
			...init,
		)
	}

	/** Remove a reaction from comment
	 *
	 * Remove an emoticon reaction from a comment
	 */
	async unReact(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/comment-likes/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId}/reactions/{emoticon}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/comment-likes/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId}/reactions/{emoticon}"]["delete"],
			MaybeOptionalInit<
				paths["/comment-likes/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId}/reactions/{emoticon}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/comment-likes/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId}/reactions/{emoticon}",
			...init,
		)
	}

	/** React to a PR comment
	 *
	 * Add an emoticon reaction to a pull request comment
	 */
	async react_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/comment-likes/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}/reactions/{emoticon}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/comment-likes/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}/reactions/{emoticon}"]["put"],
			MaybeOptionalInit<
				paths["/comment-likes/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}/reactions/{emoticon}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/comment-likes/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}/reactions/{emoticon}",
			...init,
		)
	}

	/** Remove a reaction from a PR comment
	 *
	 * Remove an emoticon reaction from a pull request comment
	 */
	async unReact_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/comment-likes/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}/reactions/{emoticon}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/comment-likes/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}/reactions/{emoticon}"]["delete"],
			MaybeOptionalInit<
				paths["/comment-likes/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}/reactions/{emoticon}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/comment-likes/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}/reactions/{emoticon}",
			...init,
		)
	}

	/** Create Jira Issue
	 *
	 * Create a Jira issue and associate it with a comment on a pull request.
	 *
	 * This resource can only be used with comments on a pull request. Attempting to call this resource with a different type of comment (for example, a comment on a commit) will result in an error.
	 *
	 *  The authenticated user must have <strong>REPO_READ</strong> permission for the repository containing the comment to call this resource.
	 *
	 * The JSON structure for the create issue format is specified by Jira's REST v2 API.
	 */
	async createIssue(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/jira/latest/comments/{commentId}/issues"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/jira/latest/comments/{commentId}/issues"]["post"],
			MaybeOptionalInit<
				paths["/jira/latest/comments/{commentId}/issues"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/jira/latest/comments/{commentId}/issues",
			...init,
		)
	}

	/** Get changesets for issue key
	 *
	 * Retrieve a page of changesets associated with the given issue key.
	 */
	async getCommitsByIssueKey(
		...init: InitParam<
			MaybeOptionalInit<paths["/jira/latest/issues/{issueKey}/commits"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/jira/latest/issues/{issueKey}/commits"]["get"],
			MaybeOptionalInit<paths["/jira/latest/issues/{issueKey}/commits"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/jira/latest/issues/{issueKey}/commits",
			...init,
		)
	}

	/** Get entity link
	 *
	 * Retrieves the enchanced primary entitylink
	 *
	 * The authenticated user must have <strong>PROJECT_READ</strong> permission for the project having the primary enhanced entitylink.
	 *
	 *
	 */
	async getEnhancedEntityLinkForProject(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/jira/latest/projects/{projectKey}/primary-enhanced-entitylink"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/jira/latest/projects/{projectKey}/primary-enhanced-entitylink"]["get"],
			MaybeOptionalInit<
				paths["/jira/latest/projects/{projectKey}/primary-enhanced-entitylink"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/jira/latest/projects/{projectKey}/primary-enhanced-entitylink",
			...init,
		)
	}

	/** Get issues for a pull request
	 *
	 * Retrieves Jira issue keys that are associated with the commits in the specified pull request. The number of commits checked for issues is limited to a default of 100.
	 */
	async getIssueKeysForPullRequest(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/jira/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/issues"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/jira/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/issues"]["get"],
			MaybeOptionalInit<
				paths["/jira/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/issues"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/jira/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/issues",
			...init,
		)
	}

	/** Check PR rebase precondition
	 *
	 * Checks preconditions to determine whether the pull request can be rebased.
	 *
	 * Some of the preconditions are:
	 *
	 * - The pull request is between Git repositories
	 * - The pull request is currently open
	 * - The pull request's {@link PullRequest#getFromRef "from" ref} is a <i>branch</i>
	 *    - In other words, the qualified ID for the "from" ref must start with <code>refs/heads/</code>
	 *    - Tags, and other non-standard refs, cannot be rebased
	 * - The current user has an e-mail address
	 *    - Pull requests cannot be rebased anonymously
	 *    - `git rebase` records the current user as the committer for the rebased commits, which        requires a name and e-mail address
	 * - The current user has <i>write</i> access to the {@link PullRequest#getFromRef "from" ref}'s repository
	 *    - Note that in order to <i>view</i> a pull request a user is only required to have <i>read</i>      access to the {@link PullRequest#getToRef toRef}'s repository, so just because a user can <i>see</i>      a pull request does not mean they can request a rebase
	 *
	 *
	 * This list is not exhaustive, and the exact set of preconditions applied can be extended by third-party add-ons.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async canRebase(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/git/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/rebase"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/git/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/rebase"]["get"],
			MaybeOptionalInit<
				paths["/git/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/rebase"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/git/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/rebase",
			...init,
		)
	}

	/** Rebase pull request
	 *
	 * Rebases the specified pull request, rewriting the incoming commits to start from the tip commit of the pull request's target branch. <i>This operation alters the pull request's source branch and cannot be undone.</i>
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets <i>and</i> <strong>REPO_WRITE</strong> permission for the pull request's source repository to call this resource.
	 */
	async rebase(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/git/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/rebase"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/git/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/rebase"]["post"],
			MaybeOptionalInit<
				paths["/git/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/rebase"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/git/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/rebase",
			...init,
		)
	}

	/** Create tag
	 *
	 * Creates a tag in the specified repository.
	 *
	 * The authenticated user must have an effective <strong>REPO_WRITE</strong> permission to call this resource.
	 *
	 * 'LIGHTWEIGHT' and 'ANNOTATED' are the two type of tags that can be created. The 'startPoint' can either be a ref or a 'commit'.
	 */
	async createTag(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/git/latest/projects/{projectKey}/repos/{repositorySlug}/tags"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/git/latest/projects/{projectKey}/repos/{repositorySlug}/tags"]["post"],
			MaybeOptionalInit<
				paths["/git/latest/projects/{projectKey}/repos/{repositorySlug}/tags"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/git/latest/projects/{projectKey}/repos/{repositorySlug}/tags",
			...init,
		)
	}

	/** Delete tag
	 *
	 * Deletes a tag in the specified repository.
	 *
	 * The authenticated user must have an effective <strong>REPO_WRITE</strong> permission to call this resource.
	 */
	async deleteTag(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/git/latest/projects/{projectKey}/repos/{repositorySlug}/tags/{name}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/git/latest/projects/{projectKey}/repos/{repositorySlug}/tags/{name}"]["delete"],
			MaybeOptionalInit<
				paths["/git/latest/projects/{projectKey}/repos/{repositorySlug}/tags/{name}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/git/latest/projects/{projectKey}/repos/{repositorySlug}/tags/{name}",
			...init,
		)
	}

	/** Get Code Insights annotations for a commit
	 *
	 * Get annotations for the given commit ID, filtered by any query parameters given.
	 */
	async getAnnotations_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/annotations"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/annotations"]["get"],
			MaybeOptionalInit<
				paths["/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/annotations"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/annotations",
			...init,
		)
	}

	/** Get all Code Insights reports for a commit
	 *
	 * Retrieve all reports for the given commit.
	 */
	async getReports(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports"]["get"],
			MaybeOptionalInit<
				paths["/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports",
			...init,
		)
	}

	/** Get a Code Insights report
	 *
	 * Retrieve the specified report.
	 */
	async getACodeInsightsReport(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}"]["get"],
			MaybeOptionalInit<
				paths["/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}",
			...init,
		)
	}

	/** Create a Code Insights report
	 *
	 * Create a new insight report, or replace the existing one if a report already exists for the given repository, commit, and report key. A request to replace an existing report will be rejected if the authenticated user was not the creator of the specified report.
	 *
	 * The report key should be a unique string chosen by the reporter and should be unique enough not to potentially clash with report keys from other reporters. We recommend using reverse DNS namespacing or a similar standard to ensure that collision is avoided.<h1>Report parameters</h1><table summary="Report parameters">    <tr>        <th>Parameter</th>        <th>Description</th>        <th>Required?</th>        <th>Restrictions</th>        <th>Type</th>    </tr>    <tr>        <td>title</td>        <td>A short string representing the name of the report</td>        <td>Yes</td>        <td>Max length: 450 characters (but we recommend that it is shorter so that the display is nicer)</td>        <td>String</td>    </tr>    <tr>        <td>details</td>        <td>             A string to describe the purpose of the report. This string may contain             escaped newlines and if it does it will display the content accordingly.        </td>        <td>No</td>        <td>Max length: 2000 characters</td>        <td>String</td>    </tr>    <tr>        <td>result</td>        <td>Indicates whether the report is in a passed or failed state</td>        <td>No</td>        <td>One of: PASS, FAIL</td>        <td>String</td>    </tr>    <tr>        <td>data</td>        <td>An array of data fields (described below) to display information on the report</td>        <td>No</td>        <td>Maximum 6 data fields</td>        <td>Array</td>    </tr>    <tr>        <td>reporter</td>        <td>A string to describe the tool or company who created the report</td>        <td>No</td>        <td>Max length: 450 characters</td>        <td>String</td>    </tr>    <tr>        <td>link</td>        <td>A URL linking to the results of the report in an external tool.</td>        <td>No</td>        <td>Must be a valid http or https URL</td>        <td>String</td>    </tr>    <tr>        <td>logoUrl</td>        <td>A URL to the report logo. If none is provided, the default insights logo will be used.</td>        <td>No</td>        <td>Must be a valid http or https URL</td>        <td>String</td>    </tr></table><h1>Data parameters</h1>The data field on the report is an array with at most 6 data fields (JSON maps) containing information that is to be displayed on the report (see the request example).<table summary="Data parameters">    <tr>        <th>Parameter</th>        <th>Description</th>        <th>Type</th>    </tr>    <tr>        <td>title</td>        <td>A string describing what this data field represents</td>        <td>String</td>    </tr>    <tr>        <td>type</td>        <td>             The type of data contained in the value field. If not provided,             then the value will be detected as a boolean, number or string.             One of: BOOLEAN, DATE, DURATION, LINK, NUMBER, PERCENTAGE, TEXT        </td>        <td>String</td>    </tr>    <tr>        <td>value</td>        <td>            A value based on the type provided. Either a raw value             (string, number or boolean) or a map. See below.        </td>    </tr></table><table summary="Types">    <tr>        <th>Type Field</th>        <th>Value Field Type</th>        <th>Value Field Display</th>    </tr>    <tr>        <td>None/Omitted</td>        <td>Number, String or Boolean (not an array or object)</td>        <td>Plain text</td>    </tr>    <tr>        <td>BOOLEAN</td>        <td>Boolean</td>        <td>The value will be read as a JSON boolean and displayed as 'Yes' or 'No'.</td>    </tr>    <tr>        <td>DATE</td>        <td>Number</td>        <td>             The value will be read as a JSON number in the form of a Unix timestamp              (milliseconds) and will be displayed as a relative date if the date is less             than one week ago, otherwise it will be displayed as an absolute date.        </td>    </tr>    <tr>        <td>DURATION</td>        <td>Number</td>        <td>             The value will be read as a JSON number in milliseconds and             will be displayed in a human readable duration format.        </td>    </tr>    <tr>        <td>LINK</td>        <td>Object: {"linktext": "Link text here", "href": "https://link.to.annotation/in/external/tool"}</td>        <td>             The value will be read as a JSON object containing the fields "linktext"             and "href" and will be displayed as a clickable link on the report.        </td>    </tr>    <tr>        <td>NUMBER</td>        <td>Number</td>        <td>             The value will be read as a JSON number and large numbers will             be displayed in a human readable format (e.g. 14.3k).        </td>    </tr>    <tr>        <td>PERCENTAGE</td>        <td>Number (between 0 and 100)</td>        <td>             The value will be read as a JSON number between 0 and 100              and will be displayed with a percentage sign.        </td>    </tr>    <tr>        <td>TEXT</td>        <td>String</td>        <td>The value will be read as a JSON string and will be displayed as-is</td>    </tr></table>
	 */
	async setACodeInsightsReport(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}"]["put"],
			MaybeOptionalInit<
				paths["/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}",
			...init,
		)
	}

	/** Delete a Code Insights report
	 *
	 * Delete a report for the given commit. Also deletes any annotations associated with this report.
	 */
	async deleteACodeInsightsReport(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}"]["delete"],
			MaybeOptionalInit<
				paths["/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}",
			...init,
		)
	}

	/** Get Code Insights annotations for a report
	 *
	 * Retrieve the specified report's annotations.
	 */
	async getAnnotations(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}/annotations"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}/annotations"]["get"],
			MaybeOptionalInit<
				paths["/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}/annotations"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}/annotations",
			...init,
		)
	}

	/** Add Code Insights annotations
	 *
	 * Add annotations to the given report. The request should be a JSON object mapping the string "annotations" to an array of maps containing the annotation data, as described below. See also the example request.
	 *
	 * A few things to note:- Annotations are an extension of a report, so a report must first exist in order to post annotations.   Annotations are posted separately from the report, and can be posted in bulk using this endpoint.
	 * - Only the annotations that are on lines changed in the unified diff will be displayed. This means it is  likely not all annotations posted will be displayed on the pull request  It also means that if the user is viewing a side-by-side diff,  commit diff or iterative review diff they will not be able to view the annotations.
	 * - A report cannot have more than 1000 annotations by default, however this property is congurable at an  instance level. If the request would result in more than the maximum number of annotations being stored  then the entire request is rejected and no new annotations are stored.
	 * - There is no de-duplication of annotations on Bitbucket so be sure that reruns of builds will first  delete the report and annotations before creating them.
	 *
	 * # Annotation parameters
	 *
	 * |Parameter|Description|Required?|Restrictions|Type|
	 * |--- |--- |--- |--- |--- |
	 * |path|The path of the file on which this annotation should be placed. This is the path of the filerelative to the git repository. If no path is provided, then it will appear in the overview modalon all pull requests where the tip of the branch is the given commit, regardless of which files weremodified.|No||String|
	 * |line|The line number that the annotation should belong to. If no line number is provided, then it willdefault to 0 and in a pull request it will appear at the top of the file specified by the path field.|No|Non-negative integer|Integer|
	 * |message|The message to display to users|Yes|The maximum length accepted is 2000 characters, however the user interface may truncate this valuefor display purposes. We recommend that the message is short and succinct, with further detailsavailable to the user if needed on the page linked to by the the annotation link.|String|
	 * |severity|The severity of the annotation|Yes|One of: LOW, MEDIUM, HIGH|String|
	 * |link|An http or https URL representing the location of the annotation in the external tool|No||String|
	 * |type|The type of annotation posted|No|One of: VULNERABILITY, CODE_SMELL, BUG|String|
	 * |externalId|If the caller requires a link to get or modify this annotation, then an ID must be provided. It isnot used or required by Bitbucket, but only by the annotation creator for updating or deleting thisspecific annotation.|No|A string value shorter than 450 characters|String|
	 */
	async addAnnotations(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}/annotations"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}/annotations"]["post"],
			MaybeOptionalInit<
				paths["/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}/annotations"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}/annotations",
			...init,
		)
	}

	/** Delete Code Insights annotations
	 *
	 * Delete annotations for a given report that match the given external IDs, or all annotations if no external IDs are provided.
	 */
	async deleteAnnotations(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}/annotations"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}/annotations"]["delete"],
			MaybeOptionalInit<
				paths["/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}/annotations"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}/annotations",
			...init,
		)
	}

	/** Create or replace a Code Insights annotation
	 *
	 * Create an annotation with the given external ID, or replace it if it already exists. A request to replace an existing annotation will be rejected if the authenticated user was not the creator of the specified report.
	 */
	async setAnnotation(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}/annotations/{externalId}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}/annotations/{externalId}"]["put"],
			MaybeOptionalInit<
				paths["/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}/annotations/{externalId}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}/annotations/{externalId}",
			...init,
		)
	}

	/** Get farm nodes
	 *
	 * Retrieves the list of farm nodes in this cluster
	 */
	async getFarmNodes(
		...init: InitParam<
			MaybeOptionalInit<paths["/mirroring/latest/farmNodes"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/farmNodes"]["get"],
			MaybeOptionalInit<paths["/mirroring/latest/farmNodes"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request("get", "/mirroring/latest/farmNodes", ...init)
	}

	/** Get clone URLs
	 *
	 * Retrieves all available clone urls for the specified repository.
	 */
	async getMirroredRepository(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/mirroring/latest/mirrorRepos/{externalRepositoryId}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/mirrorRepos/{externalRepositoryId}"]["get"],
			MaybeOptionalInit<
				paths["/mirroring/latest/mirrorRepos/{externalRepositoryId}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/mirroring/latest/mirrorRepos/{externalRepositoryId}",
			...init,
		)
	}

	/** Get synchronization progress state
	 *
	 *  Retrieves synchronization progress state.If there's no progress to report, this resource will return <pre><code> {"discovering":false,"syncedRepos":0,"totalRepos":0}</code></pre> If there are repositories in the process of synchronizing, but the precise number hasn't been discovered yet, this resource will return: <pre><code> {"discovering":true,"syncedRepos":3,"totalRepos":100}</code></pre> If there is progress to report and the total number of repositories is known, this resource will return: <pre> <code> {"discovering":false,"syncedRepos":242,"totalRepos":1071}</code> </pre>
	 */
	async getSynchronizationProgress(
		...init: InitParam<
			MaybeOptionalInit<paths["/mirroring/latest/progress"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/progress"]["get"],
			MaybeOptionalInit<paths["/mirroring/latest/progress"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request("get", "/mirroring/latest/progress", ...init)
	}

	/** Get out-of-sync repositories
	 *
	 * Retrieves a list of repository IDs which have not synced on the mirror node for at least the threshold time limit after the content was changed in the corresponding upstream repositories. The threshold time limit is defined by a configuration property <code>plugin.mirroring.repository.diagnostics.sync.tolerance</code>. The detection of out of sync repositories is dependent on the timing of a scheduled job which is controlled by a configuration property <code>plugin.mirroring.synchronization.interval</code> which means in worst case it can take upto <code>plugin.mirroring.repository.diagnostics.sync.tolerance</code> + <code>plugin.mirroring.synchronization.interval</code> time to detect an out-of-sync repository.<p>To use this API, a configuration property <code>plugin.mirroring.repository.diagnostics.sync.enabled</code> has to be set to <code>true</code> as this feature is disabled by default.
	 */
	async getOutOfSyncRepositories(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/mirroring/latest/supportInfo/out-of-sync-repos/content"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/supportInfo/out-of-sync-repos/content"]["get"],
			MaybeOptionalInit<
				paths["/mirroring/latest/supportInfo/out-of-sync-repos/content"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/mirroring/latest/supportInfo/out-of-sync-repos/content",
			...init,
		)
	}

	/** Get the repository lock owner for the syncing process
	 *
	 * Retrieves the information about the process owning the sync lock for this repository. The process owning the lock could be running on any of the nodes in the mirror farm
	 */
	async getRepositoryLockOwner(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/mirroring/latest/supportInfo/projects/{projectKey}/repos/{repositorySlug}/repo-lock-owner"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/supportInfo/projects/{projectKey}/repos/{repositorySlug}/repo-lock-owner"]["get"],
			MaybeOptionalInit<
				paths["/mirroring/latest/supportInfo/projects/{projectKey}/repos/{repositorySlug}/repo-lock-owner"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/mirroring/latest/supportInfo/projects/{projectKey}/repos/{repositorySlug}/repo-lock-owner",
			...init,
		)
	}

	/** Gets information about the mirrored repository
	 *
	 * Retrieves information about an external repository mirrored by the mirror server. Particularly the local ID & external ID of the repository
	 */
	async getRepoSyncStatus_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/mirroring/latest/supportInfo/projects/{projectKey}/repos/{repositorySlug}/repoSyncStatus"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/supportInfo/projects/{projectKey}/repos/{repositorySlug}/repoSyncStatus"]["get"],
			MaybeOptionalInit<
				paths["/mirroring/latest/supportInfo/projects/{projectKey}/repos/{repositorySlug}/repoSyncStatus"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/mirroring/latest/supportInfo/projects/{projectKey}/repos/{repositorySlug}/repoSyncStatus",
			...init,
		)
	}

	/** Get items in ref changes queue
	 *
	 * Retrieves a list of up to <code>plugin.mirroring.farm.max.ref.change.queue.dump.size</code> items currently in the ref changes queue. The ref changes queue is an internal component of every mirror farm, and is shared between all nodes. When the contents of an upstream repository changes, an item is added to this queue so that the mirror farm nodes know to synchronize. The mirror farm constantly polls and removes items from this queue for processing, so it is empty most of the time.
	 */
	async getRefChangesQueue(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/mirroring/latest/supportInfo/refChangesQueue"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/supportInfo/refChangesQueue"]["get"],
			MaybeOptionalInit<
				paths["/mirroring/latest/supportInfo/refChangesQueue"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/mirroring/latest/supportInfo/refChangesQueue",
			...init,
		)
	}

	/** Get total number of items in ref changes queue
	 *
	 * Retrieves the total number of items currently in the ref changes queue
	 */
	async getRefChangesQueueCount(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/mirroring/latest/supportInfo/refChangesQueue/count"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/supportInfo/refChangesQueue/count"]["get"],
			MaybeOptionalInit<
				paths["/mirroring/latest/supportInfo/refChangesQueue/count"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/mirroring/latest/supportInfo/refChangesQueue/count",
			...init,
		)
	}

	/** Get all the repository lock owners for the syncing process
	 *
	 * Retrieves the information about all the processes from the all the nodes in the mirror farm owning sync lock for any repository
	 */
	async getRepositoryLockOwners(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/mirroring/latest/supportInfo/repo-lock-owners"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/supportInfo/repo-lock-owners"]["get"],
			MaybeOptionalInit<
				paths["/mirroring/latest/supportInfo/repo-lock-owners"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/mirroring/latest/supportInfo/repo-lock-owners",
			...init,
		)
	}

	/** Get sync status of repositories
	 *
	 * Retrieves a page of sync statuses of the repositories on this mirror node
	 */
	async getRepoSyncStatus(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/mirroring/latest/supportInfo/repoSyncStatus"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/supportInfo/repoSyncStatus"]["get"],
			MaybeOptionalInit<
				paths["/mirroring/latest/supportInfo/repoSyncStatus"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/mirroring/latest/supportInfo/repoSyncStatus",
			...init,
		)
	}

	/** Get upstream settings
	 *
	 * Retrieves upstream settings
	 */
	async getMirrorSettings(
		...init: InitParam<
			MaybeOptionalInit<paths["/mirroring/latest/syncSettings"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/syncSettings"]["get"],
			MaybeOptionalInit<paths["/mirroring/latest/syncSettings"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/mirroring/latest/syncSettings",
			...init,
		)
	}

	/** Update upstream settings
	 *
	 * Sets the settings for the specified upstream
	 */
	async setMirrorSettings(
		...init: InitParam<
			MaybeOptionalInit<paths["/mirroring/latest/syncSettings"], "put">
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/syncSettings"]["put"],
			MaybeOptionalInit<paths["/mirroring/latest/syncSettings"], "put">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/mirroring/latest/syncSettings",
			...init,
		)
	}

	/** Get mirror mode
	 *
	 * Gets the current mirror mode
	 */
	async getMirrorMode(
		...init: InitParam<
			MaybeOptionalInit<paths["/mirroring/latest/syncSettings/mode"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/syncSettings/mode"]["get"],
			MaybeOptionalInit<paths["/mirroring/latest/syncSettings/mode"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/mirroring/latest/syncSettings/mode",
			...init,
		)
	}

	/** Update mirror mode
	 *
	 * Sets the mirror mode for the specified upstream
	 */
	async setMirrorMode(
		...init: InitParam<
			MaybeOptionalInit<paths["/mirroring/latest/syncSettings/mode"], "put">
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/syncSettings/mode"]["put"],
			MaybeOptionalInit<paths["/mirroring/latest/syncSettings/mode"], "put">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/mirroring/latest/syncSettings/mode",
			...init,
		)
	}

	/** Get mirrored project IDs
	 *
	 * Returns the IDs of the projects that the mirror is configured to mirror
	 */
	async getMirroredProjects(
		...init: InitParam<
			MaybeOptionalInit<paths["/mirroring/latest/syncSettings/projects"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/syncSettings/projects"]["get"],
			MaybeOptionalInit<
				paths["/mirroring/latest/syncSettings/projects"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/mirroring/latest/syncSettings/projects",
			...init,
		)
	}

	/** Add multiple projects to be mirrored
	 *
	 * Configures the mirror to mirror the provided projects
	 */
	async startMirroringProjects(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/mirroring/latest/syncSettings/projects"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/syncSettings/projects"]["post"],
			MaybeOptionalInit<
				paths["/mirroring/latest/syncSettings/projects"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/mirroring/latest/syncSettings/projects",
			...init,
		)
	}

	/** Add project to be mirrored
	 *
	 * Configures the mirror to mirror the provided project
	 */
	async startMirroringProject(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/mirroring/latest/syncSettings/projects/{projectId}"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/syncSettings/projects/{projectId}"]["post"],
			MaybeOptionalInit<
				paths["/mirroring/latest/syncSettings/projects/{projectId}"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/mirroring/latest/syncSettings/projects/{projectId}",
			...init,
		)
	}

	/** Stop mirroring project
	 *
	 * Configures the mirror to no longer mirror the provided project
	 */
	async stopMirroringProject(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/mirroring/latest/syncSettings/projects/{projectId}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/syncSettings/projects/{projectId}"]["delete"],
			MaybeOptionalInit<
				paths["/mirroring/latest/syncSettings/projects/{projectId}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/mirroring/latest/syncSettings/projects/{projectId}",
			...init,
		)
	}

	/** Get upstream server
	 *
	 * Retrieves upstream server details.
	 */
	async getUpstreamServer(
		...init: InitParam<
			MaybeOptionalInit<paths["/mirroring/latest/upstreamServer"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/upstreamServer"]["get"],
			MaybeOptionalInit<paths["/mirroring/latest/upstreamServer"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/mirroring/latest/upstreamServer",
			...init,
		)
	}

	/** End ZDU upgrade on mirror farm
	 *
	 * Finalizes the ZDU upgrade on the mirror farm denying heterogeneous cluster formation
	 */
	async endRollingUpgrade(
		...init: InitParam<
			MaybeOptionalInit<paths["/mirroring/latest/zdu/end"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/zdu/end"]["post"],
			MaybeOptionalInit<paths["/mirroring/latest/zdu/end"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request("post", "/mirroring/latest/zdu/end", ...init)
	}

	/** Start ZDU upgrade on mirror farm
	 *
	 * Enables upgrading of individual nodes within the cluster, allowing a heterogeneous cluster formation
	 */
	async startRollingUpgrade(
		...init: InitParam<
			MaybeOptionalInit<paths["/mirroring/latest/zdu/start"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/zdu/start"]["post"],
			MaybeOptionalInit<paths["/mirroring/latest/zdu/start"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request("post", "/mirroring/latest/zdu/start", ...init)
	}

	/** Get preferred mirror
	 *
	 * Retrieves the current user's preferred mirror server
	 */
	async getPreferredMirrorId(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/mirroring/latest/account/settings/preferred-mirror"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/account/settings/preferred-mirror"]["get"],
			MaybeOptionalInit<
				paths["/mirroring/latest/account/settings/preferred-mirror"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/mirroring/latest/account/settings/preferred-mirror",
			...init,
		)
	}

	/** Set preferred mirror
	 *
	 * Sets the mirror specified by a mirror ID as the current user's preferred mirror
	 */
	async setPreferredMirrorId(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/mirroring/latest/account/settings/preferred-mirror"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/account/settings/preferred-mirror"]["post"],
			MaybeOptionalInit<
				paths["/mirroring/latest/account/settings/preferred-mirror"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/mirroring/latest/account/settings/preferred-mirror",
			...init,
		)
	}

	/** Remove preferred mirror
	 *
	 * Removes the current user's preferred mirror
	 */
	async deletePreferredMirrorId(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/mirroring/latest/account/settings/preferred-mirror"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/account/settings/preferred-mirror"]["delete"],
			MaybeOptionalInit<
				paths["/mirroring/latest/account/settings/preferred-mirror"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/mirroring/latest/account/settings/preferred-mirror",
			...init,
		)
	}

	/** Get analytics settings from upstream
	 *
	 * Gets the analytics settings from the mirroring upstream
	 */
	async analyticsSettings(
		...init: InitParam<
			MaybeOptionalInit<paths["/mirroring/latest/analyticsSettings"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/analyticsSettings"]["get"],
			MaybeOptionalInit<paths["/mirroring/latest/analyticsSettings"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/mirroring/latest/analyticsSettings",
			...init,
		)
	}

	/** Authenticate on behalf of a user
	 *
	 * Authenticates on behalf of a user. Used by mirrors to check the credentials supplied to them by users. If successful a user and their effective permissions are returned as follows -
	 *
	 * * For SSH credentials - all the effective user permissions are returned.
	 * * For all other credentials - the highest global permission is returned along with highest repository permission if repository ID is also provided in the request.
	 *
	 * Currently only username/password, bearer token and SSH credentials are supported.
	 */
	async authenticate(
		...init: InitParam<
			MaybeOptionalInit<paths["/mirroring/latest/authenticate"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/authenticate"]["post"],
			MaybeOptionalInit<paths["/mirroring/latest/authenticate"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/mirroring/latest/authenticate",
			...init,
		)
	}

	/** Get all mirrors
	 *
	 * Returns a list of mirrors
	 */
	async listMirrors(
		...init: InitParam<
			MaybeOptionalInit<paths["/mirroring/latest/mirrorServers"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/mirrorServers"]["get"],
			MaybeOptionalInit<paths["/mirroring/latest/mirrorServers"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/mirroring/latest/mirrorServers",
			...init,
		)
	}

	/** Get mirror by ID
	 *
	 * Returns the mirror specified by a mirror ID
	 */
	async getMirror(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/mirroring/latest/mirrorServers/{mirrorId}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/mirrorServers/{mirrorId}"]["get"],
			MaybeOptionalInit<
				paths["/mirroring/latest/mirrorServers/{mirrorId}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/mirroring/latest/mirrorServers/{mirrorId}",
			...init,
		)
	}

	/** Upgrade mirror server
	 *
	 * Upgrades the mirror server in question with the provided details.This endpoint can only be called by the mirror instance or system administrators<br>Since 5.8
	 */
	async upgrade(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/mirroring/latest/mirrorServers/{mirrorId}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/mirrorServers/{mirrorId}"]["put"],
			MaybeOptionalInit<
				paths["/mirroring/latest/mirrorServers/{mirrorId}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/mirroring/latest/mirrorServers/{mirrorId}",
			...init,
		)
	}

	/** Delete mirror by ID
	 *
	 * Removes a mirror, disabling all access and notifications for the mirror server in question
	 */
	async remove(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/mirroring/latest/mirrorServers/{mirrorId}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/mirrorServers/{mirrorId}"]["delete"],
			MaybeOptionalInit<
				paths["/mirroring/latest/mirrorServers/{mirrorId}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/mirroring/latest/mirrorServers/{mirrorId}",
			...init,
		)
	}

	/** Publish RepositoryMirrorEvent
	 *
	 * Publishes a RepositoryMirrorEvent on the event queue.
	 */
	async publishEvent(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/mirroring/latest/mirrorServers/{mirrorId}/events"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/mirrorServers/{mirrorId}/events"]["post"],
			MaybeOptionalInit<
				paths["/mirroring/latest/mirrorServers/{mirrorId}/events"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/mirroring/latest/mirrorServers/{mirrorId}/events",
			...init,
		)
	}

	/** Get project
	 *
	 * Returns the requested project using its primary key ID.<br> Since 6.7
	 */
	async getProjectById(
		...init: InitParam<
			MaybeOptionalInit<paths["/mirroring/latest/projects/{projectId}"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/projects/{projectId}"]["get"],
			MaybeOptionalInit<paths["/mirroring/latest/projects/{projectId}"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/mirroring/latest/projects/{projectId}",
			...init,
		)
	}

	/** Get hashes for repositories in project
	 *
	 * Returns a page of repositories for a given project, enriched with a content hash
	 */
	async getAllReposForProject(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/mirroring/latest/projects/{projectId}/repos"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/projects/{projectId}/repos"]["get"],
			MaybeOptionalInit<
				paths["/mirroring/latest/projects/{projectId}/repos"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/mirroring/latest/projects/{projectId}/repos",
			...init,
		)
	}

	/** Get content hashes for repositories
	 *
	 * Returns a page of repositories enriched with a content hash and default branch
	 */
	async getAllContentHashes(
		...init: InitParam<
			MaybeOptionalInit<paths["/mirroring/latest/repos"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/repos"]["get"],
			MaybeOptionalInit<paths["/mirroring/latest/repos"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request("get", "/mirroring/latest/repos", ...init)
	}

	/** Get content hash for a repository
	 *
	 * Returns a repository enriched with a content hash and default branch
	 */
	async getContentHashById(
		...init: InitParam<
			MaybeOptionalInit<paths["/mirroring/latest/repos/{repoId}"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/repos/{repoId}"]["get"],
			MaybeOptionalInit<paths["/mirroring/latest/repos/{repoId}"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/mirroring/latest/repos/{repoId}",
			...init,
		)
	}

	/** Get mirrors for repository
	 *
	 * Returns a page of mirrors for a repository. This resource will return <strong>all mirrors</strong> along with authorized links to the mirror's repository REST resource. To determine if a repository is available on the mirror, the returned URL needs to be called.
	 */
	async getRepositoryMirrors(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/mirroring/latest/repos/{repoId}/mirrors"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/repos/{repoId}/mirrors"]["get"],
			MaybeOptionalInit<
				paths["/mirroring/latest/repos/{repoId}/mirrors"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/mirroring/latest/repos/{repoId}/mirrors",
			...init,
		)
	}

	/** Get mirroring requests
	 *
	 * Retrieves a mirroring request
	 */
	async listRequests(
		...init: InitParam<
			MaybeOptionalInit<paths["/mirroring/latest/requests"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/requests"]["get"],
			MaybeOptionalInit<paths["/mirroring/latest/requests"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request("get", "/mirroring/latest/requests", ...init)
	}

	/** Create a mirroring request
	 *
	 * Creates a new mirroring request
	 */
	async register(
		...init: InitParam<
			MaybeOptionalInit<paths["/mirroring/latest/requests"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/requests"]["post"],
			MaybeOptionalInit<paths["/mirroring/latest/requests"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request("post", "/mirroring/latest/requests", ...init)
	}

	/** Get a mirroring request
	 *
	 * Retrieves a mirroring request
	 */
	async getMirroringRequest(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/mirroring/latest/requests/{mirroringRequestId}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/requests/{mirroringRequestId}"]["get"],
			MaybeOptionalInit<
				paths["/mirroring/latest/requests/{mirroringRequestId}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/mirroring/latest/requests/{mirroringRequestId}",
			...init,
		)
	}

	/** Delete a mirroring request
	 *
	 * Deletes a mirroring request
	 */
	async deleteMirroringRequest(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/mirroring/latest/requests/{mirroringRequestId}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/requests/{mirroringRequestId}"]["delete"],
			MaybeOptionalInit<
				paths["/mirroring/latest/requests/{mirroringRequestId}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/mirroring/latest/requests/{mirroringRequestId}",
			...init,
		)
	}

	/** Accept a mirroring request
	 *
	 * Accepts a mirroring request
	 */
	async accept(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/mirroring/latest/requests/{mirroringRequestId}/accept"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/requests/{mirroringRequestId}/accept"]["post"],
			MaybeOptionalInit<
				paths["/mirroring/latest/requests/{mirroringRequestId}/accept"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/mirroring/latest/requests/{mirroringRequestId}/accept",
			...init,
		)
	}

	/** Reject a mirroring request
	 *
	 * Rejects a mirroring request
	 */
	async reject(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/mirroring/latest/requests/{mirroringRequestId}/reject"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/mirroring/latest/requests/{mirroringRequestId}/reject"]["post"],
			MaybeOptionalInit<
				paths["/mirroring/latest/requests/{mirroringRequestId}/reject"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/mirroring/latest/requests/{mirroringRequestId}/reject",
			...init,
		)
	}

	/** Get repository archive policy
	 *
	 * Retrieves the repository archive policy for the instance.
	 *
	 * The user must be authenticated to access this resource.
	 */
	async getRepositoryArchivePolicy(
		...init: InitParam<
			MaybeOptionalInit<paths["/policies/latest/admin/repos/archive"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/policies/latest/admin/repos/archive"]["get"],
			MaybeOptionalInit<paths["/policies/latest/admin/repos/archive"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/policies/latest/admin/repos/archive",
			...init,
		)
	}

	/** Update repository archive policy
	 *
	 * Sets the repository archive policy for the instance.
	 *
	 * The authenticated user must have <b>SYS_ADMIN</b> permission.
	 */
	async setRepositoryArchivePolicy(
		...init: InitParam<
			MaybeOptionalInit<paths["/policies/latest/admin/repos/archive"], "put">
		>
	): Promise<
		FetchResponse<
			paths["/policies/latest/admin/repos/archive"]["put"],
			MaybeOptionalInit<paths["/policies/latest/admin/repos/archive"], "put">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/policies/latest/admin/repos/archive",
			...init,
		)
	}

	/** Get repository delete policy
	 *
	 * Retrieves the repository delete policy for the instance.
	 *
	 * The user must be authenticated to access this resource.
	 */
	async getRepositoryDeletePolicy(
		...init: InitParam<
			MaybeOptionalInit<paths["/policies/latest/admin/repos/delete"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/policies/latest/admin/repos/delete"]["get"],
			MaybeOptionalInit<paths["/policies/latest/admin/repos/delete"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/policies/latest/admin/repos/delete",
			...init,
		)
	}

	/** Update the repository delete policy
	 *
	 * Sets the repository delete policy for the instance.
	 *
	 * The authenticated user must have <b>SYS_ADMIN</b> permission.
	 */
	async setRepositoryDeletePolicy(
		...init: InitParam<
			MaybeOptionalInit<paths["/policies/latest/admin/repos/delete"], "put">
		>
	): Promise<
		FetchResponse<
			paths["/policies/latest/admin/repos/delete"]["put"],
			MaybeOptionalInit<paths["/policies/latest/admin/repos/delete"], "put">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/policies/latest/admin/repos/delete",
			...init,
		)
	}

	/** Get synchronization status
	 *
	 * Retrieves the synchronization status for the specified repository. In addition to listing refs which cannot be synchronized, if any, the status also provides the timestamp for the most recent synchronization and indicates whether synchronization is available and enabled. If "?at" is specified in the URL, the synchronization status for the specified ref is returned, rather than the complete repository status.
	 *
	 * The authenticated user must have <b>REPO_READ</b> permission for the repository, or it must be public if the request is anonymous. Additionally, after synchronization is enabled for a repository, meaning synchronization was available at that time, permission changes and other actions can cause it to become unavailable. Even when synchronization is enabled, if it is no longer available for the repository it will not be performed.
	 */
	async getStatus(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/sync/latest/projects/{projectKey}/repos/{repositorySlug}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/sync/latest/projects/{projectKey}/repos/{repositorySlug}"]["get"],
			MaybeOptionalInit<
				paths["/sync/latest/projects/{projectKey}/repos/{repositorySlug}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/sync/latest/projects/{projectKey}/repos/{repositorySlug}",
			...init,
		)
	}

	/** Disable synchronization
	 *
	 * Enables or disables synchronization for the specified repository. When synchronization is enabled, branches within the repository are immediately synchronized and the status is updated with the outcome. That initial synchronization is performed before the REST request returns, allowing it to return the updated status.
	 *
	 * The authenticated user must have <b>REPO_ADMIN</b> permission for the specified repository. Anonymous users cannot manage synchronization, even on public repositories. Additionally, synchronization must be available for the specified repository. Synchronization is only available if:
	 *
	 * - The repository is a fork, since its origin is used as upstream
	 * - The owning user still has access to the fork's origin,  if the repository is a <i>personalfork</i>
	 */
	async setEnabled(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/sync/latest/projects/{projectKey}/repos/{repositorySlug}"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/sync/latest/projects/{projectKey}/repos/{repositorySlug}"]["post"],
			MaybeOptionalInit<
				paths["/sync/latest/projects/{projectKey}/repos/{repositorySlug}"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/sync/latest/projects/{projectKey}/repos/{repositorySlug}",
			...init,
		)
	}

	/** Manual synchronization
	 *
	 * Allows developers to apply a manual operation to bring a ref back in sync with upstream when it becomes out of sync due to conflicting changes. The following actions are supported:
	 *
	 * - <tt>MERGE</tt>: Merges in commits from the upstream ref. After applying this action, the   synchronized ref will be <tt>AHEAD</tt> (as it still includes commits that do not exist   upstream.
	 *    - This action is only supported for <tt>DIVERGED</tt> refs
	 *    - If a "commitMessage" is provided in the context, it will be used on the merge commit.      Otherwise a default message is used.
	 * - <tt>DISCARD</tt>: <i>Throws away</i> local changes in favour of those made upstream. This is a   <i>destructive</i> operation where commits in the local repository are lost.
	 *    - No context entries are supported for this action
	 *    - If the upstream ref has been deleted, the local ref is deleted as well
	 *    - Otherwise, the local ref is updated to reference the same commit as upstream, even if      the update is not fast-forward (similar to a forced push)
	 *
	 *
	 * The authenticated user must have <b>REPO_WRITE</b> permission for the specified repository. Anonymous users cannot synchronize refs, even on public repositories. Additionally, synchronization must be <i>enabled</i> and <i>available</i> for the specified repository.
	 */
	async synchronize(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/sync/latest/projects/{projectKey}/repos/{repositorySlug}/synchronize"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/sync/latest/projects/{projectKey}/repos/{repositorySlug}/synchronize"]["post"],
			MaybeOptionalInit<
				paths["/sync/latest/projects/{projectKey}/repos/{repositorySlug}/synchronize"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/sync/latest/projects/{projectKey}/repos/{repositorySlug}/synchronize",
			...init,
		)
	}

	/** Get all GPG keys
	 *
	 * Find all the keys for the currently authenticated user. Optionally, users with ADMIN and higher permissions may choose to specify the <code>user</code> parameter to retrieve GPG keys for another user.
	 *
	 * Only authenticated users may call this endpoint.
	 */
	async getKeysForUser(
		...init: InitParam<MaybeOptionalInit<paths["/gpg/latest/keys"], "get">>
	): Promise<
		FetchResponse<
			paths["/gpg/latest/keys"]["get"],
			MaybeOptionalInit<paths["/gpg/latest/keys"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request("get", "/gpg/latest/keys", ...init)
	}

	/** Create a GPG key
	 *
	 * Add a GPG key to the authenticated user's account. Optionally, users with ADMIN and higher permissions may choose to specify the <code>user</code> parameter to add a GPG key for another user.
	 *
	 * Only authenticated users may call this endpoint.
	 */
	async addKey(
		...init: InitParam<MaybeOptionalInit<paths["/gpg/latest/keys"], "post">>
	): Promise<
		FetchResponse<
			paths["/gpg/latest/keys"]["post"],
			MaybeOptionalInit<paths["/gpg/latest/keys"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request("post", "/gpg/latest/keys", ...init)
	}

	/** Delete all GPG keys for user
	 *
	 * Delete all GPG keys for a supplied user.
	 */
	async deleteForUser(
		...init: InitParam<MaybeOptionalInit<paths["/gpg/latest/keys"], "delete">>
	): Promise<
		FetchResponse<
			paths["/gpg/latest/keys"]["delete"],
			MaybeOptionalInit<paths["/gpg/latest/keys"], "delete">,
			"application/json"
		>
	> {
		return this.openapi.request("delete", "/gpg/latest/keys", ...init)
	}

	/** Delete a GPG key
	 *
	 * Delete the GPG key with the specified ID or Key Fingerprint.
	 */
	async deleteKey(
		...init: InitParam<
			MaybeOptionalInit<paths["/gpg/latest/keys/{fingerprintOrId}"], "delete">
		>
	): Promise<
		FetchResponse<
			paths["/gpg/latest/keys/{fingerprintOrId}"]["delete"],
			MaybeOptionalInit<paths["/gpg/latest/keys/{fingerprintOrId}"], "delete">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/gpg/latest/keys/{fingerprintOrId}",
			...init,
		)
	}

	/** Create default reviewer
	 *
	 * Create a default reviewer pull request condition for the given project.
	 */
	async createPullRequestCondition(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/default-reviewers/latest/projects/{projectKey}/condition"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/default-reviewers/latest/projects/{projectKey}/condition"]["post"],
			MaybeOptionalInit<
				paths["/default-reviewers/latest/projects/{projectKey}/condition"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/default-reviewers/latest/projects/{projectKey}/condition",
			...init,
		)
	}

	/** Update the default reviewer
	 *
	 * Update the default reviewer pull request condition for the given ID.
	 */
	async updatePullRequestCondition(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/default-reviewers/latest/projects/{projectKey}/condition/{id}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/default-reviewers/latest/projects/{projectKey}/condition/{id}"]["put"],
			MaybeOptionalInit<
				paths["/default-reviewers/latest/projects/{projectKey}/condition/{id}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/default-reviewers/latest/projects/{projectKey}/condition/{id}",
			...init,
		)
	}

	/** Remove default reviewer
	 *
	 * Delete the default reviewer pull request condition associated with the given ID.
	 */
	async deletePullRequestCondition(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/default-reviewers/latest/projects/{projectKey}/condition/{id}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/default-reviewers/latest/projects/{projectKey}/condition/{id}"]["delete"],
			MaybeOptionalInit<
				paths["/default-reviewers/latest/projects/{projectKey}/condition/{id}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/default-reviewers/latest/projects/{projectKey}/condition/{id}",
			...init,
		)
	}

	/** Get default reviewers
	 *
	 * Return a page of default reviewer pull request conditions that have been configured for this project.
	 */
	async getPullRequestConditions(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/default-reviewers/latest/projects/{projectKey}/conditions"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/default-reviewers/latest/projects/{projectKey}/conditions"]["get"],
			MaybeOptionalInit<
				paths["/default-reviewers/latest/projects/{projectKey}/conditions"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/default-reviewers/latest/projects/{projectKey}/conditions",
			...init,
		)
	}

	/** Create default reviewers condition
	 *
	 * Create a default reviewer pull request condition for the given repository.
	 */
	async createPullRequestCondition_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/condition"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/condition"]["post"],
			MaybeOptionalInit<
				paths["/default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/condition"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/condition",
			...init,
		)
	}

	/** Update a default reviewer condition
	 *
	 * Update the default reviewer pull request condition for the given ID.
	 */
	async updatePullRequestCondition_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/condition/{id}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/condition/{id}"]["put"],
			MaybeOptionalInit<
				paths["/default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/condition/{id}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/condition/{id}",
			...init,
		)
	}

	/** Delete a default reviewer condition
	 *
	 * Delete the default reviewer pull request condition associated with the given ID.
	 */
	async deletePullRequestCondition_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/condition/{id}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/condition/{id}"]["delete"],
			MaybeOptionalInit<
				paths["/default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/condition/{id}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/condition/{id}",
			...init,
		)
	}

	/** Get configured default reviewers
	 *
	 * Return a page of default reviewer pull request conditions that have been configured for this repository.
	 */
	async getPullRequestConditions_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/conditions"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/conditions"]["get"],
			MaybeOptionalInit<
				paths["/default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/conditions"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/conditions",
			...init,
		)
	}

	/** Get required reviewers for PR creation
	 *
	 * Return a set of users who are required reviewers for pull requests created from the given source repository and ref to the given target ref in this repository.
	 */
	async getReviewers(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/reviewers"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/reviewers"]["get"],
			MaybeOptionalInit<
				paths["/default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/reviewers"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/reviewers",
			...init,
		)
	}

	/** Search for ref restrictions
	 *
	 * Search for restrictions using the supplied parameters.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission or higher to call this resource. Only authenticated users may call this resource.
	 */
	async getRestrictions_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/branch-permissions/latest/projects/{projectKey}/repos/{repositorySlug}/restrictions"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/branch-permissions/latest/projects/{projectKey}/repos/{repositorySlug}/restrictions"]["get"],
			MaybeOptionalInit<
				paths["/branch-permissions/latest/projects/{projectKey}/repos/{repositorySlug}/restrictions"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/branch-permissions/latest/projects/{projectKey}/repos/{repositorySlug}/restrictions",
			...init,
		)
	}

	/** Create multiple ref restrictions
	 *
	 * Allows creating multiple restrictions at once.
	 */
	async createRestrictions_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/branch-permissions/latest/projects/{projectKey}/repos/{repositorySlug}/restrictions"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/branch-permissions/latest/projects/{projectKey}/repos/{repositorySlug}/restrictions"]["post"],
			MaybeOptionalInit<
				paths["/branch-permissions/latest/projects/{projectKey}/repos/{repositorySlug}/restrictions"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/branch-permissions/latest/projects/{projectKey}/repos/{repositorySlug}/restrictions",
			...init,
		)
	}

	/** Get a ref restriction
	 *
	 * Returns a restriction as specified by a restriction id.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission or higher to call this resource. Only authenticated users may call this resource.
	 */
	async getRestriction_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/branch-permissions/latest/projects/{projectKey}/repos/{repositorySlug}/restrictions/{id}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/branch-permissions/latest/projects/{projectKey}/repos/{repositorySlug}/restrictions/{id}"]["get"],
			MaybeOptionalInit<
				paths["/branch-permissions/latest/projects/{projectKey}/repos/{repositorySlug}/restrictions/{id}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/branch-permissions/latest/projects/{projectKey}/repos/{repositorySlug}/restrictions/{id}",
			...init,
		)
	}

	/** Delete a ref restriction
	 *
	 * Deletes a restriction as specified by a restriction id.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission or higher to call this resource. Only authenticated users may call this resource.
	 */
	async deleteRestriction_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/branch-permissions/latest/projects/{projectKey}/repos/{repositorySlug}/restrictions/{id}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/branch-permissions/latest/projects/{projectKey}/repos/{repositorySlug}/restrictions/{id}"]["delete"],
			MaybeOptionalInit<
				paths["/branch-permissions/latest/projects/{projectKey}/repos/{repositorySlug}/restrictions/{id}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/branch-permissions/latest/projects/{projectKey}/repos/{repositorySlug}/restrictions/{id}",
			...init,
		)
	}

	/** Search for ref restrictions
	 *
	 * Search for restrictions using the supplied parameters.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission or higher to call this resource. Only authenticated users may call this resource.
	 */
	async getRestrictions(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/branch-permissions/latest/projects/{projectKey}/restrictions"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/branch-permissions/latest/projects/{projectKey}/restrictions"]["get"],
			MaybeOptionalInit<
				paths["/branch-permissions/latest/projects/{projectKey}/restrictions"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/branch-permissions/latest/projects/{projectKey}/restrictions",
			...init,
		)
	}

	/** Create multiple ref restrictions
	 *
	 * Allows creating multiple restrictions at once.
	 */
	async createRestrictions(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/branch-permissions/latest/projects/{projectKey}/restrictions"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/branch-permissions/latest/projects/{projectKey}/restrictions"]["post"],
			MaybeOptionalInit<
				paths["/branch-permissions/latest/projects/{projectKey}/restrictions"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/branch-permissions/latest/projects/{projectKey}/restrictions",
			...init,
		)
	}

	/** Get a ref restriction
	 *
	 * Returns a restriction as specified by a restriction id.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission or higher to call this resource. Only authenticated users may call this resource.
	 */
	async getRestriction(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/branch-permissions/latest/projects/{projectKey}/restrictions/{id}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/branch-permissions/latest/projects/{projectKey}/restrictions/{id}"]["get"],
			MaybeOptionalInit<
				paths["/branch-permissions/latest/projects/{projectKey}/restrictions/{id}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/branch-permissions/latest/projects/{projectKey}/restrictions/{id}",
			...init,
		)
	}

	/** Delete a ref restriction
	 *
	 * Deletes a restriction as specified by a restriction id.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission or higher to call this resource. Only authenticated users may call this resource.
	 */
	async deleteRestriction(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/branch-permissions/latest/projects/{projectKey}/restrictions/{id}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/branch-permissions/latest/projects/{projectKey}/restrictions/{id}"]["delete"],
			MaybeOptionalInit<
				paths["/branch-permissions/latest/projects/{projectKey}/restrictions/{id}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/branch-permissions/latest/projects/{projectKey}/restrictions/{id}",
			...init,
		)
	}

	/** Get global SSH key settings
	 *
	 * Gets the global settings that enforce the maximum expiry of SSH keys and restrictions on SSH key types.
	 */
	async getGlobalSettings(
		...init: InitParam<MaybeOptionalInit<paths["/admin"], "get">>
	): Promise<
		FetchResponse<
			paths["/admin"]["get"],
			MaybeOptionalInit<paths["/admin"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request("get", "/admin", ...init)
	}

	/** Update global SSH key settings
	 *
	 * Updates the global settings that enforces the maximum expiry of SSH keys and restrictions on SSH key types.
	 */
	async updateGlobalSettings(
		...init: InitParam<MaybeOptionalInit<paths["/admin"], "put">>
	): Promise<
		FetchResponse<
			paths["/admin"]["put"],
			MaybeOptionalInit<paths["/admin"], "put">,
			"application/json"
		>
	> {
		return this.openapi.request("put", "/admin", ...init)
	}

	/** Get supported SSH key algorithms and lengths
	 *
	 * Retrieves a list of all supported SSH key algorithms and lengths.
	 */
	async getSupportedKeyTypes(
		...init: InitParam<
			MaybeOptionalInit<paths["/admin/supported-key-types"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/admin/supported-key-types"]["get"],
			MaybeOptionalInit<paths["/admin/supported-key-types"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request("get", "/admin/supported-key-types", ...init)
	}

	/** Get repository SSH keys
	 *
	 * Retrieves the access keys for the repository identified in the URL.
	 */
	async getForRepository_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh"]["get"],
			MaybeOptionalInit<
				paths["/keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh",
			...init,
		)
	}

	/** Add repository SSH key
	 *
	 * Register a new SSH key and grants access to the repository identified in the URL.
	 */
	async addForRepository(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh"]["post"],
			MaybeOptionalInit<
				paths["/keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh",
			...init,
		)
	}

	/** Get repository SSH key
	 *
	 * Retrieves the access key for the SSH key with id <code>keyId</code> on the repository identified in the URL.
	 */
	async getForRepository(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh/{keyId}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh/{keyId}"]["get"],
			MaybeOptionalInit<
				paths["/keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh/{keyId}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh/{keyId}",
			...init,
		)
	}

	/** Revoke repository SSH key
	 *
	 * Remove an existing access key for the repository identified in the URL. If the same SSH key is used as an access key for multiple projects or repositories, only the access to the repository identified in the URL will be revoked.
	 */
	async revokeForRepository(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh/{keyId}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh/{keyId}"]["delete"],
			MaybeOptionalInit<
				paths["/keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh/{keyId}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh/{keyId}",
			...init,
		)
	}

	/** Update repository SSH key permission
	 *
	 * Updates the permission granted to the specified SSH key to the repository identified in the URL.
	 */
	async updatePermission_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh/{keyId}/permission/{permission}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh/{keyId}/permission/{permission}"]["put"],
			MaybeOptionalInit<
				paths["/keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh/{keyId}/permission/{permission}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh/{keyId}/permission/{permission}",
			...init,
		)
	}

	/** Get SSH key
	 *
	 * Retrieves the access keys for the project identified in the URL.
	 */
	async getSshKeysForProject(
		...init: InitParam<
			MaybeOptionalInit<paths["/keys/latest/projects/{projectKey}/ssh"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/keys/latest/projects/{projectKey}/ssh"]["get"],
			MaybeOptionalInit<paths["/keys/latest/projects/{projectKey}/ssh"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/keys/latest/projects/{projectKey}/ssh",
			...init,
		)
	}

	/** Add project SSH key
	 *
	 * Register a new SSH key and grants access to the project identified in the URL.
	 */
	async addForProject(
		...init: InitParam<
			MaybeOptionalInit<paths["/keys/latest/projects/{projectKey}/ssh"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/keys/latest/projects/{projectKey}/ssh"]["post"],
			MaybeOptionalInit<
				paths["/keys/latest/projects/{projectKey}/ssh"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/keys/latest/projects/{projectKey}/ssh",
			...init,
		)
	}

	/** Get project SSH key
	 *
	 * Retrieves the access key for the SSH key with id <code>keyId</code> on the project identified in the URL.
	 */
	async getForProject(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/keys/latest/projects/{projectKey}/ssh/{keyId}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/keys/latest/projects/{projectKey}/ssh/{keyId}"]["get"],
			MaybeOptionalInit<
				paths["/keys/latest/projects/{projectKey}/ssh/{keyId}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/keys/latest/projects/{projectKey}/ssh/{keyId}",
			...init,
		)
	}

	/** Revoke project SSH key
	 *
	 * Remove an existing access key for the project identified in the URL. If the same SSH key is used as an access key for multiple projects or repositories, only the access to the project identified in the URL will be revoked.
	 */
	async revokeForProject(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/keys/latest/projects/{projectKey}/ssh/{keyId}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/keys/latest/projects/{projectKey}/ssh/{keyId}"]["delete"],
			MaybeOptionalInit<
				paths["/keys/latest/projects/{projectKey}/ssh/{keyId}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/keys/latest/projects/{projectKey}/ssh/{keyId}",
			...init,
		)
	}

	/** Update project SSH key permission
	 *
	 * Updates the permission granted to the specified SSH key to the project identified in the URL.
	 */
	async updatePermission(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/keys/latest/projects/{projectKey}/ssh/{keyId}/permission/{permission}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/keys/latest/projects/{projectKey}/ssh/{keyId}/permission/{permission}"]["put"],
			MaybeOptionalInit<
				paths["/keys/latest/projects/{projectKey}/ssh/{keyId}/permission/{permission}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/keys/latest/projects/{projectKey}/ssh/{keyId}/permission/{permission}",
			...init,
		)
	}

	/** Revoke project SSH key
	 *
	 * Remove an existing access key for the projects and repositories in the submitted entity. If the same SSH key is used as an access key for multiple projects or repositories not supplied, only the access to the projects or repositories identified will be revoked.
	 */
	async revokeMany(
		...init: InitParam<
			MaybeOptionalInit<paths["/keys/latest/ssh/{keyId}"], "delete">
		>
	): Promise<
		FetchResponse<
			paths["/keys/latest/ssh/{keyId}"]["delete"],
			MaybeOptionalInit<paths["/keys/latest/ssh/{keyId}"], "delete">,
			"application/json"
		>
	> {
		return this.openapi.request("delete", "/keys/latest/ssh/{keyId}", ...init)
	}

	/** Get project SSH keys
	 *
	 * Retrieves all project-related access keys for the SSH key with id <code>keyId</code>. If the current user is not an admin any of the projects the key provides access to, none are returned.
	 */
	async getForProjects(
		...init: InitParam<
			MaybeOptionalInit<paths["/keys/latest/ssh/{keyId}/projects"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/keys/latest/ssh/{keyId}/projects"]["get"],
			MaybeOptionalInit<paths["/keys/latest/ssh/{keyId}/projects"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/keys/latest/ssh/{keyId}/projects",
			...init,
		)
	}

	/** Get repository SSH key
	 *
	 * Retrieves all repository-related access keys for the SSH key with id <code>keyId</code>. If the current user is not an admin of any of the projects the key provides access to, none are returned.
	 */
	async getForRepositories(
		...init: InitParam<
			MaybeOptionalInit<paths["/keys/latest/ssh/{keyId}/repos"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/keys/latest/ssh/{keyId}/repos"]["get"],
			MaybeOptionalInit<paths["/keys/latest/ssh/{keyId}/repos"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/keys/latest/ssh/{keyId}/repos",
			...init,
		)
	}

	/** Get SSH keys for user
	 *
	 * Retrieve a page of SSH keys.
	 */
	async getSshKeys(
		...init: InitParam<MaybeOptionalInit<paths["/ssh/latest/keys"], "get">>
	): Promise<
		FetchResponse<
			paths["/ssh/latest/keys"]["get"],
			MaybeOptionalInit<paths["/ssh/latest/keys"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request("get", "/ssh/latest/keys", ...init)
	}

	/** Add SSH key for user
	 *
	 * Add a new SSH key to a supplied user.
	 */
	async addSshKey(
		...init: InitParam<MaybeOptionalInit<paths["/ssh/latest/keys"], "post">>
	): Promise<
		FetchResponse<
			paths["/ssh/latest/keys"]["post"],
			MaybeOptionalInit<paths["/ssh/latest/keys"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request("post", "/ssh/latest/keys", ...init)
	}

	/** Delete all user SSH key
	 *
	 * Delete all SSH keys for a supplied user.
	 */
	async deleteSshKeys(
		...init: InitParam<MaybeOptionalInit<paths["/ssh/latest/keys"], "delete">>
	): Promise<
		FetchResponse<
			paths["/ssh/latest/keys"]["delete"],
			MaybeOptionalInit<paths["/ssh/latest/keys"], "delete">,
			"application/json"
		>
	> {
		return this.openapi.request("delete", "/ssh/latest/keys", ...init)
	}

	/** Get SSH key for user by keyId
	 *
	 * Retrieve an SSH key by keyId
	 *
	 * The authenticated user must have <strong>ADMIN</strong> permission or higher to call this resource.
	 */
	async getSshKey(
		...init: InitParam<
			MaybeOptionalInit<paths["/ssh/latest/keys/{keyId}"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/ssh/latest/keys/{keyId}"]["get"],
			MaybeOptionalInit<paths["/ssh/latest/keys/{keyId}"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request("get", "/ssh/latest/keys/{keyId}", ...init)
	}

	/** Remove SSH key
	 *
	 * Delete an SSH key.
	 *
	 * The authenticated user must have <strong>ADMIN</strong> permission or higher to call this resource.
	 */
	async deleteSshKey(
		...init: InitParam<
			MaybeOptionalInit<paths["/ssh/latest/keys/{keyId}"], "delete">
		>
	): Promise<
		FetchResponse<
			paths["/ssh/latest/keys/{keyId}"]["delete"],
			MaybeOptionalInit<paths["/ssh/latest/keys/{keyId}"], "delete">,
			"application/json"
		>
	> {
		return this.openapi.request("delete", "/ssh/latest/keys/{keyId}", ...init)
	}

	/** Get SSH settings
	 *
	 * Gets the SSH settings from the upstream.
	 */
	async sshSettings(
		...init: InitParam<MaybeOptionalInit<paths["/ssh/latest/settings"], "get">>
	): Promise<
		FetchResponse<
			paths["/ssh/latest/settings"]["get"],
			MaybeOptionalInit<paths["/ssh/latest/settings"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request("get", "/ssh/latest/settings", ...init)
	}

	/** Get announcement banner
	 *
	 * Gets the announcement banner, if one exists and is available to the user
	 */
	async getBanner(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/banner"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/banner"]["get"],
			MaybeOptionalInit<paths["/api/latest/admin/banner"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request("get", "/api/latest/admin/banner", ...init)
	}

	/** Update/Set announcement banner
	 *
	 * Sets the announcement banner with the provided JSON.
	 * Only users authenticated as Admins may call this resource
	 */
	async setBanner(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/banner"], "put">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/banner"]["put"],
			MaybeOptionalInit<paths["/api/latest/admin/banner"], "put">,
			"application/json"
		>
	> {
		return this.openapi.request("put", "/api/latest/admin/banner", ...init)
	}

	/** Delete announcement banner
	 *
	 * Deletes a banner, if one is present in the database.
	 */
	async deleteBanner(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/banner"], "delete">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/banner"]["delete"],
			MaybeOptionalInit<paths["/api/latest/admin/banner"], "delete">,
			"application/json"
		>
	> {
		return this.openapi.request("delete", "/api/latest/admin/banner", ...init)
	}

	/** Get cluster node information
	 *
	 * Gets information about the nodes that currently make up the stash cluster.
	 *
	 * The authenticated user must have the <strong>SYS_ADMIN</strong> permission to call this resource.
	 */
	async getInformation(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/cluster"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/cluster"]["get"],
			MaybeOptionalInit<paths["/api/latest/admin/cluster"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request("get", "/api/latest/admin/cluster", ...init)
	}

	/** Get the default branch
	 *
	 * Retrieves the configured global default branch, which is used when creating new repositories if an explicit default branch is not specified.
	 *
	 * The user must be authenticated to call this resource.
	 */
	async getDefaultBranch(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/default-branch"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/default-branch"]["get"],
			MaybeOptionalInit<paths["/api/latest/admin/default-branch"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/admin/default-branch",
			...init,
		)
	}

	/** Update/Set default branch
	 *
	 * Configures the global default branch, which is used when creating new repositories if an explicit default branch is not specified.
	 *
	 * The authenticated user must have <strong>ADMIN</strong> permission to call this resource.
	 */
	async setDefaultBranch(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/default-branch"], "put">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/default-branch"]["put"],
			MaybeOptionalInit<paths["/api/latest/admin/default-branch"], "put">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/admin/default-branch",
			...init,
		)
	}

	/** Clear default branch
	 *
	 * Clears the global default branch, which is used when creating new repositories if an explicit default branch is not specified, if one has been configured.
	 *
	 * The authenticated user must have <strong>ADMIN</strong> permission to call this resource.
	 */
	async clearDefaultBranch(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/default-branch"], "delete">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/default-branch"]["delete"],
			MaybeOptionalInit<paths["/api/latest/admin/default-branch"], "delete">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/admin/default-branch",
			...init,
		)
	}

	/** Get the control plane PEM
	 *
	 * Obtain the control plane PEM.
	 *
	 * The authenticated user must have **SYS_ADMIN** permission.
	 */
	async getControlPlanePublicKey(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/admin/git/mesh/config/control-plane.pem"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/git/mesh/config/control-plane.pem"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/admin/git/mesh/config/control-plane.pem"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/admin/git/mesh/config/control-plane.pem",
			...init,
		)
	}

	/** Generate Mesh connectivity report
	 *
	 * Generates a connectivity report between the Bitbucket node(s) and the Mesh node(s).
	 *
	 * The authenticated user must have **SYS_ADMIN** permission.
	 */
	async connectivity(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/admin/git/mesh/diagnostics/connectivity"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/git/mesh/diagnostics/connectivity"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/admin/git/mesh/diagnostics/connectivity"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/admin/git/mesh/diagnostics/connectivity",
			...init,
		)
	}

	/** Get all registered Mesh nodes
	 *
	 * Get all the registered Mesh nodes.
	 *
	 * The authenticated user must have **SYS_ADMIN** permission.
	 */
	async getAllRegisteredMeshNodes(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/git/mesh/nodes"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/git/mesh/nodes"]["get"],
			MaybeOptionalInit<paths["/api/latest/admin/git/mesh/nodes"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/admin/git/mesh/nodes",
			...init,
		)
	}

	/** Register new Mesh node
	 *
	 * Register a new Mesh node.
	 *
	 * The authenticated user must have **SYS_ADMIN** permission.
	 */
	async registerNewMeshNode(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/git/mesh/nodes"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/git/mesh/nodes"]["post"],
			MaybeOptionalInit<paths["/api/latest/admin/git/mesh/nodes"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/admin/git/mesh/nodes",
			...init,
		)
	}

	/** Get Mesh node
	 *
	 * Get the registered Mesh node that matches the supplied ID.
	 *
	 * The authenticated user must have **SYS_ADMIN** permission.
	 */
	async getRegisteredMeshNodeById(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/git/mesh/nodes/{id}"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/git/mesh/nodes/{id}"]["get"],
			MaybeOptionalInit<paths["/api/latest/admin/git/mesh/nodes/{id}"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/admin/git/mesh/nodes/{id}",
			...init,
		)
	}

	/** Update Mesh node
	 *
	 * Update a Mesh node.
	 *
	 * The authenticated user must have **SYS_ADMIN** permission.
	 */
	async updateMeshNode(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/git/mesh/nodes/{id}"], "put">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/git/mesh/nodes/{id}"]["put"],
			MaybeOptionalInit<paths["/api/latest/admin/git/mesh/nodes/{id}"], "put">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/admin/git/mesh/nodes/{id}",
			...init,
		)
	}

	/** Delete Mesh node
	 *
	 * Delete a Mesh node
	 *
	 * The authenticated user must have **SYS_ADMIN** permission.
	 */
	async delete_2(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/admin/git/mesh/nodes/{id}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/git/mesh/nodes/{id}"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/admin/git/mesh/nodes/{id}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/admin/git/mesh/nodes/{id}",
			...init,
		)
	}

	/** Get support zips for all Mesh nodes
	 *
	 * Get the support zips for all the Mesh nodes.
	 *
	 * The authenticated user must have **SYS_ADMIN** permission.
	 */
	async getSupportZips(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/git/mesh/support-zips"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/git/mesh/support-zips"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/admin/git/mesh/support-zips"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/admin/git/mesh/support-zips",
			...init,
		)
	}

	/** Get support zip for node
	 *
	 * Get the support zip for the Mesh node that matches the specified ID.
	 *
	 * The authenticated user must have **SYS_ADMIN** permission.
	 */
	async getSupportZip(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/admin/git/mesh/support-zips/{id}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/git/mesh/support-zips/{id}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/admin/git/mesh/support-zips/{id}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/admin/git/mesh/support-zips/{id}",
			...init,
		)
	}

	/** Get groups
	 *
	 * Retrieve a page of groups.
	 *
	 * The authenticated user must have <strong>LICENSED_USER</strong> permission or higher to call this resource.
	 */
	async getGroups_1(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/groups"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/groups"]["get"],
			MaybeOptionalInit<paths["/api/latest/admin/groups"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request("get", "/api/latest/admin/groups", ...init)
	}

	/** Create group
	 *
	 * Create a new group.
	 *
	 * The authenticated user must have <strong>ADMIN</strong> permission or higher to call this resource.
	 */
	async createGroup(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/groups"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/groups"]["post"],
			MaybeOptionalInit<paths["/api/latest/admin/groups"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request("post", "/api/latest/admin/groups", ...init)
	}

	/** Remove group
	 *
	 * Deletes the specified group, removing them from the system. This also removes any permissions that may have been granted to the group.
	 *
	 * A user may not delete the last group that is granting them administrative permissions, or a group with greater permissions than themselves.
	 *
	 * The authenticated user must have the <strong>ADMIN</strong> permission to call this resource.
	 */
	async deleteGroup(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/groups"], "delete">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/groups"]["delete"],
			MaybeOptionalInit<paths["/api/latest/admin/groups"], "delete">,
			"application/json"
		>
	> {
		return this.openapi.request("delete", "/api/latest/admin/groups", ...init)
	}

	/** Add user to group
	 *
	 * <strong>Deprecated since 2.10</strong>. Use /rest/users/add-groups instead.
	 *
	 * Add a user to a group.
	 *
	 * In the request entity, the <em>context</em> attribute is the group and the <em>itemName</em> is the user.
	 *
	 * The authenticated user must have the <strong>ADMIN</strong> permission to call this resource.
	 */
	async addUserToGroup(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/groups/add-user"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/groups/add-user"]["post"],
			MaybeOptionalInit<paths["/api/latest/admin/groups/add-user"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/admin/groups/add-user",
			...init,
		)
	}

	/** Add multiple users to group
	 *
	 * Add multiple users to a group.
	 *
	 * The authenticated user must have the <strong>ADMIN</strong> permission to call this resource.
	 */
	async addUsersToGroup(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/groups/add-users"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/groups/add-users"]["post"],
			MaybeOptionalInit<paths["/api/latest/admin/groups/add-users"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/admin/groups/add-users",
			...init,
		)
	}

	/** Get group members
	 *
	 * Retrieves a list of users that are members of a specified group. <p>The authenticated user must have the <strong>LICENSED_USER</strong> permission to call this resource.
	 */
	async findUsersInGroup(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/groups/more-members"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/groups/more-members"]["get"],
			MaybeOptionalInit<paths["/api/latest/admin/groups/more-members"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/admin/groups/more-members",
			...init,
		)
	}

	/** Get members not in group
	 *
	 * Retrieves a list of users that are <em>not</em> members of a specified group. <p>The authenticated user must have the <strong>LICENSED_USER</strong> permission to call this resource.
	 */
	async findUsersNotInGroup(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/admin/groups/more-non-members"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/groups/more-non-members"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/admin/groups/more-non-members"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/admin/groups/more-non-members",
			...init,
		)
	}

	/** Remove user from group
	 *
	 * <strong>Deprecated since 2.10</strong>. Use /rest/users/remove-groups instead.
	 *
	 * Remove a user from a group.
	 *
	 * The authenticated user must have the <strong>ADMIN</strong> permission to call this resource.
	 *
	 * In the request entity, the <em>context</em> attribute is the group and the <em>itemName</em> is the user.
	 */
	async removeUserFromGroup(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/groups/remove-user"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/groups/remove-user"]["post"],
			MaybeOptionalInit<paths["/api/latest/admin/groups/remove-user"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/admin/groups/remove-user",
			...init,
		)
	}

	/** Get license details
	 *
	 * Retrieves details about the current license, as well as the current status of the system with regards to the installed license. The status includes the current number of users applied toward the license limit, as well as any status messages about the license (warnings about expiry or user counts exceeding license limits).
	 *
	 * The authenticated user must have <b>ADMIN</b> permission. Unauthenticated users, and non-administrators, are not permitted to access license details.
	 */
	async get_2(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/license"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/license"]["get"],
			MaybeOptionalInit<paths["/api/latest/admin/license"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request("get", "/api/latest/admin/license", ...init)
	}

	/** Update license
	 *
	 * Decodes the provided encoded license and sets it as the active license. If no license was provided, a 400 is returned. If the license cannot be decoded, or cannot be applied, a 409 is returned. Some possible reasons a license may not be applied include:
	 *
	 * - It is for a different product
	 * - It is already expired
	 *
	 *
	 * Otherwise, if the license is updated successfully, details for the new license are returned with a 200 response.
	 *
	 * <b>Warning</b>: It is possible to downgrade the license during update, applying a license with a lower number of permitted users. If the number of currently-licensed users exceeds the limits of the new license, pushing will be disabled until the licensed user count is brought into compliance with the new license.
	 *
	 * The authenticated user must have <b>SYS_ADMIN</b> permission. <b>ADMIN</b> users may <i>view</i> the current license details, but they may not <i>update</i> the license.
	 */
	async updateLicense(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/license"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/license"]["post"],
			MaybeOptionalInit<paths["/api/latest/admin/license"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request("post", "/api/latest/admin/license", ...init)
	}

	/** Get mail configuration
	 *
	 * Retrieves the current mail configuration.
	 *
	 * The authenticated user must have the <strong>SYS_ADMIN</strong> permission to call this resource.
	 */
	async getMailConfig(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/mail-server"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/mail-server"]["get"],
			MaybeOptionalInit<paths["/api/latest/admin/mail-server"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request("get", "/api/latest/admin/mail-server", ...init)
	}

	/** Update mail configuration
	 *
	 * Updates the mail configuration.
	 *
	 * The authenticated user must have the <strong>SYS_ADMIN</strong> permission to call this resource.
	 */
	async setMailConfig(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/mail-server"], "put">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/mail-server"]["put"],
			MaybeOptionalInit<paths["/api/latest/admin/mail-server"], "put">,
			"application/json"
		>
	> {
		return this.openapi.request("put", "/api/latest/admin/mail-server", ...init)
	}

	/** Delete mail configuration
	 *
	 * Deletes the current mail configuration.
	 *
	 * The authenticated user must have the <strong>SYS_ADMIN</strong> permission to call this resource.
	 */
	async deleteMailConfig(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/mail-server"], "delete">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/mail-server"]["delete"],
			MaybeOptionalInit<paths["/api/latest/admin/mail-server"], "delete">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/admin/mail-server",
			...init,
		)
	}

	/** Get server mail address
	 *
	 * Retrieves the server email address
	 */
	async getSenderAddress(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/admin/mail-server/sender-address"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/mail-server/sender-address"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/admin/mail-server/sender-address"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/admin/mail-server/sender-address",
			...init,
		)
	}

	/** Update server mail address
	 *
	 * Updates the server email address
	 *
	 * The authenticated user must have the <strong>ADMIN</strong> permission to call this resource.
	 */
	async setSenderAddress(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/admin/mail-server/sender-address"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/mail-server/sender-address"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/admin/mail-server/sender-address"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/admin/mail-server/sender-address",
			...init,
		)
	}

	/** Update mail configuration
	 *
	 * Clears the server email address.
	 *
	 * The authenticated user must have the <strong>ADMIN</strong> permission to call this resource.
	 */
	async clearSenderAddress(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/admin/mail-server/sender-address"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/mail-server/sender-address"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/admin/mail-server/sender-address"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/admin/mail-server/sender-address",
			...init,
		)
	}

	/** Get groups with a global permission
	 *
	 * Retrieve a page of groups that have been granted at least one global permission.
	 *
	 *
	 * The authenticated user must have <strong>ADMIN</strong> permission or higher to call this resource.
	 */
	async getGroupsWithAnyPermission(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/permissions/groups"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/permissions/groups"]["get"],
			MaybeOptionalInit<paths["/api/latest/admin/permissions/groups"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/admin/permissions/groups",
			...init,
		)
	}

	/** Update global permission for group
	 *
	 * Promote or demote a group's global permission level. Available global permissions are:
	 *
	 *
	 * - LICENSED_USER
	 * - PROJECT_CREATE
	 * - ADMIN
	 * - SYS_ADMIN
	 *
	 * See the <a href="https://confluence.atlassian.com/display/BitbucketServer/Global+permissions">Bitbucket Data Center documentation</a> for a detailed explanation of what each permission entails.
	 *
	 *
	 * The authenticated user must have:
	 *
	 *
	 * - <strong>ADMIN</strong> permission or higher; and
	 * - the permission they are attempting to grant or higher; and
	 * - greater or equal permissions than the current permission level of the group (a user may not demote the     permission level of a group with higher permissions than them)
	 *
	 *
	 * to call this resource. In addition, a user may not demote a group's permission level if their own permission
	 * level would be reduced as a result.
	 */
	async setPermissionForGroups(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/permissions/groups"], "put">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/permissions/groups"]["put"],
			MaybeOptionalInit<paths["/api/latest/admin/permissions/groups"], "put">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/admin/permissions/groups",
			...init,
		)
	}

	/** Revoke all global permissions for group
	 *
	 * Revoke all global permissions for a group.
	 *
	 *
	 *
	 * The authenticated user must have:
	 *
	 *
	 * - <strong>ADMIN</strong> permission or higher; and
	 * - greater or equal permissions than the current permission level of the group (a user may not demote the     permission level of a group with higher permissions than them)
	 *
	 *
	 * to call this resource. In addition, a user may not revoke a group's permissions if their own permission level
	 * would be reduced as a result.
	 */
	async revokePermissionsForGroup(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/permissions/groups"], "delete">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/permissions/groups"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/admin/permissions/groups"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/admin/permissions/groups",
			...init,
		)
	}

	/** Get groups with no global permission
	 *
	 * Retrieve a page of groups that have no granted global permissions.
	 *
	 *
	 * The authenticated user must have <strong>ADMIN</strong> permission or higher to call this resource.
	 */
	async getGroupsWithoutAnyPermission(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/admin/permissions/groups/none"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/permissions/groups/none"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/admin/permissions/groups/none"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/admin/permissions/groups/none",
			...init,
		)
	}

	/** Get users with a global permission
	 *
	 * Retrieve a page of users that have been granted at least one global permission.
	 *
	 *
	 * The authenticated user must have <strong>ADMIN</strong> permission or higher to call this resource.
	 */
	async getUsersWithAnyPermission(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/permissions/users"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/permissions/users"]["get"],
			MaybeOptionalInit<paths["/api/latest/admin/permissions/users"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/admin/permissions/users",
			...init,
		)
	}

	/** Update global permission for user
	 *
	 * Promote or demote the global permission level of a user. Available global permissions are:
	 *
	 *
	 * - LICENSED_USER
	 * - PROJECT_CREATE
	 * - ADMIN
	 * - SYS_ADMIN
	 *
	 *
	 * See the <a href="https://confluence.atlassian.com/display/BitbucketServer/Global+permissions">Bitbucket Data Center documentation</a> for a detailed explanation of what each permission entails.
	 *
	 *
	 * The authenticated user must have:
	 *
	 *
	 * - <strong>ADMIN</strong> permission or higher; and
	 * - the permission they are attempting to grant; and
	 * - greater or equal permissions than the current permission level of the user (a user may not demote the     permission level of a user with higher permissions than them)
	 *
	 *
	 * to call this resource. In addition, a user may not demote their own permission level.
	 */
	async setPermissionForUsers(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/permissions/users"], "put">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/permissions/users"]["put"],
			MaybeOptionalInit<paths["/api/latest/admin/permissions/users"], "put">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/admin/permissions/users",
			...init,
		)
	}

	/** Revoke all global permissions for user
	 *
	 * Revoke all global permissions for a user.
	 *
	 *
	 * The authenticated user must have:
	 *
	 *
	 * - <strong>ADMIN</strong> permission or higher; and
	 * - greater or equal permissions than the current permission level of the user (a user may not demote the     permission level of a user with higher permissions than them)
	 *
	 *
	 * to call this resource. In addition, a user may not demote their own permission level.
	 */
	async revokePermissionsForUser(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/permissions/users"], "delete">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/permissions/users"]["delete"],
			MaybeOptionalInit<paths["/api/latest/admin/permissions/users"], "delete">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/admin/permissions/users",
			...init,
		)
	}

	/** Get users with no global permission
	 *
	 * Retrieve a page of users that have no granted global permissions.
	 *
	 *
	 * The authenticated user must have <strong>ADMIN</strong> permission or higher to call this resource.
	 */
	async getUsersWithoutAnyPermission(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/admin/permissions/users/none"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/permissions/users/none"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/admin/permissions/users/none"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/admin/permissions/users/none",
			...init,
		)
	}

	/** Get merge strategies
	 *
	 * Retrieve the merge strategies available for this instance.
	 *
	 * The user must be authenticated to call this resource.
	 */
	async getMergeConfig(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/pull-requests/{scmId}"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/pull-requests/{scmId}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/admin/pull-requests/{scmId}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/admin/pull-requests/{scmId}",
			...init,
		)
	}

	/** Update merge strategies
	 *
	 * Update the pull request merge strategies for the context repository.
	 *
	 * The authenticated user must have <strong>ADMIN</strong> permission to call this resource.
	 *
	 * Only the strategies provided will be enabled, only one may be set to default
	 *
	 * The commit message template will not be updated if not provided, and will be deleted if the `commitMessageTemplate` attribute is empty, i.e: `commitMessageTemplate: {}`.
	 *
	 * An explicitly set pull request merge strategy configuration can be deleted by POSTing a document with an empty `mergeConfig` attribute. i.e:
	 * ```
	 * {
	 *     "mergeConfig": {}
	 * }
	 * ```
	 *
	 * Upon completion of this request, the effective configuration will be the default configuration.
	 */
	async setMergeConfig(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/admin/pull-requests/{scmId}"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/pull-requests/{scmId}"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/admin/pull-requests/{scmId}"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/admin/pull-requests/{scmId}",
			...init,
		)
	}

	/** Get rate limit history
	 *
	 * Retrieves the recent rate limit history for the instance.
	 *
	 * The authenticated user must have the <strong>ADMIN</strong> permission to call this resource.
	 */
	async getHistory(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/rate-limit/history"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/rate-limit/history"]["get"],
			MaybeOptionalInit<paths["/api/latest/admin/rate-limit/history"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/admin/rate-limit/history",
			...init,
		)
	}

	/** Get rate limit settings
	 *
	 * Retrieves the rate limit settings for the instance.
	 *
	 * The user must be authenticated to call this resource.
	 */
	async getSettings_2(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/rate-limit/settings"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/rate-limit/settings"]["get"],
			MaybeOptionalInit<paths["/api/latest/admin/rate-limit/settings"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/admin/rate-limit/settings",
			...init,
		)
	}

	/** Set rate limit
	 *
	 * Sets the rate limit settings for the instance.
	 *
	 * The authenticated user must have <strong>ADMIN</strong> permission to call this resource.
	 */
	async setSettings_2(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/rate-limit/settings"], "put">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/rate-limit/settings"]["put"],
			MaybeOptionalInit<paths["/api/latest/admin/rate-limit/settings"], "put">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/admin/rate-limit/settings",
			...init,
		)
	}

	/** Get rate limit settings for user
	 *
	 * Retrieves the user-specific rate limit settings for the given user.
	 *
	 * The authenticated user must have <strong>ADMIN</strong> permission to call this resource.
	 */
	async getAllRateLimitSettings(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/admin/rate-limit/settings/users"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/rate-limit/settings/users"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/admin/rate-limit/settings/users"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/admin/rate-limit/settings/users",
			...init,
		)
	}

	/** Set rate limit settings for users
	 *
	 * Sets the given rate limit settings for the given users.
	 *
	 * The authenticated user must have <strong>ADMIN</strong> permission to call this resource.
	 */
	async set_2(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/admin/rate-limit/settings/users"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/rate-limit/settings/users"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/admin/rate-limit/settings/users"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/admin/rate-limit/settings/users",
			...init,
		)
	}

	/** Get user specific rate limit settings
	 *
	 * Retrieves the user-specific rate limit settings for the given user.
	 *
	 * To call this resource, the user must be authenticated and either have <strong>ADMIN</strong> permission or be the same user as the one whose settings are requested. A user with <strong>ADMIN</strong> permission cannot get the settings of a user with <strong>SYS_ADMIN</strong> permission.
	 */
	async get_6(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/admin/rate-limit/settings/users/{userSlug}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/rate-limit/settings/users/{userSlug}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/admin/rate-limit/settings/users/{userSlug}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/admin/rate-limit/settings/users/{userSlug}",
			...init,
		)
	}

	/** Set rate limit settings for user
	 *
	 * Sets the given rate limit settings for the given user.
	 *
	 * The authenticated user must have <strong>ADMIN</strong> permission to call this resource.
	 */
	async set_3(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/admin/rate-limit/settings/users/{userSlug}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/rate-limit/settings/users/{userSlug}"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/admin/rate-limit/settings/users/{userSlug}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/admin/rate-limit/settings/users/{userSlug}",
			...init,
		)
	}

	/** Delete user specific rate limit settings
	 *
	 * Deletes the user-specific rate limit settings for the given user.
	 *
	 * The authenticated user must have <strong>ADMIN</strong> permission to call this resource.
	 */
	async delete_8(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/admin/rate-limit/settings/users/{userSlug}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/rate-limit/settings/users/{userSlug}"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/admin/rate-limit/settings/users/{userSlug}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/admin/rate-limit/settings/users/{userSlug}",
			...init,
		)
	}

	/** Get directories
	 *
	 * Retrieve a list of active directories.
	 *
	 *  The authenticated user must have the <strong>ADMIN</strong> permission to call this resource.
	 */
	async getUserDirectories(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/user-directories"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/user-directories"]["get"],
			MaybeOptionalInit<paths["/api/latest/admin/user-directories"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/admin/user-directories",
			...init,
		)
	}

	/** Get users
	 *
	 * Retrieve a page of users.
	 *
	 *  The authenticated user must have the <strong>LICENSED_USER</strong> permission to call this resource.
	 */
	async getUsers_1(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/users"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/users"]["get"],
			MaybeOptionalInit<paths["/api/latest/admin/users"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request("get", "/api/latest/admin/users", ...init)
	}

	/** Update user details
	 *
	 * Update a user's details.
	 *
	 * The authenticated user must have the <strong>ADMIN</strong> permission to call this resource.
	 */
	async updateUserDetails(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/users"], "put">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/users"]["put"],
			MaybeOptionalInit<paths["/api/latest/admin/users"], "put">,
			"application/json"
		>
	> {
		return this.openapi.request("put", "/api/latest/admin/users", ...init)
	}

	/** Create user
	 *
	 * Creates a new user from the assembled query parameters.
	 *
	 * The default group can be used to control initial permissions for new users, such as granting users the ability to login or providing read access to certain projects or repositories. If the user is not added to the default group, they may not be able to login after their account is created until explicit permissions are configured.
	 *
	 * The authenticated user must have the <strong>ADMIN</strong> permission to call this resource.
	 */
	async createUser(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/users"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/users"]["post"],
			MaybeOptionalInit<paths["/api/latest/admin/users"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request("post", "/api/latest/admin/users", ...init)
	}

	/** Remove user
	 *
	 * Deletes the specified user, removing them from the system. This also removes any permissions that may have been granted to the user.
	 *
	 * A user may not delete themselves, and a user with <strong>ADMIN</strong> permissions may not delete a user with <strong>SYS_ADMIN</strong>permissions.
	 *
	 * The authenticated user must have the <strong>ADMIN</strong> permission to call this resource.
	 */
	async deleteUser(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/users"], "delete">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/users"]["delete"],
			MaybeOptionalInit<paths["/api/latest/admin/users"], "delete">,
			"application/json"
		>
	> {
		return this.openapi.request("delete", "/api/latest/admin/users", ...init)
	}

	/** Add user to group
	 *
	 * <strong>Deprecated since 2.10</strong>. Use /rest/users/add-groups instead.
	 *
	 * Add a user to a group. This is very similar to <code>groups/add-user</code>, but with the <em>context</em> and <em>itemName</em> attributes of the supplied request entity reversed. On the face of it this may appear redundant, but it facilitates a specific UI component in the application.
	 *
	 * In the request entity, the <em>context</em> attribute is the user and the <em>itemName</em> is the group.
	 *
	 * The authenticated user must have the <strong>ADMIN</strong> permission to call this resource.
	 */
	async addGroupToUser(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/users/add-group"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/users/add-group"]["post"],
			MaybeOptionalInit<paths["/api/latest/admin/users/add-group"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/admin/users/add-group",
			...init,
		)
	}

	/** Add user to groups
	 *
	 * Add a user to one or more groups.
	 *
	 *  The authenticated user must have the <strong>ADMIN</strong> permission to call this resource.
	 */
	async addUserToGroups(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/users/add-groups"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/users/add-groups"]["post"],
			MaybeOptionalInit<paths["/api/latest/admin/users/add-groups"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/admin/users/add-groups",
			...init,
		)
	}

	/** Clear CAPTCHA for user
	 *
	 * Clears any CAPTCHA challenge that may constrain the user with the supplied username when they authenticate. Additionally any counter or metric that contributed towards the user being issued the CAPTCHA challenge (for instance too many consecutive failed logins) will also be reset.
	 *
	 * The authenticated user must have the <strong>ADMIN</strong> permission to call this resource, and may not clear the CAPTCHA of a user with greater permissions than themselves.
	 */
	async clearUserCaptchaChallenge(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/users/captcha"], "delete">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/users/captcha"]["delete"],
			MaybeOptionalInit<paths["/api/latest/admin/users/captcha"], "delete">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/admin/users/captcha",
			...init,
		)
	}

	/** Set password for user
	 *
	 * Update a user's password.
	 *
	 * The authenticated user must have the <strong>ADMIN</strong> permission to call this resource, and may not update the password of a user with greater permissions than themselves.
	 */
	async updateUserPassword(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/users/credentials"], "put">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/users/credentials"]["put"],
			MaybeOptionalInit<paths["/api/latest/admin/users/credentials"], "put">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/admin/users/credentials",
			...init,
		)
	}

	/** Check user removal
	 *
	 * Validate if a user can be erased.
	 *
	 * A username is only valid for erasure if it exists as the username of a deleted user. This endpoint will return an appropriate error response if the supplied username is invalid for erasure.
	 *
	 * This endpoint does <strong>not</strong> perform the actual user erasure, and will not modify the application in any way.
	 *
	 * The authenticated user must have the <strong>ADMIN</strong> permission to call this resource.
	 */
	async validateErasable(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/users/erasure"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/users/erasure"]["get"],
			MaybeOptionalInit<paths["/api/latest/admin/users/erasure"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/admin/users/erasure",
			...init,
		)
	}

	/** Erase user information
	 *
	 * Erases personally identifying user data for a deleted user.
	 *
	 * References in the application to the original username will be either removed or updated to a new non-identifying username. Refer to the <a href="https://confluence.atlassian.com/gdpr/bitbucket-right-to-erasure-949770560.html">support guide</a> for details about what data is and isn't erased.
	 *
	 * User erasure can only be performed on a deleted user. If the user has not been deleted first then this endpoint will return a bad request and no erasure will be performed.
	 *
	 * Erasing user data is <strong>irreversible</strong> and may lead to a degraded user experience. This method should not be used as part of a standard user deletion and cleanup process.
	 *
	 * Plugins can participate in user erasure by defining a <code>&lt;user-erasure-handler&gt;</code> module. If one or more plugin modules fail, an error summary of the failing modules is returned.
	 *
	 * The authenticated user must have the <strong>ADMIN</strong> permission to call this resource.
	 */
	async eraseUser(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/users/erasure"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/users/erasure"]["post"],
			MaybeOptionalInit<paths["/api/latest/admin/users/erasure"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/admin/users/erasure",
			...init,
		)
	}

	/** Get groups for user
	 *
	 * Retrieves a list of users that are <em>not</em> members of a specified group. <p>The authenticated user must have the <strong>LICENSED_USER</strong> permission to call this resource.
	 */
	async findGroupsForUser(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/users/more-members"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/users/more-members"]["get"],
			MaybeOptionalInit<paths["/api/latest/admin/users/more-members"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/admin/users/more-members",
			...init,
		)
	}

	/** Find other groups for user
	 *
	 * Retrieves a list of groups the specified user is <em>not</em> a member of. <p>The authenticated user must have the <strong>LICENSED_USER</strong> permission to call this resource.
	 */
	async findOtherGroupsForUser(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/admin/users/more-non-members"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/users/more-non-members"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/admin/users/more-non-members"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/admin/users/more-non-members",
			...init,
		)
	}

	/** Remove user from group
	 *
	 * Remove a user from a group. This is very similar to <code>groups/remove-user</code>, but with the <em>context</em> and <em>itemName</em> attributes of the supplied request entity reversed. On the face of it this may appear redundant, but it facilitates a specific UI component in the application.
	 *
	 * In the request entity, the <em>context</em> attribute is the user and the <em>itemName</em> is the group.
	 *
	 * The authenticated user must have the <strong>ADMIN</strong> permission to call this resource.
	 */
	async removeGroupFromUser(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/users/remove-group"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/users/remove-group"]["post"],
			MaybeOptionalInit<paths["/api/latest/admin/users/remove-group"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/admin/users/remove-group",
			...init,
		)
	}

	/** Rename user
	 *
	 * Rename a user.
	 *
	 * The authenticated user must have the <strong>ADMIN</strong> permission to call this resource.
	 */
	async renameUser(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/admin/users/rename"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/admin/users/rename"]["post"],
			MaybeOptionalInit<paths["/api/latest/admin/users/rename"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/admin/users/rename",
			...init,
		)
	}

	/** Get application properties
	 *
	 * Retrieve version information and other application properties.
	 *
	 * No authentication is required to call this resource.
	 */
	async getApplicationProperties(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/application-properties"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/application-properties"]["get"],
			MaybeOptionalInit<paths["/api/latest/application-properties"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/application-properties",
			...init,
		)
	}

	/** Get build capabilities
	 *
	 * Returns the build capabilities of this instance
	 */
	async getCapabilities(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/build/capabilities"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/build/capabilities"]["get"],
			MaybeOptionalInit<paths["/api/latest/build/capabilities"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/build/capabilities",
			...init,
		)
	}

	/** Get pull request suggestions
	 *
	 * Retrieves a page of suggestions for pull requests that the currently authenticated user may wish to raise. Such suggestions are based on ref changes occurring and so contain the ref change that prompted the suggestion plus the time the change event occurred. Changes will be returned in descending order based on the time the change that prompted the suggestion occurred.
	 *
	 * Note that although the response is a page object, the interface does not support paging, however a limit can be applied to the size of the returned page.
	 */
	async getPullRequestSuggestions(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/dashboard/pull-request-suggestions"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/dashboard/pull-request-suggestions"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/dashboard/pull-request-suggestions"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/dashboard/pull-request-suggestions",
			...init,
		)
	}

	/** Get pull requests for a user
	 *
	 * Retrieve a page of pull requests where a user is involved as either a reviewer, author or a participant. The request may be filtered by pull request state, role or participant status.
	 */
	async getPullRequests_1(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/dashboard/pull-requests"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/dashboard/pull-requests"]["get"],
			MaybeOptionalInit<paths["/api/latest/dashboard/pull-requests"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/dashboard/pull-requests",
			...init,
		)
	}

	/** Get deployment capabilities
	 *
	 * Returns the Deployment capabilities of this instance
	 */
	async getCapabilities_1(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/deployment/capabilities"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/deployment/capabilities"]["get"],
			MaybeOptionalInit<paths["/api/latest/deployment/capabilities"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/deployment/capabilities",
			...init,
		)
	}

	/** Get group names
	 *
	 * Retrieve a page of group names.
	 *
	 * The authenticated user must have <strong>LICENSED_USER</strong> permission or higher to call this resource.
	 */
	async getGroups(
		...init: InitParam<MaybeOptionalInit<paths["/api/latest/groups"], "get">>
	): Promise<
		FetchResponse<
			paths["/api/latest/groups"]["get"],
			MaybeOptionalInit<paths["/api/latest/groups"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request("get", "/api/latest/groups", ...init)
	}

	/** Create a new hook script
	 *
	 * Create a new hook script.
	 *
	 * This endpoint requires **SYS_ADMIN** permission.
	 */
	async createHookScript(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/hook-scripts"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/hook-scripts"]["post"],
			MaybeOptionalInit<paths["/api/latest/hook-scripts"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request("post", "/api/latest/hook-scripts", ...init)
	}

	/** Get a hook script
	 *
	 * Retrieves a hook script by ID.
	 */
	async getHookScript(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/hook-scripts/{scriptId}"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/hook-scripts/{scriptId}"]["get"],
			MaybeOptionalInit<paths["/api/latest/hook-scripts/{scriptId}"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/hook-scripts/{scriptId}",
			...init,
		)
	}

	/** Update a hook script
	 *
	 * Updates a hook script.
	 *
	 * This endpoint requires **SYS_ADMIN** permission.
	 */
	async updateHookScript(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/hook-scripts/{scriptId}"], "put">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/hook-scripts/{scriptId}"]["put"],
			MaybeOptionalInit<paths["/api/latest/hook-scripts/{scriptId}"], "put">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/hook-scripts/{scriptId}",
			...init,
		)
	}

	/** Delete a hook script.
	 *
	 * Deletes a registered hook script.
	 *
	 * This endpoint requires **SYS_ADMIN** permission.
	 */
	async deleteHookScript(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/hook-scripts/{scriptId}"], "delete">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/hook-scripts/{scriptId}"]["delete"],
			MaybeOptionalInit<paths["/api/latest/hook-scripts/{scriptId}"], "delete">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/hook-scripts/{scriptId}",
			...init,
		)
	}

	/** Get hook script content
	 *
	 * Retrieves the hook script content.
	 *
	 * This endpoint requires **SYS_ADMIN** permission.
	 */
	async read(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/hook-scripts/{scriptId}/content"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/hook-scripts/{scriptId}/content"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/hook-scripts/{scriptId}/content"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/hook-scripts/{scriptId}/content",
			...init,
		)
	}

	/** Get project avatar
	 *
	 * Retrieve the avatar for the project matching the supplied <strong>moduleKey</strong>.
	 */
	async getAvatar(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/hooks/{hookKey}/avatar"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/hooks/{hookKey}/avatar"]["get"],
			MaybeOptionalInit<paths["/api/latest/hooks/{hookKey}/avatar"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/hooks/{hookKey}/avatar",
			...init,
		)
	}

	/** Get pull requests in inbox
	 *
	 * Returns a page of pull requests in the user's inbox.
	 */
	async getPullRequests_2(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/inbox/pull-requests"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/inbox/pull-requests"]["get"],
			MaybeOptionalInit<paths["/api/latest/inbox/pull-requests"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/inbox/pull-requests",
			...init,
		)
	}

	/** Get total number of pull requests in inbox
	 *
	 * Returns the total number of pull requests in the user's inbox
	 */
	async getPullRequestCount(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/inbox/pull-requests/count"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/inbox/pull-requests/count"]["get"],
			MaybeOptionalInit<paths["/api/latest/inbox/pull-requests/count"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/inbox/pull-requests/count",
			...init,
		)
	}

	/** Get all labels
	 *
	 * Returns a paged response of all the labels in the system.
	 *
	 * The user needs to be authenticated to use this resource.
	 */
	async getLabels(
		...init: InitParam<MaybeOptionalInit<paths["/api/latest/labels"], "get">>
	): Promise<
		FetchResponse<
			paths["/api/latest/labels"]["get"],
			MaybeOptionalInit<paths["/api/latest/labels"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request("get", "/api/latest/labels", ...init)
	}

	/** Get label
	 *
	 * Returns a label.
	 *
	 * The user needs to be authenticated to use this resource.
	 */
	async getLabel(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/labels/{labelName}"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/labels/{labelName}"]["get"],
			MaybeOptionalInit<paths["/api/latest/labels/{labelName}"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/labels/{labelName}",
			...init,
		)
	}

	/** Get labelables for label
	 *
	 * Returns a page of labelables for a given label.
	 *
	 * Only labelables that the authenticated user has view access to will be returned.
	 */
	async getLabelables(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/labels/{labelName}/labeled"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/labels/{labelName}/labeled"]["get"],
			MaybeOptionalInit<paths["/api/latest/labels/{labelName}/labeled"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/labels/{labelName}/labeled",
			...init,
		)
	}

	/** Get current log level
	 *
	 * Retrieve the current log level for a given logger.
	 *
	 * The authenticated user must have <strong>ADMIN</strong> permission or higher to call this resource.
	 */
	async getLevel(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/logs/logger/{loggerName}"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/logs/logger/{loggerName}"]["get"],
			MaybeOptionalInit<paths["/api/latest/logs/logger/{loggerName}"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/logs/logger/{loggerName}",
			...init,
		)
	}

	/** Set log level
	 *
	 * Set the current log level for a given logger.
	 *
	 * The authenticated user must have <strong>ADMIN</strong> permission or higher to call this resource.
	 */
	async setLevel(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/logs/logger/{loggerName}/{levelName}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/logs/logger/{loggerName}/{levelName}"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/logs/logger/{loggerName}/{levelName}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/logs/logger/{loggerName}/{levelName}",
			...init,
		)
	}

	/** Get root log level
	 *
	 *  Retrieve the current log level for the root logger.
	 *
	 * The authenticated user must have <strong>ADMIN</strong> permission or higher to call this resource.
	 */
	async getRootLevel(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/logs/rootLogger"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/logs/rootLogger"]["get"],
			MaybeOptionalInit<paths["/api/latest/logs/rootLogger"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request("get", "/api/latest/logs/rootLogger", ...init)
	}

	/** Set root log level
	 *
	 * Set the current log level for the root logger.
	 *
	 * The authenticated user must have <strong>ADMIN</strong> permission or higher to call this resource.
	 */
	async setRootLevel(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/logs/rootLogger/{levelName}"], "put">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/logs/rootLogger/{levelName}"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/logs/rootLogger/{levelName}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/logs/rootLogger/{levelName}",
			...init,
		)
	}

	/** Preview markdown render
	 *
	 * Preview generated HTML for the given markdown content.
	 *
	 * Only authenticated users may call this resource.
	 */
	async preview(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/markup/preview"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/markup/preview"]["post"],
			MaybeOptionalInit<paths["/api/latest/markup/preview"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request("post", "/api/latest/markup/preview", ...init)
	}

	/** Start export job
	 *
	 * Starts a background job that exports the selected repositories.
	 *
	 * Only 2 concurrent exports are supported _per cluster node_. If a request ends up on a node that is already running that many export jobs, the request will be rejected and an error returned.
	 *
	 * The response includes a description of the job that has been started, and its ID can be used to query these details again, including the current progress, warnings and errors that occurred while processing the job, and to interrupt and cancel the execution of this job.
	 *
	 * The request to start an export is similar to the one for previewing an export. Additionally, it accepts an optional parameter, `exportLocation`, which can be used to specify a _relative_ path within `data/migration/export` in the shared home directory. No locations outside of that directory will be accepted for exports.
	 *
	 * There are essentially three ways to select repositories for export. Regardless of which you use, a few general rules apply:
	 *
	 * - You can supply a list of selectors. The selection will be additive.
	 * - Repositories that are selected more than once due to overlapping selectors will be de-duplicated and effectively exported only once.
	 * - For every selected repository, its full fork hierarchy will be considered selected, even if parts of that hierarchy would otherwise not be matched by the provided selectors. For example, when you explicitly select a single repository only, but that repository is a fork, then its origin will be exported (and eventually imported), too.
	 *
	 * Now, a single repository can be selected like this:
	 *
	 * ```
	 *
	 *
	 *
	 * {
	 *       "projectKey": "PRJ",
	 *       "slug": "my-repo"
	 * }
	 *
	 * ```
	 *
	 * Second, all repositories in a specific project can be selected like this:
	 *
	 * ```
	 *
	 *
	 *
	 * {
	 *       "projectKey": "PRJ",
	 *       "slug": *"
	 * }
	 *
	 * ```
	 *
	 * And third, all projects and repositories in the system would be selected like this:
	 *
	 * ```
	 *
	 *
	 *
	 * {
	 *       "projectKey": "*",
	 *       "slug": *"
	 * }
	 *
	 * ```
	 *
	 * The authenticated user must have **ADMIN** permission or higher to call this resource.
	 */
	async startExport(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/migration/exports"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/migration/exports"]["post"],
			MaybeOptionalInit<paths["/api/latest/migration/exports"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/migration/exports",
			...init,
		)
	}

	/** Preview export
	 *
	 * Enumerates the projects and repositories that would be exported for a given export request.
	 *
	 * All affected repositories will be enumerated explicitly, and while projects are listed as individual items in responses from this endpoint, their presence does not imply that all their repositories are included.
	 *
	 * While this endpoint can be used to verify that all selectors in the request apply as intended, it should be noted that a subsequent, actual export might contain a different set of repositories, as they might have been added or deleted in the meantime.
	 *
	 * Note that the overall response from this endpoint can become very large when a lot of repositories end up in the selection. This is why the server is streaming the response while it is being generated (as opposed to creating it in memory and then sending it all at once) and it can be consumed in a streaming way, too.
	 *
	 * Also, due to the potential size of the response, projects and repositories are listed with fewer details than in other REST responses.
	 *
	 * For a more detailed description of selectors, see the endpoint documentation for starting an export.
	 *
	 * The authenticated user must have **ADMIN** permission or higher to call this resource.
	 */
	async previewExport(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/migration/exports/preview"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/migration/exports/preview"]["post"],
			MaybeOptionalInit<paths["/api/latest/migration/exports/preview"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/migration/exports/preview",
			...init,
		)
	}

	/** Get export job details
	 *
	 * Gets the details, including the current status and progress, of the export job identified by the given ID.
	 *
	 * The authenticated user must have **ADMIN** permission or higher to call this resource.
	 */
	async getExportJob(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/migration/exports/{jobId}"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/migration/exports/{jobId}"]["get"],
			MaybeOptionalInit<paths["/api/latest/migration/exports/{jobId}"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/migration/exports/{jobId}",
			...init,
		)
	}

	/** Cancel export job
	 *
	 * Requests the cancellation of an export job.
	 *
	 * The request to cancel a job will be processed successfully if the job is actually still running. If it has already finished (successfully or with errors) or if it has already been canceled before, then an error will be returned.
	 *
	 * There might be a small delay between accepting the request and actually cancelling the job. In most cases, the delay will be close to instantaneously. In the unlikely case of communication issues across a cluster, it can however take a few seconds to cancel a job.
	 *
	 * A client should always actively query the job status to confirm that a job has been successfully canceled.
	 *
	 * The authenticated user must have **ADMIN** permission or higher to call this resource.
	 */
	async cancelExportJob(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/migration/exports/{jobId}/cancel"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/migration/exports/{jobId}/cancel"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/migration/exports/{jobId}/cancel"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/migration/exports/{jobId}/cancel",
			...init,
		)
	}

	/** Get job messages
	 *
	 * Gets the messages generated by the job.
	 *
	 * Without any filter, all messages will be returned, but the response can optionally be filtered for the following severities. The severity parameter can be repeated to include multiple severities in one response.
	 *
	 * - INFO
	 * - WARN
	 * - ERROR
	 *
	 * The authenticated user must have **ADMIN** permission or higher to call this resource.
	 */
	async getExportJobMessages(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/migration/exports/{jobId}/messages"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/migration/exports/{jobId}/messages"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/migration/exports/{jobId}/messages"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/migration/exports/{jobId}/messages",
			...init,
		)
	}

	/** Start import job
	 *
	 * Starts a background job that imports the specified archive.
	 *
	 * Only 1 import at a time is supported _per cluster_. If another request is made while an import is already running, the request will be rejected and an error returned.
	 *
	 * The path in the request must point to a valid archive file. The file must be located within the `data/migration/import` directory in the shared home directory.
	 *
	 * The authenticated user must have **ADMIN** permission or higher to call this resource.
	 */
	async startImport(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/migration/imports"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/migration/imports"]["post"],
			MaybeOptionalInit<paths["/api/latest/migration/imports"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/migration/imports",
			...init,
		)
	}

	/** Get import job status
	 *
	 * Gets the details, including the current status and progress, of the import job identified by the given ID.
	 *
	 * The authenticated user must have **ADMIN** permission or higher to call this resource.
	 */
	async getImportJob(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/migration/imports/{jobId}"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/migration/imports/{jobId}"]["get"],
			MaybeOptionalInit<paths["/api/latest/migration/imports/{jobId}"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/migration/imports/{jobId}",
			...init,
		)
	}

	/** Cancel import job
	 *
	 * Requests the cancellation of an import job.
	 *
	 * The request to cancel a job will be processed successfully if the job is actually still running. If it has already finished (successfully or with errors) or if it has already been canceled before, then an error will be returned.
	 *
	 * Note that import jobs are not canceled as instantaneously as export jobs. Rather, once the request has been accepted, there are a number of checkpoints at which the job will actually apply it and stop. This is to keep the system in a reasonably consistent state:
	 *
	 * - After the current fork hierarchy has been imported and verified.
	 * - Before the next repository is imported.
	 * - Before the next pull request is imported.
	 *
	 * A client should always actively query the job status to confirm that a job has been successfully canceled.
	 *
	 * The authenticated user must have **ADMIN** permission or higher to call this resource.
	 */
	async cancelImportJob(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/migration/imports/{jobId}/cancel"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/migration/imports/{jobId}/cancel"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/migration/imports/{jobId}/cancel"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/migration/imports/{jobId}/cancel",
			...init,
		)
	}

	/** Get import job messages
	 *
	 * Gets the messages generated by the job.
	 *
	 * Without any filter, all messages will be returned, but the response can optionally be filtered for the following severities. The severity parameter can be repeated to include multiple severities in one response.
	 *
	 * - INFO
	 * - WARN
	 * - ERROR
	 *
	 * The authenticated user must have **ADMIN** permission or higher to call this resource.
	 */
	async getImportJobMessages(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/migration/imports/{jobId}/messages"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/migration/imports/{jobId}/messages"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/migration/imports/{jobId}/messages"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/migration/imports/{jobId}/messages",
			...init,
		)
	}

	/** Start Mesh migration job
	 *
	 * Starts a background job that migrates selected projects/repositories to Mesh.
	 *
	 * Only 1 job is supported _per cluster_.
	 *
	 * The response includes a description of the job that has been started, and its ID can be used to query these details again, including the current progress, and to interrupt and cancel the execution of this job.
	 *
	 * The request to start a migration is similar to the one for previewing a migration.
	 *
	 * There are essentially three ways to select repositories for migration. Regardless of which you use, a few general rules apply:
	 *
	 *     - You can supply a list of repository IDs and project IDs. The selection will be additive. All repositories     in the system are migrated if both lists are empty.     - Repositories that are selected more than once due to overlapping IDs will be de-duplicated and     effectively migrated only once.     - For every selected repository, its full fork hierarchy will be considered selected, even if parts of that     hierarchy would otherwise not be matched by the provided IDs. For example, when you explicitly     select a single repository only, but that repository is a fork, then its origin will be migrated too.
	 *
	 * Now, a single repository can be selected like this:
	 *
	 * ```
	 *
	 *      {
	 *      "repositoryIds": [1]
	 *      }
	 * ```
	 *
	 * Multiple repositories can be selected like this:
	 *
	 *
	 *
	 * ```
	 *
	 *      {
	 *      "repositoryIds": [1, 2]
	 *      }
	 * ```
	 *
	 * Second, all repositories in a specific project can be selected like this:
	 *
	 *
	 *
	 * ```
	 *
	 *      {
	 *      "projectIds": [1]
	 *      }
	 * ```
	 *
	 * And third, all projects and repositories in the system would be selected like this:
	 *
	 *
	 *
	 * ```
	 *
	 *      {
	 *      "projectIds": [],
	 *      "repositoryIds": []
	 *      }
	 * ```
	 *
	 * The authenticated user must have **SYS_ADMIN** permission to call this resource.
	 */
	async startMeshMigration(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/migration/mesh"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/migration/mesh"]["post"],
			MaybeOptionalInit<paths["/api/latest/migration/mesh"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request("post", "/api/latest/migration/mesh", ...init)
	}

	/** Preview Mesh migration
	 *
	 * Enumerates the projects and repositories that would be migrated for a given request.
	 *
	 * All affected repositories will be enumerated explicitly, and while projects are listed as individual items in responses from this endpoint, their presence does not imply that all their repositories are included.
	 *
	 * While this endpoint can be used to verify that all selectors in the request apply as intended, it should be noted that a subsequent, actual export might contain a different set of repositories, as they might have been added or deleted in the meantime.
	 *
	 * Note that the overall response from this endpoint can become very large when a lot of repositories end up in the selection. This is why the server is streaming the response while it is being generated (as opposed to creating it in memory and then sending it all at once) and it can be consumed in a streaming way, too.
	 *
	 * Also, due to the potential size of the response, projects and repositories are listed with fewer details than in other REST responses.
	 *
	 * The authenticated user must have **SYS_ADMIN** permission to call this resource.
	 */
	async previewMeshMigration(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/migration/mesh/preview"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/migration/mesh/preview"]["post"],
			MaybeOptionalInit<paths["/api/latest/migration/mesh/preview"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/migration/mesh/preview",
			...init,
		)
	}

	/** Find repositories by Mesh migration state
	 *
	 * Searches for repositories in the system matching the specified criteria and enriches their MeshMigrationQueueState migration state if a migration is currently in progress.
	 *
	 * The currently active migration can optionally be specified by passing a migrationId, if known. If this isn't passed, an attempt is made to locate the active migration and its ID is used.
	 *
	 * If a migration is currently active, only repositories that are a part of the migration are filtered and returned. Otherwise, all repositories in the systems are filtered and returned.
	 *
	 * Filtering by state is ignored when no migration is currently in progress. In such a case, results are not enriched with their MeshMigrationQueueState migration state.
	 *
	 * The authenticated user must have **SYS_ADMIN** permission to call this resource.
	 */
	async searchMeshMigrationRepos(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/migration/mesh/repos"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/migration/mesh/repos"]["get"],
			MaybeOptionalInit<paths["/api/latest/migration/mesh/repos"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/migration/mesh/repos",
			...init,
		)
	}

	/** Get all Mesh migration job summaries
	 *
	 * Retrieve a page of Mesh migration job summaries. Jobs are ordered by when they were started, newest first.
	 *
	 * The authenticated user must have **SYS_ADMIN** permission to call this resource.
	 */
	async getAllMeshMigrationSummaries(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/migration/mesh/summaries"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/migration/mesh/summaries"]["get"],
			MaybeOptionalInit<paths["/api/latest/migration/mesh/summaries"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/migration/mesh/summaries",
			...init,
		)
	}

	/** Get summary for Mesh migration job
	 *
	 * Gets the summary, including the queue status and progress, of the currently active Mesh migration job.
	 *
	 * The authenticated user must have **SYS_ADMIN** permission to call this resource.
	 */
	async getActiveMeshMigrationSummary(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/migration/mesh/summary"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/migration/mesh/summary"]["get"],
			MaybeOptionalInit<paths["/api/latest/migration/mesh/summary"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/migration/mesh/summary",
			...init,
		)
	}

	/** Get Mesh migration job details
	 *
	 * Gets the details, including the current status and progress, of the job identified by the given ID.
	 *
	 * The authenticated user must have **SYS_ADMIN** permission to call this resource.
	 */
	async getMeshMigrationJob(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/migration/mesh/{jobId}"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/migration/mesh/{jobId}"]["get"],
			MaybeOptionalInit<paths["/api/latest/migration/mesh/{jobId}"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/migration/mesh/{jobId}",
			...init,
		)
	}

	/** Cancel Mesh migration job
	 *
	 * Requests the cancellation of a migration job.
	 *
	 * The request to cancel a job will be processed successfully if the job is actually still running. If it has already finished (successfully or with errors) or if it has already been canceled before, then an error will be returned.
	 *
	 * There might be a small delay between accepting the request and actually cancelling the job. In most cases, the delay will be close to instantaneously. In the unlikely case of communication issues across a cluster, it can however take a few seconds to cancel a job.
	 *
	 * A client should always actively query the job status to confirm that a job has been successfully canceled.
	 *
	 * The authenticated user must have **SYS_ADMIN** permission to call this resource.
	 */
	async cancelMeshMigrationJob(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/migration/mesh/{jobId}/cancel"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/migration/mesh/{jobId}/cancel"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/migration/mesh/{jobId}/cancel"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/migration/mesh/{jobId}/cancel",
			...init,
		)
	}

	/** Get Mesh migration job messages
	 *
	 * Gets the messages generated by the job.
	 *
	 * Without any filter, all messages will be returned, but the response can optionally be filtered for the following severities. The severity parameter can be repeated to include multiple severities in one response.
	 *
	 *      - INFO
	 *      - WARN
	 *      - ERROR
	 *
	 *
	 * The authenticated user must have **SYS_ADMIN** permission to call this resource.
	 */
	async getMeshMigrationJobMessages(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/migration/mesh/{jobId}/messages"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/migration/mesh/{jobId}/messages"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/migration/mesh/{jobId}/messages"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/migration/mesh/{jobId}/messages",
			...init,
		)
	}

	/** Get Mesh migration job summary
	 *
	 * Gets the summary, including the queue status and progress, of a Mesh migration job.
	 *
	 * The authenticated user must have **SYS_ADMIN** permission to call this resource.
	 */
	async getMeshMigrationJobSummary(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/migration/mesh/{jobId}/summary"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/migration/mesh/{jobId}/summary"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/migration/mesh/{jobId}/summary"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/migration/mesh/{jobId}/summary",
			...init,
		)
	}

	/** Get recently accessed repositories
	 *
	 * Retrieve a page of recently accessed repositories for the currently authenticated user.
	 *
	 * Repositories are ordered from most recently to least recently accessed. <p>Only authenticated users may call this resource.
	 */
	async getRepositoriesRecentlyAccessed(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/profile/recent/repos"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/profile/recent/repos"]["get"],
			MaybeOptionalInit<paths["/api/latest/profile/recent/repos"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/profile/recent/repos",
			...init,
		)
	}

	/** Get projects
	 *
	 * Retrieve a page of projects.
	 *
	 * Only projects for which the authenticated user has the <strong>PROJECT_VIEW</strong> permission will be returned.
	 */
	async getProjects(
		...init: InitParam<MaybeOptionalInit<paths["/api/latest/projects"], "get">>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects"]["get"],
			MaybeOptionalInit<paths["/api/latest/projects"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request("get", "/api/latest/projects", ...init)
	}

	/** Create a new project
	 *
	 * Create a new project.
	 *
	 * To include a custom avatar for the project, the project definition should contain an additional attribute with the key <code>avatar</code> and the value a data URI containing Base64-encoded image data. The URI should be in the following format: <pre>    data:(content type, e.g. image/png);base64,(data) </pre>If the data is not Base64-encoded, or if a character set is defined in the URI, or the URI is otherwise invalid, <em>project creation will fail</em>.
	 *
	 * The authenticated user must have <strong>PROJECT_CREATE</strong> permission to call this resource.
	 */
	async createProject(
		...init: InitParam<MaybeOptionalInit<paths["/api/latest/projects"], "post">>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects"]["post"],
			MaybeOptionalInit<paths["/api/latest/projects"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request("post", "/api/latest/projects", ...init)
	}

	/** Get a project
	 *
	 * Retrieve the project matching the supplied <strong>projectKey</strong>.
	 *
	 * The authenticated user must have <strong>PROJECT_VIEW</strong> permission for the specified project to call this resource.
	 */
	async getProject(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/projects/{projectKey}"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}"]["get"],
			MaybeOptionalInit<paths["/api/latest/projects/{projectKey}"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}",
			...init,
		)
	}

	/** Update project
	 *
	 * Update the project matching the <strong>projectKey</strong> supplied in the resource path.
	 *
	 * To include a custom avatar for the updated project, the project definition should contain an additional attribute with the key <code>avatar</code> and the value a data URI containing Base64-encoded image data. The URI should be in the following format:
	 * ```    data:(content type, e.g. image/png);base64,(data)```
	 *
	 * If the data is not Base64-encoded, or if a character set is defined in the URI, or the URI is otherwise invalid, <em>project creation will fail</em>.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project to call this resource.
	 */
	async updateProject(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/projects/{projectKey}"], "put">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}"]["put"],
			MaybeOptionalInit<paths["/api/latest/projects/{projectKey}"], "put">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}",
			...init,
		)
	}

	/** Delete project
	 *
	 * Delete the project matching the supplied <strong>projectKey</strong>.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project to call this resource.
	 */
	async deleteProject(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/projects/{projectKey}"], "delete">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}"]["delete"],
			MaybeOptionalInit<paths["/api/latest/projects/{projectKey}"], "delete">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}",
			...init,
		)
	}

	/** Get avatar for project
	 *
	 * Retrieve the avatar for the project matching the supplied <strong>projectKey</strong>.
	 *
	 * The authenticated user must have <strong>PROJECT_VIEW</strong> permission for the specified project to call this resource.
	 */
	async getProjectAvatar(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/avatar.png"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/avatar.png"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/avatar.png"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/avatar.png",
			...init,
		)
	}

	/** Update project avatar
	 *
	 * Update the avatar for the project matching the supplied <strong>projectKey</strong>.
	 *
	 * This resource accepts POST multipart form data, containing a single image in a form-field named 'avatar'.
	 *
	 * There are configurable server limits on both the dimensions (1024x1024 pixels by default) and uploaded file size (1MB by default). Several different image formats are supported, but <strong>PNG</strong> and <strong>JPEG</strong> are preferred due to the file size limit.
	 *
	 * This resource has Cross-Site Request Forgery (XSRF) protection. To allow the request to pass the XSRF check the caller needs to send an <code>X-Atlassian-Token</code> HTTP header with the value <code>no-check</code>.
	 *
	 * An example <a href="http://curl.haxx.se/">curl</a> request to upload an image name 'avatar.png' would be: ```curl -X POST -u username:password -H "X-Atlassian-Token: no-check" http://example.com/rest/api/1.0/projects/STASH/avatar.png -F avatar=@avatar.png ```
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project to call this resource.
	 */
	async uploadAvatar(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/avatar.png"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/avatar.png"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/avatar.png"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/avatar.png",
			...init,
		)
	}

	/** Get configured hook scripts
	 *
	 * Return a page of hook scripts configured for the specified project.
	 *
	 * This endpoint requires **PROJECT_ADMIN** permission.
	 */
	async getConfigurations(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/hook-scripts"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/hook-scripts"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/hook-scripts"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/hook-scripts",
			...init,
		)
	}

	/** Create/update a hook script
	 *
	 * Creates/updates the hook script configuration for the provided hook script and project.
	 *
	 * This endpoint requires **PROJECT_ADMIN** permission.
	 */
	async setConfiguration(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/hook-scripts/{scriptId}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/hook-scripts/{scriptId}"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/hook-scripts/{scriptId}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/hook-scripts/{scriptId}",
			...init,
		)
	}

	/** Remove a hook script
	 *
	 * Removes the hook script from the set of hook scripts configured to run in all repositories under the project.
	 *
	 * This endpoint requires **PROJECT_ADMIN** permission.
	 */
	async removeConfiguration(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/hook-scripts/{scriptId}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/hook-scripts/{scriptId}"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/hook-scripts/{scriptId}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/hook-scripts/{scriptId}",
			...init,
		)
	}

	/** Revoke project permissions
	 *
	 * Revoke all permissions for the specified project for the given groups and users.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project or a higher global permission to call this resource.
	 *
	 * In addition, a user may not revoke a group's permission if their own permission would be revoked as a result, nor may they revoke their own permission unless they have a global permission that already implies that permission.
	 */
	async revokePermissions(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/permissions"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/permissions"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/permissions"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/permissions",
			...init,
		)
	}

	/** Get groups with permission to project
	 *
	 * Retrieve a page of groups that have been granted at least one permission for the specified project.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project or a higher global permission to call this resource.
	 */
	async getGroupsWithAnyPermission_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/permissions/groups"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/permissions/groups"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/permissions/groups"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/permissions/groups",
			...init,
		)
	}

	/** Update group project permission
	 *
	 * Promote or demote a group's permission level for the specified project.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project or a higher global permission to call this resource. In addition, a user may not demote a group's permission level if theirown permission level would be reduced as a result.
	 */
	async setPermissionForGroups_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/permissions/groups"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/permissions/groups"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/permissions/groups"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/permissions/groups",
			...init,
		)
	}

	/** Revoke group project permission
	 *
	 *  Revoke all permissions for the specified project for a group.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project or a higher global permission to call this resource.
	 *
	 * In addition, a user may not revoke a group's permissions if it will reduce their own permission level.
	 */
	async revokePermissionsForGroup_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/permissions/groups"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/permissions/groups"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/permissions/groups"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/permissions/groups",
			...init,
		)
	}

	/** Get groups without project permission
	 *
	 * Retrieve a page of groups that have no granted permissions for the specified project.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project or a higher
	 */
	async getGroupsWithoutAnyPermission_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/permissions/groups/none"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/permissions/groups/none"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/permissions/groups/none"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/permissions/groups/none",
			...init,
		)
	}

	/** Search project permissions
	 *
	 * Search direct and implied permissions of principals (users and groups). This endpoint returns a superset of the results returned by the /users and /groups endpoints because it allows filtering by global permissions too.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project or a higher global permission to call this resource.
	 */
	async searchPermissions(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/permissions/search"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/permissions/search"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/permissions/search"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/permissions/search",
			...init,
		)
	}

	/** Get users with permission to project
	 *
	 * Retrieve a page of users that have been granted at least one permission for the specified project.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project or a higher global permission to call this resource.
	 */
	async getUsersWithAnyPermission_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/permissions/users"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/permissions/users"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/permissions/users"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/permissions/users",
			...init,
		)
	}

	/** Update user project permission
	 *
	 * Promote or demote a user's permission level for the specified project.
	 *
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project or a higher global permission to call this resource. In addition, a user may not reduce their own permission level unless they have a global permission that already implies that permission.
	 */
	async setPermissionForUsers_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/permissions/users"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/permissions/users"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/permissions/users"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/permissions/users",
			...init,
		)
	}

	/** Revoke user project permission
	 *
	 * Revoke all permissions for the specified project for a user.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project or a higher global permission to call this resource.
	 *
	 * In addition, a user may not revoke their own project permissions if they do not have a higher global permission.
	 */
	async revokePermissionsForUser_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/permissions/users"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/permissions/users"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/permissions/users"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/permissions/users",
			...init,
		)
	}

	/** Get users without project permission
	 *
	 * Retrieve a page of <i>licensed</i> users that have no granted permissions for the specified project.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project or a higher global permission to call this resource.
	 */
	async getUsersWithoutPermission(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/permissions/users/none"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/permissions/users/none"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/permissions/users/none"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/permissions/users/none",
			...init,
		)
	}

	/** Check default project permission
	 *
	 * Check whether the specified permission is the default permission (granted to all users) for a project.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project or a higher global permission to call this resource.
	 */
	async hasAllUserPermission(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/permissions/{permission}/all"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/permissions/{permission}/all"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/permissions/{permission}/all"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/permissions/{permission}/all",
			...init,
		)
	}

	/** Grant project permission
	 *
	 * Grant or revoke a project permission to all users, i.e. set the default permission.
	 *
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project or a higher
	 * global permission to call this resource.
	 */
	async modifyAllUserPermission(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/permissions/{permission}/all"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/permissions/{permission}/all"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/permissions/{permission}/all"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/permissions/{permission}/all",
			...init,
		)
	}

	/** Get repositories for project
	 *
	 * Retrieve repositories from the project corresponding to the supplied <strong>projectKey</strong>.
	 *
	 * The authenticated user must have <strong>PROJECT_READ</strong> permission for the specified project to call this resource.
	 */
	async getRepositories(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/projects/{projectKey}/repos"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos",
			...init,
		)
	}

	/** Create repository
	 *
	 * Create a new repository. Requires an existing project in which this repository will be created. The only parameters which will be used are name and scmId.
	 *
	 * The authenticated user must have <strong>REPO_CREATE</strong> permission or higher, for the context project to call this resource.
	 */
	async createRepository(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos",
			...init,
		)
	}

	/** Get repository
	 *
	 * Retrieve the repository matching the supplied <strong>projectKey</strong> and <strong>repositorySlug</strong>.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the specified repository to call this resource.
	 */
	async getRepository(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}",
			...init,
		)
	}

	/** Update repository
	 *
	 * Update the repository matching the <strong>repositorySlug</strong> supplied in the resource path.
	 *
	 * The repository's slug is derived from its name. If the name changes the slug may also change.
	 *
	 * This resource can be used to change the repository's default branch by specifying a new default branch in the request. For example: <code>"defaultBranch":"main"</code>
	 *
	 * This resource can be used to move the repository to a different project by specifying a new project in the request. For example: <code>"project":{"key":"NEW_KEY"}</code>
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository to call this resource.
	 */
	async updateRepository(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}",
			...init,
		)
	}

	/** Fork repository
	 *
	 * Create a new repository forked from an existing repository.
	 *
	 * The JSON body for this <code>POST</code> is not required to contain <i>any</i> properties. Even the name may be omitted. The following properties will be used, if provided:
	 *
	 * - <code>"name":"Fork name"</code> - Specifies the forked repository's name
	 *   - Defaults to the name of the origin repository if not specified
	 * - <code>"defaultBranch":"main"</code> - Specifies the forked repository's default branch
	 *   - Defaults to the origin repository's default branch if not specified
	 * - <code>"project":{"key":"TARGET_KEY"}</code> - Specifies the forked repository's target project by key
	 *   - Defaults to the current user's personal project if not specified
	 *
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the specified repository and <strong>PROJECT_ADMIN</strong> on the target project to call this resource. Note that users <i>always</i> have <b>PROJECT_ADMIN</b> permission on their personal projects.
	 */
	async forkRepository(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}",
			...init,
		)
	}

	/** Delete repository
	 *
	 * Schedule the repository matching the supplied <strong>projectKey</strong> and <strong>repositorySlug</strong> to be deleted.
	 *
	 * The authenticated user must have sufficient permissions specified by the repository delete policy to call this resource. The default permission required is <strong>REPO_ADMIN</strong> permission.
	 */
	async deleteRepository(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}",
			...init,
		)
	}

	/** Stream archive of repository
	 *
	 * Streams an archive of the repository's contents at the requested commit. If no `at=` commit is requested, an archive of the default branch is streamed.
	 *
	 * The <code>filename=</code> query parameter may be used to specify the exact filename to include in the "Content-Disposition" header. If an explicit filename is not provided, one will be automatically generated based on what is being archived. Its format depends on the at= value:
	 *
	 * - No <code>at=</code> commit:     &lt;slug&gt;-&lt;default-branch-name&gt;@&lt;commit&gt;.&lt;format&gt;;     e.g. example-master@43c2f8a0fe8.zip
	 * - <code>at=</code>sha: &lt;slug&gt;-&lt;at&gt;.&lt;format&gt;; e.g.     example-09bcbb00100cfbb5310fb6834a1d5ce6cac253e9.tar.gz
	 * - <code>at=</code>branchOrTag: &lt;slug&gt;-&lt;branchOrTag&gt;@&lt;commit&gt;.&lt;format&gt;;     e.g. example-feature@bbb225f16e1.tar
	 *
	 *     - If the branch or tag is qualified (e.g. refs/heads/master, the short name         (master) will be included in the filename
	 *     - If the branch or tag's <i>short name</i> includes slashes (e.g. release/4.6),         they will be converted to hyphens in the filename (release-4.5)
	 *
	 *
	 *
	 *
	 * Archives may be requested in the following formats by adding the <code>format=</code> query parameter:
	 *
	 * - zip: A zip file using standard compression (Default)
	 * - tar: An uncompressed tarball
	 * - tar.gz or tgz: A GZip-compressed tarball
	 *
	 *
	 * The contents of the archive may be filtered by using the <code>path=</code> query parameter to specify paths to include. <code>path=</code> may be specified multiple times to include multiple paths.
	 *
	 * The <code>prefix=</code> query parameter may be used to define a directory (or multiple directories) where the archive's contents should be placed. If the prefix does not end with /, one will be added automatically. The prefix is <i>always</i> treated as a directory; it is not possible to use it to prepend characters to the entries in the archive.
	 *
	 * Archives of public repositories may be streamed by any authenticated or anonymous user. Streaming archives for non-public repositories requires an <i>authenticated user</i> with at least <b>REPO_READ</b> permission.
	 */
	async getArchive(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/archive"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/archive"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/archive"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/archive",
			...init,
		)
	}

	/** Get an attachment
	 *
	 * Retrieve the attachment.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the specified repository that is associated to the attachment.
	 *
	 * Range requests (see IETF RFC7233) are supported. However only a single range issupported. If multiple ranges are passed the ranges will be ignored and the entire content will be returned in the response.
	 */
	async getAttachment(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId}",
			...init,
		)
	}

	/** Delete an attachment
	 *
	 * Delete an attachment.
	 *
	 * The user must be authenticated and have <strong>REPO_ADMIN</strong> permission for the specified repository.
	 */
	async deleteAttachment(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId}"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId}",
			...init,
		)
	}

	/** Get attachment metadata
	 *
	 * Retrieve the attachment metadata.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the specified repository that is associated to the attachment that has the attachment metadata.
	 */
	async getAttachmentMetadata(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId}/metadata"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId}/metadata"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId}/metadata"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId}/metadata",
			...init,
		)
	}

	/** Save attachment metadata
	 *
	 * Save attachment metadata.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the specified repository that is associated to the attachment that has the attachment metadata.
	 */
	async saveAttachmentMetadata(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId}/metadata"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId}/metadata"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId}/metadata"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId}/metadata",
			...init,
		)
	}

	/** Delete attachment metadata
	 *
	 * Delete attachment metadata.
	 *
	 * The user must be authenticated and have <strong>REPO_ADMIN</strong> permission for the specified repository.
	 */
	async deleteAttachmentMetadata(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId}/metadata"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId}/metadata"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId}/metadata"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId}/metadata",
			...init,
		)
	}

	/** Find branches
	 *
	 * Retrieve the branches matching the supplied <strong>filterText</strong> param.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the specified repository to call this resource.
	 */
	async getBranches(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/branches"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/branches"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/branches"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/branches",
			...init,
		)
	}

	/** Create branch
	 *
	 * Creates a branch using the information provided in the RestCreateBranchRequest request
	 *
	 * The authenticated user must have <strong>REPO_WRITE</strong> permission for the context repository to call this resource.
	 */
	async createBranchForRepository(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/branches"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/branches"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/branches"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/branches",
			...init,
		)
	}

	/** Get default branch
	 *
	 * Retrieves the repository's default branch, if it has been created. If the repository is empty, 204 No Content will be returned. For non-empty repositories, if the configured default branch has not yet been created a 404 Not Found will be returned.
	 *
	 * This URL is deprecated. Callers should use <code>GET /projects/{key}/repos/{slug}/default-branch</code> instead, which allows retrieving the <i>configured</i> default branch even if the ref has not been created yet.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the specified repository to call this resource.
	 */
	async getDefaultBranch_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/branches/default"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/branches/default"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/branches/default"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/branches/default",
			...init,
		)
	}

	/** Update default branch
	 *
	 * Update the default branch of a repository.
	 *
	 * This URL is deprecated. Callers should use <code>PUT /projects/{key}/repos/{slug}/default-branch</code> instead.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository to call this resource.
	 */
	async setDefaultBranch_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/branches/default"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/branches/default"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/branches/default"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/branches/default",
			...init,
		)
	}

	/** Get file content at revision
	 *
	 * Retrieve a page of content for a file path at a specified revision.
	 *
	 * Responses from this endpoint vary widely depending on the query parameters. The example JSON is for a request that does not use size, type, blame or noContent.
	 *
	 * 1. size will return a response like {"size":10000}
	 * 2. type will return a response like {"type":"FILE"}, where possible values are    "DIRECTORY", "FILE" and "SUBMODULE"
	 * 3. blame <i>without</i> noContent will include blame for the lines of    content returned on the page
	 * 4. blame <i>with</i> noContent will omit file contents and only return    blame for the requested lines
	 * 5. noContent without blame is ignored and does nothing
	 *
	 *
	 * The various parameters are "processed" in the above order. That means ?size=true&amp;type=truewill return a size response, not a type one; the type parameter will be ignored.
	 *
	 * The blame and noContent query parameters are handled differently from size and type. For blame and noContent, the <i>presence</i> of the parameter implies "true" if no value is specified; size and and type both require an explicit=true or they're treated as "false".
	 *
	 * - ?blame is the same as ?blame=true
	 * - ?blame&amp;noContent is the same as ?blame=true&amp;noContent=true
	 * - ?size is the same as ?size=false
	 * - ?type is the same as ?type=false
	 *
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the specified repository to call this resource.
	 */
	async getContent(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/browse"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/browse"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/browse"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/browse",
			...init,
		)
	}

	/** Get file content
	 *
	 * Retrieve a page of content for a file path at a specified revision.
	 *
	 * Responses from this endpoint vary widely depending on the query parameters. The example JSON is for a request that does not use size, type, blame or noContent.
	 *
	 * 1. size will return a response like {"size":10000}
	 * 2. type will return a response like {"type":"FILE"}, where possible values are    "DIRECTORY", "FILE" and "SUBMODULE"
	 * 3. blame <i>without</i> noContent will include blame for the lines of    content returned on the page
	 * 4. blame <i>with</i> noContent will omit file contents and only return    blame for the requested lines
	 * 5. noContent without blame is ignored and does nothing
	 *
	 *
	 * The various parameters are "processed" in the above order. That means ?size=true&amp;type=truewill return a size response, not a type one; the type parameter will be ignored.
	 *
	 * The blame and noContent query parameters are handled differently from size and type. For blame and noContent, the <i>presence</i> of the parameter implies "true" if no value is specified; size and and type both require an explicit=true or they're treated as "false".
	 *
	 * - ?blame is the same as ?blame=true
	 * - ?blame&amp;noContent is the same as ?blame=true&amp;noContent=true
	 * - ?size is the same as ?size=false
	 * - ?type is the same as ?type=false
	 *
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the specified repository to call this resource.
	 */
	async getContent_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/browse/{path}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/browse/{path}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/browse/{path}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/browse/{path}",
			...init,
		)
	}

	/** Edit file
	 *
	 * Update the content of path, on the given repository and branch.
	 *
	 * This resource accepts PUT multipart form data, containing the file in a form-field named content.
	 *
	 * An example <a href="http://curl.haxx.se/">curl</a> request to update 'README.md' would be:
	 *
	 * ```curl -X PUT -u username:password -F content=@README.md  -F 'message=Updated using file-edit REST API' -F branch=master -F  sourceCommitId=5636641a50b  http://example.com/rest/api/latest/projects/PROJECT_1/repos/repo_1/browse/README.md ```
	 *
	 * - branch:  the branch on which the path should be modified or created
	 * - content: the full content of the file at path
	 * - message: the message associated with this change, to be used as the commit message. Or null if the default message should be used.
	 * - sourceCommitId: the commit ID of the file before it was edited, used to identify if content has changed. Or null if this is a new file
	 *
	 *
	 * The file can be updated or created on a new branch. In this case, the sourceBranch parameter should be provided to identify the starting point for the new branch and the branch parameter identifies the branch to create the new commit on.
	 */
	async editFile(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/browse/{path}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/browse/{path}"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/browse/{path}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/browse/{path}",
			...init,
		)
	}

	/** Get changes made in commit
	 *
	 * Retrieve a page of changes made in a specified commit.
	 *
	 * <strong>Note:</strong> The implementation will apply a hard cap ({@code page.max.changes}) and it is not possible to request subsequent content when that cap is exceeded.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the specified repository to call this resource.
	 */
	async getChanges_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/changes"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/changes"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/changes"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/changes",
			...init,
		)
	}

	/** Get commits
	 *
	 * Retrieve a page of commits from a given starting commit or "between" two commits. If no explicit commit is specified, the tip of the repository's default branch is assumed. commits may be identified by branch or tag name or by ID. A path may be supplied to restrict the returned commits to only those which affect that path.
	 *
	 * The authenticated user must have <b>REPO_READ</b> permission for the specified repository to call this resource.
	 */
	async getCommits(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits",
			...init,
		)
	}

	/** Get commit by ID
	 *
	 * Retrieve a single commit <i>identified by its ID</i>. In general, that ID is a SHA1. <u>From 2.11, ref names like "refs/heads/master" are no longer accepted by this resource.</u>
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the specified repository to call this resource.
	 */
	async getCommit(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}",
			...init,
		)
	}

	/** Get a specific build status
	 *
	 * Get a specific build status.
	 *
	 *
	 * The authenticated user must have **REPO_READ** permission for the provided repository.The request can also be made with anonymous 2-legged OAuth.<br>Since 7.14
	 */
	async get(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/builds"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/builds"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/builds"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/builds",
			...init,
		)
	}

	/** Store a build status
	 *
	 * Store a build status.
	 *
	 *
	 * The authenticated user must have **REPO_READ** permission for the repository that this build status is for. The request can also be made with anonymous 2-legged OAuth.
	 */
	async add(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/builds"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/builds"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/builds"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/builds",
			...init,
		)
	}

	/** Delete a specific build status
	 *
	 * Delete a specific build status.
	 *
	 * The authenticated user must have **REPO_ADMIN** permission for the provided repository.
	 */
	async delete(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/builds"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/builds"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/builds"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/builds",
			...init,
		)
	}

	/** Get changes in commit
	 *
	 * Retrieve a page of changes made in a specified commit.
	 *
	 *  <strong>Note:</strong> The implementation will apply a hard cap (<code>page.max.changes</code>) and it is not possible to request subsequent content when that cap is exceeded.
	 *
	 *  The authenticated user must have <strong>REPO_READ</strong> permission for the specified repository to call this resource.
	 */
	async getChanges(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/changes"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/changes"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/changes"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/changes",
			...init,
		)
	}

	/** Search for commit comments
	 *
	 * Retrieves the commit discussion comments that match the specified search criteria.
	 *
	 * It is possible to retrieve commit discussion comments that are anchored to a range of commits by providing the sinceId that the comments anchored from.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that the commit is in to call this resource.
	 */
	async getComments(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments",
			...init,
		)
	}

	/** Add a new commit comment
	 *
	 * Add a new comment.
	 *
	 * Comments can be added in a few places by setting different attributes:
	 *
	 * General commit comment:
	 *
	 * ```{
	 *       "text": "An insightful general comment on a commit."
	 * }
	 *
	 * </pre>
	 * Reply to a comment:
	 * <pre>{
	 *       "text": "A measured reply.",
	 *       "parent": {
	 *           "id": 1
	 *       }
	 * }
	 * </pre>
	 * General file comment:
	 * <pre>{
	 *       "text": "An insightful general comment on a file.",
	 *       "anchor": {
	 *           "diffType": "COMMIT",
	 *           "fromHash": "6df3858eeb9a53a911cd17e66a9174d44ffb02cd",
	 *           "path": "path/to/file",
	 *           "srcPath": "path/to/file",
	 *           "toHash": "04c7c5c931b9418ca7b66f51fe934d0bd9b2ba4b"
	 *       }
	 * }
	 * </pre>
	 * File line comment:
	 * <pre>{
	 *       "text": "A pithy comment on a particular line within a file.",
	 *       "anchor": {
	 *           "diffType": "COMMIT",
	 *           "line": 1,
	 *           "lineType": "CONTEXT",
	 *           "fileType": "FROM",
	 *           "fromHash": "6df3858eeb9a53a911cd17e66a9174d44ffb02cd",
	 *           "path": "path/to/file",
	 *           "srcPath": "path/to/file",
	 *           "toHash": "04c7c5c931b9418ca7b66f51fe934d0bd9b2ba4b"
	 *       }
	 * }
	 * ```
	 *
	 * Note: general file comments are an experimental feature and may change in the near future!
	 *
	 * For file and line comments, 'path' refers to the path of the file to which the comment should be applied and 'srcPath' refers to the path the that file used to have (only required for copies and moves). Also, fromHash and toHash refer to the sinceId / untilId (respectively) used to produce the diff on which the comment was added. Finally diffType refers to the type of diff the comment was added on.
	 *
	 * For line comments, 'line' refers to the line in the diff that the comment should apply to. 'lineType' refers to the type of diff hunk, which can be:- 'ADDED' - for an added line;</li>- 'REMOVED' - for a removed line; or</li>- 'CONTEXT' - for a line that was unmodified but is in the vicinity of the diff.</li>'fileType' refers to the file of the diff to which the anchor should be attached - which is of relevance when displaying the diff in a side-by-side way. Currently the supported values are:- 'FROM' - the source file of the diff</li>- 'TO' - the destination file of the diff</li>If the current user is not a participant the user is added as one and updated to watch the commit.
	 *
	 * The authenticated user must have REPO_READ permission for the repository that the commit is in to call this resource.
	 */
	async createComment(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments",
			...init,
		)
	}

	/** Get a commit comment
	 *
	 * Retrieves a commit discussion comment.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that the commit is in to call this resource.
	 */
	async getComment(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId}",
			...init,
		)
	}

	/** Update a commit comment
	 *
	 * Update a comment, with the following restrictions:
	 *
	 * - only the author of the comment may update the <i>text</i> of the comment
	 * - only the author of the comment or repository admins and above may update the other   fields of a comment
	 *
	 *
	 * <strong>Note:</strong> the supplied supplied JSON object must contain a <code>version</code> that must match the server's version of the comment or the update will fail. To determine the current version of the comment, the comment should be fetched from the server prior to the update. Look for the 'version' attribute in the returned JSON structure.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that the commit is in to call this resource.
	 */
	async updateComment(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId}"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId}",
			...init,
		)
	}

	/** Delete a commit comment
	 *
	 * Delete a commit comment. Anyone can delete their own comment. Only users with <strong>REPO_ADMIN</strong> and above may delete comments created by other users. Comments which have replies <i>may not be deleted</i>, regardless of the user's granted permissions.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that the commit is in to call this resource.
	 */
	async deleteComment(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId}"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId}",
			...init,
		)
	}

	/** Get a deployment
	 *
	 * Get the deployment matching the specified Repository, key, environmentKey and deploymentSequenceNumber.
	 *
	 * The user must have REPO_READ.
	 */
	async get_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/deployments"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/deployments"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/deployments"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/deployments",
			...init,
		)
	}

	/** Create or update a deployment
	 *
	 * Create or update a deployment.
	 *
	 *  The authenticated user must have REPO_READ permission for the repository.
	 */
	async createOrUpdateDeployment(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/deployments"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/deployments"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/deployments"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/deployments",
			...init,
		)
	}

	/** Delete a deployment
	 *
	 * Delete the deployment matching the specified Repository, key, environmentKey and deploymentSequenceNumber.
	 *
	 * The user must have REPO_ADMIN.
	 */
	async delete_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/deployments"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/deployments"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/deployments"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/deployments",
			...init,
		)
	}

	/** Get diff stats summary between revisions
	 *
	 * Retrieve the diff stats summary for a commit.
	 *
	 * The stats summary include the total number of modified files, added lines, and deleted lines.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the specified repository to call this resource.
	 */
	async getDiffStatsSummary(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/diff-stats-summary/{path}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/diff-stats-summary/{path}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/diff-stats-summary/{path}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/diff-stats-summary/{path}",
			...init,
		)
	}

	/** Get diff between revisions
	 *
	 * Retrieve the diff between two provided revisions.
	 *
	 * To stream a raw text representation of the diff, this endpoint can be called with the request header 'Accept: text/plain'.
	 *
	 * Note:</strong> This resource is currently <i>not paged</i>. The server will internally apply a hard cap to the streamed lines, and it is not possible to request subsequent pages if that cap is exceeded. In the event that the cap is reached, the diff will be cut short and one or more {@code truncated} flags will be set to true on the "segments", "hunks" and "diffs" properties, as well as the top-level object, in the returned JSON response.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the specified repository to call this resource.
	 */
	async streamDiff(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/diff/{path}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/diff/{path}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/diff/{path}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/diff/{path}",
			...init,
		)
	}

	/** Get the common ancestor between two commits
	 *
	 * Returns the best common ancestor between two commits.
	 *
	 * If more than one best common ancestor exists, only one will be returned. It is unspecified which will be returned.
	 */
	async getMergeBase(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/merge-base"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/merge-base"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/merge-base"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/merge-base",
			...init,
		)
	}

	/** Get repository pull requests containing commit
	 *
	 * Retrieve a page of pull requests in the current repository that contain the given commit.
	 *
	 * The user must be authenticated and have access to the specified repository to call this resource.
	 */
	async getPullRequests(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/pull-requests"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/pull-requests"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/pull-requests"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/pull-requests",
			...init,
		)
	}

	/** Watch commit
	 *
	 * Add the authenticated user as a watcher for the specified commit.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository containing the commit to call this resource.
	 */
	async watch(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/watch"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/watch"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/watch"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/watch",
			...init,
		)
	}

	/** Stop watching commit
	 *
	 * Remove the authenticated user as a watcher for the specified commit.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository containing the commit to call this resource.
	 */
	async unwatch(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/watch"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/watch"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/watch"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/watch",
			...init,
		)
	}

	/** Compare commits
	 *
	 * Gets the file changes available in the <code> from</code> commit but not in the <code> to</code> commit.
	 *
	 *
	 * If either the <code> from</code> or <code> to</code> commit are not specified, they will be replaced by the default branch of their containing repository.
	 */
	async streamChanges(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/compare/changes"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/compare/changes"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/compare/changes"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/compare/changes",
			...init,
		)
	}

	/** Get accessible commits
	 *
	 * Gets the commits accessible from the <code>from</code> commit but not in the <code>to</code> commit.
	 *
	 * If either the <code>from</code> or <code>to</code> commit are not specified, they will be replaced by the default branch of their containing repository.
	 */
	async streamCommits(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/compare/commits"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/compare/commits"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/compare/commits"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/compare/commits",
			...init,
		)
	}

	/** Retrieve the diff stats summary between commits
	 *
	 * Retrieve the diff stats summary of the changes available in the <code>from</code> commit but not in the <code> to</code> commit.
	 *
	 * If either the <code> from</code> or <code> to</code> commit are not specified, they will be replaced by the default branch of their containing repository.
	 */
	async getDiffStatsSummary_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/compare/diff-stats-summary{path}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/compare/diff-stats-summary{path}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/compare/diff-stats-summary{path}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/compare/diff-stats-summary{path}",
			...init,
		)
	}

	/** Get diff between commits
	 *
	 * Gets a diff of the changes available in the <code>from</code> commit but not in the <code> to</code> commit.
	 *
	 * If either the <code> from</code> or <code> to</code> commit are not specified, they will be replaced by the default branch of their containing repository.
	 */
	async streamDiff_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/compare/diff{path}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/compare/diff{path}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/compare/diff{path}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/compare/diff{path}",
			...init,
		)
	}

	/** Get repository contributing guidelines
	 *
	 * Retrieves the contributing guidelines for the repository, if they've been defined.
	 *
	 * This checks the repository for a CONTRIBUTING file, optionally with an md or txt extension, and, if found, streams it. By default, the <i>raw content</i> of the file is streamed. Appending <code>?markup</code> to the URL will stream an HTML-rendered version instead.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the specified repository to call this resource.
	 */
	async streamContributing(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/contributing"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/contributing"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/contributing"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/contributing",
			...init,
		)
	}

	/** Get repository default branch
	 *
	 * Retrieves the repository's <i>configured</i> default branch.
	 *
	 * Every repository has a <i>configured</i> default branch, but that branch may not actually <i>exist</i> in the repository. For example, a newly-created repository will have a configured default branch even though no branches have been pushed yet.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the specified repository to call this resource.
	 */
	async getDefaultBranch_2(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/default-branch"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/default-branch"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/default-branch"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/default-branch",
			...init,
		)
	}

	/** Update default branch for repository
	 *
	 * Update the default branch of a repository.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository to call this resource.
	 */
	async setDefaultBranch_2(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/default-branch"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/default-branch"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/default-branch"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/default-branch",
			...init,
		)
	}

	/** Get raw diff for path
	 *
	 * Stream the raw diff between two provided revisions.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the specified repository to call this resource.
	 */
	async streamRawDiff(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/diff"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/diff"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/diff"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/diff",
			...init,
		)
	}

	/** Get raw diff for path
	 *
	 * Stream the raw diff between two provided revisions.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the specified repository to call this resource.
	 */
	async streamRawDiff_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/diff/{path}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/diff/{path}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/diff/{path}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/diff/{path}",
			...init,
		)
	}

	/** Get files in directory
	 *
	 * Retrieve a page of files from particular directory of a repository. The search is done recursively, so all files from any sub-directory of the specified directory will be returned.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the specified repository to call this resource.
	 */
	async streamFiles(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/files"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/files"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/files"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/files",
			...init,
		)
	}

	/** Get files in directory
	 *
	 * Retrieve a page of files from particular directory of a repository. The search is done recursively, so all files from any sub-directory of the specified directory will be returned.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the specified repository to call this resource.
	 */
	async streamFiles_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/files/{path}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/files/{path}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/files/{path}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/files/{path}",
			...init,
		)
	}

	/** Get repository forks
	 *
	 * Retrieve repositories which have been forked from this one. Unlike #getRelatedRepositories(Repository, PageRequest) related repositories, this only looks at a given repository's direct forks. If those forks have themselves been the origin of more forks, such "grandchildren" repositories will not be retrieved.
	 *
	 * Only repositories to which the authenticated user has <b>REPO_READ</b> permission will be included, even if other repositories have been forked from this one.
	 */
	async getForkedRepositories(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/forks"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/forks"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/forks"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/forks",
			...init,
		)
	}

	/** Get hook scripts
	 *
	 * Return a page of hook scripts configured for the specified repository.
	 *
	 * This endpoint requires **REPO_ADMIN** permission.
	 */
	async getConfigurations_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/hook-scripts"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/hook-scripts"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/hook-scripts"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/hook-scripts",
			...init,
		)
	}

	/** Create/update a hook script
	 *
	 * Creates/updates the hook script configuration for the provided hook script and repository.
	 *
	 * This endpoint requires **REPO_ADMIN** permission.
	 */
	async setConfiguration_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/hook-scripts/{scriptId}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/hook-scripts/{scriptId}"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/hook-scripts/{scriptId}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/hook-scripts/{scriptId}",
			...init,
		)
	}

	/** Remove a hook script
	 *
	 * Removes the hook script from the set of hook scripts configured to run in the repository.
	 *
	 * This endpoint requires **REPO_ADMIN** permission.
	 */
	async removeConfiguration_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/hook-scripts/{scriptId}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/hook-scripts/{scriptId}"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/hook-scripts/{scriptId}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/hook-scripts/{scriptId}",
			...init,
		)
	}

	/** Get repository labels
	 *
	 * Get all labels applied to the given repository.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the specified repository.
	 */
	async getAllLabelsForRepository(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/labels"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/labels"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/labels"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/labels",
			...init,
		)
	}

	/** Add repository label
	 *
	 * Applies a label to the repository.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository.
	 */
	async addLabel(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/labels"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/labels"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/labels"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/labels",
			...init,
		)
	}

	/** Remove repository label
	 *
	 * Remove label that is applied to the given repository.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository.
	 */
	async removeLabel(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/labels/{labelName}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/labels/{labelName}"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/labels/{labelName}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/labels/{labelName}",
			...init,
		)
	}

	/** Stream files
	 *
	 * Streams files from the repository's root with the last commit to modify each file. Commit modifications are traversed starting from the <code>at</code> commit or, if not specified, from the tip of the default branch.
	 *
	 * Unless the repository is public, the authenticated user must have <b>REPO_READ</b> access to call this resource.
	 */
	async stream(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/last-modified"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/last-modified"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/last-modified"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/last-modified",
			...init,
		)
	}

	/** Stream files with last modified commit in path
	 *
	 * Streams files in the requested <code>path</code> with the last commit to modify each file. Commit modifications are traversed starting from the <code>at</code> commit or, if not specified, from the tip of the default branch.
	 *
	 * Unless the repository is public, the authenticated user must have <b>REPO_READ</b> access to call this resource.
	 */
	async stream_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/last-modified/{path}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/last-modified/{path}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/last-modified/{path}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/last-modified/{path}",
			...init,
		)
	}

	/** Get repository license
	 *
	 * Retrieves the license for the repository, if it's been defined.
	 *
	 * This checks the repository for a <pre>LICENSE</pre> file, optionally with an <pre>md</pre> or <pre>txt</pre>extension, and, if found, streams it. By default, the <i>raw content</i> of the file is streamed. Appending <pre>?markup</pre> to the URL will stream an HTML-rendered version instead.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the specified repository to call this resource.
	 */
	async streamLicense(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/license"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/license"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/license"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/license",
			...init,
		)
	}

	/** Search pull request participants
	 *
	 * Retrieve a page of participant users for all the pull requests to or from the specified repository.
	 *
	 * Optionally clients can specify following filters.
	 */
	async search(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/participants"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/participants"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/participants"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/participants",
			...init,
		)
	}

	/** Get patch content at revision
	 *
	 * Retrieve the patch content for a repository at a specified revision.
	 *
	 * Cache headers are added to the response (only if full commit hashes are used, not in the case of short hashes).
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the specified repository to call this resource.
	 */
	async streamPatch(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/patch"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/patch"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/patch"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/patch",
			...init,
		)
	}

	/** Revoke all repository permissions for users and groups
	 *
	 * Revoke all permissions for the specified repository for the given groups and users.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified repository or a higher global permission to call this resource.
	 *
	 * In addition, a user may not revoke a group's permission if their own permission would be revoked as a result, nor may they revoke their own permission unless they have a global permission that already implies that permission.
	 */
	async revokePermissions_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions",
			...init,
		)
	}

	/** Get groups with permission to repository
	 *
	 * Retrieve a page of groups that have been granted at least one permission for the specified repository.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository or a higher project or global permission to call this resource.
	 */
	async getGroupsWithAnyPermission_2(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/groups"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/groups"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/groups"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/groups",
			...init,
		)
	}

	/** Update group repository permission
	 *
	 * Promote or demote a group's permission level for the specified repository. Available repository permissions are:
	 *
	 * - REPO_READ
	 * - REPO_WRITE
	 * - REPO_ADMIN
	 *
	 *
	 * See the <a href="https://confluence.atlassian.com/display/BitbucketServer/Using+repository+permissions">Bitbucket Data Center documentation</a> for a detailed explanation of what each permission entails.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository or a higher project or global permission to call this resource. In addition, a user may not demote a group's permission level if their own permission level would be reduced as a result.
	 */
	async setPermissionForGroup(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/groups"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/groups"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/groups"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/groups",
			...init,
		)
	}

	/** Revoke group repository permission
	 *
	 * Revoke all permissions for the specified repository for a group.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository or a higher project or global permission to call this resource.
	 *
	 * In addition, a user may not revoke a group's permissions if it will reduce their own permission level.
	 */
	async revokePermissionsForGroup_2(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/groups"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/groups"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/groups"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/groups",
			...init,
		)
	}

	/** Get groups without repository permission
	 *
	 * Retrieve a page of groups that have no granted permissions for the specified repository.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository or a higher project or global permission to call this resource.
	 */
	async getGroupsWithoutAnyPermission_2(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/groups/none"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/groups/none"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/groups/none"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/groups/none",
			...init,
		)
	}

	/** Search repository permissions
	 *
	 * Search direct and implied permissions of users and groups. This endpoint returns a superset of the results returned by the /users and /groups endpoints because it allows filtering by project and global permissions too.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository or a higher project/global permission to call this resource.
	 */
	async searchPermissions_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/search"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/search"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/search"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/search",
			...init,
		)
	}

	/** Get users with permission to repository
	 *
	 * Retrieve a page of users that have been granted at least one permission for the specified repository.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository or a higher project or global permission to call this resource.
	 */
	async getUsersWithAnyPermission_2(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/users"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/users"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/users"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/users",
			...init,
		)
	}

	/** Update user repository permission
	 *
	 * Promote or demote a user's permission level for the specified repository. Available repository permissions are:
	 *
	 * - REPO_READ</li>- REPO_WRITE</li>- REPO_ADMIN</li></ul>See the <a href="https://confluence.atlassian.com/display/BitbucketServer/Using+repository+permissions">Bitbucket Data Center documentation</a> for a detailed explanation of what each permission entails.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository or a higher project or global permission to call this resource. In addition, a user may not reduce their own permission level unless they have a project or global permission that already implies that permission.
	 */
	async setPermissionForUser(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/users"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/users"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/users"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/users",
			...init,
		)
	}

	/** Revoke user repository permission
	 *
	 * Revoke all permissions for the specified repository for a user.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository or a higher project or global permission to call this resource.
	 *
	 * In addition, a user may not revoke their own repository permissions if they do not have a higher project or global permission.
	 */
	async revokePermissionsForUser_2(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/users"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/users"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/users"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/users",
			...init,
		)
	}

	/** Get users without repository permission
	 *
	 * Retrieve a page of <i>licensed</i> users that have no granted permissions for the specified repository.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository or a higher project or global permission to call this resource.
	 */
	async getUsersWithoutPermission_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/users/none"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/users/none"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/users/none"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/users/none",
			...init,
		)
	}

	/** Get pull requests for repository
	 *
	 * Retrieve a page of pull requests to or from the specified repository.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the specified repository to call this resource.  Optionally clients can specify PR participant filters. Each filter has a mandatory username.N parameter, and the optional role.N and approved.N parameters.
	 *
	 * - username.N - the "root" of a single participant filter, where "N" is a natural number   starting from 1. This allows clients to specify multiple participant filters, by providing consecutive   filters as username.1, username.2 etc. Note that the filters numbering has to start   with 1 and be continuous for all filters to be processed. The total allowed number of participant   filters is 10 and all filters exceeding that limit will be dropped.
	 * - role.N(optional) the role associated with username.N.   This must be one of AUTHOR, REVIEWER, or PARTICIPANT
	 * - approved.N (optional) the approved status associated with username.N.   That is whether username.N has approved the PR. Either true, or false
	 *
	 */
	async getPage(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests",
			...init,
		)
	}

	/** Create pull request
	 *
	 * Create a new pull request from a source branch or tag to a target branch. The source and target may be in the same repository, or different ones. (Note that different repositories must belong to the same <code>Repository#getHierarchyId()</code> hierarchy.)
	 *
	 * The <code>fromRef</code> may be a branch or a tag. The <code>toRef</code> is required to be a branch. Tags are not allowed as targets because tags are intended to be immutable and should not be changed after they are created.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the <code>fromRef</code> and <code>toRef</code> repositories to call this resource.
	 */
	async create(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests",
			...init,
		)
	}

	/** Get pull request
	 *
	 * Retrieve a pull request.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async get_3(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}",
			...init,
		)
	}

	/** Update pull request metadata
	 *
	 * Update the title, description, reviewers, destination branch or draft status of an existing pull request.
	 *
	 * **Note:** the <em>reviewers</em> list may be updated using this resource. However the <em>author</em> and <em>participants</em> list may not.
	 *
	 * The authenticated user must either:
	 *
	 * - be the author of the pull request and have the <strong>REPO_READ</strong> permission for the repository that this pull request targets; or
	 * - have the <strong>REPO_WRITE</strong> permission for the repository that this pull request targets
	 *
	 *
	 * to call this resource.
	 */
	async update(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}",
			...init,
		)
	}

	/** Delete pull request
	 *
	 * Deletes a pull request.
	 *
	 * To call this resource, users must be authenticated and have permission to view the pull request. Additionally, they must:
	 *
	 * - be the pull request author, if the system is configured to allow authors to delete their own   pull requests (this is the default) OR
	 * - have repository administrator permission for the repository the pull request is targeting
	 *
	 *
	 * A body containing the version of the pull request must be provided with this request.
	 *
	 * `{ "version": 1 }`
	 */
	async delete_3(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}",
			...init,
		)
	}

	/** Stream raw pull request diff
	 *
	 * Streams the raw diff for a pull request.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async streamRawDiff_2(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}.diff"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}.diff"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}.diff"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}.diff",
			...init,
		)
	}

	/** Stream pull request as patch
	 *
	 * Streams a patch representing a pull request.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async streamPatch_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}.patch"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}.patch"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}.patch"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}.patch",
			...init,
		)
	}

	/** Get pull request activity
	 *
	 * Retrieve a page of activity associated with a pull request.
	 *
	 * Activity items include comments, approvals, rescopes (i.e. adding and removing of commits), merges and more.
	 *
	 * Different types of activity items may be introduced in newer versions of Stash or by user installed plugins, so clients should be flexible enough to handle unexpected entity shapes in the returned page.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async getActivities(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/activities"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/activities"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/activities"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/activities",
			...init,
		)
	}

	/** Approve pull request
	 *
	 * Approve a pull request as the current user. Implicitly adds the user as a participant if they are not already.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 *
	 * <strong>Deprecated since 4.2</strong>. Use /rest/api/1.0/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants/{userSlug} instead
	 */
	async approve(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/approve"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/approve"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/approve"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/approve",
			...init,
		)
	}

	/** Unapprove pull request
	 *
	 * Remove approval from a pull request as the current user. This does not remove the user as a participant.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 *
	 * <strong>Deprecated since 4.2</strong>. Use /rest/api/1.0/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants/{userSlug} instead
	 */
	async withdrawApproval(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/approve"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/approve"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/approve"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/approve",
			...init,
		)
	}

	/** Get auto-merge request for pull request
	 *
	 * Returns an auto-merge request for the pull request, if requested.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async getAutoMergeRequest(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/auto-merge"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/auto-merge"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/auto-merge"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/auto-merge",
			...init,
		)
	}

	/** Auto-merge pull request
	 *
	 * Requests the system to try merging the pull request if auto-merge was requested on it.
	 *
	 * The authenticated user must have <strong>REPO_WRITE</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async tryAutoMerge(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/auto-merge"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/auto-merge"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/auto-merge"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/auto-merge",
			...init,
		)
	}

	/** Cancel auto-merge for pull request
	 *
	 * Cancels a request to auto-merge the pull request, if the pull request was not merged yet.
	 *
	 * The authenticated user must have <strong>REPO_WRITE</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async cancelAutoMerge(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/auto-merge"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/auto-merge"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/auto-merge"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/auto-merge",
			...init,
		)
	}

	/** Search pull request comments
	 *
	 * Gets comments matching the given set of field values for the specified pull request. (Note this does <b>not</b> perform any kind of searching for comments by their text).
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async getComments_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments",
			...init,
		)
	}

	/** Add new blocker comment
	 *
	 * Add a new blocker comment.
	 *
	 * Comments can be added in a few places by setting different attributes:
	 *
	 * General pull request blocker comment:
	 * ```
	 *
	 * {
	 *      "text": "A task on a pull request."
	 * }
	 * ```
	 *
	 * Blocker reply to a comment:
	 *
	 * ```
	 *
	 * {
	 *      "text": "This reply is a task.",
	 *      "parent": {
	 *          "id": 1
	 *      }
	 * }
	 * ```
	 *
	 * General blocker file comment:
	 *
	 * ```
	 *
	 * {
	 *      "text": "A blocker comment on a file.",
	 *      "anchor": {
	 *          "diffType": "RANGE",
	 *          "fromHash": "6df3858eeb9a53a911cd17e66a9174d44ffb02cd",
	 *          "path": "path/to/file",
	 *          "srcPath": "path/to/file",
	 *          "toHash": "04c7c5c931b9418ca7b66f51fe934d0bd9b2ba4b"
	 *      }
	 *  }
	 * ```
	 *
	 * Blocker file line comment:
	 *
	 * ```
	 *
	 * {
	 *      "text": "A task on a particular line within a file.",
	 *      "anchor": {
	 *          "diffType": "COMMIT",
	 *          "line": 1,
	 *          "lineType": "CONTEXT",
	 *          "fileType": "FROM",
	 *          "fromHash": "6df3858eeb9a53a911cd17e66a9174d44ffb02cd",
	 *          "path": "path/to/file",
	 *          "srcPath": "path/to/file",
	 *          "toHash": "04c7c5c931b9418ca7b66f51fe934d0bd9b2ba4b"
	 *      }
	 *  }
	 * ```
	 *
	 * For file and line comments, 'path' refers to the path of the file to which the comment should be applied and 'srcPath' refers to the path the that file used to have (only required for copies and moves). Also, fromHash and toHash refer to the sinceId / untilId (respectively) used to produce the diff on which the comment was added. Finally diffType refers to the type of diff the comment was added on. For backwards compatibility purposes if no diffType is provided and no fromHash/toHash pair is provided the diffType will be resolved to 'EFFECTIVE'. In any other cases the diffType is REQUIRED.
	 *
	 * For line comments, 'line' refers to the line in the diff that the comment should apply to. 'lineType' refers to the type of diff hunk, which can be:
	 *
	 * - 'ADDED' - for an added line;
	 * - 'REMOVED' - for a removed line; or
	 * - 'CONTEXT' - for a line that was unmodified but is in the vicinity of the diff.
	 *
	 *
	 * 'fileType' refers to the file of the diff to which the anchor should be attached - which is of relevance when displaying the diff in a side-by-side way. Currently the supported values are:
	 *
	 * - 'FROM' - the source file of the diff
	 *  - 'TO' - the destination file of the diff
	 *
	 *
	 * If the current user is not a participant the user is added as a watcher of the pull request.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async createComment_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments",
			...init,
		)
	}

	/** Get pull request comment
	 *
	 * Retrieves a pull request comment.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async getComment_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments/{commentId}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments/{commentId}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments/{commentId}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments/{commentId}",
			...init,
		)
	}

	/** Update pull request comment
	 *
	 * Update a comment, with the following restrictions:
	 *
	 * - only the author of the comment may update the <i>text</i> of the comment
	 * - only the author of the comment, the author of the pull request or repository admins and above may update   the other fields of a comment
	 *
	 *
	 * Convert a comment to a task or vice versa.
	 *
	 * Comments can be converted to tasks by setting the 'severity' attribute to 'BLOCKER':
	 * ```
	 *
	 * {
	 * "severity": "BLOCKER"
	 * }
	 *
	 * ```
	 *
	 * Tasks can be converted to comments by setting the 'severity' attribute to 'NORMAL': ```
	 *
	 * {
	 * "severity": "NORMAL"
	 * }
	 *
	 * ```
	 *
	 * Resolve a blocker comment.
	 *
	 * Blocker comments can be resolved by setting the 'state' attribute to 'RESOLVED': ```
	 *
	 * {
	 * "state": "RESOLVED"
	 * }
	 * ```
	 *
	 * <strong>Note:</strong> the supplied JSON object must contain a <code>version</code> that must match the server's version of the comment or the update will fail. To determine the current version of the comment, the comment should be fetched from the server prior to the update. Look for the 'version' attribute in the returned JSON structure.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async updateComment_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments/{commentId}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments/{commentId}"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments/{commentId}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments/{commentId}",
			...init,
		)
	}

	/** Delete pull request comment
	 *
	 * Delete a pull request comment. Anyone can delete their own comment. Only users with <strong>REPO_ADMIN</strong> and above may delete comments created by other users.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async deleteComment_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments/{commentId}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments/{commentId}"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments/{commentId}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments/{commentId}",
			...init,
		)
	}

	/** Gets pull request changes
	 *
	 * Gets changes for the specified PullRequest.
	 *
	 * If the changeScope query parameter is set to 'UNREVIEWED', the application will attempt to stream unreviewed changes based on the lastReviewedCommit of the current user, which are the changes between the lastReviewedCommit and the latest commit of the source branch. The current user is considered to <i>not</i> have any unreviewed changes for the pull request when the lastReviewedCommit is either null (everything is unreviewed, so all changes are streamed), equal to the latest commit of the source branch (everything is reviewed), or no longer on the source branch (the source branch has been rebased). In these cases, the application will fall back to streaming all changes (the default), which is the effective diff for the pull request. The type of changes streamed can be determined by the changeScope parameter included in the properties map of the response.
	 *
	 * Note: This resource is currently <i>not paged</i>. The server will return at most one page. The server will truncate the number of changes to either the request's page limit or an internal maximum, whichever is smaller. The start parameter of the page request is also ignored.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async streamChanges_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/changes"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/changes"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/changes"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/changes",
			...init,
		)
	}

	/** Get pull request comments for path
	 *
	 * Gets comments for the specified pull request and path.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async getComments_2(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments",
			...init,
		)
	}

	/** Add pull request comment
	 *
	 * Add a new comment.
	 *
	 * Comments can be added in a few places by setting different attributes: </p>General pull request comment:
	 *  <pre> {
	 *    "text": "An insightful general comment on a pull request."
	 *  }
	 *  </pre> Reply to a comment:  <pre> {
	 *    "text": "A measured reply.",
	 *    "parent": {
	 *       "id": 1
	 *     }
	 *  }
	 *  </pre> General file comment:  <pre> {
	 *    "text": "An insightful general comment on a file.",
	 *    "anchor": {
	 *       "diffType": "RANGE",
	 *       "fromHash": "6df3858eeb9a53a911cd17e66a9174d44ffb02cd",
	 *       "path": "path/to/file",
	 *       "srcPath": "path/to/file",
	 *       "toHash": "04c7c5c931b9418ca7b66f51fe934d0bd9b2ba4b"
	 *    }
	 *  }
	 *  </pre> File line comment:  <pre> {
	 *    "text": "A pithy comment on a particular line within a file.",
	 *    "anchor": {
	 *       "diffType": "COMMIT",
	 *       "line": 1,
	 *       "lineType": "CONTEXT",
	 *       "fileType": "FROM",
	 *       "fromHash": "6df3858eeb9a53a911cd17e66a9174d44ffb02cd",
	 *       "path": "path/to/file",
	 *       "srcPath": "path/to/file",
	 *       "toHash": "04c7c5c931b9418ca7b66f51fe934d0bd9b2ba4b"
	 *     }
	 *  }
	 *  </pre>
	 *
	 *  Add a new task.
	 *
	 * Tasks are just comments with the attribute 'severity' set to 'BLOCKER':
	 *
	 * General pull request task:  <pre> {
	 *    "text": "A task on a pull request.",
	 *    "severity": "BLOCKER"
	 *  }
	 *  </pre>
	 *
	 *  Add a pending comment.
	 *
	 * Pending comments are just comments with the attribute 'state' set to 'PENDING':
	 *
	 * Pending comment: <pre> {
	 *    "text": "This is a pending comment",
	 *    "state": "PENDING"
	 *  }
	 *  </pre>
	 *
	 * For file and line comments, 'path' refers to the path of the file to which the comment should be applied and 'srcPath' refers to the path the that file used to have (only required for copies and moves). Also, fromHash and toHash refer to the sinceId / untilId (respectively) used to produce the diff on which the comment was added. Finally diffType refers to the type of diff the comment was added on. For backwards compatibility purposes if no diffType is provided and no fromHash/toHash pair is provided the diffType will be resolved to 'EFFECTIVE'. In any other cases the diffType is REQUIRED.
	 *
	 * For line comments, 'line' refers to the line in the diff that the comment should apply to. 'lineType' refers to the type of diff hunk, which can be:
	 *
	 * - 'ADDED' - for an added line;
	 * - 'REMOVED' - for a removed line; or
	 * - 'CONTEXT' - for a line that was unmodified but is in the vicinity of the diff.
	 * </ul>'fileType' refers to the file of the diff to which the anchor should be attached - which is of relevance when displaying the diff in a side-by-side way. Currently the supported values are:
	 *
	 * - 'FROM' - the source file of the diff
	 * - 'TO' - the destination file of the diff
	 * </ul>If the current user is not a participant the user is added as a watcher of the pull request.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async createComment_2(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments",
			...init,
		)
	}

	/** Get a pull request comment
	 *
	 * Retrieves a pull request comment.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async getComment_2(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}",
			...init,
		)
	}

	/** Update pull request comment
	 *
	 * Update a comment, with the following restrictions:
	 *
	 * - only the author of the comment may update the <i>text</i> of the comment
	 * - only the author of the comment, the author of the pull request or repository admins and above may update the other fields of a comment
	 * </ul>
	 *
	 * Convert a comment to a task or vice versa.
	 *
	 * Comments can be converted to tasks by setting the 'severity' attribute to 'BLOCKER':
	 *  <pre> {
	 *  "severity": "BLOCKER"
	 *  }
	 *  </pre>
	 *
	 * Tasks can be converted to comments by setting the 'severity' attribute to 'NORMAL':  <pre> {
	 *  "severity": "NORMAL"
	 *  }
	 *  </pre>
	 *
	 * Resolve a task.
	 *
	 * Tasks can be resolved by setting the 'state' attribute to 'RESOLVED':  <pre> {
	 *  "state": "RESOLVED"
	 *  }
	 *  </pre>
	 *
	 * <strong>Note:</strong> the supplied JSON object must contain a <code>version</code> that must match the server's version of the comment or the update will fail. To determine the current version of the comment, the comment should be fetched from the server prior to the update. Look for the 'version' attribute in the returned JSON structure.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async updateComment_2(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}",
			...init,
		)
	}

	/** Delete a pull request comment
	 *
	 * Delete a pull request comment. Anyone can delete their own comment. Only users with <strong>REPO_ADMIN</strong> and above may delete comments created by other users.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async deleteComment_2(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}",
			...init,
		)
	}

	/** Apply pull request suggestion
	 *
	 * Apply a suggestion contained within a comment.
	 */
	async applySuggestion(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}/apply-suggestion"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}/apply-suggestion"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}/apply-suggestion"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}/apply-suggestion",
			...init,
		)
	}

	/** Get commit message suggestion
	 *
	 * Retrieve a suggested commit message for the given Pull Request.
	 */
	async getCommitMessageSuggestion(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/commit-message-suggestion"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/commit-message-suggestion"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/commit-message-suggestion"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/commit-message-suggestion",
			...init,
		)
	}

	/** Get pull request commits
	 *
	 * Retrieve commits for the specified pull request.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async getCommits_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/commits"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/commits"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/commits"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/commits",
			...init,
		)
	}

	/** Decline pull request
	 *
	 * Decline a pull request.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async decline(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/decline"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/decline"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/decline"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/decline",
			...init,
		)
	}

	/** Get diff stats summary for pull request
	 *
	 * Retrieve the diff stats summary for the given Pull Request.
	 *
	 * The stats summary include the total number of modified files, added lines, and deleted lines.
	 *
	 * Note: The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async getDiffStatsSummary_2(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/diff-stats-summary/{path}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/diff-stats-summary/{path}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/diff-stats-summary/{path}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/diff-stats-summary/{path}",
			...init,
		)
	}

	/** Stream a diff within a pull request
	 *
	 * Streams a diff within a pull request.
	 *
	 * If the specified file has been copied, moved or renamed, the <code>srcPath</code> must also be specified to produce the correct diff.
	 *
	 * To stream a raw text representation of the diff, this endpoint can be called with the request header 'Accept: text/plain'.
	 *
	 * Note: This RESTful endpoint is currently <i>not paged</i>. The server will internally apply a hard cap to the streamed lines, and it is not possible to request subsequent pages if that cap is exceeded.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async streamDiff_2(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/diff/{path}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/diff/{path}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/diff/{path}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/diff/{path}",
			...init,
		)
	}

	/** Test if pull request can be merged
	 *
	 * Test whether a pull request can be merged.
	 *
	 * A pull request may not be merged if:
	 *
	 * - there are conflicts that need to be manually resolved before merging; and/or
	 * - one or more merge checks have vetoed the merge.
	 *
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async canMerge(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/merge"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/merge"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/merge"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/merge",
			...init,
		)
	}

	/** Merge pull request
	 *
	 * Merge the specified pull request immediately or set the pull request to auto-merge when all the merge checks pass by setting <strong>autoMerge</strong> field in the request body.
	 *
	 * The authenticated user must have <strong>REPO_WRITE</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async merge(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/merge"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/merge"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/merge"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/merge",
			...init,
		)
	}

	/** Get the common ancestor between the latest commits of the source and target branches of the pull request
	 *
	 * Returns the best common ancestor between the latest commits of the source and target branches of the pull request.
	 *
	 * If more than one best common ancestor exists, only one will be returned. It is unspecified which will be returned.
	 */
	async getMergeBase_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/merge-base"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/merge-base"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/merge-base"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/merge-base",
			...init,
		)
	}

	/** Get pull request participants
	 *
	 * Retrieves a page of the participants for a given pull request.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async listParticipants(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants",
			...init,
		)
	}

	/** Assign pull request participant role
	 *
	 * Assigns a participant to an explicit role in pull request. Currently only the REVIEWER role may be assigned.
	 *
	 * If the user is not yet a participant in the pull request, they are made one and assigned the supplied role.
	 *
	 * If the user is already a participant in the pull request, their previous role is replaced with the supplied role unless they are already assigned the AUTHOR role which cannot be changed and will result in a Bad Request (400) response code.
	 *
	 * The authenticated user must have <strong>REPO_WRITE</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async assignParticipantRole(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants",
			...init,
		)
	}

	/** Unassign pull request participant
	 *
	 * Unassigns a participant from the REVIEWER role they may have been given in a pull request.
	 *
	 * If the participant has no explicit role this method has no effect.
	 *
	 * Afterwards, the user will still remain a participant in the pull request but their role will be reduced to PARTICIPANT. This is because once made a participant of a pull request, a user will forever remain a participant. Only their role may be altered.
	 *
	 * The authenticated user must have <strong>REPO_WRITE</strong> permission for the repository that this pull request targets to call this resource.
	 *
	 * <strong>Deprecated since 4.2</strong>. Use /rest/api/1.0/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants/{userSlug} instead.
	 */
	async unassignParticipantRole_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants",
			...init,
		)
	}

	/** Change pull request status
	 *
	 * Change the current user's status for a pull request. Implicitly adds the user as a participant if they are not already. If the current user is the author, this method will fail.
	 *
	 * The possible values for {@code status} are <strong>UNAPPROVED</strong>, <strong>NEEDS_WORK</strong> (which is referred to as "Requested changes" in the frontend from 8.10 onward), or <strong>APPROVED</strong>.
	 *
	 * If the new {@code status} is <strong>NEEDS_WORK</strong> or <strong>APPROVED</strong> then the {@code lastReviewedCommit} for the participant will be updated to the latest commit of the source branch of the pull request.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async updateStatus(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants/{userSlug}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants/{userSlug}"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants/{userSlug}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants/{userSlug}",
			...init,
		)
	}

	/** Unassign pull request participant
	 *
	 * Unassigns a participant from the REVIEWER role they may have been given in a pull request.
	 *
	 * If the participant has no explicit role this method has no effect.
	 *
	 * Afterwards, the user will still remain a participant in the pull request but their role will be reduced to PARTICIPANT. This is because once made a participant of a pull request, a user will forever remain a participant. Only their role may be altered.
	 *
	 * The authenticated user must have <strong>REPO_WRITE</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async unassignParticipantRole(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants/{userSlug}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants/{userSlug}"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants/{userSlug}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants/{userSlug}",
			...init,
		)
	}

	/** Re-open pull request
	 *
	 * Re-open a declined pull request.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async reopen(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/reopen"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/reopen"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/reopen"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/reopen",
			...init,
		)
	}

	/** Get pull request comment thread
	 *
	 * Get the <code>CommentThread</code> threads which have <code>Comment</code> comments that have a <code>CommentState#PENDING</code> pending state and are part of the pull request review for the authenticated user.
	 */
	async getReview(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/review"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/review"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/review"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/review",
			...init,
		)
	}

	/** Complete pull request review
	 *
	 * Complete a review on a pull request.
	 */
	async finishReview(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/review"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/review"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/review"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/review",
			...init,
		)
	}

	/** Discard pull request review
	 *
	 * Discard a pull request review for the authenticated user.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository to call this resource.
	 */
	async discardReview(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/review"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/review"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/review"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/review",
			...init,
		)
	}

	/** Watch pull request
	 *
	 * Add the authenticated user as a watcher for the specified pull request.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async watch_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/watch"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/watch"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/watch"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/watch",
			...init,
		)
	}

	/** Stop watching pull request
	 *
	 * Remove the authenticated user as a watcher for the specified pull request.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository that this pull request targets to call this resource.
	 */
	async unwatch_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/watch"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/watch"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/watch"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/watch",
			...init,
		)
	}

	/** Get raw content of a file at revision
	 *
	 * Retrieve the raw content for a file path at a specified revision.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the specified repository to call this resource.
	 */
	async streamRaw(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/raw/{path}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/raw/{path}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/raw/{path}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/raw/{path}",
			...init,
		)
	}

	/** Get repository readme
	 *
	 * Retrieves the README for the repository, if it's been defined.
	 *
	 * This checks the repository for a <pre>README</pre> file, optionally with an <pre>md</pre> or <pre>txt</pre>extension, and, if found, streams it. By default, the <i>raw content</i> of the file is streamed. Appending <pre>?markup</pre> to the URL will stream an HTML-rendered version instead. Note that, when streaming HTML, relative URLs in the README will not work if applied relative to this URL.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the specified repository to call this resource.
	 */
	async streamReadme(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/readme"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/readme"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/readme"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/readme",
			...init,
		)
	}

	/** Retry repository creation
	 *
	 * If a create or fork operation fails, calling this method will clean up the broken repository and try again. The repository must be in an INITIALISATION_FAILED state.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project to call this resource.
	 */
	async retryCreateRepository(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/recreate"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/recreate"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/recreate"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/recreate",
			...init,
		)
	}

	/** Get ref change activity
	 *
	 * Retrieve a page of repository ref change activity.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission to call this resource.
	 */
	async getRefChangeActivity(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/ref-change-activities"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/ref-change-activities"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/ref-change-activities"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/ref-change-activities",
			...init,
		)
	}

	/** Get branches with ref change activities for repository
	 *
	 * Retrieve a page of branches with ref change activities for a specific repository.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission to call this resource.
	 */
	async findBranches(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/ref-change-activities/branches"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/ref-change-activities/branches"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/ref-change-activities/branches"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/ref-change-activities/branches",
			...init,
		)
	}

	/** Get related repository
	 *
	 * Retrieve repositories which are related to this one. Related repositories are from the same Repository#getHierarchyId() hierarchy as this repository.
	 *
	 * Only repositories to which the authenticated user has <b>REPO_READ</b> permission will be included, even if more repositories are part of this repository's hierarchy.
	 */
	async getRelatedRepositories(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/related"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/related"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/related"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/related",
			...init,
		)
	}

	/** Find repository secret scanning allowlist rules
	 *
	 * Find repository secret scanning allowlist rules by filtering.
	 *
	 * Repository **Admin** is required
	 */
	async search_2(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist",
			...init,
		)
	}

	/** Create repository secret scanning allowlist rule
	 *
	 * Create a new repository secret scanning allowlist rule. Repository allowlist rules are used when scanning the given repository.
	 *
	 * Repository **Admin** is required
	 */
	async createAllowlistRule_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist",
			...init,
		)
	}

	/** Get a repository secret scanning allowlist rule
	 *
	 * Get a repository secret scanning allowlist rule by ID.
	 *
	 * Repository **Admin** is required
	 */
	async getAllowlistRule_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist/{id}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist/{id}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist/{id}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist/{id}",
			...init,
		)
	}

	/** Edit an existing repository secret scanning allowlist rule
	 *
	 * Edit a repository secret scanning allowlist rule.
	 *
	 * Repository **Admin** is required
	 */
	async editAllowlistRule_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist/{id}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist/{id}"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist/{id}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist/{id}",
			...init,
		)
	}

	/** Delete a repository secret scanning allowlist rule
	 *
	 * Delete a repository secret scanning allowlist rule with the provided ID.
	 *
	 * Repository **Admin** is required
	 */
	async deleteAllowlistRule_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist/{id}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist/{id}"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist/{id}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist/{id}",
			...init,
		)
	}

	/** Get whether a repository is exempt
	 *
	 * Check whether a repository is exempt from secret scanning
	 */
	async isRepoExempt(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/exempt"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/exempt"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/exempt"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/exempt",
			...init,
		)
	}

	/** Exempt a repo from secret scanning
	 *
	 * Exempt a repository from being scanned for secrets
	 *
	 * <strong>Deprecated since 8.6</strong>. Exemptions are now managed by scope.
	 * Use POST /rest/api/1.0/secret-scanning/exempt for global scope
	 * Use POST /rest/api/1.0/projects/{projectKey}/secret-scanning/exempt for the project scope
	 */
	async addExemptRepo(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/exempt"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/exempt"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/exempt"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/exempt",
			...init,
		)
	}

	/** Delete an exempt repository
	 *
	 * Remove a repository from being exempt from secret scanning
	 */
	async deleteExemptRepo(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/exempt"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/exempt"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/exempt"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/exempt",
			...init,
		)
	}

	/** Find repository secret scanning rules
	 *
	 * Find repository secret scanning rules by filtering.
	 *
	 * Repository **Admin** is required
	 */
	async search_3(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules",
			...init,
		)
	}

	/** Create repository secret scanning rule
	 *
	 * Create a new repository secret scanning rule. Repository rules are used when scanning the given repository.
	 *
	 * Repository **Admin** is required
	 */
	async createRule_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules",
			...init,
		)
	}

	/** Get a repository secret scanning rule
	 *
	 * Get a repository secret scanning rule by ID.
	 *
	 * Repository **Admin** is required
	 */
	async getRule_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules/{id}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules/{id}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules/{id}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules/{id}",
			...init,
		)
	}

	/** Edit an existing repository secret scanning rule
	 *
	 * Edit a repository secret scanning rule.
	 *
	 * Repository **Admin** is required
	 */
	async editRule_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules/{id}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules/{id}"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules/{id}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules/{id}",
			...init,
		)
	}

	/** Delete a repository secret scanning rule
	 *
	 * Delete a repository secret scanning rule with the provided ID.
	 *
	 * Repository **Admin** is required
	 */
	async deleteRule_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules/{id}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules/{id}"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules/{id}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules/{id}",
			...init,
		)
	}

	/** Get auto decline settings
	 *
	 * Retrieves the auto decline settings for the supplied repository. Project settings will be returned if no explicit settings have been set for the repository. In the case that there are no project settings, the default settings will be returned.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for this repository to call the resource.
	 */
	async getAutoDeclineSettings_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-decline"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-decline"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-decline"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-decline",
			...init,
		)
	}

	/** Create auto decline settings
	 *
	 * Creates or updates the auto decline settings for the supplied repository.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for this repository to call the resource
	 */
	async setAutoDeclineSettings_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-decline"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-decline"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-decline"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-decline",
			...init,
		)
	}

	/** Delete auto decline settings
	 *
	 * Delete auto decline settings for the supplied repository.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for this repository to call the resource.
	 */
	async deleteAutoDeclineSettings_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-decline"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-decline"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-decline"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-decline",
			...init,
		)
	}

	/** Get pull request auto-merge settings
	 *
	 * Retrieves the pull request auto-merge settings for the supplied repository. Project settings will be returned if no explicit settings have been set for the repository. In the case that there are no project settings, the default settings will be returned. If the repository's project has restricted its auto-merge settings, then the settings of the project will be returned.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for this repository to call the resource.
	 */
	async get_5(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-merge"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-merge"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-merge"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-merge",
			...init,
		)
	}

	/** Create or update the pull request auto-merge settings
	 *
	 * Creates or updates the pull request auto-merge settings for the supplied repository.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for this repository to call the resource.
	 */
	async set_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-merge"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-merge"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-merge"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-merge",
			...init,
		)
	}

	/** Delete pull request auto-merge settings
	 *
	 * Deletes pull request auto-merge settings for the supplied repository.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for this repository to call the resource.
	 */
	async delete_5(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-merge"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-merge"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-merge"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-merge",
			...init,
		)
	}

	/** Get repository hooks
	 *
	 * Retrieve a page of repository hooks for this repository.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository to call this resource.
	 */
	async getRepositoryHooks_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks",
			...init,
		)
	}

	/** Get repository hook
	 *
	 * Retrieve a repository hook for this repository.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository to call this resource.
	 */
	async getRepositoryHook_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}",
			...init,
		)
	}

	/** Delete repository hook
	 *
	 * Delete repository hook configuration for the supplied <strong>hookKey</strong> and <strong>repositorySlug</strong>
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository to call this resource.
	 */
	async deleteRepositoryHook(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}",
			...init,
		)
	}

	/** Enable repository hook
	 *
	 * Enable a repository hook for this repository and optionally apply new configuration.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository to call this resource.
	 *
	 * A JSON document may be provided to use as the settings for the hook. These structure and validity of the document is decided by the plugin providing the hook.
	 */
	async enableHook_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}/enabled"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}/enabled"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}/enabled"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}/enabled",
			...init,
		)
	}

	/** Disable repository hook
	 *
	 * Disable a repository hook for this repository.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository to call this resource.
	 */
	async disableHook_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}/enabled"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}/enabled"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}/enabled"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}/enabled",
			...init,
		)
	}

	/** Get repository hook settings
	 *
	 * Retrieve the settings for a repository hook for this repository.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository to call this resource.
	 */
	async getSettings_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}/settings"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}/settings"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}/settings"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}/settings",
			...init,
		)
	}

	/** Update repository hook settings
	 *
	 * Modify the settings for a repository hook for this repository.
	 *
	 * The service will reject any settings which are too large, the current limit is 32KB once serialized.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository to call this resource.
	 *
	 * A JSON document can be provided to use as the settings for the hook. These structure and validity of the document is decided by the plugin providing the hook.
	 */
	async setSettings_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}/settings"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}/settings"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}/settings"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}/settings",
			...init,
		)
	}

	/** Get pull request settings
	 *
	 * Retrieve the pull request settings for the context repository.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the context repository to call this resource.
	 *
	 * This resource will call all RestFragments that are registered with the key <strong>bitbucket.repository.settings.pullRequests</strong>. If any fragment fails validations by returning a non-empty Map of errors, then no fragments will execute.
	 *
	 * The property keys for the settings that are bundled with the application are
	 *
	 * - mergeConfig - the merge strategy configuration for pull requests
	 * - requiredApprovers - (Deprecated, please use com.atlassian.bitbucket.server.bundled-hooks.requiredApproversMergeHook instead) the number of approvals required on a pull request for it to be mergeable, or 0 if the merge check is disabled
	 * - com.atlassian.bitbucket.server.bundled-hooks.requiredApproversMergeHook - the merge check configuration for required approvers
	 * - requiredAllApprovers - whether or not all approvers must approve a pull request for it to be mergeable
	 * - requiredAllTasksComplete - whether or not all tasks on a pull request need to be completed for it to be mergeable
	 * - requiredSuccessfulBuilds - (Deprecated, please use com.atlassian.bitbucket.server.bitbucket-build.requiredBuildsMergeCheck instead) the number of successful builds on a pull request for it to be mergeable, or 0 if the merge check is disabled
	 * - com.atlassian.bitbucket.server.bitbucket-build.requiredBuildsMergeCheck - the merge check configuration for required builds
	 *
	 *
	 *
	 */
	async getPullRequestSettings_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/pull-requests"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/pull-requests"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/pull-requests"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/pull-requests",
			...init,
		)
	}

	/** Update pull request settings
	 *
	 * Update the pull request settings for the context repository.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the context repository to call this resource.
	 *
	 * This resource will call all RestFragments that are registered with the key <strong>bitbucket.repository.settings.pullRequests</strong>. If any fragment fails validations by returning a non-empty Map of errors, then no fragments will execute.
	 *
	 * Only the settings that should be updated need to be included in the request.
	 *
	 * The property keys for the settings that are bundled with the application are
	 *
	 * - mergeConfig - the merge strategy configuration for pull requests
	 * - requiredApprovers - (Deprecated, please use com.atlassian.bitbucket.server.bundled-hooks.requiredApproversMergeHook instead) the number of approvals required on a pull request for it to be mergeable, or 0 to disable the merge check
	 * - com.atlassian.bitbucket.server.bundled-hooks.requiredApproversMergeHook - a json map containing the keys 'enabled' (a boolean to enable or disable this merge check) and 'count' (an integer to set the number of required approvals)
	 * - requiredAllApprovers - whether or not all approvers must approve a pull request for it to be mergeable
	 * - requiredAllTasksComplete - whether or not all tasks on a pull request need to be completed for it to be mergeable
	 * - requiredSuccessfulBuilds - (Deprecated, please use com.atlassian.bitbucket.server.bitbucket-build.requiredBuildsMergeCheck instead) the number of successful builds on a pull request for it to be mergeable, or 0 to disable the merge check
	 * - com.atlassian.bitbucket.server.bitbucket-build.requiredBuildsMergeCheck - a json map containing the keys 'enabled' (a boolean to enable or disable this merge check) and 'count' (an integer to set the number of required builds)
	 *
	 *
	 * <strong>Merge strategy configuration deletion:</strong>
	 *
	 * An explicitly set pull request merge strategy configuration can be deleted by POSTing a document with an empty "mergeConfig" attribute. i.e:
	 *
	 *
	 * ```{
	 *     "mergeConfig": {
	 *     }
	 * }
	 * ```
	 *
	 * Upon completion of this request, the effective configuration will be:
	 *
	 * - The configuration set for this repository's SCM type as set at the project level, if present, otherwise
	 * - the configuration set for this repository's SCM type as set at the instance level, if present, otherwise
	 * - the default configuration for this repository's SCM type
	 *
	 *
	 *
	 */
	async updatePullRequestSettings_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/pull-requests"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/pull-requests"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/pull-requests"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/pull-requests",
			...init,
		)
	}

	/** Get all reviewer groups
	 *
	 * Retrieve a page of reviewer groups of a given scope.
	 *
	 * The authenticated user must have <b>REPO_READ</b> permission for the specified repository to call this resource.
	 */
	async getReviewerGroups_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups",
			...init,
		)
	}

	/** Create reviewer group
	 *
	 * Create a reviewer group.
	 *
	 * The authenticated user must have <b>REPO_ADMIN</b> permission for the specified repository to call this resource.
	 */
	async create_2(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups",
			...init,
		)
	}

	/** Get reviewer group
	 *
	 * Retrieve a reviewer group.
	 *
	 * The authenticated user must have <b>REPO_READ</b> permission for the specified repository to call this resource.
	 */
	async getReviewerGroup_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups/{id}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups/{id}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups/{id}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups/{id}",
			...init,
		)
	}

	/** Update reviewer group attributes
	 *
	 * Update the attributes of a reviewer group.
	 *
	 * The authenticated user must have <b>REPO_ADMIN</b> permission for the specified repository to call this resource.
	 */
	async update_2(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups/{id}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups/{id}"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups/{id}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups/{id}",
			...init,
		)
	}

	/** Delete reviewer group
	 *
	 * Deletes a reviewer group.
	 *
	 * The authenticated user must have <b>REPO_ADMIN</b> permission for the specified repository to call this resource.
	 */
	async delete_7(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups/{id}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups/{id}"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups/{id}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups/{id}",
			...init,
		)
	}

	/** Get reviewer group users
	 *
	 * Retrieve a list of the users of a reviewer group.
	 *
	 * This does not return all the users of the group, only the users who are licensed and have <b>REPO_READ</b> permission for the specified repository.
	 *
	 * The authenticated user must have <b>REPO_READ</b> permission for the specified repository to call this resource.
	 */
	async getUsers(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups/{id}/users"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups/{id}/users"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups/{id}/users"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups/{id}/users",
			...init,
		)
	}

	/** Find tag
	 *
	 * Retrieve the tags matching the supplied <strong>filterText</strong> param.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the context repository to call this resource.
	 */
	async getTags(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/tags"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/tags"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/tags"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/tags",
			...init,
		)
	}

	/** Create tag
	 *
	 * Creates a tag using the information provided in the RestCreateTagRequest request
	 *
	 * The authenticated user must have <strong>REPO_WRITE</strong> permission for the context repository to call this resource.
	 */
	async createTagForRepository(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/tags"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/tags"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/tags"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/tags",
			...init,
		)
	}

	/** Get tag
	 *
	 * Retrieve a tag in the specified repository.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the context repository to call this resource.
	 */
	async getTag(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/tags/{name}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/tags/{name}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/tags/{name}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/tags/{name}",
			...init,
		)
	}

	/** Watch repository
	 *
	 * Add the authenticated user as a watcher for the specified repository.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository to call this resource.
	 */
	async watch_2(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/watch"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/watch"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/watch"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/watch",
			...init,
		)
	}

	/** Stop watching repository
	 *
	 * Remove the authenticated user as a watcher for the specified repository.
	 *
	 * The authenticated user must have <strong>REPO_READ</strong> permission for the repository to call this resource.
	 */
	async unwatch_2(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/watch"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/watch"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/watch"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/watch",
			...init,
		)
	}

	/** Find webhooks
	 *
	 * Find webhooks in this repository.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository to call this resource.
	 */
	async findWebhooks_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks",
			...init,
		)
	}

	/** Create webhook
	 *
	 * Create a webhook for the repository specified via the URL.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository to call this resource.
	 */
	async createWebhook_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks",
			...init,
		)
	}

	/** Search webhooks
	 *
	 * Search webhooks in this repository and parent project. This endpoint returns a superset of the results returned by the /webhooks endpoint because it allows filtering by project scope too, not just repository webhooks.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository to call this resource.
	 */
	async searchWebhooks(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/search"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/search"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/search"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/search",
			...init,
		)
	}

	/** Test webhook
	 *
	 * Test connectivity to a specific endpoint.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository to call this resource.
	 */
	async testWebhook_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/test"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/test"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/test"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/test",
			...init,
		)
	}

	/** Get webhook
	 *
	 * Get a webhook by ID.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository to call this resource.
	 */
	async getWebhook_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}",
			...init,
		)
	}

	/** Update webhook
	 *
	 * Update an existing webhook.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository to call this resource.
	 */
	async updateWebhook_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}",
			...init,
		)
	}

	/** Delete webhook
	 *
	 * Delete a webhook for the repository specified via the URL.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository to call this resource.
	 */
	async deleteWebhook_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}",
			...init,
		)
	}

	/** Get last webhook invocation details
	 *
	 * Get the latest invocations for a specific webhook.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository to call this resource.
	 */
	async getLatestInvocation_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}/latest"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}/latest"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}/latest"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}/latest",
			...init,
		)
	}

	/** Get webhook statistics
	 *
	 * Get the statistics for a specific webhook.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository to call this resource.
	 */
	async getStatistics_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}/statistics"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}/statistics"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}/statistics"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}/statistics",
			...init,
		)
	}

	/** Get webhook statistics summary
	 *
	 * Get the statistics summary for a specific webhook.
	 *
	 * The authenticated user must have <strong>REPO_ADMIN</strong> permission for the specified repository to call this resource.
	 */
	async getStatisticsSummary_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}/statistics/summary"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}/statistics/summary"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}/statistics/summary"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}/statistics/summary",
			...init,
		)
	}

	/** Find project secret scanning allowlist rules
	 *
	 * Find project secret scanning allowlist rules by filtering.
	 *
	 * Project **Admin** is required
	 */
	async searchAllowlistRule(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/secret-scanning/allowlist"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/secret-scanning/allowlist"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/secret-scanning/allowlist"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/secret-scanning/allowlist",
			...init,
		)
	}

	/** Create project secret scanning allowlist rule
	 *
	 * Create a new project level secret scanning allowlist rule. Project allowlist rules are used when scanning all non exempt repositories in the provided project.
	 *
	 * Project **Admin** is required
	 */
	async createAllowlistRule(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/secret-scanning/allowlist"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/secret-scanning/allowlist"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/secret-scanning/allowlist"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/secret-scanning/allowlist",
			...init,
		)
	}

	/** Get a project secret scanning allowlist rule
	 *
	 * Get a project secret scanning allowlist rule by ID.
	 *
	 * Project **Admin** is required
	 */
	async getAllowlistRule(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/secret-scanning/allowlist/{id}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/secret-scanning/allowlist/{id}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/secret-scanning/allowlist/{id}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/secret-scanning/allowlist/{id}",
			...init,
		)
	}

	/** Edit an existing project secret scanning allowlist rule
	 *
	 * Edit a project secret scanning allowlist rule.
	 *
	 * Project **Admin** is required
	 */
	async editAllowlistRule(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/secret-scanning/allowlist/{id}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/secret-scanning/allowlist/{id}"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/secret-scanning/allowlist/{id}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/secret-scanning/allowlist/{id}",
			...init,
		)
	}

	/** Delete a project secret scanning allowlist rule
	 *
	 * Delete a project secret scanning allowlist rule with the provided ID.
	 *
	 * Project **Admin** is required
	 */
	async deleteAllowlistRule(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/secret-scanning/allowlist/{id}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/secret-scanning/allowlist/{id}"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/secret-scanning/allowlist/{id}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/secret-scanning/allowlist/{id}",
			...init,
		)
	}

	/** Find repos exempt from secret scanning for a project
	 *
	 * Find repositories exempt from secret scanning in a project
	 */
	async findExemptReposByProject(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/secret-scanning/exempt"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/secret-scanning/exempt"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/secret-scanning/exempt"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/secret-scanning/exempt",
			...init,
		)
	}

	/** Bulk exempt repos from secret scanning
	 *
	 * Bulk exempt a  list of repositories from being scanned for secrets. User must be have **PROJECT ADMIN** permissions.
	 */
	async bulkAddExemptRepositories_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/secret-scanning/exempt"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/secret-scanning/exempt"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/secret-scanning/exempt"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/secret-scanning/exempt",
			...init,
		)
	}

	/** Find project secret scanning rules
	 *
	 * Find project secret scanning rules by filtering.
	 *
	 * Project **Admin** is required
	 */
	async search_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/secret-scanning/rules"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/secret-scanning/rules"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/secret-scanning/rules"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/secret-scanning/rules",
			...init,
		)
	}

	/** Create project secret scanning rule
	 *
	 * Create a new project level secret scanning rule. Project rules are used when scanning all non exempt repositories in the provided project.
	 *
	 * Project **Admin** is required
	 */
	async createRule(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/secret-scanning/rules"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/secret-scanning/rules"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/secret-scanning/rules"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/secret-scanning/rules",
			...init,
		)
	}

	/** Get a project secret scanning rule
	 *
	 * Get a project secret scanning rule by ID.
	 *
	 * Project **Admin** is required
	 */
	async getRule(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/secret-scanning/rules/{id}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/secret-scanning/rules/{id}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/secret-scanning/rules/{id}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/secret-scanning/rules/{id}",
			...init,
		)
	}

	/** Edit an existing project secret scanning rule
	 *
	 * Edit a project secret scanning rule.
	 *
	 * Project **Admin** is required
	 */
	async editRule(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/secret-scanning/rules/{id}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/secret-scanning/rules/{id}"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/secret-scanning/rules/{id}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/secret-scanning/rules/{id}",
			...init,
		)
	}

	/** Delete a project secret scanning rule
	 *
	 * Delete a project secret scanning rule with the provided ID.
	 *
	 * Project **Admin** is required
	 */
	async deleteRule(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/secret-scanning/rules/{id}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/secret-scanning/rules/{id}"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/secret-scanning/rules/{id}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/secret-scanning/rules/{id}",
			...init,
		)
	}

	/** Get enforcing project setting
	 *
	 * Get a specified project settings restriction for the given namespace, feature key and component key.
	 * Note that not providing the component key will **not** return restrictions for the namespace and feature key with a component key set.
	 *
	 * The authenticated user must have **PROJECT_VIEW** permission for the target project to retrieve a settings restriction.
	 */
	async get_7(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings-restriction"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/settings-restriction"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings-restriction"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/settings-restriction",
			...init,
		)
	}

	/** Enforce project restriction
	 *
	 * Create a new project settings restriction for the given project.
	 *
	 * The authenticated user must have **PROJECT_ADMIN** permission for the target project to create a settings restriction.
	 */
	async create_3(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings-restriction"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/settings-restriction"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings-restriction"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/settings-restriction",
			...init,
		)
	}

	/** Stop enforcing project restriction
	 *
	 * Delete a specified project settings restriction.
	 *
	 * If a restriction does not exist for the specified project, namespace, featureKey, and componentKey, the request will be ignored and a 204 response will be returned.
	 *
	 * The authenticated user must have **PROJECT_ADMIN** permission for the target project to delete a settings restriction.
	 */
	async delete_9(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings-restriction"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/settings-restriction"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings-restriction"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/settings-restriction",
			...init,
		)
	}

	/** Get all enforcing project settings
	 *
	 * Get all project settings restrictions for the given namespace and feature key, including those with a component key set.
	 *
	 * The authenticated user must have **PROJECT_VIEW** permission for the target project to retrieve a settings restrictions.
	 */
	async getAll(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings-restriction/all"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/settings-restriction/all"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings-restriction/all"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/settings-restriction/all",
			...init,
		)
	}

	/** Get auto decline settings
	 *
	 * Retrieves the auto decline settings for the supplied project. Default settings are returned if no explicit settings have been set for the project.
	 */
	async getAutoDeclineSettings(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/auto-decline"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/settings/auto-decline"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/auto-decline"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/settings/auto-decline",
			...init,
		)
	}

	/** Create/Update auto decline settings
	 *
	 * Creates or updates the auto decline settings for the supplied project.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for this project to call the resource.
	 */
	async setAutoDeclineSettings(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/auto-decline"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/settings/auto-decline"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/auto-decline"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/settings/auto-decline",
			...init,
		)
	}

	/** Delete auto decline settings
	 *
	 * Delete auto decline settings for the supplied project.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for this project to call the resource.
	 */
	async deleteAutoDeclineSettings(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/auto-decline"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/settings/auto-decline"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/auto-decline"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/settings/auto-decline",
			...init,
		)
	}

	/** Get pull request auto-merge settings
	 *
	 * Retrieves the pull request auto-merge settings for the supplied project. Default settings will be returned if no explicit settings have been set for the project
	 *
	 * The authenticated user must have <strong>PROJECT_VIEW</strong> permission for this project to call the resource.
	 */
	async get_4(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/auto-merge"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/settings/auto-merge"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/auto-merge"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/settings/auto-merge",
			...init,
		)
	}

	/** Create or update the pull request auto-merge settings
	 *
	 * Creates or updates the pull request auto-merge settings for the supplied project, and applies the restriction action specified in the request.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for this project to call the resource.
	 */
	async set(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/auto-merge"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/settings/auto-merge"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/auto-merge"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/settings/auto-merge",
			...init,
		)
	}

	/** Delete pull request auto-merge settings
	 *
	 * Deletes pull request auto-merge settings for the supplied project.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for this project to call the resource.
	 */
	async delete_4(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/auto-merge"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/settings/auto-merge"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/auto-merge"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/settings/auto-merge",
			...init,
		)
	}

	/** Get repository hooks
	 *
	 * Retrieve a page of repository hooks for this project.
	 *
	 * The authenticated user must have <strong>PROJECT_READ</strong> permission for the specified project to call this resource.
	 */
	async getRepositoryHooks(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/hooks"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/settings/hooks"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/hooks"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/settings/hooks",
			...init,
		)
	}

	/** Get a repository hook
	 *
	 * Retrieve a repository hook for this project.
	 *
	 * The authenticated user must have <strong>PROJECT_READ</strong> permission for the specified project to call this resource.
	 */
	async getRepositoryHook(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/hooks/{hookKey}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/settings/hooks/{hookKey}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/hooks/{hookKey}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/settings/hooks/{hookKey}",
			...init,
		)
	}

	/** Enable repository hook
	 *
	 * Enable a repository hook for this project and optionally apply new configuration.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project to call this resource.
	 *
	 * A JSON document may be provided to use as the settings for the hook. These structure and validity of the document is decided by the plugin providing the hook.
	 */
	async enableHook(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/hooks/{hookKey}/enabled"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/settings/hooks/{hookKey}/enabled"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/hooks/{hookKey}/enabled"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/settings/hooks/{hookKey}/enabled",
			...init,
		)
	}

	/** Disable repository hook
	 *
	 * Disable a repository hook for this project.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project to call this resource.
	 */
	async disableHook(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/hooks/{hookKey}/enabled"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/settings/hooks/{hookKey}/enabled"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/hooks/{hookKey}/enabled"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/settings/hooks/{hookKey}/enabled",
			...init,
		)
	}

	/** Get repository hook settings
	 *
	 * Retrieve the settings for a repository hook for this project.
	 *
	 * The authenticated user must have <strong>PROJECT_READ</strong> permission for the specified project to call this resource.
	 */
	async getSettings(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/hooks/{hookKey}/settings"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/settings/hooks/{hookKey}/settings"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/hooks/{hookKey}/settings"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/settings/hooks/{hookKey}/settings",
			...init,
		)
	}

	/** Update repository hook settings
	 *
	 * Modify the settings for a repository hook for this project.
	 *
	 * The service will reject any settings which are too large, the current limit is 32KB once serialized.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project to call this resource.
	 *
	 * A JSON document can be provided to use as the settings for the hook. These structure and validity of the document is decided by the plugin providing the hook.
	 */
	async setSettings(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/hooks/{hookKey}/settings"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/settings/hooks/{hookKey}/settings"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/hooks/{hookKey}/settings"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/settings/hooks/{hookKey}/settings",
			...init,
		)
	}

	/** Get merge strategy
	 *
	 * Retrieve the merge strategy configuration for this project and SCM.
	 *
	 * The authenticated user must have <strong>PROJECT_READ</strong> permission for the context repository to call this resource.
	 */
	async getPullRequestSettings(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/pull-requests/{scmId}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/settings/pull-requests/{scmId}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/pull-requests/{scmId}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/settings/pull-requests/{scmId}",
			...init,
		)
	}

	/** Update merge strategy
	 *
	 * Update the pull request merge strategy configuration for this project and SCM.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the context repository to call this resource.
	 *
	 * Only the strategies provided will be enabled, the default must be set and included in the set of strategies.
	 *
	 * An explicitly set pull request merge strategy configuration can be deleted by POSTing a document with an empty "mergeConfig" attribute. i.e:
	 * <pre>{
	 *     "mergeConfig": {}
	 * }
	 * </pre>
	 *
	 * Upon completion of this request, the effective configuration will be the configuration explicitly set for the SCM, or if no such explicit configuration is set then the default configuration will be used.
	 */
	async updatePullRequestSettings(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/pull-requests/{scmId}"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/settings/pull-requests/{scmId}"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/pull-requests/{scmId}"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/settings/pull-requests/{scmId}",
			...init,
		)
	}

	/** Get all reviewer groups
	 *
	 * Retrieve a page of reviewer groups of a given scope.
	 *
	 * The authenticated user must have <b>PROJECT_READ</b> permission for the specified project to call this resource.
	 */
	async getReviewerGroups(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/reviewer-groups"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/settings/reviewer-groups"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/reviewer-groups"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/settings/reviewer-groups",
			...init,
		)
	}

	/** Create reviewer group
	 *
	 * Create a reviewer group.
	 *
	 * The authenticated user must have <b>PROJECT_ADMIN</b> permission for the specified project to call this resource.
	 */
	async create_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/reviewer-groups"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/settings/reviewer-groups"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/reviewer-groups"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/settings/reviewer-groups",
			...init,
		)
	}

	/** Get reviewer group
	 *
	 * Retrieve a reviewer group.
	 *
	 * The authenticated user must have <b>PROJECT_READ</b> permission for the specified project to call this resource.
	 */
	async getReviewerGroup(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/reviewer-groups/{id}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/settings/reviewer-groups/{id}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/reviewer-groups/{id}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/settings/reviewer-groups/{id}",
			...init,
		)
	}

	/** Update reviewer group attributes
	 *
	 * Update the attributes of a reviewer group.
	 *
	 * The authenticated user must have <b>PROJECT_READ</b> permission for the specified project to call this resource.
	 */
	async update_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/reviewer-groups/{id}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/settings/reviewer-groups/{id}"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/reviewer-groups/{id}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/settings/reviewer-groups/{id}",
			...init,
		)
	}

	/** Delete reviewer group
	 *
	 * Deletes a reviewer group.
	 *
	 * The authenticated user must have <b>PROJECT_ADMIN</b> permission for the specified project to call this resource.
	 */
	async delete_6(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/reviewer-groups/{id}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/settings/reviewer-groups/{id}"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/settings/reviewer-groups/{id}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/settings/reviewer-groups/{id}",
			...init,
		)
	}

	/** Find webhooks
	 *
	 * Find webhooks in this project.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project to call this resource.
	 */
	async findWebhooks(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/webhooks"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/webhooks"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/webhooks"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/webhooks",
			...init,
		)
	}

	/** Create webhook
	 *
	 * Create a webhook for the project specified via the URL.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project to call this resource.
	 */
	async createWebhook(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/webhooks"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/webhooks"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/webhooks"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/webhooks",
			...init,
		)
	}

	/** Test webhook
	 *
	 * Test connectivity to a specific endpoint.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project to call this resource.
	 */
	async testWebhook(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/webhooks/test"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/webhooks/test"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/webhooks/test"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/projects/{projectKey}/webhooks/test",
			...init,
		)
	}

	/** Get webhook
	 *
	 * Get a webhook by ID.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project to call this resource.
	 */
	async getWebhook(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/webhooks/{webhookId}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/webhooks/{webhookId}"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/webhooks/{webhookId}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/webhooks/{webhookId}",
			...init,
		)
	}

	/** Update webhook
	 *
	 * Update an existing webhook.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project to call this resource.
	 */
	async updateWebhook(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/webhooks/{webhookId}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/webhooks/{webhookId}"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/webhooks/{webhookId}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/projects/{projectKey}/webhooks/{webhookId}",
			...init,
		)
	}

	/** Delete webhook
	 *
	 * Delete a webhook for the project specified via the URL.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project to call this resource.
	 */
	async deleteWebhook(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/webhooks/{webhookId}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/webhooks/{webhookId}"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/webhooks/{webhookId}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/projects/{projectKey}/webhooks/{webhookId}",
			...init,
		)
	}

	/** Get last webhook invocation details
	 *
	 * Get the latest invocations for a specific webhook.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project to call this resource.
	 */
	async getLatestInvocation(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/webhooks/{webhookId}/latest"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/webhooks/{webhookId}/latest"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/webhooks/{webhookId}/latest"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/webhooks/{webhookId}/latest",
			...init,
		)
	}

	/** Get webhook statistics
	 *
	 * Get the statistics for a specific webhook.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project to call this resource.
	 */
	async getStatistics(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/webhooks/{webhookId}/statistics"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/webhooks/{webhookId}/statistics"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/webhooks/{webhookId}/statistics"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/webhooks/{webhookId}/statistics",
			...init,
		)
	}

	/** Get webhook statistics summary
	 *
	 * Get the statistics summary for a specific webhook.
	 *
	 * The authenticated user must have <strong>PROJECT_ADMIN</strong> permission for the specified project to call this resource.
	 */
	async getStatisticsSummary(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/webhooks/{webhookId}/statistics/summary"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/projects/{projectKey}/webhooks/{webhookId}/statistics/summary"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/projects/{projectKey}/webhooks/{webhookId}/statistics/summary"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/projects/{projectKey}/webhooks/{webhookId}/statistics/summary",
			...init,
		)
	}

	/** Search for repositories
	 *
	 * Retrieve a page of repositories based on query parameters that control the search. See the documentation of the parameters for more details.
	 *
	 * This resource is anonymously accessible.
	 *
	 * <b>Note on permissions.</b> In absence of the <code>permission</code> query parameter the implicit 'read' permission is assumed. Please note that this permission is lower than the <tt>REPO_READ</tt> permission rather than being equal to it. The implicit 'read' permission for a given repository is assigned to any user that has any of the higher permissions, such as <tt>REPO_READ</tt>, as well as to anonymous users if the repository is marked as public. The important implication of the above is that an anonymous request to this resource with a permission level <tt>REPO_READ</tt> is guaranteed to receive an empty list of repositories as a result. For anonymous requests it is therefore recommended to not specify the <tt>permission</tt> parameter at all.
	 */
	async getRepositories_1(
		...init: InitParam<MaybeOptionalInit<paths["/api/latest/repos"], "get">>
	): Promise<
		FetchResponse<
			paths["/api/latest/repos"]["get"],
			MaybeOptionalInit<paths["/api/latest/repos"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request("get", "/api/latest/repos", ...init)
	}

	/** Find all repos exempt from secret scan
	 *
	 * Find all repositories exempt from secret scanning
	 */
	async findExemptReposByScope(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/secret-scanning/exempt"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/secret-scanning/exempt"]["get"],
			MaybeOptionalInit<paths["/api/latest/secret-scanning/exempt"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/secret-scanning/exempt",
			...init,
		)
	}

	/** Bulk exempt repos from secret scanning
	 *
	 * Bulk exempt a  list of repositories from being scanned for secrets. User must be have global **ADMIN** permissions.
	 */
	async bulkAddExemptRepositories(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/secret-scanning/exempt"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/secret-scanning/exempt"]["post"],
			MaybeOptionalInit<paths["/api/latest/secret-scanning/exempt"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/secret-scanning/exempt",
			...init,
		)
	}

	/** Find global secret scanning rules
	 *
	 * Find global secret scanning rules by filtering.
	 */
	async search_4(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/secret-scanning/rules"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/secret-scanning/rules"]["get"],
			MaybeOptionalInit<paths["/api/latest/secret-scanning/rules"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/secret-scanning/rules",
			...init,
		)
	}

	/** Create global secret scanning rule
	 *
	 * Create a new global secret scanning rule. Global rules are used when scanning all non exempt repositories.
	 */
	async createRule_2(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/secret-scanning/rules"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/secret-scanning/rules"]["post"],
			MaybeOptionalInit<paths["/api/latest/secret-scanning/rules"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/secret-scanning/rules",
			...init,
		)
	}

	/** Get a global secret scanning rule
	 *
	 * Get a global secret scanning rule by ID.
	 */
	async getRule_2(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/secret-scanning/rules/{id}"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/secret-scanning/rules/{id}"]["get"],
			MaybeOptionalInit<paths["/api/latest/secret-scanning/rules/{id}"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/secret-scanning/rules/{id}",
			...init,
		)
	}

	/** Edit a global secret scanning rule.
	 *
	 * Edit an existing global secret scanning rule
	 */
	async editRule_2(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/secret-scanning/rules/{id}"], "put">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/secret-scanning/rules/{id}"]["put"],
			MaybeOptionalInit<paths["/api/latest/secret-scanning/rules/{id}"], "put">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/secret-scanning/rules/{id}",
			...init,
		)
	}

	/** Delete a global secret scanning rule
	 *
	 * Delete a global secret scanning rule with the provided ID
	 */
	async deleteRule_2(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/secret-scanning/rules/{id}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/secret-scanning/rules/{id}"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/secret-scanning/rules/{id}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/secret-scanning/rules/{id}",
			...init,
		)
	}

	/** Get all X.509 certificates
	 *
	 * Get all X.509 certificates that have been added to the system.
	 *
	 * The authenticated user must have the <strong>ADMIN</strong> permission to call this resource.
	 */
	async getAllCertificates(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/signing/x509-certificates"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/signing/x509-certificates"]["get"],
			MaybeOptionalInit<paths["/api/latest/signing/x509-certificates"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/signing/x509-certificates",
			...init,
		)
	}

	/** Create an X.509 certificate
	 *
	 * Create an X.509 certificate. This will add the given X.509 certificate to the system. Existing entries will not be overridden if an X.509 certificate already exists. Once added, an X.509 certificate cannot be updated.
	 *
	 * The authenticated user must have the <strong>ADMIN</strong> permission to call this resource.
	 */
	async createCertificate(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/signing/x509-certificates"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/signing/x509-certificates"]["post"],
			MaybeOptionalInit<paths["/api/latest/signing/x509-certificates"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/signing/x509-certificates",
			...init,
		)
	}

	/** Update X.509 CRL entries
	 *
	 * Update the certificate revocation list (CRL) entries for an issuer X.509 certificate in the system, identified by <code>id</code>. This will add any new revoked X.509 certificates that were issued by the given issuer X.509 certificate.
	 *
	 * This endpoint will schedule a request to asynchronously perform the task. Please allow time for the task to complete as it will vary depending on how many CRLs there are to retrieve and process.
	 *
	 * Note: CRL updates are scheduled to run every 24 hours. You may wish to trigger a refresh manually using this endpoint, otherwise, entries will be updated daily.
	 *
	 * The authenticated user must have the <strong>ADMIN</strong> permission to call this resource.
	 */
	async updateCertificateRevocationListEntries(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/signing/x509-certificates/crl/{id}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/signing/x509-certificates/crl/{id}"]["put"],
			MaybeOptionalInit<
				paths["/api/latest/signing/x509-certificates/crl/{id}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/api/latest/signing/x509-certificates/crl/{id}",
			...init,
		)
	}

	/** Delete an X.509 certificate
	 *
	 * Delete an X.509 certificate specified by the given ID.
	 *
	 * The authenticated user must have the <strong>ADMIN</strong> permission to call this resource.
	 */
	async deleteCertificate(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/signing/x509-certificates/{id}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/signing/x509-certificates/{id}"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/signing/x509-certificates/{id}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/signing/x509-certificates/{id}",
			...init,
		)
	}

	/** Get system signing configuration
	 *
	 * Gets the configuration details for system signing Git objects.
	 */
	async getSystemSigningConfiguration(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/system-signing/configuration"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/system-signing/configuration"]["get"],
			MaybeOptionalInit<
				paths["/api/latest/system-signing/configuration"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/system-signing/configuration",
			...init,
		)
	}

	/** Update system signing configuration
	 *
	 * Updates the configuration for system signing Git objects.
	 */
	async updateSystemSigningConfiguration(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/system-signing/configuration"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/system-signing/configuration"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/system-signing/configuration"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/system-signing/configuration",
			...init,
		)
	}

	/** Get all users
	 *
	 * Retrieve a page of users, optionally run through provided filters.
	 *
	 *
	 * Only authenticated users may call this resource.
	 * ### Permission Filters
	 *
	 *
	 * The following three sub-sections list parameters supported for permission filters (where <code>[root]</code> is
	 * the root permission filter name, e.g. <code>permission</code>, <code>permission.1</code> etc.) depending on the
	 * permission resource. The system determines which filter to apply (Global, Project or Repository permission)
	 * based on the `[root]` permission value. E.g. <code>ADMIN</code> is a global permission,
	 * <code>PROJECT_ADMIN</code> is a project permission and <code>REPO_ADMIN</code> is a repository permission. Note
	 * that the parameters for a given resource will be looked up in the order as they are listed below, that is e.g.
	 * for a project resource, if both <code>projectId</code> and <code>projectKey</code> are provided, the system will
	 * use <code>projectId</code> for the lookup.
	 * <h4>Global permissions</h4>
	 *
	 *
	 * The permission value under <code>[root]</code> is the only required and recognized parameter, as global
	 * permissions do not apply to a specific resource.
	 *
	 *
	 * Example valid filter: <code>permission=ADMIN</code>.
	 * <h4>Project permissions</h4>
	 *
	 *
	 * - <code>[root]</code>- specifies the project permission
	 * - <code>[root].projectId</code> - specifies the project ID to lookup the project by
	 * - <code>[root].projectKey</code> - specifies the project key to lookup the project by
	 *
	 *
	 * Example valid filter: <code>permission.1=PROJECT_ADMIN&amp;permission.1.projectKey=TEST_PROJECT</code>.
	 * #### Repository permissions
	 *
	 *
	 * - <code>[root]</code>- specifies the repository permission
	 * - <code>[root].projectId</code> - specifies the repository ID to lookup the repository by
	 * - <code>[root].projectKey</code> and <code>[root].repositorySlug</code>- specifies the project key and     repository slug to lookup the repository by; both values <i>need to</i> be provided for this look up to be     triggered
	 *
	 *
	 * Example valid filter: <code>permission.2=REPO_ADMIN&amp;permission.2.projectKey=TEST_PROJECT&amp;permission.2.repositorySlug=test_repo</code>.
	 */
	async getUsers_2(
		...init: InitParam<MaybeOptionalInit<paths["/api/latest/users"], "get">>
	): Promise<
		FetchResponse<
			paths["/api/latest/users"]["get"],
			MaybeOptionalInit<paths["/api/latest/users"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request("get", "/api/latest/users", ...init)
	}

	/** Update user details
	 *
	 * Update the currently authenticated user's details. The update will always be applied to the currently authenticated user.
	 */
	async updateUserDetails_1(
		...init: InitParam<MaybeOptionalInit<paths["/api/latest/users"], "put">>
	): Promise<
		FetchResponse<
			paths["/api/latest/users"]["put"],
			MaybeOptionalInit<paths["/api/latest/users"], "put">,
			"application/json"
		>
	> {
		return this.openapi.request("put", "/api/latest/users", ...init)
	}

	/** Set password
	 *
	 * Update the currently authenticated user's password.
	 */
	async updateUserPassword_1(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/users/credentials"], "put">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/users/credentials"]["put"],
			MaybeOptionalInit<paths["/api/latest/users/credentials"], "put">,
			"application/json"
		>
	> {
		return this.openapi.request("put", "/api/latest/users/credentials", ...init)
	}

	/** Get user
	 *
	 * Retrieve the user matching the supplied <strong>userSlug</strong>.
	 */
	async getUser(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/users/{userSlug}"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/users/{userSlug}"]["get"],
			MaybeOptionalInit<paths["/api/latest/users/{userSlug}"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request("get", "/api/latest/users/{userSlug}", ...init)
	}

	/** Update user avatar
	 *
	 * Update the avatar for the user with the supplied <strong>slug</strong>.
	 *
	 *
	 * This resource accepts POST multipart form data, containing a single image in a form-field named 'avatar'.
	 *
	 *
	 * There are configurable server limits on both the dimensions (1024x1024 pixels by default) and uploaded
	 * file size (1MB by default). Several different image formats are supported, but <strong>PNG</strong> and
	 * <strong>JPEG</strong> are preferred due to the file size limit.
	 *
	 *
	 * This resource has Cross-Site Request Forgery (XSRF) protection. To allow the request to
	 * pass the XSRF check the caller needs to send an <code>X-Atlassian-Token</code> HTTP header with the
	 * value <code>no-check</code>.
	 *
	 *
	 * An example <a href="http://curl.haxx.se/">curl</a> request to upload an image name 'avatar.png' would be:
	 * ```
	 * curl -X POST -u username:password -H "X-Atlassian-Token: no-check" http://example.com/rest/api/latest/users/jdoe/avatar.png -F avatar=@avatar.png
	 * ```
	 *
	 *
	 * Users are always allowed to update their own avatar. To update someone else's avatar the authenticated user must
	 * have global <strong>ADMIN</strong> permission, or global <strong>SYS_ADMIN</strong> permission to update a
	 * <strong>SYS_ADMIN</strong> user's avatar.
	 */
	async uploadAvatar_1(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/users/{userSlug}/avatar.png"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/users/{userSlug}/avatar.png"]["post"],
			MaybeOptionalInit<
				paths["/api/latest/users/{userSlug}/avatar.png"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/users/{userSlug}/avatar.png",
			...init,
		)
	}

	/** Delete user avatar
	 *
	 * Delete the avatar associated to a user.
	 *
	 *
	 * Users are always allowed to delete their own avatar. To delete someone else's avatar the authenticated user must
	 * have global <strong>ADMIN</strong> permission, or global <strong>SYS_ADMIN</strong> permission to update a
	 * <strong>SYS_ADMIN</strong> user's avatar.
	 */
	async deleteAvatar(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/api/latest/users/{userSlug}/avatar.png"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/users/{userSlug}/avatar.png"]["delete"],
			MaybeOptionalInit<
				paths["/api/latest/users/{userSlug}/avatar.png"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/api/latest/users/{userSlug}/avatar.png",
			...init,
		)
	}

	/** Get user settings
	 *
	 * Retrieve a map of user setting key values for a specific user identified by the user slug.
	 */
	async getUserSettings(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/users/{userSlug}/settings"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/users/{userSlug}/settings"]["get"],
			MaybeOptionalInit<paths["/api/latest/users/{userSlug}/settings"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/api/latest/users/{userSlug}/settings",
			...init,
		)
	}

	/** Update user settings
	 *
	 * Update the entries of a map of user setting key/values for a specific user identified by the user slug.
	 */
	async updateSettings(
		...init: InitParam<
			MaybeOptionalInit<paths["/api/latest/users/{userSlug}/settings"], "post">
		>
	): Promise<
		FetchResponse<
			paths["/api/latest/users/{userSlug}/settings"]["post"],
			MaybeOptionalInit<paths["/api/latest/users/{userSlug}/settings"], "post">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/api/latest/users/{userSlug}/settings",
			...init,
		)
	}
}
