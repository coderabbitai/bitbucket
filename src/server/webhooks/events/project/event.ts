import type { Event } from "../event.js"
import type { ProjectModified } from "./modified.js"

/** You can create webhooks for events that occur in a project. */
export type ProjectEvent = ProjectModified
export type ProjectEventKey = ProjectEvent["eventKey"]

export function isProjectEvent(event: Event): event is ProjectEvent {
	return isProjectEventKey(event.eventKey)
}

export function isProjectEventKey(key: unknown): key is ProjectEventKey {
	return Object.values<unknown>(projectEventKeys).includes(key)
}

export const projectEventKeys = {
	"project:modified": "project:modified",
} as const

projectEventKeys satisfies Record<ProjectEventKey, ProjectEventKey>
