import type {
	Client,
	ClientOptions,
	FetchResponse,
	MaybeOptionalInit,
} from "openapi-fetch"
import createClient from "openapi-fetch"
import type { InitParam } from "openapi-fetch/src/index.js"
import type { paths } from "./openapi/openapi-typescript.ts"

export class BitbucketCloudClient {
	readonly openapi: Client<paths, "application/json">

	constructor(clientOptions?: ClientOptions) {
		this.openapi = createClient<paths, "application/json">(clientOptions)
	}

	/** Get a commit application property
	 *
	 * Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.
	 */
	async getCommitHostedPropertyValue(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}",
			...init,
		)
	}

	/** Update a commit application property
	 *
	 * Update an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.
	 */
	async updateCommitHostedPropertyValue(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}"]["put"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}",
			...init,
		)
	}

	/** Delete a commit application property
	 *
	 * Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.
	 */
	async deleteCommitHostedPropertyValue(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}"]["delete"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}",
			...init,
		)
	}

	/** List pull requests that contain a commit
	 *
	 * Returns a paginated list of all pull requests as part of which this commit was reviewed. Pull Request Commit Links app must be installed first before using this API; installation automatically occurs when 'Go to pull request' is clicked from the web interface for a commit's details.
	 */
	async getPullrequestsForCommit(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/pullrequests"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/pullrequests"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/pullrequests"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/commit/{commit}/pullrequests",
			...init,
		)
	}

	/** List reports
	 *
	 * Returns a paginated list of Reports linked to this commit.
	 */
	async getReportsForCommit(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/reports"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/reports"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/reports"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/commit/{commit}/reports",
			...init,
		)
	}

	/** Get a report
	 *
	 * Returns a single Report matching the provided ID.
	 */
	async getReport(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}",
			...init,
		)
	}

	/** Create or update a report
	 *
	 * Creates or updates a report for the specified commit.
	 * To upload a report, make sure to generate an ID that is unique across all reports for that commit. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-001.
	 *
	 * ### Sample cURL request:
	 * ```
	 * curl --request PUT 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mysystem-001' \
	 * --header 'Content-Type: application/json' \
	 * --data-raw '{
	 *     "title": "Security scan report",
	 *     "details": "This pull request introduces 10 new dependency vulnerabilities.",
	 *     "report_type": "SECURITY",
	 *     "reporter": "mySystem",
	 *     "link": "http://www.mysystem.com/reports/001",
	 *     "result": "FAILED",
	 *     "data": [
	 *         {
	 *             "title": "Duration (seconds)",
	 *             "type": "DURATION",
	 *             "value": 14
	 *         },
	 *         {
	 *             "title": "Safe to merge?",
	 *             "type": "BOOLEAN",
	 *             "value": false
	 *         }
	 *     ]
	 * }'
	 * ```
	 *
	 * ### Possible field values:
	 * report_type: SECURITY, COVERAGE, TEST, BUG
	 * result: PASSED, FAILED, PENDING
	 * data.type: BOOLEAN, DATE, DURATION, LINK, NUMBER, PERCENTAGE, TEXT
	 *
	 * #### Data field formats
	 * | Type  Field   | Value Field Type  | Value Field Display |
	 * |:--------------|:------------------|:--------------------|
	 * | None/ Omitted | Number, String or Boolean (not an array or object) | Plain text |
	 * | BOOLEAN	| Boolean | The value will be read as a JSON boolean and displayed as 'Yes' or 'No'. |
	 * | DATE  | Number | The value will be read as a JSON number in the form of a Unix timestamp (milliseconds) and will be displayed as a relative date if the date is less than one week ago, otherwise  it will be displayed as an absolute date. |
	 * | DURATION | Number | The value will be read as a JSON number in milliseconds and will be displayed in a human readable duration format. |
	 * | LINK | Object: `{"text": "Link text here", "href": "https://link.to.annotation/in/external/tool"}` | The value will be read as a JSON object containing the fields "text" and "href" and will be displayed as a clickable link on the report. |
	 * | NUMBER | Number | The value will be read as a JSON number and large numbers will be  displayed in a human readable format (e.g. 14.3k). |
	 * | PERCENTAGE | Number (between 0 and 100) | The value will be read as a JSON number between 0 and 100 and will be displayed with a percentage sign. |
	 * | TEXT | String | The value will be read as a JSON string and will be displayed as-is |
	 *
	 * Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.
	 *
	 */
	async createOrUpdateReport(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}"]["put"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}",
			...init,
		)
	}

	/** Delete a report
	 *
	 * Deletes a single Report matching the provided ID.
	 */
	async deleteReport(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}"]["delete"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}",
			...init,
		)
	}

	/** List annotations
	 *
	 * Returns a paginated list of Annotations for a specified report.
	 */
	async getAnnotationsForReport(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations",
			...init,
		)
	}

	/** Bulk create or update annotations
	 *
	 * Bulk upload of annotations.
	 * Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.
	 *
	 * Add the annotations you want to upload as objects in a JSON array and make sure each annotation has the external_id field set to a unique value. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001. The external id can later be used to identify the report as an alternative to the generated [UUID](https://developer.atlassian.com/bitbucket/api/2/reference/meta/uri-uuid#uuid). You can upload up to 100 annotations per POST request.
	 *
	 * ### Sample cURL request:
	 * ```
	 * curl --location 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mysystem-001/annotations' \
	 * --header 'Content-Type: application/json' \
	 * --data-raw '[
	 *   {
	 *         "external_id": "mysystem-annotation001",
	 *         "title": "Security scan report",
	 *         "annotation_type": "VULNERABILITY",
	 *         "summary": "This line represents a security threat.",
	 *         "severity": "HIGH",
	 *       "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java",
	 *         "line": 42
	 *   },
	 *   {
	 *         "external_id": "mySystem-annotation002",
	 *         "title": "Bug report",
	 *         "annotation_type": "BUG",
	 *         "result": "FAILED",
	 *         "summary": "This line might introduce a bug.",
	 *         "severity": "MEDIUM",
	 *       "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Helper.java",
	 *         "line": 13
	 *   }
	 * ]'
	 * ```
	 *
	 * ### Possible field values:
	 * annotation_type: VULNERABILITY, CODE_SMELL, BUG
	 * result: PASSED, FAILED, IGNORED, SKIPPED
	 * severity: HIGH, MEDIUM, LOW, CRITICAL
	 *
	 * Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.
	 *
	 */
	async bulkCreateOrUpdateAnnotations(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations"]["post"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations",
			...init,
		)
	}

	/** Get an annotation
	 *
	 * Returns a single Annotation matching the provided ID.
	 */
	async getAnnotation(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}",
			...init,
		)
	}

	/** Create or update an annotation
	 *
	 * Creates or updates an individual annotation for the specified report.
	 * Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.
	 *
	 * Just as reports, annotation needs to be uploaded with a unique ID that can later be used to identify the report as an alternative to the generated [UUID](https://developer.atlassian.com/bitbucket/api/2/reference/meta/uri-uuid#uuid). If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001.
	 *
	 * ### Sample cURL request:
	 * ```
	 * curl --request PUT 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mySystem-001/annotations/mysystem-annotation001' \
	 * --header 'Content-Type: application/json' \
	 * --data-raw '{
	 *     "title": "Security scan report",
	 *     "annotation_type": "VULNERABILITY",
	 *     "summary": "This line represents a security thread.",
	 *     "severity": "HIGH",
	 *     "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java",
	 *     "line": 42
	 * }'
	 * ```
	 *
	 * ### Possible field values:
	 * annotation_type: VULNERABILITY, CODE_SMELL, BUG
	 * result: PASSED, FAILED, IGNORED, SKIPPED
	 * severity: HIGH, MEDIUM, LOW, CRITICAL
	 *
	 * Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.
	 *
	 */
	async createOrUpdateAnnotation(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}"]["put"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}",
			...init,
		)
	}

	/** Delete an annotation
	 *
	 * Deletes a single Annotation matching the provided ID.
	 */
	async deleteAnnotation(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}"]["delete"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}",
			...init,
		)
	}

	/** List deployments
	 *
	 * Find deployments
	 */
	async getDeploymentsForRepository(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/deployments"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/deployments"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/deployments"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/deployments",
			...init,
		)
	}

	/** Get a deployment
	 *
	 * Retrieve a deployment
	 */
	async getDeploymentForRepository(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/deployments/{deployment_uuid}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/deployments/{deployment_uuid}"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/deployments/{deployment_uuid}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/deployments/{deployment_uuid}",
			...init,
		)
	}

	/** List variables for an environment
	 *
	 * Find deployment environment level variables.
	 */
	async getDeploymentVariables(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables",
			...init,
		)
	}

	/** Create a variable for an environment
	 *
	 * Create a deployment environment level variable.
	 */
	async createDeploymentVariable(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables"]["post"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables",
			...init,
		)
	}

	/** Update a variable for an environment
	 *
	 * Update a deployment environment level variable.
	 */
	async updateDeploymentVariable(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}"]["put"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}",
			...init,
		)
	}

	/** Delete a variable for an environment
	 *
	 * Delete a deployment environment level variable.
	 */
	async deleteDeploymentVariable(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}"]["delete"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}",
			...init,
		)
	}

	/** List environments
	 *
	 * Find environments
	 */
	async getEnvironmentsForRepository(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/environments"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/environments"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/environments"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/environments",
			...init,
		)
	}

	/** Create an environment
	 *
	 * Create an environment.
	 */
	async createEnvironment(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/environments"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/environments"]["post"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/environments"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/repositories/{workspace}/{repo_slug}/environments",
			...init,
		)
	}

	/** Get an environment
	 *
	 * Retrieve an environment
	 */
	async getEnvironmentForRepository(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}",
			...init,
		)
	}

	/** Delete an environment
	 *
	 * Delete an environment
	 */
	async deleteEnvironmentForRepository(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}"]["delete"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}",
			...init,
		)
	}

	/** Update an environment
	 *
	 * Update an environment
	 */
	async updateEnvironmentForRepository(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}/changes"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}/changes"]["post"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}/changes"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}/changes",
			...init,
		)
	}

	/** List pipelines
	 *
	 * Find pipelines in a repository.
	 *
	 * Note that unlike other endpoints in the Bitbucket API, this endpoint utilizes query parameters to allow filtering
	 * and sorting of returned results. See [query parameters](#api-repositories-workspace-repo-slug-pipelines-get-request-Query%20parameters)
	 * for specific details.
	 *
	 */
	async getPipelinesForRepository(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/pipelines",
			...init,
		)
	}

	/** Run a pipeline
	 *
	 * Endpoint to create and initiate a pipeline.
	 * There are a number of different options to initiate a pipeline, where the payload of the request will determine which type of pipeline will be instantiated.
	 *
	 * ## Trigger a pipeline for a branch
	 *
	 * One way to trigger pipelines is by specifying the branch for which you want to trigger a pipeline.
	 * The specified branch will be used to determine which pipeline definition from the `bitbucket-pipelines.yml` file will be applied to initiate the pipeline. The pipeline will then do a clone of the repository and checkout the latest revision of the specified branch.
	 *
	 * ### Example
	 *
	 * ```
	 * $ curl -X POST -is -u '{atlassian_account_email}:{api_token}' \
	 *       -H 'Content-Type: application/json' \
	 *       https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines/ \
	 *       -d '
	 *       {
	 *         "target": {
	 *           "ref_type": "branch",
	 *           "type": "pipeline_ref_target",
	 *           "ref_name": "master"
	 *         }
	 *       }'
	 * ```
	 *
	 * ## Trigger a pipeline for a commit on a branch or tag
	 *
	 * You can initiate a pipeline for a specific commit and in the context of a specified reference (e.g. a branch, tag or bookmark).
	 * The specified reference will be used to determine which pipeline definition from the bitbucket-pipelines.yml file will be applied to initiate the pipeline. The pipeline will clone the repository and then do a checkout the specified reference.
	 *
	 * The following reference types are supported:
	 *
	 * * `branch`
	 * * `named_branch`
	 * * `bookmark`
	 *  * `tag`
	 *
	 * ### Example
	 *
	 * ```
	 * $ curl -X POST -is -u '{atlassian_account_email}:{api_token}' \
	 *       -H 'Content-Type: application/json' \
	 *       https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines/ \
	 *       -d '
	 *       {
	 *         "target": {
	 *           "commit": {
	 *             "type": "commit",
	 *             "hash": "ce5b7431602f7cbba007062eeb55225c6e18e956"
	 *           },
	 *           "ref_type": "branch",
	 *           "type": "pipeline_ref_target",
	 *           "ref_name": "master"
	 *         }
	 *       }'
	 * ```
	 *
	 * ## Trigger a specific pipeline definition for a commit
	 *
	 * You can trigger a specific pipeline that is defined in your `bitbucket-pipelines.yml` file for a specific commit.
	 * In addition to the commit revision, you specify the type and pattern of the selector that identifies the pipeline definition. The resulting pipeline will then clone the repository and checkout the specified revision.
	 *
	 * ### Example
	 *
	 * ```
	 * $ curl -X POST -is -u '{atlassian_account_email}:{api_token}' \
	 *       -H 'Content-Type: application/json' \
	 *       https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines/ \
	 *       -d '
	 *       {
	 *         "target": {
	 *           "commit": {
	 *             "hash":"a3c4e02c9a3755eccdc3764e6ea13facdf30f923",
	 *             "type":"commit"
	 *           },
	 *           "selector": {
	 *             "type":"custom",
	 *             "pattern":"Deploy to production"
	 *           },
	 *           "type":"pipeline_commit_target"
	 *         }
	 *       }'
	 * ```
	 *
	 * ## Trigger a specific pipeline definition for a commit on a branch or tag
	 *
	 * You can trigger a specific pipeline that is defined in your `bitbucket-pipelines.yml` file for a specific commit in the context of a specified reference.
	 * In addition to the commit revision, you specify the type and pattern of the selector that identifies the pipeline definition, as well as the reference information. The resulting pipeline will then clone the repository a checkout the specified reference.
	 *
	 * ### Example
	 *
	 * ```
	 * $ curl -X POST -is -u '{atlassian_account_email}:{api_token}' \
	 *       -H 'Content-Type: application/json' \
	 *       https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines/ \
	 *       -d '
	 *       {
	 *         "target": {
	 *           "commit": {
	 *             "hash":"a3c4e02c9a3755eccdc3764e6ea13facdf30f923",
	 *             "type":"commit"
	 *           },
	 *           "selector": {
	 *             "type": "custom",
	 *             "pattern": "Deploy to production"
	 *           },
	 *           "type": "pipeline_ref_target",
	 *           "ref_name": "master",
	 *           "ref_type": "branch"
	 *         }
	 *       }'
	 * ```
	 *
	 * ## Trigger a custom pipeline with variables
	 *
	 * In addition to triggering a custom pipeline that is defined in your `bitbucket-pipelines.yml` file as shown in the examples above, you can specify variables that will be available for your build. In the request, provide a list of variables, specifying the following for each variable: key, value, and whether it should be secured or not (this field is optional and defaults to not secured).
	 *
	 * ### Example
	 *
	 * ```
	 * $ curl -X POST -is -u '{atlassian_account_email}:{api_token}' \
	 *       -H 'Content-Type: application/json' \
	 *       https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines/ \
	 *       -d '
	 *       {
	 *         "target": {
	 *           "type": "pipeline_ref_target",
	 *           "ref_type": "branch",
	 *           "ref_name": "master",
	 *           "selector": {
	 *             "type": "custom",
	 *             "pattern": "Deploy to production"
	 *           }
	 *         },
	 *         "variables": [
	 *           {
	 *             "key": "var1key",
	 *             "value": "var1value",
	 *             "secured": true
	 *           },
	 *           {
	 *             "key": "var2key",
	 *             "value": "var2value"
	 *           }
	 *         ]
	 *       }'
	 * ```
	 *
	 * ## Trigger a pull request pipeline
	 *
	 * You can also initiate a pipeline for a specific pull request.
	 *
	 * ### Example
	 *
	 * ```
	 * $ curl -X POST -is -u '{atlassian_account_email}:{api_token}' \
	 *       -H 'Content-Type: application/json' \
	 *       https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines/ \
	 *       -d '
	 *       {
	 *         "target": {
	 *           "type": "pipeline_pullrequest_target",
	 *           "source": "pull-request-branch",
	 *           "destination": "master",
	 *           "destination_commit": {
	 *             "hash": "9f848b7"
	 *           },
	 *           "commit": {
	 *             "hash": "1a372fc"
	 *           },
	 *           "pullrequest": {
	 *             "id": "3"
	 *           },
	 *           "selector": {
	 *             "type": "pull-requests",
	 *             "pattern": "**"
	 *           }
	 *         }
	 *       }'
	 * ```
	 *
	 * # On-demand pipeline
	 *
	 * By default, pipelines run using the YAML in the repository’s `bitbucket-pipelines.yml` configuration file.
	 * With an _on-demand_ pipeline, you include the pipeline’s YAML in the request body. That YAML applies only
	 * to that run and overrides the YAML in `bitbucket-pipelines.yml`.
	 *
	 * Just like with regular pipelines, there is a number of different options to initiate an on-demand pipeline.
	 * However, since the payload contains YAML configuration in this case, _query parameters_ are used to supply
	 * the necessary metadata to determine which type of pipeline will be instantiated. These query parameters
	 * are derived from the JSON equivalent by turning each property into a key-value pair with the JSON path
	 * of the property as the new key.
	 *
	 * ## Trigger on-demand pipeline for a branch
	 *
	 * You can initiate an on-demand pipeline for a specific branch. This branch will be used to determine
	 * which pipeline definition from the supplied YAML configuration will be applied to initiate the pipeline.
	 * The pipeline will then do a clone of the repository and check out the latest revision of the specified branch.
	 *
	 * To trigger an on-demand pipeline for a _branch_ the requesting user must have **write permission** for
	 * that branch (which can be limited by [branch restrictions](https://support.atlassian.com/bitbucket-cloud/docs/use-branch-permissions/)).
	 *
	 * ### Example
	 *
	 * ```
	 * $ curl -X POST -is -u '{atlassian_account_email}:{api_token}' \
	 *       -H 'Content-Type: application/yaml' \
	 *       https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines?target.type=pipeline_ref_target&target.ref_type=branch&target.ref_name=master \
	 *       -d '
	 * pipelines:
	 *   default:
	 *     - step:
	 *         script:
	 *           - echo This is an on-demand pipeline'
	 * ```
	 *
	 * ## Trigger on-demand pipeline for a commit on a branch or tag
	 *
	 * You can initiate an on-demand pipeline for a specific commit and in the context of a specified reference
	 * (branch or tag). The specified reference will be used to determine which pipeline definition from the supplied
	 * YAML configuration will be applied to initiate the pipeline. The pipeline will clone the repository and
	 * check out the specified reference.
	 *
	 * To trigger an on-demand pipeline for a _branch_ the requesting user must have **write permission** for
	 * that branch (which can be limited by [branch restrictions](https://support.atlassian.com/bitbucket-cloud/docs/use-branch-permissions/)).
	 *
	 * ### Example
	 *
	 * ```
	 * $ curl -X POST -is -u '{atlassian_account_email}:{api_token}' \
	 *       -H 'Content-Type: application/yaml' \
	 *       https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines?target.type=pipeline_ref_target&target.ref_type=branch&target.ref_name=master&target.commit.hash=ce5b7431602f7cbba007062eeb55225c6e18e956 \
	 *       -d '
	 * pipelines:
	 *   default:
	 *     - step:
	 *         script:
	 *           - echo This is an on-demand pipeline'
	 * ```
	 *
	 * ## Trigger a specific on-demand pipeline definition for a commit
	 *
	 * You can trigger a specific pipeline that is defined in the supplied YAML configuration for a specific commit.
	 * In addition to the commit revision, you specify the type and pattern of the selector that identifies
	 * the pipeline definition. The resulting pipeline will then clone the repository and checkout the specified revision.
	 *
	 * ### Example
	 *
	 * ```
	 * $ curl -X POST -is -u '{atlassian_account_email}:{api_token}' \
	 *       -H 'Content-Type: application/yaml' \
	 *       https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines?target.type=pipeline_commit_target&target.commit.hash=a3c4e02c9a3755eccdc3764e6ea13facdf30f923&target.selector.type=custom&target.selector.pattern=security-scan \
	 *       -d '
	 * pipelines:
	 *   custom:
	 *     security-scan:
	 *       - step:
	 *           script:
	 *             - echo Run on-demand security scan
	 * ```
	 *
	 * ## Trigger a custom on-demand pipeline with variables
	 *
	 * In addition to triggering a custom on-demand pipeline that is defined in the supplied YAML configuration
	 * as shown in the examples above, you can specify variables that will be available for your build.
	 * In the request, provide each variable as an indexed set of query parameters representing its key, value,
	 * and whether it should be secured or not (this field is optional and defaults to not secured).
	 *
	 * ### Example
	 *
	 * ```
	 * $ curl -X POST -is -u '{atlassian_account_email}:{api_token}' \
	 *       -H 'Content-Type: application/yaml' \
	 *       https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines?target.type=pipeline_ref_target&target.ref_type=branch&target.ref_name=master&target.selector.type=custom&target.selector.pattern=security-scan&variables[0].key=var1key&variables[0].value=var1value&variables[0].secured=true&variables[1].key=var2key&variables[1].value=var2value \
	 *       -d '
	 * pipelines:
	 *   custom:
	 *     security-scan:
	 *       - variables:
	 *           - name: var1key
	 *           - name: var2key
	 *       - step:
	 *           script:
	 *             - echo Run on-demand security scan'
	 * ```
	 *
	 * ## Trigger a pull request pipeline
	 *
	 * You can also initiate an on-demand pipeline for a specific pull request.
	 *
	 * ### Example
	 *
	 * ```
	 * $ curl -X POST -is -u '{atlassian_account_email}:{api_token}' \
	 *       -H 'Content-Type: application/yaml' \
	 *       https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines?target.type=pipeline_pullrequest_target&target.source=pull-request-branch&target.destination=destination&target.destination_commit.hash=9f848b7&target.commit.hash=1a372fc&target.pullrequest.id=3&target.selector.type=pull-requests&target.selector.pattern=** \
	 *       -d '
	 * pipelines:
	 *   pull-requests:
	 *     "**":
	 *       - step:
	 *           script:
	 *             - echo This is an on-demand pipeline'
	 * ```
	 *
	 */
	async createPipelineForRepository(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines"]["post"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/repositories/{workspace}/{repo_slug}/pipelines",
			...init,
		)
	}

	/** List caches
	 *
	 * Retrieve the repository pipelines caches.
	 */
	async getRepositoryPipelineCaches(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines-config/caches"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines-config/caches"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines-config/caches"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/pipelines-config/caches",
			...init,
		)
	}

	/** Delete caches
	 *
	 * Delete repository cache versions by name.
	 */
	async deleteRepositoryPipelineCaches(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines-config/caches"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines-config/caches"]["delete"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines-config/caches"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/repositories/{workspace}/{repo_slug}/pipelines-config/caches",
			...init,
		)
	}

	/** Delete a cache
	 *
	 * Delete a repository cache.
	 */
	async deleteRepositoryPipelineCache(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}"]["delete"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}",
			...init,
		)
	}

	/** Get cache content URI
	 *
	 * Retrieve the URI of the content of the specified cache.
	 */
	async getRepositoryPipelineCacheContentURI(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}/content-uri"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}/content-uri"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}/content-uri"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}/content-uri",
			...init,
		)
	}

	/** Get repository runners
	 *
	 * Retrieve repository runners.
	 */
	async getRepositoryRunners(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines-config/runners"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines-config/runners"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines-config/runners"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/pipelines-config/runners",
			...init,
		)
	}

	/** Create repository runner
	 *
	 * Create repository runner.
	 */
	async createRepositoryRunner(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines-config/runners"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines-config/runners"]["post"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines-config/runners"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/repositories/{workspace}/{repo_slug}/pipelines-config/runners",
			...init,
		)
	}

	/** Get repository runner
	 *
	 * Retrieve repository runner by uuid.
	 */
	async getRepositoryRunner(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}",
			...init,
		)
	}

	/** Update repository runner
	 *
	 * Update repository runner.
	 */
	async updateRepositoryRunner(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}"]["put"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}",
			...init,
		)
	}

	/** Delete repository runner
	 *
	 * Delete repository runner by uuid.
	 */
	async deleteRepositoryRunner(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}"]["delete"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}",
			...init,
		)
	}

	/** Get a pipeline
	 *
	 * Retrieve a specified pipeline
	 */
	async getPipelineForRepository(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}",
			...init,
		)
	}

	/** List steps for a pipeline
	 *
	 * Find steps for the given pipeline.
	 */
	async getPipelineStepsForRepository(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps",
			...init,
		)
	}

	/** Get a step of a pipeline
	 *
	 * Retrieve a given step of a pipeline.
	 */
	async getPipelineStepForRepository(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}",
			...init,
		)
	}

	/** Get log file for a step
	 *
	 * Retrieve the log file for a given step of a pipeline.
	 *
	 * This endpoint supports (and encourages!) the use of [HTTP Range requests](https://tools.ietf.org/html/rfc7233) to deal with potentially very large log files.
	 */
	async getPipelineStepLogForRepository(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/log"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/log"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/log"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/log",
			...init,
		)
	}

	/** Get the logs for the build container or a service container for a given step of a pipeline.
	 *
	 * Retrieve the log file for a build container or service container.
	 *
	 * This endpoint supports (and encourages!) the use of [HTTP Range requests](https://tools.ietf.org/html/rfc7233) to deal with potentially very large log files.
	 */
	async getPipelineContainerLog(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/logs/{log_uuid}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/logs/{log_uuid}"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/logs/{log_uuid}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/logs/{log_uuid}",
			...init,
		)
	}

	/** Get a summary of test reports for a given step of a pipeline.
	 *
undefined
	 */
	async getPipelineTestReports(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports",
			...init,
		)
	}

	/** Get test cases for a given step of a pipeline.
	 *
undefined
	 */
	async getPipelineTestReportTestCases(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases",
			...init,
		)
	}

	/** Get test case reasons (output) for a given test case in a step of a pipeline.
	 *
undefined
	 */
	async getPipelineTestReportTestCaseReasons(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases/{test_case_uuid}/test_case_reasons"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases/{test_case_uuid}/test_case_reasons"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases/{test_case_uuid}/test_case_reasons"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases/{test_case_uuid}/test_case_reasons",
			...init,
		)
	}

	/** Stop a pipeline
	 *
	 * Signal the stop of a pipeline and all of its steps that not have completed yet.
	 */
	async stopPipeline(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/stopPipeline"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/stopPipeline"]["post"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/stopPipeline"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/stopPipeline",
			...init,
		)
	}

	/** Get configuration
	 *
	 * Retrieve the repository pipelines configuration.
	 */
	async getRepositoryPipelineConfig(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines_config"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/pipelines_config",
			...init,
		)
	}

	/** Update configuration
	 *
	 * Update the pipelines configuration for a repository.
	 */
	async updateRepositoryPipelineConfig(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines_config"]["put"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/repositories/{workspace}/{repo_slug}/pipelines_config",
			...init,
		)
	}

	/** Update the next build number
	 *
	 * Update the next build number that should be assigned to a pipeline. The next build number that will be configured has to be strictly higher than the current latest build number for this repository.
	 */
	async updateRepositoryBuildNumber(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/build_number"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines_config/build_number"]["put"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/build_number"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/repositories/{workspace}/{repo_slug}/pipelines_config/build_number",
			...init,
		)
	}

	/** List schedules
	 *
	 * Retrieve the configured schedules for the given repository.
	 */
	async getRepositoryPipelineSchedules(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/schedules"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines_config/schedules"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/schedules"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/pipelines_config/schedules",
			...init,
		)
	}

	/** Create a schedule
	 *
	 * Create a schedule for the given repository.
	 */
	async createRepositoryPipelineSchedule(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/schedules"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines_config/schedules"]["post"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/schedules"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/repositories/{workspace}/{repo_slug}/pipelines_config/schedules",
			...init,
		)
	}

	/** Get a schedule
	 *
	 * Retrieve a schedule by its UUID.
	 */
	async getRepositoryPipelineSchedule(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}",
			...init,
		)
	}

	/** Update a schedule
	 *
	 * Update a schedule.
	 */
	async updateRepositoryPipelineSchedule(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}"]["put"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}",
			...init,
		)
	}

	/** Delete a schedule
	 *
	 * Delete a schedule.
	 */
	async deleteRepositoryPipelineSchedule(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}"]["delete"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}",
			...init,
		)
	}

	/** List executions of a schedule
	 *
	 * Retrieve the executions of a given schedule.
	 */
	async getRepositoryPipelineScheduleExecutions(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}/executions"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}/executions"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}/executions"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}/executions",
			...init,
		)
	}

	/** Get SSH key pair
	 *
	 * Retrieve the repository SSH key pair excluding the SSH private key. The private key is a write only field and will never be exposed in the logs or the REST API.
	 */
	async getRepositoryPipelineSshKeyPair(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair",
			...init,
		)
	}

	/** Update SSH key pair
	 *
	 * Create or update the repository SSH key pair. The private key will be set as a default SSH identity in your build container.
	 */
	async updateRepositoryPipelineKeyPair(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair"]["put"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair",
			...init,
		)
	}

	/** Delete SSH key pair
	 *
	 * Delete the repository SSH key pair.
	 */
	async deleteRepositoryPipelineKeyPair(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair"]["delete"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair",
			...init,
		)
	}

	/** List known hosts
	 *
	 * Find repository level known hosts.
	 */
	async getRepositoryPipelineKnownHosts(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts",
			...init,
		)
	}

	/** Create a known host
	 *
	 * Create a repository level known host.
	 */
	async createRepositoryPipelineKnownHost(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts"]["post"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts",
			...init,
		)
	}

	/** Get a known host
	 *
	 * Retrieve a repository level known host.
	 */
	async getRepositoryPipelineKnownHost(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}",
			...init,
		)
	}

	/** Update a known host
	 *
	 * Update a repository level known host.
	 */
	async updateRepositoryPipelineKnownHost(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}"]["put"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}",
			...init,
		)
	}

	/** Delete a known host
	 *
	 * Delete a repository level known host.
	 */
	async deleteRepositoryPipelineKnownHost(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}"]["delete"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}",
			...init,
		)
	}

	/** List variables for a repository
	 *
	 * Find repository level variables.
	 */
	async getRepositoryPipelineVariables(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/variables"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines_config/variables"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/variables"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/pipelines_config/variables",
			...init,
		)
	}

	/** Create a variable for a repository
	 *
	 * Create a repository level variable.
	 */
	async createRepositoryPipelineVariable(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/variables"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines_config/variables"]["post"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/variables"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/repositories/{workspace}/{repo_slug}/pipelines_config/variables",
			...init,
		)
	}

	/** Get a variable for a repository
	 *
	 * Retrieve a repository level variable.
	 */
	async getRepositoryPipelineVariable(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}",
			...init,
		)
	}

	/** Update a variable for a repository
	 *
	 * Update a repository level variable.
	 */
	async updateRepositoryPipelineVariable(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}"]["put"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}",
			...init,
		)
	}

	/** Delete a variable for a repository
	 *
	 * Delete a repository level variable.
	 */
	async deleteRepositoryPipelineVariable(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}"]["delete"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}",
			...init,
		)
	}

	/** Get a repository application property
	 *
	 * Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.
	 */
	async getRepositoryHostedPropertyValue(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}",
			...init,
		)
	}

	/** Update a repository application property
	 *
	 * Update an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.
	 */
	async updateRepositoryHostedPropertyValue(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}"]["put"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}",
			...init,
		)
	}

	/** Delete a repository application property
	 *
	 * Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.
	 */
	async deleteRepositoryHostedPropertyValue(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}"]["delete"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}",
			...init,
		)
	}

	/** Get a pull request application property
	 *
	 * Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.
	 */
	async getPullRequestHostedPropertyValue(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}"]["get"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}",
			...init,
		)
	}

	/** Update a pull request application property
	 *
	 * Update an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.
	 */
	async updatePullRequestHostedPropertyValue(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}"]["put"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}",
			...init,
		)
	}

	/** Delete a pull request application property
	 *
	 * Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.
	 */
	async deletePullRequestHostedPropertyValue(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}"]["delete"],
			MaybeOptionalInit<
				paths["/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}",
			...init,
		)
	}

	/** List variables for an account
	 *
	 * Find account level variables.
	 * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
	 */
	async getPipelineVariablesForTeam(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/teams/{username}/pipelines_config/variables"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/teams/{username}/pipelines_config/variables"]["get"],
			MaybeOptionalInit<
				paths["/teams/{username}/pipelines_config/variables"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/teams/{username}/pipelines_config/variables",
			...init,
		)
	}

	/** Create a variable for a user
	 *
	 * Create an account level variable.
	 * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
	 */
	async createPipelineVariableForTeam(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/teams/{username}/pipelines_config/variables"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/teams/{username}/pipelines_config/variables"]["post"],
			MaybeOptionalInit<
				paths["/teams/{username}/pipelines_config/variables"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/teams/{username}/pipelines_config/variables",
			...init,
		)
	}

	/** Get a variable for a team
	 *
	 * Retrieve a team level variable.
	 * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
	 */
	async getPipelineVariableForTeam(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/teams/{username}/pipelines_config/variables/{variable_uuid}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/teams/{username}/pipelines_config/variables/{variable_uuid}"]["get"],
			MaybeOptionalInit<
				paths["/teams/{username}/pipelines_config/variables/{variable_uuid}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/teams/{username}/pipelines_config/variables/{variable_uuid}",
			...init,
		)
	}

	/** Update a variable for a team
	 *
	 * Update a team level variable.
	 * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
	 */
	async updatePipelineVariableForTeam(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/teams/{username}/pipelines_config/variables/{variable_uuid}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/teams/{username}/pipelines_config/variables/{variable_uuid}"]["put"],
			MaybeOptionalInit<
				paths["/teams/{username}/pipelines_config/variables/{variable_uuid}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/teams/{username}/pipelines_config/variables/{variable_uuid}",
			...init,
		)
	}

	/** Delete a variable for a team
	 *
	 * Delete a team level variable.
	 * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
	 */
	async deletePipelineVariableForTeam(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/teams/{username}/pipelines_config/variables/{variable_uuid}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/teams/{username}/pipelines_config/variables/{variable_uuid}"]["delete"],
			MaybeOptionalInit<
				paths["/teams/{username}/pipelines_config/variables/{variable_uuid}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/teams/{username}/pipelines_config/variables/{variable_uuid}",
			...init,
		)
	}

	/** Search for code in a team's repositories
	 *
	 * This API will be deprecated on November 1, 2026.
	 *
	 * Search for code in the repositories of the specified team.
	 *
	 * Note that searches can match in the file's text (`content_matches`),
	 * the path (`path_matches`), or both.
	 *
	 * You can use the same syntax for the search query as in the UI.
	 * E.g. to search for "foo" only within the repository "demo",
	 * use the query parameter `search_query=foo+repo:demo`.
	 *
	 * Similar to other APIs, you can request more fields using a
	 * `fields` query parameter. E.g. to get some more information about
	 * the repository of matched files, use the query parameter
	 * `search_query=foo&fields=%2Bvalues.file.commit.repository`
	 * (the `%2B` is a URL-encoded `+`).
	 *
	 * Try `fields=%2Bvalues.*.*.*.*` to get an idea what's possible.
	 *
	 */
	async searchTeam(
		...init: InitParam<
			MaybeOptionalInit<paths["/teams/{username}/search/code"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/teams/{username}/search/code"]["get"],
			MaybeOptionalInit<paths["/teams/{username}/search/code"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request("get", "/teams/{username}/search/code", ...init)
	}

	/** List variables for a user
	 *
	 * Find user level variables.
	 * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
	 */
	async getPipelineVariablesForUser(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/users/{selected_user}/pipelines_config/variables"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/users/{selected_user}/pipelines_config/variables"]["get"],
			MaybeOptionalInit<
				paths["/users/{selected_user}/pipelines_config/variables"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/users/{selected_user}/pipelines_config/variables",
			...init,
		)
	}

	/** Create a variable for a user
	 *
	 * Create a user level variable.
	 * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
	 */
	async createPipelineVariableForUser(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/users/{selected_user}/pipelines_config/variables"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/users/{selected_user}/pipelines_config/variables"]["post"],
			MaybeOptionalInit<
				paths["/users/{selected_user}/pipelines_config/variables"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/users/{selected_user}/pipelines_config/variables",
			...init,
		)
	}

	/** Get a variable for a user
	 *
	 * Retrieve a user level variable.
	 * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
	 */
	async getPipelineVariableForUser(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/users/{selected_user}/pipelines_config/variables/{variable_uuid}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/users/{selected_user}/pipelines_config/variables/{variable_uuid}"]["get"],
			MaybeOptionalInit<
				paths["/users/{selected_user}/pipelines_config/variables/{variable_uuid}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/users/{selected_user}/pipelines_config/variables/{variable_uuid}",
			...init,
		)
	}

	/** Update a variable for a user
	 *
	 * Update a user level variable.
	 * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
	 */
	async updatePipelineVariableForUser(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/users/{selected_user}/pipelines_config/variables/{variable_uuid}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/users/{selected_user}/pipelines_config/variables/{variable_uuid}"]["put"],
			MaybeOptionalInit<
				paths["/users/{selected_user}/pipelines_config/variables/{variable_uuid}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/users/{selected_user}/pipelines_config/variables/{variable_uuid}",
			...init,
		)
	}

	/** Delete a variable for a user
	 *
	 * Delete an account level variable.
	 * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
	 */
	async deletePipelineVariableForUser(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/users/{selected_user}/pipelines_config/variables/{variable_uuid}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/users/{selected_user}/pipelines_config/variables/{variable_uuid}"]["delete"],
			MaybeOptionalInit<
				paths["/users/{selected_user}/pipelines_config/variables/{variable_uuid}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/users/{selected_user}/pipelines_config/variables/{variable_uuid}",
			...init,
		)
	}

	/** Get a user application property
	 *
	 * Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a user.
	 */
	async retrieveUserHostedPropertyValue(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/users/{selected_user}/properties/{app_key}/{property_name}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/users/{selected_user}/properties/{app_key}/{property_name}"]["get"],
			MaybeOptionalInit<
				paths["/users/{selected_user}/properties/{app_key}/{property_name}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/users/{selected_user}/properties/{app_key}/{property_name}",
			...init,
		)
	}

	/** Update a user application property
	 *
	 * Update an [application property](/cloud/bitbucket/application-properties/) value stored against a user.
	 */
	async updateUserHostedPropertyValue(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/users/{selected_user}/properties/{app_key}/{property_name}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/users/{selected_user}/properties/{app_key}/{property_name}"]["put"],
			MaybeOptionalInit<
				paths["/users/{selected_user}/properties/{app_key}/{property_name}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/users/{selected_user}/properties/{app_key}/{property_name}",
			...init,
		)
	}

	/** Delete a user application property
	 *
	 * Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a user.
	 */
	async deleteUserHostedPropertyValue(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/users/{selected_user}/properties/{app_key}/{property_name}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/users/{selected_user}/properties/{app_key}/{property_name}"]["delete"],
			MaybeOptionalInit<
				paths["/users/{selected_user}/properties/{app_key}/{property_name}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/users/{selected_user}/properties/{app_key}/{property_name}",
			...init,
		)
	}

	/** Search for code in a user's repositories
	 *
	 * This API will be deprecated on November 1, 2026.
	 *
	 * Search for code in the repositories of the specified user.
	 *
	 * Note that searches can match in the file's text (`content_matches`),
	 * the path (`path_matches`), or both.
	 *
	 * You can use the same syntax for the search query as in the UI.
	 * E.g. to search for "foo" only within the repository "demo",
	 * use the query parameter `search_query=foo+repo:demo`.
	 *
	 * Similar to other APIs, you can request more fields using a
	 * `fields` query parameter. E.g. to get some more information about
	 * the repository of matched files, use the query parameter
	 * `search_query=foo&fields=%2Bvalues.file.commit.repository`
	 * (the `%2B` is a URL-encoded `+`).
	 *
	 */
	async searchAccount(
		...init: InitParam<
			MaybeOptionalInit<paths["/users/{selected_user}/search/code"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/users/{selected_user}/search/code"]["get"],
			MaybeOptionalInit<paths["/users/{selected_user}/search/code"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/users/{selected_user}/search/code",
			...init,
		)
	}

	/** Get OpenID configuration for OIDC in Pipelines
	 *
	 * This is part of OpenID Connect for Pipelines, see https://support.atlassian.com/bitbucket-cloud/docs/integrate-pipelines-with-resource-servers-using-oidc/
	 */
	async getOIDCConfiguration(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/workspaces/{workspace}/pipelines-config/identity/oidc/.well-known/openid-configuration"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/workspaces/{workspace}/pipelines-config/identity/oidc/.well-known/openid-configuration"]["get"],
			MaybeOptionalInit<
				paths["/workspaces/{workspace}/pipelines-config/identity/oidc/.well-known/openid-configuration"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/workspaces/{workspace}/pipelines-config/identity/oidc/.well-known/openid-configuration",
			...init,
		)
	}

	/** Get keys for OIDC in Pipelines
	 *
	 * This is part of OpenID Connect for Pipelines, see https://support.atlassian.com/bitbucket-cloud/docs/integrate-pipelines-with-resource-servers-using-oidc/
	 */
	async getOIDCKeys(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/workspaces/{workspace}/pipelines-config/identity/oidc/keys.json"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/workspaces/{workspace}/pipelines-config/identity/oidc/keys.json"]["get"],
			MaybeOptionalInit<
				paths["/workspaces/{workspace}/pipelines-config/identity/oidc/keys.json"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/workspaces/{workspace}/pipelines-config/identity/oidc/keys.json",
			...init,
		)
	}

	/** Get workspace runners
	 *
	 * Retrieve workspace runners.
	 */
	async getWorkspaceRunners(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/workspaces/{workspace}/pipelines-config/runners"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/workspaces/{workspace}/pipelines-config/runners"]["get"],
			MaybeOptionalInit<
				paths["/workspaces/{workspace}/pipelines-config/runners"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/workspaces/{workspace}/pipelines-config/runners",
			...init,
		)
	}

	/** Create workspace runner
	 *
	 * Create workspace runner.
	 */
	async createWorkspaceRunner(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/workspaces/{workspace}/pipelines-config/runners"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/workspaces/{workspace}/pipelines-config/runners"]["post"],
			MaybeOptionalInit<
				paths["/workspaces/{workspace}/pipelines-config/runners"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/workspaces/{workspace}/pipelines-config/runners",
			...init,
		)
	}

	/** Get workspace runner
	 *
	 * Get workspace runner by uuid.
	 */
	async getWorkspaceRunner(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}"]["get"],
			MaybeOptionalInit<
				paths["/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}",
			...init,
		)
	}

	/** Update workspace runner
	 *
	 * Update workspace runner.
	 */
	async updateWorkspaceRunner(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}"]["put"],
			MaybeOptionalInit<
				paths["/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}",
			...init,
		)
	}

	/** Delete workspace runner
	 *
	 * Delete workspace runner by uuid.
	 */
	async deleteWorkspaceRunner(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}"]["delete"],
			MaybeOptionalInit<
				paths["/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}",
			...init,
		)
	}

	/** List variables for a workspace
	 *
	 * Find workspace level variables.
	 */
	async getPipelineVariablesForWorkspace(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/workspaces/{workspace}/pipelines-config/variables"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/workspaces/{workspace}/pipelines-config/variables"]["get"],
			MaybeOptionalInit<
				paths["/workspaces/{workspace}/pipelines-config/variables"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/workspaces/{workspace}/pipelines-config/variables",
			...init,
		)
	}

	/** Create a variable for a workspace
	 *
	 * Create a workspace level variable.
	 */
	async createPipelineVariableForWorkspace(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/workspaces/{workspace}/pipelines-config/variables"],
				"post"
			>
		>
	): Promise<
		FetchResponse<
			paths["/workspaces/{workspace}/pipelines-config/variables"]["post"],
			MaybeOptionalInit<
				paths["/workspaces/{workspace}/pipelines-config/variables"],
				"post"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"post",
			"/workspaces/{workspace}/pipelines-config/variables",
			...init,
		)
	}

	/** Get variable for a workspace
	 *
	 * Retrieve a workspace level variable.
	 */
	async getPipelineVariableForWorkspace(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}"],
				"get"
			>
		>
	): Promise<
		FetchResponse<
			paths["/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}"]["get"],
			MaybeOptionalInit<
				paths["/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}"],
				"get"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}",
			...init,
		)
	}

	/** Update variable for a workspace
	 *
	 * Update a workspace level variable.
	 */
	async updatePipelineVariableForWorkspace(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}"],
				"put"
			>
		>
	): Promise<
		FetchResponse<
			paths["/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}"]["put"],
			MaybeOptionalInit<
				paths["/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}"],
				"put"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"put",
			"/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}",
			...init,
		)
	}

	/** Delete a variable for a workspace
	 *
	 * Delete a workspace level variable.
	 */
	async deletePipelineVariableForWorkspace(
		...init: InitParam<
			MaybeOptionalInit<
				paths["/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}"],
				"delete"
			>
		>
	): Promise<
		FetchResponse<
			paths["/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}"]["delete"],
			MaybeOptionalInit<
				paths["/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}"],
				"delete"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"delete",
			"/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}",
			...init,
		)
	}

	/** Search for code in a workspace
	 *
	 * This API will be deprecated on November 1, 2026.
	 *
	 * Search for code in the repositories of the specified workspace.
	 *
	 * Note that searches can match in the file's text (`content_matches`),
	 * the path (`path_matches`), or both.
	 *
	 * You can use the same syntax for the search query as in the UI.
	 * E.g. to search for "foo" only within the repository "demo",
	 * use the query parameter `search_query=foo+repo:demo`.
	 *
	 * Similar to other APIs, you can request more fields using a
	 * `fields` query parameter. E.g. to get some more information about
	 * the repository of matched files, use the query parameter
	 * `search_query=foo&fields=%2Bvalues.file.commit.repository`
	 * (the `%2B` is a URL-encoded `+`).
	 *
	 * Try `fields=%2Bvalues.*.*.*.*` to get an idea what's possible.
	 *
	 */
	async searchWorkspace(
		...init: InitParam<
			MaybeOptionalInit<paths["/workspaces/{workspace}/search/code"], "get">
		>
	): Promise<
		FetchResponse<
			paths["/workspaces/{workspace}/search/code"]["get"],
			MaybeOptionalInit<paths["/workspaces/{workspace}/search/code"], "get">,
			"application/json"
		>
	> {
		return this.openapi.request(
			"get",
			"/workspaces/{workspace}/search/code",
			...init,
		)
	}
}
