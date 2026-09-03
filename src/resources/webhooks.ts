// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Webhook configuration for paid workspaces
 */
export class Webhooks extends APIResource {
  /**
   * Creates a webhook configuration. Requires a paid workspace plan with webhook
   * access. The URL must use HTTPS and pass SSRF validation.
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.create({
   *   name: 'My Webhook',
   *   url: 'https://example.com/webhook',
   * });
   * ```
   */
  create(params: WebhookCreateParams, options?: RequestOptions): APIPromise<WebhookCreateResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/webhooks', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Replaces every mutable webhook configuration field. `name` and `url` are
   * required; omitted optional fields are reset to their defaults.
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.update(
   *   'whk_210b9798eb53baa4e69d31c1',
   *   {
   *     name: 'My Webhook',
   *     url: 'https://example.com/webhook',
   *   },
   * );
   * ```
   */
  update(
    webhookID: string,
    params: WebhookUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WebhookUpdateResponse> {
    const { 'If-Match': ifMatch, ...body } = params;
    return this._client.put(path`/webhooks/${webhookID}`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(ifMatch != null ? { 'If-Match': ifMatch } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Lists the authenticated user's webhook configurations. Masks secrets.
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
   * Deletes a webhook configuration. Returns `409` if any subscription uses it.
   *
   * @example
   * ```ts
   * await client.webhooks.delete(
   *   'whk_210b9798eb53baa4e69d31c1',
   * );
   * ```
   */
  delete(
    webhookID: string,
    params: WebhookDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'If-Match': ifMatch } = params ?? {};
    return this._client.delete(path`/webhooks/${webhookID}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(ifMatch != null ? { 'If-Match': ifMatch } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Sends a test payload to the webhook URL. Returns `422` if the endpoint responds
   * with an error.
   *
   * @example
   * ```ts
   * const response = await client.webhooks.test(
   *   'whk_210b9798eb53baa4e69d31c1',
   * );
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
     * Stable public webhook configuration ID
     */
    id: string;

    createdAt: string;

    /**
     * Configured header names; values are never returned.
     */
    customHeaders: Array<string>;

    deliveryHealth: Data.DeliveryHealth;

    links: Data.Links;

    /**
     * Webhook display name
     */
    name: string;

    signing: Data.Signing;

    status: 'active' | 'disabled';

    type: 'webhook';

    updatedAt: string;

    /**
     * Webhook endpoint URL
     */
    url: string;
  }

  export namespace Data {
    export interface DeliveryHealth {
      consecutiveFailures: number;

      lastUsedAt: string | null;
    }

    export interface Links {
      self: string;

      test: string;
    }

    export interface Signing {
      algorithm: 'hmac-sha256' | null;

      configured: boolean;
    }
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
    /**
     * Stable public webhook configuration ID
     */
    id: string;

    createdAt: string;

    /**
     * Configured header names; values are never returned.
     */
    customHeaders: Array<string>;

    deliveryHealth: Data.DeliveryHealth;

    links: Data.Links;

    /**
     * Webhook display name
     */
    name: string;

    signing: Data.Signing;

    status: 'active' | 'disabled';

    type: 'webhook';

    updatedAt: string;

    /**
     * Webhook endpoint URL
     */
    url: string;
  }

  export namespace Data {
    export interface DeliveryHealth {
      consecutiveFailures: number;

      lastUsedAt: string | null;
    }

    export interface Links {
      self: string;

      test: string;
    }

    export interface Signing {
      algorithm: 'hmac-sha256' | null;

      configured: boolean;
    }
  }

  export interface Meta {
    message?: string;
  }
}

export interface WebhookListResponse {
  data: Array<WebhookListResponse.Data>;

  links: WebhookListResponse.Links;

  meta: WebhookListResponse.Meta;
}

export namespace WebhookListResponse {
  export interface Data {
    /**
     * Stable public webhook configuration ID
     */
    id: string;

    createdAt: string;

    /**
     * Configured header names; values are never returned.
     */
    customHeaders: Array<string>;

    deliveryHealth: Data.DeliveryHealth;

    links: Data.Links;

    /**
     * Webhook display name
     */
    name: string;

    signing: Data.Signing;

    status: 'active' | 'disabled';

    type: 'webhook';

    updatedAt: string;

    /**
     * Webhook endpoint URL
     */
    url: string;
  }

  export namespace Data {
    export interface DeliveryHealth {
      consecutiveFailures: number;

      lastUsedAt: string | null;
    }

    export interface Links {
      self: string;

      test: string;
    }

    export interface Signing {
      algorithm: 'hmac-sha256' | null;

      configured: boolean;
    }
  }

  export interface Links {
    next: string | null;

    self: string;
  }

  export interface Meta {
    asOf: string;

    /**
     * @deprecated
     */
    count: number;

    hasMore: boolean;

    isDone: boolean;

    limit: number;

    nextCursor: string | null;

    page: Meta.Page;

    pageCount: number;
  }

  export namespace Meta {
    export interface Page {
      hasMore: boolean;

      limit: number;

      nextCursor: string | null;
    }
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
   * Body param: Webhook display name
   */
  name: string;

  /**
   * Body param: Webhook endpoint URL (must be HTTPS)
   */
  url: string;

  /**
   * Body param: Custom headers to include in webhook deliveries
   */
  headers?: { [key: string]: string };

  /**
   * Body param: Shared secret for signature verification
   */
  secret?: string;

  /**
   * Header param: Client-generated retry key retained for 24 hours. Repeating the
   * same key and canonical JSON body returns the original resource; changing the
   * body returns `409 IDEMPOTENCY_CONFLICT`.
   */
  'Idempotency-Key'?: string;
}

export interface WebhookUpdateParams {
  /**
   * Body param: Webhook display name
   */
  name: string;

  /**
   * Body param: Webhook endpoint URL (must be HTTPS)
   */
  url: string;

  /**
   * Body param: Custom headers to include in webhook deliveries
   */
  headers?: { [key: string]: string };

  /**
   * Body param
   */
  isActive?: boolean;

  /**
   * Body param: Shared secret for signature verification
   */
  secret?: string;

  /**
   * Header param: Strong ETag from the latest representation. A mismatch
   * returns 412.
   */
  'If-Match'?: string;
}

export interface WebhookDeleteParams {
  /**
   * Strong ETag from the latest representation. A mismatch returns 412.
   */
  'If-Match'?: string;
}

export declare namespace Webhooks {
  export {
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookListResponse as WebhookListResponse,
    type WebhookTestResponse as WebhookTestResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookDeleteParams as WebhookDeleteParams,
  };
}
