// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as NewsAPI from './news';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Y2 News Terminal operations
 */
export class News extends APIResource {
  /**
   * Returns news items from the Y2 News Terminal cache. Supports filtering by topics
   * and pagination.
   *
   * This endpoint also supports x402 pay-per-request access. Requests with a valid
   * Bearer token use the normal API-key flow. Requests without Authorization return
   * `402 Payment Required` with a `PAYMENT-REQUIRED` header and can be retried with
   * `PAYMENT-SIGNATURE`.
   */
  list(
    query: NewsListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NewsListResponse> {
    return this._client.get('/news', { query, ...options });
  }

  /**
   * Returns AI-generated recap summaries for specified topics within a given
   * timeframe.
   *
   * This endpoint also supports x402 pay-per-request access. Requests with a valid
   * Bearer token use the normal API-key flow. Requests without Authorization return
   * `402 Payment Required` with a `PAYMENT-REQUIRED` header and can be retried with
   * `PAYMENT-SIGNATURE`.
   */
  getRecaps(
    query: NewsGetRecapsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NewsGetRecapsResponse> {
    return this._client.get('/news/recaps', { query, ...options });
  }

  /**
   * Returns all available news feed topics with descriptions.
   *
   * This endpoint also supports x402 pay-per-request access. Requests with a valid
   * Bearer token use the normal API-key flow. Requests without Authorization return
   * `402 Payment Required` with a `PAYMENT-REQUIRED` header and can be retried with
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
  | 'virtuals';

export interface NewsListResponse {
  data: Array<NewsListResponse.Data>;

  meta: NewsListResponse.Meta;
}

export namespace NewsListResponse {
  export interface Data {
    id: string;

    /**
     * Primary signal/headline
     */
    signal: string;

    /**
     * Unix timestamp (seconds)
     */
    timestamp: number;

    timestampISO: string;

    author?: string;

    categories?: Array<string>;

    /**
     * Full context
     */
    content?: string;

    narrativeId?: string;

    /**
     * Sentiment classification for news items
     */
    sentiment?: 'bullish' | 'bearish' | 'neutral' | null;

    sentimentValue?: number;

    sources?: Array<string>;

    /**
     * Short context summary
     */
    summary?: string;

    /**
     * Related tokens/assets
     */
    tokens?: Array<string>;

    tweetUrl?: string;
  }

  export interface Meta {
    count?: number;

    limit?: number;

    topics?: Array<NewsAPI.TopicEnum>;
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
     * Human-readable name
     */
    name: string;

    /**
     * Feed description
     */
    description?: string;
  }

  export interface Meta {
    count?: number;
  }
}

export interface NewsListParams {
  /**
   * Maximum number of items to return
   */
  limit?: number;

  /**
   * Comma-separated list of topics to filter by. Valid topics: ai, ai_agents, base,
   * bitcoin, crypto, dats, defi, ethereum, hyperliquid, machine_learning, macro,
   * on_chain_whale, perps, ripple, rwa, solana, tech, token_listings, virtuals.
   * Default: crypto, ai_agents, macro, bitcoin, ethereum, tech
   */
  topics?: string;
}

export interface NewsGetRecapsParams {
  /**
   * Time period for recaps
   */
  timeframe?: TimeframeEnum;

  /**
   * Comma-separated list of topics. Valid topics: ai, ai_agents, base, bitcoin,
   * crypto, dats, defi, ethereum, hyperliquid, machine_learning, macro,
   * on_chain_whale, perps, ripple, rwa, solana, tech, token_listings, virtuals
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
