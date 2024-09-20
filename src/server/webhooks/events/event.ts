import type { PrEvent } from "./pr/event.js"
import type { ProjectEvent } from "./project/event.js"
import type { RepoEvent } from "./repo/event.js"

export type Event = PrEvent | ProjectEvent | RepoEvent
export type EventKey =
	| PrEvent["eventKey"]
	| ProjectEvent["eventKey"]
	| RepoEvent["eventKey"]
