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
   * Returns a compact report by default. Use bounded `include` values or
   * `view=agent`; request `text/markdown` for the canonical Markdown representation.
   *
   * Supports x402 pay-per-request. Requests with a valid Bearer token use API-key
   * authentication. Without a Bearer API key, start the x402 flow from the
   * `402 Payment Required` response and `PAYMENT-REQUIRED` header; retry with
   * `PAYMENT-SIGNATURE`.
   */
  retrieve(
    reportID: string,
    query: ReportRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReportRetrieveResponse> {
    return this._client.get(path`/reports/${reportID}`, { query, ...options });
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
   * @deprecated Duration in seconds
   */
  duration?: number;

  /**
   * Duration as HH:MM:SS
   */
  durationFormatted?: string;

  /**
   * Canonical duration in seconds.
   */
  durationSeconds?: number | null;

  /**
   * File size in bytes.
   */
  fileSizeBytes?: number | null;

  format?: 'mp3';

  mimeType?: 'audio/mpeg';

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

    audio: Data.Audio;

    generatedAt: string;

    intelligence: Data.Intelligence;

    language: string;

    links: { [key: string]: string | null };

    profileId: string;

    publishedAt: string;

    status: 'published';

    summary: string | null;

    topic: string | null;

    type: 'report';

    audioRepresentation?: ReportsAPI.AudioMetadata | null;

    content?: Data.Content;

    graph?: Data.Graph;

    profile?: Data.Profile;

    signals?: Array<Data.Signal>;

    sources?: Array<Data.Source>;
  }

  export namespace Data {
    export interface Audio {
      durationSeconds: number | null;

      mediaType: string | null;

      status: 'available' | 'unavailable';
    }

    export interface Intelligence {
      graph: Intelligence.Graph | null;

      signalCount: number;
    }

    export namespace Intelligence {
      export interface Graph {
        edgeCount: number;

        incidentCount: number;

        nodeCount: number;
      }
    }

    export interface Content {
      markdown: string;

      mediaType: 'text/markdown';
    }

    export interface Graph {
      edges: Array<Graph.Edge>;

      generatedAt: string;

      incidents: Array<Graph.Incident>;

      nodes: Array<Graph.Node>;

      sources: Array<Graph.Source>;

      summary: string;
    }

    export namespace Graph {
      export interface Edge {
        id: string;

        confidence: number;

        from: string;

        source: Edge.Source | null;

        to: string;

        type: string;
      }

      export namespace Edge {
        export interface Source {
          id: string;

          url: string;
        }
      }

      export interface Incident {
        id: string;

        category: string;

        entityIds: Array<string>;

        occurredAt: string;

        severity: string;

        sources: Array<Incident.Source>;

        title: string;

        type: 'incident';
      }

      export namespace Incident {
        export interface Source {
          id: string;

          url: string;
        }
      }

      export interface Node {
        id: string;

        kind: string;

        label: string;

        sources: Array<Node.Source>;

        summary: string | null;

        type: 'entity';
      }

      export namespace Node {
        export interface Source {
          id: string;

          url: string;
        }
      }

      export interface Source {
        id: string;

        url: string;
      }
    }

    export interface Profile {
      id: string;

      name: string | null;

      topic: string | null;
    }

    export interface Signal {
      actionType: string;

      confidence: number;

      decision: string;

      domain: string;

      inferenceType: string;

      justification: string;

      priority: string;

      signal: string;

      sources: Array<Signal.Source>;

      subjects: Array<Signal.Subject>;

      tags: Array<string>;

      timeHorizon: string;

      title: string;
    }

    export namespace Signal {
      export interface Source {
        id: string;

        url: string;
      }

      export interface Subject {
        entityId: string | null;

        key: string;

        kind: string;

        label: string;
      }
    }

    export interface Source {
      id: string;

      language: string | null;

      publishedAt: string | null;

      publisher: string | null;

      retrievedAt: string;

      sourceType: string;

      title: string | null;

      url: string;
    }
  }
}

export interface ReportListResponse {
  data: Array<ReportListResponse.Data>;

  links: ReportListResponse.Links;

  meta: ReportListResponse.Meta;
}

export namespace ReportListResponse {
  export interface Data {
    id: string;

    audio: Data.Audio;

    generatedAt: string;

    intelligence: Data.Intelligence;

    language: string;

    links: { [key: string]: string | null };

    profileId: string;

    publishedAt: string;

    status: 'published';

    summary: string | null;

    topic: string | null;

    type: 'report';
  }

  export namespace Data {
    export interface Audio {
      durationSeconds: number | null;

      mediaType: string | null;

      status: 'available' | 'unavailable';
    }

    export interface Intelligence {
      graph: Intelligence.Graph | null;

      signalCount: number;
    }

    export namespace Intelligence {
      export interface Graph {
        edgeCount: number;

        incidentCount: number;

        nodeCount: number;
      }
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

export interface ReportRetrieveAudioResponse {
  data: AudioMetadata | null;
}

export interface ReportRetrieveParams {
  /**
   * Explicit representation override.
   */
  format?: 'markdown';

  /**
   * Comma-separated `content,sources,signals,graph,audio` expansions.
   */
  include?: string;

  /**
   * Compact projection optimized for grounded agent context.
   */
  view?: 'agent';
}

export interface ReportListParams {
  /**
   * Opaque continuation token from the previous response. Bound to the original
   * filters and ordering.
   */
  cursor?: string;

  /**
   * `json` uses the resource envelope; `ndjson` streams one canonical row per line.
   */
  format?: 'json' | 'ndjson';

  /**
   * Maximum number of report rows to scan for this page.
   */
  limit?: number;

  /**
   * Filter by stable public profile ID (`prf_...`).
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
    type ReportRetrieveParams as ReportRetrieveParams,
    type ReportListParams as ReportListParams,
    type ReportRetrieveAudioParams as ReportRetrieveAudioParams,
  };
}
