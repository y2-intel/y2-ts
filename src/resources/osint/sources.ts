// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Situation Room OSINT intelligence operations
 */
export class Sources extends APIResource {
  /**
   * Returns the health status of all OSINT data sources, including circuit breaker
   * state and failure counts.
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
