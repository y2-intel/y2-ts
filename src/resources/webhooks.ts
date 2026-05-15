// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Webhook configuration management (Lite and Pro feature)
 */
export class Webhooks extends APIResource {
  /**
   * Creates a new webhook configuration. Requires an active Lite or Pro
   * subscription. The webhook URL must be HTTPS and pass SSRF security validation.
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.create({
   *   name: 'My Webhook',
   *   url: 'https://example.com/webhook',
   * });
   * ```
   */
  create(body: WebhookCreateParams, options?: RequestOptions): APIPromise<WebhookCreateResponse> {
    return this._client.post('/webhooks', { body, ...options });
  }

  /**
   * Updates an existing webhook configuration. All fields are optional. Only
   * provided fields will be updated.
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.update('webhookId');
   * ```
   */
  update(
    webhookID: string,
    body: WebhookUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WebhookUpdateResponse> {
    return this._client.put(path`/webhooks/${webhookID}`, { body, ...options });
  }

  /**
   * Returns all webhook configurations for the authenticated user. Secrets are
   * masked in the response.
   *
   * @example
   * ```ts
   * const webhooks = await client.webhooks.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<WebhookListResponse> {
    return this._client.get('/webhooks', options);
  }

  /**
   * Deletes a webhook configuration. Fails with 409 if the webhook is currently in
   * use by any subscriptions.
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.delete('webhookId');
   * ```
   */
  delete(webhookID: string, options?: RequestOptions): APIPromise<WebhookDeleteResponse> {
    return this._client.delete(path`/webhooks/${webhookID}`, options);
  }

  /**
   * Sends a test payload to the webhook URL and returns the result. Returns 422 if
   * the webhook endpoint responds with an error.
   *
   * @example
   * ```ts
   * const response = await client.webhooks.test('webhookId');
   * ```
   */
  test(webhookID: string, options?: RequestOptions): APIPromise<WebhookTestResponse> {
    return this._client.post(path`/webhooks/${webhookID}/test`, options);
  }
}

export interface WebhookCreateResponse {
  data: WebhookCreateResponse.Data;

  meta: WebhookCreateResponse.Meta;
}

export namespace WebhookCreateResponse {
  export interface Data {
    /**
     * The ID of the newly created webhook configuration
     */
    webhookId: string;
  }

  export interface Meta {
    message?: string;
  }
}

export interface WebhookUpdateResponse {
  data: WebhookUpdateResponse.Data;

  meta: WebhookUpdateResponse.Meta;
}

export namespace WebhookUpdateResponse {
  export interface Data {
    success: boolean;

    webhookId: string;
  }

  export interface Meta {
    message?: string;
  }
}

export interface WebhookListResponse {
  data: Array<WebhookListResponse.Data>;

  meta: WebhookListResponse.Meta;
}

export namespace WebhookListResponse {
  export interface Data {
    /**
     * Webhook configuration ID
     */
    id: string;

    /**
     * Creation timestamp (ms)
     */
    createdAt: number;

    /**
     * Consecutive failure count (auto-disabled at 5)
     */
    failureCount: number;

    /**
     * Whether a secret is configured (actual secret is never exposed)
     */
    hasSecret: boolean;

    /**
     * Whether the webhook is active
     */
    isActive: boolean;

    /**
     * Webhook display name
     */
    name: string;

    /**
     * Webhook endpoint URL
     */
    url: string;

    /**
     * Last delivery timestamp (ms)
     */
    lastUsedAt?: number;

    /**
     * Last update timestamp (ms)
     */
    updatedAt?: number;
  }

  export interface Meta {
    count?: number;
  }
}

export interface WebhookDeleteResponse {
  data: WebhookDeleteResponse.Data;

  meta: WebhookDeleteResponse.Meta;
}

export namespace WebhookDeleteResponse {
  export interface Data {
    deleted: boolean;

    webhookId: string;
  }

  export interface Meta {
    message?: string;
  }
}

export interface WebhookTestResponse {
  data: WebhookTestResponse.Data;

  meta: WebhookTestResponse.Meta;
}

export namespace WebhookTestResponse {
  export interface Data {
    success: boolean;

    /**
     * Error message if the test failed
     */
    error?: string;

    /**
     * Response time in milliseconds
     */
    responseTime?: number;

    /**
     * HTTP status code from the webhook endpoint
     */
    statusCode?: number;
  }

  export interface Meta {
    message?: string;
  }
}

export interface WebhookCreateParams {
  /**
   * Webhook display name
   */
  name: string;

  /**
   * Webhook endpoint URL (must be HTTPS)
   */
  url: string;

  /**
   * Custom headers to include in webhook deliveries
   */
  headers?: { [key: string]: string };

  /**
   * Shared secret for signature verification
   */
  secret?: string;
}

export interface WebhookUpdateParams {
  headers?: { [key: string]: string };

  isActive?: boolean;

  name?: string;

  secret?: string;

  url?: string;
}

export declare namespace Webhooks {
  export {
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookListResponse as WebhookListResponse,
    type WebhookDeleteResponse as WebhookDeleteResponse,
    type WebhookTestResponse as WebhookTestResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
  };
}
