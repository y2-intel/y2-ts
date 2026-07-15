// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ReportsAPI from './reports';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Report retrieval, text, audio, signals, and ontology graphs
 */
export class Reports extends APIResource {
  /**
   * Returns a report's full HTML content, sources, and audio metadata.
   *
   * Supports x402 pay-per-request. Requests with a valid Bearer token use API-key
   * authentication. Without a Bearer API key, start the x402 flow from the
   * `402 Payment Required` response and `PAYMENT-REQUIRED` header; retry with
   * `PAYMENT-SIGNATURE`.
   */
  retrieve(reportID: string, options?: RequestOptions): APIPromise<ReportRetrieveResponse> {
    return this._client.get(path`/reports/${reportID}`, options);
  }

  /**
   * Lists reports for the user's subscribed profiles by generation date, newest
   * first.
   *
   * Supports x402 pay-per-request. Requests with a valid Bearer token use API-key
   * authentication. Without a Bearer API key, start the x402 flow from the
   * `402 Payment Required` response and `PAYMENT-REQUIRED` header; retry with
   * `PAYMENT-SIGNATURE`.
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
   *
   * Supports x402 pay-per-request. Requests with a valid Bearer token use API-key
   * authentication. Without a Bearer API key, start the x402 flow from the
   * `402 Payment Required` response and `PAYMENT-REQUIRED` header; retry with
   * `PAYMENT-SIGNATURE`.
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

    intelligence?: Data.Intelligence;

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

    export interface Intelligence {
      ontologyGraph?: Intelligence.OntologyGraph | null;

      sigint?: Intelligence.Sigint | null;
    }

    export namespace Intelligence {
      export interface OntologyGraph {
        citations: Array<string>;

        edges: Array<OntologyGraph.Edge>;

        /**
         * Graph extraction timestamp in milliseconds
         */
        generatedAt: number;

        incidents: Array<OntologyGraph.Incident>;

        nodes: Array<OntologyGraph.Node>;

        source: 'y2_report_graph';

        summary: string;

        model?: string;

        promptVersion?: string;

        topic?: string;
      }

      export namespace OntologyGraph {
        export interface Edge {
          /**
           * Report-local graph edge ID
           */
          id: string;

          confidence: number;

          /**
           * Source report-local node ID
           */
          from: string;

          fromLabel: string;

          kind: string;

          /**
           * Target report-local node ID
           */
          to: string;

          toLabel: string;

          evidenceUrl?: string;
        }

        export interface Incident {
          /**
           * Report-local incident anchor ID
           */
          id: string;

          category: string;

          citedUrls: Array<string>;

          eventTime: number;

          involvedNodeIds: Array<string>;

          severity: string;

          title: string;

          /**
           * Linked ontology incident ID, when resolved
           */
          incidentId?: string;
        }

        export interface Node {
          /**
           * Report-local graph node ID
           */
          id: string;

          evidenceUrls: Array<string>;

          kind: string;

          label: string;

          /**
           * Linked ontology entity ID, when resolved
           */
          entityId?: string;

          summary?: string;
        }
      }

      export interface Sigint {
        signals: Array<Sigint.Signal>;

        /**
         * Signal extraction timestamp in milliseconds
         */
        generatedAt?: number;

        /**
         * One-sentence summary of the dominant emergent signal set
         */
        summary?: string;
      }

      export namespace Sigint {
        export interface Signal {
          actionType:
            | 'invest'
            | 'patch'
            | 'upgrade'
            | 'strategy'
            | 'hedge'
            | 'monitor'
            | 'mitigate'
            | 'escalate'
            | 'defer'
            | 'allocate';

          confidence: number;

          /**
           * Candidate action or decision hypothesis
           */
          decision: string;

          domain:
            | 'cyber'
            | 'markets'
            | 'geopolitical'
            | 'operational'
            | 'supply_chain'
            | 'policy'
            | 'military'
            | 'technology'
            | 'other';

          entityNames: Array<string>;

          evidenceUrls: Array<string>;

          inferenceType: 'observed' | 'inferred' | 'speculative';

          /**
           * Evidence-grounded rationale
           */
          justification: string;

          priority: 'low' | 'medium' | 'high' | 'critical';

          /**
           * Concise statement of the inferred signal
           */
          signal: string;

          timeHorizon: 'immediate' | 'near_term' | 'mid_term' | 'long_term';

          /**
           * Short signal title
           */
          title: string;

          /**
           * Ontology-aligned signal subjects
           */
          subjects?: Array<Signal.Subject>;

          /**
           * Lowercase filtering tokens for domains, actions, priorities, and subjects
           */
          tags?: Array<string>;
        }

        export namespace Signal {
          export interface Subject {
            kind:
              | 'person'
              | 'organization'
              | 'country'
              | 'region'
              | 'vessel'
              | 'aircraft'
              | 'facility'
              | 'asset'
              | 'indicator'
              | 'cve'
              | 'malware_family'
              | 'threat_actor'
              | 'vendor'
              | 'software'
              | 'ai_model'
              | 'api_service'
              | 'protocol';

            /**
             * Human-readable subject label
             */
            label: string;

            /**
             * Stable ontology subject key used for filtering
             */
            normalizedKey: string;

            /**
             * Linked ontology entity ID when resolved
             */
            entityId?: string;
          }
        }
      }
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

    intelligence?: Data.Intelligence;

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

  export namespace Data {
    export interface Intelligence {
      ontologyGraph?: Intelligence.OntologyGraph | null;

      /**
       * Number of emergent SIGINT signals attached to the report
       */
      sigintSignalCount?: number;
    }

    export namespace Intelligence {
      export interface OntologyGraph {
        edgeCount?: number;

        incidentCount?: number;

        nodeCount?: number;
      }
    }
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
   * Maximum number of reports to return (hard-capped at 5)
   */
  limit?: number;

  /**
   * Filter reports by profile ID
   */
  profileId?: string;
}

export interface ReportRetrieveAudioParams {
  /**
   * When true, redirects with `302` to the audio CDN URL
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
