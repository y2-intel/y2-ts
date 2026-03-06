// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Situation Room OSINT intelligence operations
 */
export class Countries extends APIResource {
  /**
   * Returns the per-country Conflict Indicators Index (CII) score, including
   * baseline, delta, and component breakdown.
   */
  getCountryInstabilityIndex(
    countryCode: string,
    options?: RequestOptions,
  ): APIPromise<CountryGetCountryInstabilityIndexResponse> {
    return this._client.get(path`/osint/countries/${countryCode}/cii`, options);
  }

  /**
   * Returns recent news items specific to a given country, sourced from the OSINT
   * event pipeline.
   */
  getCountryNews(
    countryCode: string,
    query: CountryGetCountryNewsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CountryGetCountryNewsResponse> {
    return this._client.get(path`/osint/countries/${countryCode}/news`, { query, ...options });
  }

  /**
   * Returns an AI-generated intelligence brief for a specific country. Briefs are
   * generated periodically and cached.
   */
  getIntelligenceBrief(
    countryCode: string,
    options?: RequestOptions,
  ): APIPromise<CountryGetIntelligenceBriefResponse> {
    return this._client.get(path`/osint/countries/${countryCode}/brief`, options);
  }

  /**
   * Returns prediction market data for a specific country, including probabilities
   * and trading volumes.
   */
  getPredictionMarkets(
    countryCode: string,
    query: CountryGetPredictionMarketsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CountryGetPredictionMarketsResponse> {
    return this._client.get(path`/osint/countries/${countryCode}/predictions`, { query, ...options });
  }

  /**
   * Returns the primary stock market index data for a specific country, including
   * weekly change and currency.
   */
  getStockMarketIndex(
    countryCode: string,
    options?: RequestOptions,
  ): APIPromise<CountryGetStockMarketIndexResponse> {
    return this._client.get(path`/osint/countries/${countryCode}/markets`, options);
  }
}

export interface CountryGetCountryInstabilityIndexResponse {
  data: CountryGetCountryInstabilityIndexResponse.Data;

  meta?: CountryGetCountryInstabilityIndexResponse.Meta;
}

export namespace CountryGetCountryInstabilityIndexResponse {
  export interface Data {
    /**
     * Baseline instability score for this country
     */
    baseline: number;

    /**
     * Computation time as Unix timestamp (milliseconds)
     */
    computedAt: number;

    /**
     * ISO alpha-2 country code
     */
    countryCode: string;

    /**
     * Country display name
     */
    countryName: string;

    /**
     * Change from baseline
     */
    delta: number;

    /**
     * Current instability index (0-100)
     */
    value: number;

    /**
     * Breakdown of instability components
     */
    components?: Data.Components;

    /**
     * Computation time as ISO 8601 string
     */
    computedAtISO?: string;
  }

  export namespace Data {
    /**
     * Breakdown of instability components
     */
    export interface Components {
      eventCounts?: unknown;

      info?: number;

      multiplier?: number;

      security?: number;

      unrest?: number;
    }
  }

  export interface Meta {
    countryCode?: string;
  }
}

export interface CountryGetCountryNewsResponse {
  data: Array<CountryGetCountryNewsResponse.Data>;

  meta: CountryGetCountryNewsResponse.Meta;
}

export namespace CountryGetCountryNewsResponse {
  export interface Data {
    /**
     * News item ID
     */
    id: string;

    /**
     * OSINT event category classification
     */
    category:
      | 'seismic'
      | 'conflict'
      | 'political'
      | 'economic'
      | 'weather'
      | 'health'
      | 'cyber'
      | 'maritime'
      | 'fire'
      | 'aviation'
      | 'other';

    /**
     * Event time as Unix timestamp (milliseconds)
     */
    eventTime: number;

    /**
     * Event severity level
     */
    severity: 'low' | 'medium' | 'high' | 'critical';

    /**
     * News headline
     */
    title: string;

    /**
     * News description/summary
     */
    description?: string;

    /**
     * Data source type
     */
    sourceType?: string;

    /**
     * Source URL
     */
    url?: string;
  }

  export interface Meta {
    count?: number;

    countryCode?: string;

    /**
     * Whether more results are available beyond the current limit
     */
    hasMore?: boolean;

    limit?: number;
  }
}

export interface CountryGetIntelligenceBriefResponse {
  data: CountryGetIntelligenceBriefResponse.Data;
}

export namespace CountryGetIntelligenceBriefResponse {
  export interface Data {
    /**
     * AI-generated intelligence brief text
     */
    briefText: string;

    /**
     * Generation time as Unix timestamp (milliseconds)
     */
    generatedAt: number;

    /**
     * LLM model used for generation
     */
    model: string;
  }
}

export interface CountryGetPredictionMarketsResponse {
  data: Array<CountryGetPredictionMarketsResponse.Data>;

  meta: CountryGetPredictionMarketsResponse.Meta;
}

export namespace CountryGetPredictionMarketsResponse {
  export interface Data {
    /**
     * Prediction market identifier
     */
    marketId: string;

    /**
     * Current probability (0-1)
     */
    probability: number;

    /**
     * Market question/title
     */
    title: string;

    /**
     * Market resolution date
     */
    endDate?: string;

    /**
     * Market liquidity (null if unavailable)
     */
    liquidity?: number | null;

    /**
     * Outcome prices corresponding to each outcome (null if unavailable)
     */
    outcomePrices?: Array<string> | null;

    /**
     * Possible market outcomes
     */
    outcomes?: Array<string>;

    /**
     * Polymarket URL for this market
     */
    polymarketUrl?: string;

    /**
     * URL-friendly market slug (null if unavailable)
     */
    slug?: string | null;

    /**
     * Trading volume
     */
    volume?: number;
  }

  export interface Meta {
    count?: number;

    countryCode?: string;

    /**
     * Whether more results are available beyond the current limit
     */
    hasMore?: boolean;

    limit?: number;
  }
}

export interface CountryGetStockMarketIndexResponse {
  data: CountryGetStockMarketIndexResponse.Data;
}

export namespace CountryGetStockMarketIndexResponse {
  export interface Data {
    /**
     * Currency code
     */
    currency: string;

    /**
     * Data fetch time as Unix timestamp (milliseconds)
     */
    fetchedAt: number;

    /**
     * Human-readable index name
     */
    indexName: string;

    /**
     * Stock index ticker symbol
     */
    ticker: string;

    /**
     * Weekly change percentage
     */
    weeklyChange: number;

    /**
     * Current index price/value
     */
    currentPrice?: number;

    /**
     * Data fetch time as ISO 8601 string
     */
    fetchedAtISO?: string;
  }
}

export interface CountryGetCountryNewsParams {
  /**
   * Maximum number of news items to return
   */
  limit?: number;
}

export interface CountryGetPredictionMarketsParams {
  /**
   * Maximum number of predictions to return
   */
  limit?: number;
}

export declare namespace Countries {
  export {
    type CountryGetCountryInstabilityIndexResponse as CountryGetCountryInstabilityIndexResponse,
    type CountryGetCountryNewsResponse as CountryGetCountryNewsResponse,
    type CountryGetIntelligenceBriefResponse as CountryGetIntelligenceBriefResponse,
    type CountryGetPredictionMarketsResponse as CountryGetPredictionMarketsResponse,
    type CountryGetStockMarketIndexResponse as CountryGetStockMarketIndexResponse,
    type CountryGetCountryNewsParams as CountryGetCountryNewsParams,
    type CountryGetPredictionMarketsParams as CountryGetPredictionMarketsParams,
  };
}
