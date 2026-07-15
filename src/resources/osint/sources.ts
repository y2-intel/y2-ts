// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Situation Room events, feeds, country data, and source health
 */
export class Sources extends APIResource {
  /**
   * Lists OSINT source health, circuit-breaker state, and failure counts.
   *
   * Supports x402 pay-per-request. Requests with a valid Bearer token use API-key
   * authentication. Without a Bearer API key, start the x402 flow from the
   * `402 Payment Required` response and `PAYMENT-REQUIRED` header; retry with
   * `PAYMENT-SIGNATURE`.
   */
  getDataSourceHealth(options?: RequestOptions): APIPromise<SourceGetDataSourceHealthResponse> {
    return this._client.get('/osint/sources/status', options);
  }
}

export interface SourceGetDataSourceHealthResponse {
  data: Array<SourceGetDataSourceHealthResponse.Data>;

  meta: SourceGetDataSourceHealthResponse.Meta;
}

export namespace SourceGetDataSourceHealthResponse {
  export interface Data {
    /**
     * Number of consecutive failures
     */
    failureCount: number;

    /**
     * Data source identifier
     */
    sourceType: string;

    /**
     * Circuit breaker state
     */
    state: 'closed' | 'open' | 'half_open';

    /**
     * Most recent error message
     */
    lastError?: string;

    /**
     * Last failure time (milliseconds)
     */
    lastFailureAt?: number;

    /**
     * Last failure time as ISO 8601 string
     */
    lastFailureAtISO?: string | null;

    /**
     * Last successful fetch time (milliseconds)
     */
    lastSuccessAt?: number;

    /**
     * Last successful fetch time as ISO 8601 string
     */
    lastSuccessAtISO?: string | null;
  }

  export interface Meta {
    count?: number;
  }
}

export declare namespace Sources {
  export { type SourceGetDataSourceHealthResponse as SourceGetDataSourceHealthResponse };
}
