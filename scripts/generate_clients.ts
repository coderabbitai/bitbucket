import { readFile, writeFile } from "node:fs/promises"
import type { OpenAPI3 } from "openapi-typescript"
import openapiTS from "openapi-typescript"
import type { HttpMethod } from "openapi-typescript-helpers"
import type ts from "typescript"

function isOpenAPI3(openapi: unknown, nodes: ts.Node[]): openapi is OpenAPI3 {
	return Boolean(openapi && nodes.length)
}

interface Operation {
	readonly description: string | undefined
	readonly method: HttpMethod
	readonly operationId: string
	readonly path: string
	readonly summary: string | undefined
}

const HttpMethod = {
	get: "get",
	put: "put",
	post: "post",
	delete: "delete",
	options: "options",
	head: "head",
	patch: "patch",
	trace: "trace",
} as const satisfies Record<HttpMethod, HttpMethod>

async function generateClient(
	schemaPath: string,
	className: string,
	classPath: string,
) {
	const file = await readFile(schemaPath, "utf-8")
	const openapi: unknown = JSON.parse(file)
	const nodes = await openapiTS(file)

	if (!isOpenAPI3(openapi, nodes)) throw new Error("Invalid OpenAPI file")
	if (!openapi.paths || !Object.keys(openapi.paths).length)
		throw new Error("Empty OpenAPI file")

	const operations: Operation[] = []
	for (const [path, item] of Object.entries(openapi.paths)) {
		for (const method of Object.values(HttpMethod)) {
			if (
				"$ref" in item ||
				!item[method] ||
				!("operationId" in item[method]) ||
				!item[method].operationId
			)
				continue

			operations.push({
				path,
				method,
				operationId: item[method].operationId,
				description: item[method].description,
				summary: item[method].summary,
			})
		}
	}

	/** Summary
	 *
	 * Description
	 */
	const methods = operations
		.map(({ method, path, operationId, description, summary }) => {
			const jsdoc = `	/** ${summary || ""}
	 *
${
	description
		?.split("\n")
		.map(line => `	 * ${line}`)
		.join("\n") || "	 *"
}
	 */`

			return `${jsdoc}
	async ${operationId}(
		...init: InitParam<
			MaybeOptionalInit<
				paths["${path}"],
				"${method}"
			>
		>
	): Promise<
		FetchResponse<
			paths["${path}"]["${method}"],
			MaybeOptionalInit<
				paths["${path}"],
				"${method}"
			>,
			"application/json"
		>
	> {
		return this.openapi.request(
			"${method}",
			"${path}",
			...init,
		)
	}`
		})
		.join("\n\n")

	const classFile = `import type {
	Client,
	ClientOptions,
	FetchResponse,
	MaybeOptionalInit,
} from "openapi-fetch"
import createClient from "openapi-fetch"
import type { InitParam } from "openapi-fetch/src/index.js"
import type { paths } from "./openapi/openapi-typescript.ts"

export class ${className} {
	readonly openapi: Client<paths, "application/json">

	constructor(clientOptions?: ClientOptions) {
		this.openapi = createClient<paths, "application/json">(clientOptions)
	}

${methods}
}`

	await writeFile(classPath, classFile)
}

await Promise.all([
	generateClient(
		"src/server/openapi/swagger.v3.json",
		"BitbucketServerClient",
		"src/server/client.ts",
	),

	generateClient(
		"src/cloud/openapi/swagger.v3.json",
		"BitbucketCloudClient",
		"src/cloud/client.ts",
	),
])
