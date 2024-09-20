import type { ProjectModified } from "./modified.js"

/** You can create webhooks for events that occur in a project. */
export type ProjectEvent = ProjectModified
export type ProjectEventKey = ProjectModified["eventKey"]
