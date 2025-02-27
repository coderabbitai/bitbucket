import { envBool, envString, envUrl, loadEnv } from "@natoboram/load_env"

/**
 * @see https://nodejs.org/en/learn/getting-started/nodejs-the-difference-between-development-and-production
 * @see https://vitest.dev/guide/migration.html#envs
 */
type NodeEnv = (typeof NodeEnv)[keyof typeof NodeEnv]

function isNodeEnv(value: unknown): value is NodeEnv {
	return Object.values<unknown>(NodeEnv).includes(value)
}

function toNodeEnv(value: unknown): NodeEnv {
	if (isNodeEnv(value)) return value
	return NodeEnv.development
}

const NodeEnv = {
	development: "development",
	production: "production",
	/**
	 * Vitest sets `NODE_ENV` to `test` if it wasn't set before.
	 * @see https://vitest.dev/guide/migration.html#envs
	 */
	test: "test",
} as const

const parsed = loadEnv()

export const NODE_ENV = toNodeEnv(parsed.NODE_ENV)

export const BITBUCKET_CLOUD_URL = envUrl("BITBUCKET_CLOUD_URL")
export const BITBUCKET_CLOUD_USERNAME = envString("BITBUCKET_CLOUD_USERNAME")
export const BITBUCKET_CLOUD_APP_PASSWORD = envString(
	"BITBUCKET_CLOUD_APP_PASSWORD",
)

export const BITBUCKET_SERVER_URL = envUrl("BITBUCKET_SERVER_URL")
export const BITBUCKET_SERVER_TOKEN = envString("BITBUCKET_SERVER_TOKEN")
export const BITBUCKET_SERVER_TEST_PROJECT_KEY = envString(
	"BITBUCKET_SERVER_TEST_PROJECT_KEY",
)
export const BITBUCKET_SERVER_TEST_PROJECT_NAME = envString(
	"BITBUCKET_SERVER_TEST_PROJECT_NAME",
)

export const SKIP_BITBUCKET_CLOUD = envBool("SKIP_BITBUCKET_CLOUD")

/** Considering that single instance for a single user costs 2300 USD annually,
 * most people aren't going to have a Bitbucket Data Center instance to test on.
 * Therefore, end-to-end tests for Bitbucket Data Center are skipped by default.
 *
 * @see https://www.atlassian.com/software/bitbucket/enterprise
 */
export const SKIP_BITBUCKET_SERVER = envBool("SKIP_BITBUCKET_SERVER")
