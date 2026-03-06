// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CountriesAPI from './countries';
import {
  Countries,
  CountryGetCountryInstabilityIndexResponse,
  CountryGetCountryNewsParams,
  CountryGetCountryNewsResponse,
  CountryGetIntelligenceBriefResponse,
  CountryGetPredictionMarketsParams,
  CountryGetPredictionMarketsResponse,
  CountryGetStockMarketIndexResponse,
} from './countries';
import * as SourcesAPI from './sources';
import { SourceGetDataSourceHealthResponse, Sources } from './sources';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Situation Room OSINT intelligence operations
 */
export class Osint extends APIResource {
  countries: CountriesAPI.Countries = new CountriesAPI.Countries(this._client);
  sources: SourcesAPI.Sources = new SourcesAPI.Sources(this._client);

  /**
   * Returns the Conflict Indicators Index (CII) values. Each item represents a
   * conflict indicator with a score from 0-100 and a delta showing recent change.
   * Supports filtering by region and category.
   */
  getConflictIndicators(
    query: OsintGetConflictIndicatorsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OsintGetConflictIndicatorsResponse> {
    return this._client.get('/osint/cii', { query, ...options });
  }

  /**
   * Returns GPS interference zones detected via ADS-B navigation accuracy
   * degradation analysis, aggregated into H3 hex cells.
   */
  getGpsJammingZones(
    query: OsintGetGpsJammingZonesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OsintGetGpsJammingZonesResponse> {
    return this._client.get('/osint/gps-jamming', { query, ...options });
  }

  /**
   * Returns military posture assessments for monitored theaters, based on detected
   * military aircraft activity from the OpenSky Network. Each theater has a posture
   * level (normal, elevated, critical) and aircraft breakdown by type.
   */
  getMilitaryPosture(
    query: OsintGetMilitaryPostureParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OsintGetMilitaryPostureResponse> {
    return this._client.get('/osint/military-posture', { query, ...options });
  }

  /**
   * Returns tracked military aircraft positions from the OpenSky Network, filtered
   * and classified by type (tanker, AWACS, fighter, etc.).
   */
  listAircraft(
    query: OsintListAircraftParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OsintListAircraftResponse> {
    return this._client.get('/osint/aircraft', { query, ...options });
  }

  /**
   * Returns OSINT threat events from the Situation Room. Supports filtering by
   * category, severity, region, and country.
   */
  listEvents(
    query: OsintListEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OsintListEventsResponse> {
    return this._client.get('/osint/events', { query, ...options });
  }

  /**
   * Returns naval vessel positions sourced from USNI fleet tracker data, including
   * carrier strike groups and individual warships.
   */
  listVessels(
    query: OsintListVesselsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OsintListVesselsResponse> {
    return this._client.get('/osint/vessels', { query, ...options });
  }

  /**
   * Returns OSINT events with geographic coordinates for map display. Events without
   * coordinates are excluded.
   */
  mapEvents(
    query: OsintMapEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OsintMapEventsResponse> {
    return this._client.get('/osint/map', { query, ...options });
  }
}

export interface OsintGetConflictIndicatorsResponse {
  data: Array<OsintGetConflictIndicatorsResponse.Data>;

  meta: OsintGetConflictIndicatorsResponse.Meta;
}

export namespace OsintGetConflictIndicatorsResponse {
  export interface Data {
    /**
     * CII item ID
     */
    id: string;

    /**
     * Conflict indicator category
     */
    category: string;

    /**
     * Computation time as Unix timestamp (milliseconds)
     */
    computedAt: number;

    /**
     * Recent change in value
     */
    delta: number;

    /**
     * Conflict indicator value (0-100)
     */
    value: number;

    /**
     * Breakdown of indicator components
     */
    components?: { [key: string]: unknown };

    /**
     * Computation time as ISO 8601 string
     */
    computedAtISO?: string;

    /**
     * Geographic region identifier
     */
    region?: 'mena' | 'africa' | 'latam' | 'asiapac' | 'europe' | 'namerica';
  }

  export interface Meta {
    count?: number;

    filters?: Meta.Filters;

    /**
     * Whether more results are available beyond the current limit
     */
    hasMore?: boolean;

    limit?: number;
  }

  export namespace Meta {
    export interface Filters {
      category?: string | null;

      region?: string | null;
    }
  }
}

export interface OsintGetGpsJammingZonesResponse {
  data: Array<OsintGetGpsJammingZonesResponse.Data>;

  meta: OsintGetGpsJammingZonesResponse.Meta;
}

export namespace OsintGetGpsJammingZonesResponse {
  export interface Data {
    /**
     * Zone ID
     */
    id: string;

    coordinates: Data.Coordinates;

    /**
     * Fetch time as Unix timestamp (milliseconds)
     */
    fetchedAt: number;

    /**
     * H3 hexagonal cell index
     */
    h3Index: string;

    /**
     * Severity classification of interference
     */
    severity: string;

    /**
     * Number of distinct aircraft reporting
     */
    aircraftCount?: number;

    /**
     * Fetch time as ISO 8601 string
     */
    fetchedAtISO?: string;

    /**
     * Average navigation accuracy category
     */
    navAccuracyAvg?: number;

    /**
     * Number of ADS-B samples in this cell
     */
    sampleCount?: number;
  }

  export namespace Data {
    export interface Coordinates {
      lat: number;

      lon: number;
    }
  }

  export interface Meta {
    count?: number;

    filters?: Meta.Filters;

    /**
     * Whether more results are available beyond the current limit
     */
    hasMore?: boolean;

    limit?: number;
  }

  export namespace Meta {
    export interface Filters {
      severity?: string | null;
    }
  }
}

export interface OsintGetMilitaryPostureResponse {
  data: Array<OsintGetMilitaryPostureResponse.Data>;

  meta: OsintGetMilitaryPostureResponse.Meta;
}

export namespace OsintGetMilitaryPostureResponse {
  export interface Data {
    /**
     * Number of detected military aircraft
     */
    aircraftCount: number;

    /**
     * Assessment time as Unix timestamp (milliseconds)
     */
    computedAt: number;

    /**
     * Current military posture assessment
     */
    posture: 'normal' | 'elevated' | 'critical';

    /**
     * Theater name (e.g. "iran", "taiwan", "baltic")
     */
    theater: string;

    /**
     * Aircraft count by type
     */
    breakdown?: Data.Breakdown;

    /**
     * Assessment time as ISO 8601 string
     */
    computedAtISO?: string;
  }

  export namespace Data {
    /**
     * Aircraft count by type
     */
    export interface Breakdown {
      awacs?: number;

      bomber?: number;

      drone?: number;

      fighter?: number;

      military_generic?: number;

      recon?: number;

      tanker?: number;

      transport?: number;
    }
  }

  export interface Meta {
    count?: number;

    /**
     * Whether more results are available beyond the current limit
     */
    hasMore?: boolean;

    limit?: number;
  }
}

export interface OsintListAircraftResponse {
  data: Array<OsintListAircraftResponse.Data>;

  meta: OsintListAircraftResponse.Meta;
}

export namespace OsintListAircraftResponse {
  export interface Data {
    /**
     * Track ID
     */
    id: string;

    /**
     * Aircraft callsign
     */
    callsign: string;

    coordinates: Data.Coordinates;

    /**
     * ICAO 24-bit transponder address
     */
    icao24: string;

    /**
     * Last seen time as Unix timestamp (milliseconds)
     */
    lastSeenAt: number;

    /**
     * Theater assignment
     */
    theater: string;

    /**
     * Classified aircraft type (tanker, awacs, fighter, recon, etc.)
     */
    aircraftType?: string;

    /**
     * Altitude in meters
     */
    altitude?: number;

    /**
     * Classification confidence score
     */
    confidence?: number;

    /**
     * Heading in degrees
     */
    heading?: number;

    /**
     * Whether flagged as operationally interesting
     */
    isInteresting?: boolean;

    /**
     * Last seen time as ISO 8601 string
     */
    lastSeenAtISO?: string;

    /**
     * Operating entity
     */
    operator?: string;

    /**
     * Ground speed in m/s
     */
    speed?: number;
  }

  export namespace Data {
    export interface Coordinates {
      lat: number;

      lon: number;
    }
  }

  export interface Meta {
    count?: number;

    filters?: Meta.Filters;

    /**
     * Whether more results are available beyond the current limit
     */
    hasMore?: boolean;

    limit?: number;
  }

  export namespace Meta {
    export interface Filters {
      theater?: string | null;
    }
  }
}

export interface OsintListEventsResponse {
  data: Array<OsintListEventsResponse.Data>;

  meta: OsintListEventsResponse.Meta;
}

export namespace OsintListEventsResponse {
  export interface Data {
    /**
     * Event ID
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
     * Source-specific event identifier
     */
    sourceId: string;

    /**
     * Data source type
     */
    sourceType: string;

    /**
     * Event title/headline
     */
    title: string;

    /**
     * Geographic coordinates (null if unavailable)
     */
    coordinates?: Data.Coordinates | null;

    /**
     * ISO alpha-2 country code
     */
    countryCode?: string;

    /**
     * Detailed event description
     */
    description?: string;

    /**
     * Event time as ISO 8601 string
     */
    eventTimeISO?: string;

    /**
     * Data fetch time as Unix timestamp (milliseconds), null if unavailable
     */
    fetchedAt?: number | null;

    /**
     * Data fetch time as ISO 8601 string, null if unavailable
     */
    fetchedAtISO?: string | null;

    /**
     * Human-readable location name
     */
    locationName?: string;

    /**
     * Geographic region identifier
     */
    region?: 'mena' | 'africa' | 'latam' | 'asiapac' | 'europe' | 'namerica';

    /**
     * Source URL for the event
     */
    url?: string;
  }

  export namespace Data {
    /**
     * Geographic coordinates (null if unavailable)
     */
    export interface Coordinates {
      /**
       * Latitude
       */
      lat?: number;

      /**
       * Longitude
       */
      lon?: number;
    }
  }

  export interface Meta {
    count?: number;

    filters?: Meta.Filters;

    /**
     * Whether more results are available beyond the current limit
     */
    hasMore?: boolean;

    limit?: number;
  }

  export namespace Meta {
    export interface Filters {
      category?: string | null;

      severity?: string | null;
    }
  }
}

export interface OsintListVesselsResponse {
  data: Array<OsintListVesselsResponse.Data>;

  meta: OsintListVesselsResponse.Meta;
}

export namespace OsintListVesselsResponse {
  export interface Data {
    /**
     * Vessel ID
     */
    id: string;

    coordinates: Data.Coordinates;

    /**
     * Vessel name
     */
    name: string;

    /**
     * Vessel type classification
     */
    vesselType: string;

    /**
     * Position confidence
     */
    confidence?: number;

    /**
     * Fetch time as Unix timestamp (milliseconds)
     */
    fetchedAt?: number;

    /**
     * Fetch time as ISO 8601 string
     */
    fetchedAtISO?: string;

    /**
     * Hull number designation
     */
    hullNumber?: string;

    /**
     * Operating navy
     */
    operator?: string;

    /**
     * Deployment region
     */
    region?: string;

    /**
     * Data source
     */
    source?: string;

    /**
     * Current operational status
     */
    status?: string;

    /**
     * Strike group assignment
     */
    strikeGroup?: string;
  }

  export namespace Data {
    export interface Coordinates {
      lat: number;

      lon: number;
    }
  }

  export interface Meta {
    count?: number;

    filters?: Meta.Filters;

    /**
     * Whether more results are available beyond the current limit
     */
    hasMore?: boolean;

    limit?: number;
  }

  export namespace Meta {
    export interface Filters {
      region?: string | null;
    }
  }
}

export interface OsintMapEventsResponse {
  data: Array<OsintMapEventsResponse.Data>;

  meta: OsintMapEventsResponse.Meta;
}

export namespace OsintMapEventsResponse {
  export interface Data {
    /**
     * Event ID
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
     * Geographic coordinates (always present — events without coordinates are
     * excluded)
     */
    coordinates: Data.Coordinates;

    /**
     * Event time as Unix timestamp (milliseconds)
     */
    eventTime: number;

    /**
     * Event severity level
     */
    severity: 'low' | 'medium' | 'high' | 'critical';

    /**
     * Event title/headline
     */
    title: string;

    /**
     * ISO alpha-2 country code
     */
    countryCode?: string;

    /**
     * Detailed event description
     */
    description?: string;

    /**
     * Event time as ISO 8601 string
     */
    eventTimeISO?: string;

    /**
     * Human-readable location name
     */
    locationName?: string;

    /**
     * Geographic region identifier
     */
    region?: 'mena' | 'africa' | 'latam' | 'asiapac' | 'europe' | 'namerica';

    /**
     * Data source type
     */
    sourceType?: string;

    /**
     * Source URL for the event
     */
    url?: string;
  }

  export namespace Data {
    /**
     * Geographic coordinates (always present — events without coordinates are
     * excluded)
     */
    export interface Coordinates {
      /**
       * Latitude
       */
      lat: number;

      /**
       * Longitude
       */
      lon: number;
    }
  }

  export interface Meta {
    count?: number;

    filters?: Meta.Filters;

    /**
     * Whether more results are available beyond the current limit
     */
    hasMore?: boolean;

    limit?: number;
  }

  export namespace Meta {
    export interface Filters {
      region?: string | null;
    }
  }
}

export interface OsintGetConflictIndicatorsParams {
  /**
   * Filter by event category
   */
  category?:
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
   * Maximum number of items to return
   */
  limit?: number;

  /**
   * Filter by geographic region
   */
  region?: 'mena' | 'africa' | 'latam' | 'asiapac' | 'europe' | 'namerica';
}

export interface OsintGetGpsJammingZonesParams {
  /**
   * Maximum number of zones to return
   */
  limit?: number;

  /**
   * Filter by interference severity
   */
  severity?: 'low' | 'moderate' | 'severe' | 'critical';
}

export interface OsintGetMilitaryPostureParams {
  /**
   * Maximum number of items to return
   */
  limit?: number;
}

export interface OsintListAircraftParams {
  /**
   * Maximum number of aircraft to return
   */
  limit?: number;

  /**
   * Filter by theater ID (e.g. "iran", "taiwan", "baltic")
   */
  theater?: string;
}

export interface OsintListEventsParams {
  /**
   * Filter by event category
   */
  category?:
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
   * Maximum number of events to return
   */
  limit?: number;

  /**
   * Filter by severity level
   */
  severity?: 'low' | 'medium' | 'high' | 'critical';
}

export interface OsintListVesselsParams {
  /**
   * Maximum number of vessels to return
   */
  limit?: number;

  /**
   * Filter by region name
   */
  region?: string;
}

export interface OsintMapEventsParams {
  /**
   * Maximum number of events to return
   */
  limit?: number;

  /**
   * Filter by geographic region
   */
  region?: 'mena' | 'africa' | 'latam' | 'asiapac' | 'europe' | 'namerica';
}

Osint.Countries = Countries;
Osint.Sources = Sources;

export declare namespace Osint {
  export {
    type OsintGetConflictIndicatorsResponse as OsintGetConflictIndicatorsResponse,
    type OsintGetGpsJammingZonesResponse as OsintGetGpsJammingZonesResponse,
    type OsintGetMilitaryPostureResponse as OsintGetMilitaryPostureResponse,
    type OsintListAircraftResponse as OsintListAircraftResponse,
    type OsintListEventsResponse as OsintListEventsResponse,
    type OsintListVesselsResponse as OsintListVesselsResponse,
    type OsintMapEventsResponse as OsintMapEventsResponse,
    type OsintGetConflictIndicatorsParams as OsintGetConflictIndicatorsParams,
    type OsintGetGpsJammingZonesParams as OsintGetGpsJammingZonesParams,
    type OsintGetMilitaryPostureParams as OsintGetMilitaryPostureParams,
    type OsintListAircraftParams as OsintListAircraftParams,
    type OsintListEventsParams as OsintListEventsParams,
    type OsintListVesselsParams as OsintListVesselsParams,
    type OsintMapEventsParams as OsintMapEventsParams,
  };

  export {
    Countries as Countries,
    type CountryGetCountryInstabilityIndexResponse as CountryGetCountryInstabilityIndexResponse,
    type CountryGetCountryNewsResponse as CountryGetCountryNewsResponse,
    type CountryGetIntelligenceBriefResponse as CountryGetIntelligenceBriefResponse,
    type CountryGetPredictionMarketsResponse as CountryGetPredictionMarketsResponse,
    type CountryGetStockMarketIndexResponse as CountryGetStockMarketIndexResponse,
    type CountryGetCountryNewsParams as CountryGetCountryNewsParams,
    type CountryGetPredictionMarketsParams as CountryGetPredictionMarketsParams,
  };

  export { Sources as Sources, type SourceGetDataSourceHealthResponse as SourceGetDataSourceHealthResponse };
}
