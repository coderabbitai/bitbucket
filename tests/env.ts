import { config } from "dotenv"
import path from "path"

/**
 * @see https://nodejs.org/en/learn/getting-started/nodejs-the-difference-between-development-and-production
 * @see https://vitest.dev/guide/migration.html#envs
 */
export type NodeEnv = (typeof nodeEnvs)[keyof typeof nodeEnvs]
export type ProcessEnv = typeof process.env

interface LoadedEnv extends ProcessEnv {
	readonly NODE_ENV: NodeEnv
}

function envString(key: string) {
	const value = parsed[key]
	if (!value) throw new Error(`$${key} is missing`)
	return value
}

export function isNodeEnv(value: unknown): value is NodeEnv {
	return Object.values<unknown>(nodeEnvs).includes(value)
}

/** Loads environment variables from the `.env` files. `NODE_ENV` has to be
 * set in the environment and will not be picked up from there.
 *
 * If `NODE_ENV` is not set, it will default to `development`.
 *
 * Environment variables are loaded in the following order:
 *
 * 1. `.env.development.local`
 * 2. `.env.development`
 * 3. `.env.local`
 * 4. `.env`
 */
function loadEnv(): LoadedEnv {
	const cwd = process.cwd()
	const NODE_ENV = toNodeEnv(process.env.NODE_ENV?.trim())

	const { parsed, error } = config({
		path: [
			path.resolve(cwd, `.env.${NODE_ENV}.local`),
			path.resolve(cwd, `.env.${NODE_ENV}`),
			path.resolve(cwd, ".env.local"),
			path.resolve(cwd, ".env"),
		],
	})

	if (!parsed)
		throw new Error("Environment variables could not be loaded.", {
			cause: error,
		})

	const merged = Object.assign(parsed, process.env, { NODE_ENV })
	process.env = merged
	return merged
}

export function toNodeEnv(value: unknown): NodeEnv {
	if (isNodeEnv(value)) return value
	return nodeEnvs.development
}

const nodeEnvs = {
	development: "development",
	production: "production",
	/**
	 * Vitest sets `NODE_ENV` to `test` if it wasn't set before.
	 * @see https://vitest.dev/guide/migration.html#envs
	 */
	test: "test",
} as const
const parsed = loadEnv()

export const BITBUCKET_CLOUD_URL = envString("BITBUCKET_CLOUD_URL")
export const BITBUCKET_CLOUD_USERNAME = envString("BITBUCKET_CLOUD_USERNAME")
export const BITBUCKET_CLOUD_APP_PASSWORD = envString(
	"BITBUCKET_CLOUD_APP_PASSWORD",
)

export const BITBUCKET_SERVER_URL = envString("BITBUCKET_SERVER_URL")
export const BITBUCKET_SERVER_TOKEN = envString("BITBUCKET_SERVER_TOKEN")
