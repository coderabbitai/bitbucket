import { prEventKeys, type PrEvent } from "./pr/event.js"
import { projectEventKeys, type ProjectEvent } from "./project/event.js"
import { repoEventKeys, type RepoEvent } from "./repo/event.js"

/**
 * When you have a webhook with an event, Bitbucket Data Center sends the event
 * request to the server URL for the webhook whenever that event occurs.
 *
 * For Bitbucket to send event payload requests for a webhook with HTTPS
 * endpoints, make sure your URL has a valid SSL certificate that a public
 * certificate authority has signed.
 *
 * The following payloads contain some of the common entity types: `User`,
 * `Repository`, `Comment`, and `Pull Request` – which have consistent
 * representations in all the payloads where they appear. For example, the actor
 * property in the `repo:refs_changed` payload is a representation of the
 * event's user.
 */
export type Event = PrEvent | ProjectEvent | RepoEvent
export type EventKey = Event["eventKey"]

export function isEventKey(key: unknown): key is EventKey {
	return Object.values<unknown>(eventKeys).includes(key)
}

const eventKeys = {
	...prEventKeys,
	...projectEventKeys,
	...repoEventKeys,
} as const

eventKeys satisfies Record<EventKey, EventKey>
