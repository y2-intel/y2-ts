// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Situation Room events, feeds, country data, and source health
 */
export class Countries extends APIResource {
  /**
   * Returns a country's Conflict Indicators Index (CII) score, baseline, delta, and
   * components.
   *
   * Supports x402 pay-per-request. Requests with a valid Bearer token use API-key
   * authentication. Without a Bearer API key, start the x402 flow from the
   * `402 Payment Required` response and `PAYMENT-REQUIRED` header; retry with
   * `PAYMENT-SIGNATURE`.
   */
  getCountryInstabilityIndex(
    countryCode: string,
    options?: RequestOptions,
  ): APIPromise<CountryGetCountryInstabilityIndexResponse> {
    return this._client.get(path`/osint/countries/${countryCode}/cii`, options);
  }

  /**
   * Returns recent country news from the OSINT event pipeline.
   *
   * Supports x402 pay-per-request. Requests with a valid Bearer token use API-key
   * authentication. Without a Bearer API key, start the x402 flow from the
   * `402 Payment Required` response and `PAYMENT-REQUIRED` header; retry with
   * `PAYMENT-SIGNATURE`.
   */
  getCountryNews(
    countryCode: string,
    query: CountryGetCountryNewsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CountryGetCountryNewsResponse> {
    return this._client.get(path`/osint/countries/${countryCode}/news`, { query, ...options });
  }

  /**
   * Returns a periodically generated, cached intelligence brief for a country.
   *
   * Supports x402 pay-per-request. Requests with a valid Bearer token use API-key
   * authentication. Without a Bearer API key, start the x402 flow from the
   * `402 Payment Required` response and `PAYMENT-REQUIRED` header; retry with
   * `PAYMENT-SIGNATURE`.
   */
  getIntelligenceBrief(
    countryCode: string,
    options?: RequestOptions,
  ): APIPromise<CountryGetIntelligenceBriefResponse> {
    return this._client.get(path`/osint/countries/${countryCode}/brief`, options);
  }

  /**
   * Returns prediction-market probabilities and trading volumes for a country.
   *
   * Supports x402 pay-per-request. Requests with a valid Bearer token use API-key
   * authentication. Without a Bearer API key, start the x402 flow from the
   * `402 Payment Required` response and `PAYMENT-REQUIRED` header; retry with
   * `PAYMENT-SIGNATURE`.
   */
  getPredictionMarkets(
    countryCode: string,
    query: CountryGetPredictionMarketsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CountryGetPredictionMarketsResponse> {
    return this._client.get(path`/osint/countries/${countryCode}/predictions`, { query, ...options });
  }

  /**
   * Returns a country's primary stock index, weekly change, and currency.
   *
   * Supports x402 pay-per-request. Requests with a valid Bearer token use API-key
   * authentication. Without a Bearer API key, start the x402 flow from the
   * `402 Payment Required` response and `PAYMENT-REQUIRED` header; retry with
   * `PAYMENT-SIGNATURE`.
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

    generatedAtISO: string;

    publishedAt: string;
  }
}

/**
 * Response wrapper for `/osint/countries/{countryCode}/predictions`. See
 * `PredictionMarketListResponse` for the unified Polymarket+Kalshi response
 * wrapper used by `/osint/prediction-markets`.
 */
export interface CountryGetPredictionMarketsResponse {
  data: Array<CountryGetPredictionMarketsResponse.Data>;

  meta: CountryGetPredictionMarketsResponse.Meta;
}

export namespace CountryGetPredictionMarketsResponse {
  /**
   * Polymarket-only prediction market shape returned by
   * `/osint/countries/{countryCode}/predictions`. The unified Polymarket+Kalshi
   * shape returned by `/osint/prediction-markets` is documented separately as
   * `PredictionMarket`.
   */
  export interface Data {
    id: string;

    /**
     * Prediction market identifier
     */
    marketId: string;

    /**
     * Typed outcome labels with normalized fractional probabilities.
     */
    outcomes: Array<Data.Outcome>;

    /**
     * Current probability (0-1)
     */
    probability: number;

    probabilityBasis: 'fraction_0_to_1';

    /**
     * Market question/title
     */
    title: string;

    type: 'prediction_market';

    /**
     * Market resolution date
     */
    endDate?: string;

    /**
     * Market liquidity (null if unavailable)
     */
    liquidity?: number | null;

    liquidityMeasurement?: Data.LiquidityMeasurement;

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

    volumeMeasurement?: Data.VolumeMeasurement;
  }

  export namespace Data {
    export interface Outcome {
      label: string;

      probability: number;
    }

    export interface LiquidityMeasurement {
      basis: 'provider_reported';

      /**
       * ISO 4217 code when the source identifies one; otherwise null.
       */
      currency: string | null;

      value: number | null;
    }

    export interface VolumeMeasurement {
      basis: 'provider_reported';

      /**
       * ISO 4217 code when the source identifies one; otherwise null.
       */
      currency: string | null;

      value: number | null;
    }
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
   * Opaque continuation token from the previous response. Bound to the original
   * filters and ordering.
   */
  cursor?: string;

  /**
   * Select the JSON resource envelope, row-oriented NDJSON, or an RFC 7946
   * FeatureCollection.
   */
  format?: 'json' | 'ndjson' | 'geojson';

  /**
   * Maximum number of news items to return
   */
  limit?: number;
}

export interface CountryGetPredictionMarketsParams {
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
