// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as NewsAPI from './news';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * News Terminal items, feeds, and AI recaps
 */
export class News extends APIResource {
  /**
   * Lists cached Y2 News Terminal items with topic filters and pagination.
   *
   * Supports x402 pay-per-request. Requests with a valid Bearer token use API-key
   * authentication. Without a Bearer API key, start the x402 flow from the
   * `402 Payment Required` response and `PAYMENT-REQUIRED` header; retry with
   * `PAYMENT-SIGNATURE`.
   */
  list(
    query: NewsListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NewsListResponse> {
    return this._client.get('/news', { query, ...options });
  }

  /**
   * Lists AI-generated recaps for selected topics and timeframe.
   *
   * Supports x402 pay-per-request. Requests with a valid Bearer token use API-key
   * authentication. Without a Bearer API key, start the x402 flow from the
   * `402 Payment Required` response and `PAYMENT-REQUIRED` header; retry with
   * `PAYMENT-SIGNATURE`.
   */
  getRecaps(
    query: NewsGetRecapsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NewsGetRecapsResponse> {
    return this._client.get('/news/recaps', { query, ...options });
  }

  /**
   * Lists news feed topics and descriptions.
   *
   * Supports x402 pay-per-request. Requests with a valid Bearer token use API-key
   * authentication. Without a Bearer API key, start the x402 flow from the
   * `402 Payment Required` response and `PAYMENT-REQUIRED` header; retry with
   * `PAYMENT-SIGNATURE`.
   */
  listFeeds(options?: RequestOptions): APIPromise<NewsListFeedsResponse> {
    return this._client.get('/news/feeds', options);
  }
}

/**
 * Time period for recap data
 */
export type TimeframeEnum = '12h' | '24h' | '3d' | '7d';

/**
 * Available Y2 News Terminal feed topics
 */
export type TopicEnum =
  | 'ai'
  | 'ai_agents'
  | 'base'
  | 'bitcoin'
  | 'crypto'
  | 'dats'
  | 'defi'
  | 'ethereum'
  | 'hyperliquid'
  | 'machine_learning'
  | 'macro'
  | 'on_chain_whale'
  | 'perps'
  | 'ripple'
  | 'rwa'
  | 'solana'
  | 'tech'
  | 'token_listings'
  | 'virtuals'
  | 'geopolitics'
  | 'politics_us'
  | 'defense'
  | 'sanctions_trade'
  | 'equities'
  | 'rates_fx'
  | 'commodities'
  | 'banking_reg'
  | 'energy'
  | 'cyber'
  | 'semiconductors'
  | 'biotech'
  | 'logistics'
  | 'critical_minerals'
  | 'telecom'
  | 'region_mena'
  | 'region_europe'
  | 'region_asiapac'
  | 'region_latam'
  | 'region_africa'
  | 'region_namerica';

export interface NewsListResponse {
  data: Array<NewsListResponse.Data>;

  links: NewsListResponse.Links;

  meta: NewsListResponse.Meta;
}

export namespace NewsListResponse {
  export interface Data {
    id: string;

    author: string | null;

    content: string;

    /**
     * Normalized country, region, location, coordinates, and resolver provenance.
     */
    geography: Data.Geography | null;

    links: Data.Links;

    publishedAt: string;

    sentiment: Data.Sentiment;

    sources: Array<Data.Source>;

    summary: string;

    title: string;

    topics: Array<string>;

    type: 'news';
  }

  export namespace Data {
    /**
     * Normalized country, region, location, coordinates, and resolver provenance.
     */
    export interface Geography {
      countryCode?: string;

      lat?: number;

      locationName?: string;

      lon?: number;

      provenance?: { [key: string]: unknown };

      region?: string;
    }

    export interface Links {
      canonical: string | null;
    }

    export interface Sentiment {
      /**
       * Sentiment classification for news items
       */
      label: 'bullish' | 'bearish' | 'neutral' | null;

      value: number;
    }

    export interface Source {
      id: string;

      language: string | null;

      publishedAt: string;

      publisher: string | null;

      retrievedAt: string | null;

      sourceType: string;

      title: string | null;

      url: string | null;
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

    topics: Array<NewsAPI.TopicEnum>;

    countryCode?: string | null;
  }

  export namespace Meta {
    export interface Page {
      hasMore: boolean;

      limit: number;

      nextCursor: string | null;
    }
  }
}

export interface NewsGetRecapsResponse {
  data: { [key: string]: unknown };

  meta: NewsGetRecapsResponse.Meta;
}

export namespace NewsGetRecapsResponse {
  export interface Meta {
    /**
     * Time period for recap data
     */
    timeframe?: NewsAPI.TimeframeEnum;

    topics?: Array<NewsAPI.TopicEnum>;
  }
}

export interface NewsListFeedsResponse {
  data: Array<NewsListFeedsResponse.Data>;

  meta: NewsListFeedsResponse.Meta;
}

export namespace NewsListFeedsResponse {
  export interface Data {
    /**
     * Available Y2 News Terminal feed topics
     */
    id: NewsAPI.TopicEnum;

    /**
     * UI gradient classes associated with the feed
     */
    color: string;

    /**
     * Feed description
     */
    description: string;

    /**
     * Machine-readable topic group ID
     */
    group: string;

    /**
     * Human-readable topic group name
     */
    groupLabel: string;

    /**
     * Whether eligible signals can enter the OSINT ontology pipeline
     */
    ingestOntology: boolean;

    /**
     * Human-readable name
     */
    name: string;

    /**
     * Compact display name
     */
    shortLabel: string;
  }

  export interface Meta {
    count?: number;

    defaultTopics?: Array<NewsAPI.TopicEnum>;
  }
}

export interface NewsListParams {
  /**
   * Filter by canonical ISO 3166-1 alpha-2 country code. When supplied without
   * `topics`, the query searches every News Terminal topic.
   */
  countryCode?: string;

  /**
   * Opaque continuation token from the previous response. Bound to the original
   * filters and ordering.
   */
  cursor?: string;

  /**
   * Use `ndjson` for row-oriented streaming output.
   */
  format?: 'json' | 'ndjson';

  /**
   * Maximum number of items to return
   */
  limit?: number;

  /**
   * Comma-separated list of topics to filter by. Use `GET /news/feeds` to discover
   * the current topic catalog. Default: crypto, geopolitics, macro, equities, ai,
   * energy
   */
  topics?: string;
}

export interface NewsGetRecapsParams {
  /**
   * Time period for recaps
   */
  timeframe?: TimeframeEnum;

  /**
   * Comma-separated list of topics. Use `GET /news/feeds` to discover the current
   * topic catalog.
   */
  topics?: string;
}

export declare namespace News {
  export {
    type TimeframeEnum as TimeframeEnum,
    type TopicEnum as TopicEnum,
    type NewsListResponse as NewsListResponse,
    type NewsGetRecapsResponse as NewsGetRecapsResponse,
    type NewsListFeedsResponse as NewsListFeedsResponse,
    type NewsListParams as NewsListParams,
    type NewsGetRecapsParams as NewsGetRecapsParams,
  };
}
