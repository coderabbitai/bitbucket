import type { UUID } from "crypto"
import type { EventKey } from "./events/event.ts"

/**
 * All event payload requests may have these HTTP headers.
 *
 * @see https://confluence.atlassian.com/bitbucketserver/event-payload-938025882.html#Eventpayload-HTTPheaders
 */
export interface BitbucketServerWebhookHeaders {
	/** A unique UUID for each webhook request */
	"X-Request-Id": UUID

	/**
	 * The event that kicked off this webhook. For example, a repository push will
	 * have `repo:refs_changed`.
	 */

	"X-Event-Key": EventKey
	/**
	 * ## Securing your webhook
	 *
	 * You can secure your webhook using a secret token or by using basic
	 * authentication.
	 *
	 * **Secret token**: Use secret tokens to authenticate the payload and ensure
	 * that contents are not tampered between Bitbucket and your endpoint.
	 * Combined with HTTPS, it helps ensure the message transmitted is the one
	 * that Bitbucket intended to send.
	 *
	 * When you define a secret for a webhook, each request is signed via a
	 * Hash-based Message Authentication Code (HMAC). The default for this
	 * algorithm is HMACSha256. The header X-Hub-Signature is defined and contains
	 * the HMAC. For example, the header of the POST request would be plain text
	 * encoded as follows:
	 *
	 * ```ini
	 * x-hub-signature: sha256=c3383246d4fd871e66e962b50cc12222222222222222222222222222222222
	 * ```
	 *
	 * To authenticate the validity of the message payload, the receiver can
	 * perform the HMAC algorithm on the received body with the secret as the key
	 * to the HMAC algorithm. If the results do not match, it may indicate there
	 * was a problem with transmission that has caused the message payload to
	 * change.
	 *
	 * **Basic authentication**: If your endpoint uses basic authentication (a
	 * username and password), use this method to secure your webhook. When the
	 * webhook data is sent, the authorisation header will be included  in the
	 * HTTP request. The authentication credentials for the Authorization header
	 * are base64 encoded.
	 *
	 * @see https://confluence.atlassian.com/bitbucketserver/manage-webhooks-938025878.html#Managewebhooks-webhooksecrets */
	"X-Hub-Signature": string

	/**
	 * The Base64 encoded credentials that authenticate the webhook request.
	 *
	 * This header will only be present if the webhook has basic authentication configured. */
	Authorization?: string
}
