// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ReportsAPI from './reports';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Reports extends APIResource {
  /**
   * Returns the full content of a specific intelligence report, including HTML
   * content, sources, and audio metadata.
   */
  retrieve(reportID: string, options?: RequestOptions): APIPromise<ReportRetrieveResponse> {
    return this._client.get(path`/reports/${reportID}`, options);
  }

  /**
   * Returns a list of reports for the user's subscribed profiles. Results are sorted
   * by generation date (newest first).
   */
  list(
    query: ReportListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReportListResponse> {
    return this._client.get('/reports', { query, ...options });
  }

  /**
   * Returns audio file metadata or redirects to the CDN URL. Requires the
   * `reports:audio` scope.
   */
  retrieveAudio(
    reportID: string,
    query: ReportRetrieveAudioParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReportRetrieveAudioResponse> {
    return this._client.get(path`/reports/${reportID}/audio`, { query, ...options });
  }
}

export interface AudioMetadata {
  /**
   * Duration in seconds
   */
  duration?: number;

  /**
   * Duration as HH:MM:SS
   */
  durationFormatted?: string;

  /**
   * File size in bytes
   */
  fileSize?: number;

  format?: 'mp3';

  mimeType?: 'audio/mpeg';

  /**
   * Convex storage ID for internal reference
   */
  storageId?: string;

  /**
   * CDN URL for audio file
   */
  url?: string;
}

export interface ReportRetrieveResponse {
  data: ReportRetrieveResponse.Data;
}

export namespace ReportRetrieveResponse {
  export interface Data {
    id: string;

    content: Data.Content;

    generatedAt: number;

    generatedAtISO: string;

    profileId: string;

    audio?: ReportsAPI.AudioMetadata | null;

    metadata?: Data.Metadata;

    profileName?: string;

    profileTopic?: string;

    sources?: Array<string>;

    topic?: string;
  }

  export namespace Data {
    export interface Content {
      /**
       * Full HTML content
       */
      html?: string;

      /**
       * SMS-friendly summary
       */
      summary?: string;
    }

    export interface Metadata {
      /**
       * Source freshness validation results
       */
      freshnessMetadata?: Metadata.FreshnessMetadata;

      model?: string;

      /**
       * Metadata about recursive research execution
       */
      recursionMetadata?: Metadata.RecursionMetadata;

      totalCost?: number;
    }

    export namespace Metadata {
      /**
       * Source freshness validation results
       */
      export interface FreshnessMetadata {
        accessibleLinks?: number;

        /**
         * Average source age in milliseconds
         */
        averageAgeMs?: number;

        /**
         * Overall freshness score (higher = fresher)
         */
        freshnessScore?: number;

        staleSourcesCount?: number;

        totalLinks?: number;

        validatedAt?: number;
      }

      /**
       * Metadata about recursive research execution
       */
      export interface RecursionMetadata {
        /**
         * Recursion depth achieved (0 = standard report)
         */
        depth?: number;

        /**
         * Reason if fallback to standard generation occurred
         */
        fallbackReason?: string;

        layersProcessed?: number;

        strategy?: 'breadth-first' | 'depth-first' | 'hybrid';

        subtopicsGenerated?: Array<string>;

        totalSourcesCollected?: number;

        totalTimeMs?: number;

        uniqueSourcesAggregated?: number;
      }
    }
  }
}

export interface ReportListResponse {
  data: Array<ReportListResponse.Data>;

  meta: ReportListResponse.Meta;
}

export namespace ReportListResponse {
  export interface Data {
    /**
     * Report ID (Convex document ID)
     */
    id: string;

    /**
     * Unix timestamp (milliseconds)
     */
    generatedAt: number;

    /**
     * ISO 8601 timestamp
     */
    generatedAtISO: string;

    /**
     * Profile ID this report belongs to
     */
    profileId: string;

    /**
     * Whether audio narration is available
     */
    hasAudio?: boolean;

    /**
     * LLM model used for generation
     */
    model?: string;

    /**
     * Brief SMS-friendly summary
     */
    summary?: string;

    /**
     * Report topic
     */
    topic?: string;
  }

  export interface Meta {
    count?: number;

    limit?: number;
  }
}

export interface ReportRetrieveAudioResponse {
  data: AudioMetadata | null;
}

export interface ReportListParams {
  /**
   * Maximum number of reports to return
   */
  limit?: number;

  /**
   * Filter reports by profile ID
   */
  profileId?: string;
}

export interface ReportRetrieveAudioParams {
  /**
   * If true, returns 302 redirect to audio CDN URL
   */
  redirect?: boolean;
}

export declare namespace Reports {
  export {
    type AudioMetadata as AudioMetadata,
    type ReportRetrieveResponse as ReportRetrieveResponse,
    type ReportListResponse as ReportListResponse,
    type ReportRetrieveAudioResponse as ReportRetrieveAudioResponse,
    type ReportListParams as ReportListParams,
    type ReportRetrieveAudioParams as ReportRetrieveAudioParams,
  };
}
