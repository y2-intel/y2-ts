// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Profile subscriptions, ownership, and configuration
 */
export class Profiles extends APIResource {
  /**
   * Creates an `active` intelligence profile owned by the authenticated user with
   * the supplied configuration.
   *
   * @example
   * ```ts
   * const profile = await client.profiles.create({
   *   frequency: 'daily',
   *   name: 'Cybersecurity Weekly',
   *   scheduleTimeOfDay: '09:00',
   *   topic:
   *     'Cybersecurity threats, vulnerabilities, and defense strategies',
   * });
   * ```
   */
  create(params: ProfileCreateParams, options?: RequestOptions): APIPromise<ProfileCreateResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/profiles', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Replaces every mutable field on a profile owned by the authenticated user.
   *
   * @example
   * ```ts
   * const profile = await client.profiles.update(
   *   'prf_210b9798eb53baa4e69d31c1',
   *   {
   *     frequency: 'daily',
   *     name: 'name',
   *     scheduleTimeOfDay: '73:16',
   *     topic: 'topic',
   *   },
   * );
   * ```
   */
  update(
    profileID: string,
    params: ProfileUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProfileUpdateResponse> {
    const { 'If-Match': ifMatch, ...body } = params;
    return this._client.put(path`/profiles/${profileID}`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(ifMatch != null ? { 'If-Match': ifMatch } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Lists the user's subscribed profiles with subscription status and delivery
   * preferences.
   *
   * @example
   * ```ts
   * const profiles = await client.profiles.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ProfileListResponse> {
    return this._client.get('/profiles', options);
  }

  /**
   * Permanently deletes a profile owned by the authenticated user and all its
   * subscriptions. This action cannot be undone.
   *
   * @example
   * ```ts
   * await client.profiles.delete(
   *   'prf_210b9798eb53baa4e69d31c1',
   * );
   * ```
   */
  delete(
    profileID: string,
    params: ProfileDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'If-Match': ifMatch } = params ?? {};
    return this._client.delete(path`/profiles/${profileID}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(ifMatch != null ? { 'If-Match': ifMatch } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Updates supplied mutable fields on a profile owned by the authenticated user.
   * Omitted fields remain unchanged.
   *
   * @example
   * ```ts
   * const response = await client.profiles.partialUpdate(
   *   'prf_210b9798eb53baa4e69d31c1',
   * );
   * ```
   */
  partialUpdate(
    profileID: string,
    params: ProfilePartialUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProfilePartialUpdateResponse> {
    const { 'If-Match': ifMatch, ...body } = params;
    return this._client.patch(path`/profiles/${profileID}`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(ifMatch != null ? { 'If-Match': ifMatch } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface ProfileCreateResponse {
  data: ProfileCreateResponse.Data;

  meta: ProfileCreateResponse.Meta;
}

export namespace ProfileCreateResponse {
  export interface Data {
    id: string;

    configuration: Data.Configuration;

    createdAt: string;

    customInstructions: string | null;

    /**
     * Report generation frequency
     */
    frequency: 'daily' | 'weekly' | 'biweekly' | 'monthly' | null;

    lastDeliveredAt: string | null;

    links: Data.Links;

    name: string;

    reportStructure: string | null;

    schedule: Data.Schedule;

    /**
     * Profile status
     */
    status: 'active' | 'paused' | 'cancelled';

    tags: Array<string>;

    topic: string;

    type: 'profile';

    visibility: Data.Visibility;
  }

  export namespace Data {
    export interface Configuration {
      audio: Configuration.Audio;

      budget: unknown | null;

      freshness: unknown | null;

      model: unknown | null;

      recursion: unknown | null;

      search: unknown | null;

      tools: unknown | null;
    }

    export namespace Configuration {
      export interface Audio {
        enabled: boolean;

        instructions: string | null;

        speed: 'slow' | 'normal' | 'fast' | null;
      }
    }

    export interface Links {
      reports: string;

      self: string;
    }

    export interface Schedule {
      cron: string;

      timezone: 'UTC';
    }

    export interface Visibility {
      community: boolean;

      global: boolean;
    }
  }

  export interface Meta {
    message?: string;
  }
}

export interface ProfileUpdateResponse {
  data: ProfileUpdateResponse.Data;

  meta: ProfileUpdateResponse.Meta;
}

export namespace ProfileUpdateResponse {
  export interface Data {
    id: string;

    configuration: Data.Configuration;

    createdAt: string;

    customInstructions: string | null;

    /**
     * Report generation frequency
     */
    frequency: 'daily' | 'weekly' | 'biweekly' | 'monthly' | null;

    lastDeliveredAt: string | null;

    links: Data.Links;

    name: string;

    reportStructure: string | null;

    schedule: Data.Schedule;

    /**
     * Profile status
     */
    status: 'active' | 'paused' | 'cancelled';

    tags: Array<string>;

    topic: string;

    type: 'profile';

    visibility: Data.Visibility;
  }

  export namespace Data {
    export interface Configuration {
      audio: Configuration.Audio;

      budget: unknown | null;

      freshness: unknown | null;

      model: unknown | null;

      recursion: unknown | null;

      search: unknown | null;

      tools: unknown | null;
    }

    export namespace Configuration {
      export interface Audio {
        enabled: boolean;

        instructions: string | null;

        speed: 'slow' | 'normal' | 'fast' | null;
      }
    }

    export interface Links {
      reports: string;

      self: string;
    }

    export interface Schedule {
      cron: string;

      timezone: 'UTC';
    }

    export interface Visibility {
      community: boolean;

      global: boolean;
    }
  }

  export interface Meta {
    message?: string;
  }
}

export interface ProfileListResponse {
  data: Array<ProfileListResponse.Data>;

  links: ProfileListResponse.Links;

  meta: ProfileListResponse.Meta;
}

export namespace ProfileListResponse {
  export interface Data {
    profile: Data.Profile | null;

    subscription: Data.Subscription;
  }

  export namespace Data {
    export interface Profile {
      id: string;

      configuration: Profile.Configuration;

      createdAt: string;

      customInstructions: string | null;

      /**
       * Report generation frequency
       */
      frequency: 'daily' | 'weekly' | 'biweekly' | 'monthly' | null;

      lastDeliveredAt: string | null;

      links: Profile.Links;

      name: string;

      reportStructure: string | null;

      schedule: Profile.Schedule;

      /**
       * Profile status
       */
      status: 'active' | 'paused' | 'cancelled';

      tags: Array<string>;

      topic: string;

      type: 'profile';

      visibility: Profile.Visibility;
    }

    export namespace Profile {
      export interface Configuration {
        audio: Configuration.Audio;

        budget: unknown | null;

        freshness: unknown | null;

        model: unknown | null;

        recursion: unknown | null;

        search: unknown | null;

        tools: unknown | null;
      }

      export namespace Configuration {
        export interface Audio {
          enabled: boolean;

          instructions: string | null;

          speed: 'slow' | 'normal' | 'fast' | null;
        }
      }

      export interface Links {
        reports: string;

        self: string;
      }

      export interface Schedule {
        cron: string;

        timezone: 'UTC';
      }

      export interface Visibility {
        community: boolean;

        global: boolean;
      }
    }

    export interface Subscription {
      id: string;

      active: boolean;

      delivery: Subscription.Delivery;

      links: Subscription.Links;

      profileId: string;

      subscribedAt: string;

      type: 'subscription';
    }

    export namespace Subscription {
      export interface Delivery {
        /**
         * Email recipients for email-capable subscription delivery
         */
        emailAudience: 'individual' | 'workspace';

        /**
         * Subscription delivery method
         */
        method: 'email' | 'sms' | 'webhook' | 'both_email_sms';

        webhookId: string | null;
      }

      export interface Links {
        delivery: string;
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

export interface ProfilePartialUpdateResponse {
  data: ProfilePartialUpdateResponse.Data;

  meta: ProfilePartialUpdateResponse.Meta;
}

export namespace ProfilePartialUpdateResponse {
  export interface Data {
    id: string;

    configuration: Data.Configuration;

    createdAt: string;

    customInstructions: string | null;

    /**
     * Report generation frequency
     */
    frequency: 'daily' | 'weekly' | 'biweekly' | 'monthly' | null;

    lastDeliveredAt: string | null;

    links: Data.Links;

    name: string;

    reportStructure: string | null;

    schedule: Data.Schedule;

    /**
     * Profile status
     */
    status: 'active' | 'paused' | 'cancelled';

    tags: Array<string>;

    topic: string;

    type: 'profile';

    visibility: Data.Visibility;
  }

  export namespace Data {
    export interface Configuration {
      audio: Configuration.Audio;

      budget: unknown | null;

      freshness: unknown | null;

      model: unknown | null;

      recursion: unknown | null;

      search: unknown | null;

      tools: unknown | null;
    }

    export namespace Configuration {
      export interface Audio {
        enabled: boolean;

        instructions: string | null;

        speed: 'slow' | 'normal' | 'fast' | null;
      }
    }

    export interface Links {
      reports: string;

      self: string;
    }

    export interface Schedule {
      cron: string;

      timezone: 'UTC';
    }

    export interface Visibility {
      community: boolean;

      global: boolean;
    }
  }

  export interface Meta {
    message?: string;
  }
}

export interface ProfileCreateParams {
  /**
   * Body param: Report generation frequency
   */
  frequency: 'daily' | 'weekly' | 'biweekly' | 'monthly';

  /**
   * Body param: Profile display name
   */
  name: string;

  /**
   * Body param: Time of day for report generation (HH:mm, UTC)
   */
  scheduleTimeOfDay: string;

  /**
   * Body param: Topic description for research
   */
  topic: string;

  /**
   * Body param: Audio generation configuration
   */
  audioConfig?: ProfileCreateParams.AudioConfig;

  /**
   * Body param: Custom BLUF report structure template
   */
  blufStructure?: string;

  /**
   * Body param: Branding template ID (paid workspace feature)
   */
  brandingTemplateId?: string;

  /**
   * Body param: Cost budget configuration
   */
  budgetConfig?: ProfileCreateParams.BudgetConfig;

  /**
   * Body param: Custom system prompt for the AI analyst
   */
  customPrompt?: string;

  /**
   * Body param: Source freshness configuration
   */
  freshnessConfig?: ProfileCreateParams.FreshnessConfig;

  /**
   * Body param: Whether this is a community (public) profile
   */
  isCommunity?: boolean;

  /**
   * Body param: AI model configuration
   */
  modelConfig?: ProfileCreateParams.ModelConfig;

  /**
   * Body param
   */
  recursionConfig?: ProfileCreateParams.RecursionConfig;

  /**
   * Body param: Day of month for monthly profiles
   */
  scheduleDayOfMonth?: string;

  /**
   * Body param: Day of week for weekly/biweekly profiles
   */
  scheduleDayOfWeek?: string;

  /**
   * Body param: Web search configuration
   */
  searchConfig?: ProfileCreateParams.SearchConfig;

  /**
   * Body param: Tags for categorization
   */
  tags?: Array<string>;

  /**
   * Body param: Tool configuration for report generation
   */
  toolConfig?: unknown;

  /**
   * Header param: Client-generated retry key retained for 24 hours. Repeating the
   * same key and canonical JSON body returns the original resource; changing the
   * body returns `409 IDEMPOTENCY_CONFLICT`.
   */
  'Idempotency-Key'?: string;
}

export namespace ProfileCreateParams {
  /**
   * Audio generation configuration
   */
  export interface AudioConfig {
    enabled?: boolean;

    speed?: number;

    voiceId?: string;
  }

  /**
   * Cost budget configuration
   */
  export interface BudgetConfig {
    alertThreshold?: number;

    maxCostPerReport?: number;
  }

  /**
   * Source freshness configuration
   */
  export interface FreshnessConfig {
    enabled?: boolean;

    maxAgeMs?: number;

    preferRecentSources?: boolean;

    recencyWeight?: number;

    validateLinks?: boolean;
  }

  /**
   * AI model configuration
   */
  export interface ModelConfig {
    maxOutputTokens?: number;

    modelId?: string;

    temperature?: number;
  }

  export interface RecursionConfig {
    /**
     * When false, runs root-topic research without child subtopics.
     */
    enabled: boolean;

    /**
     * Requested child-layer depth. The current runtime defaults an enabled value of
     * `0` to `1` and caps values above `1` at one child layer. This field is ignored
     * when `enabled` is false.
     */
    maxDepth: number;

    /**
     * Stored strategy preference. The current report engine executes its implemented
     * breadth-first child-search path for every value.
     */
    strategy: 'breadth-first' | 'depth-first' | 'hybrid';
  }

  /**
   * Web search configuration
   */
  export interface SearchConfig {
    excludeDomains?: Array<string>;

    includeDomains?: Array<string>;

    maxResults?: number;

    searchDepth?: 'basic' | 'advanced';

    timeRange?: string;

    topic?: string;
  }
}

export interface ProfileUpdateParams {
  /**
   * Body param: Report generation frequency
   */
  frequency: 'daily' | 'weekly' | 'biweekly' | 'monthly';

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  scheduleTimeOfDay: string;

  /**
   * Body param
   */
  topic: string;

  /**
   * Body param
   */
  audioConfig?: ProfileUpdateParams.AudioConfig;

  /**
   * Body param
   */
  blufStructure?: string;

  /**
   * Body param: Branding template ID (paid workspace feature)
   */
  brandingTemplateId?: string;

  /**
   * Body param
   */
  budgetConfig?: ProfileUpdateParams.BudgetConfig;

  /**
   * Body param
   */
  customPrompt?: string;

  /**
   * Body param
   */
  freshnessConfig?: ProfileUpdateParams.FreshnessConfig;

  /**
   * Body param
   */
  isCommunity?: boolean;

  /**
   * Body param
   */
  modelConfig?: ProfileUpdateParams.ModelConfig;

  /**
   * Body param
   */
  recursionConfig?: ProfileUpdateParams.RecursionConfig;

  /**
   * Body param
   */
  scheduleDayOfMonth?: string;

  /**
   * Body param
   */
  scheduleDayOfWeek?: string;

  /**
   * Body param
   */
  searchConfig?: ProfileUpdateParams.SearchConfig;

  /**
   * Body param: Profile status
   */
  status?: 'active' | 'paused' | 'cancelled';

  /**
   * Body param
   */
  tags?: Array<string>;

  /**
   * Body param: Tool configuration for report generation
   */
  toolConfig?: unknown;

  /**
   * Header param: Strong ETag from the latest representation. A mismatch
   * returns 412.
   */
  'If-Match'?: string;
}

export namespace ProfileUpdateParams {
  export interface AudioConfig {
    enabled?: boolean;

    speed?: number;

    voiceId?: string;
  }

  export interface BudgetConfig {
    alertThreshold?: number;

    maxCostPerReport?: number;
  }

  export interface FreshnessConfig {
    enabled?: boolean;

    maxAgeMs?: number;

    preferRecentSources?: boolean;

    recencyWeight?: number;

    validateLinks?: boolean;
  }

  export interface ModelConfig {
    maxOutputTokens?: number;

    modelId?: string;

    temperature?: number;
  }

  export interface RecursionConfig {
    /**
     * When false, runs root-topic research without child subtopics.
     */
    enabled: boolean;

    /**
     * Requested child-layer depth. The current runtime defaults an enabled value of
     * `0` to `1` and caps values above `1` at one child layer. This field is ignored
     * when `enabled` is false.
     */
    maxDepth: number;

    /**
     * Stored strategy preference. The current report engine executes its implemented
     * breadth-first child-search path for every value.
     */
    strategy: 'breadth-first' | 'depth-first' | 'hybrid';
  }

  export interface SearchConfig {
    excludeDomains?: Array<string>;

    includeDomains?: Array<string>;

    maxResults?: number;

    searchDepth?: 'basic' | 'advanced';

    timeRange?: string;

    topic?: string;
  }
}

export interface ProfileDeleteParams {
  /**
   * Strong ETag from the latest representation. A mismatch returns 412.
   */
  'If-Match'?: string;
}

export interface ProfilePartialUpdateParams {
  /**
   * Body param
   */
  audioConfig?: ProfilePartialUpdateParams.AudioConfig;

  /**
   * Body param
   */
  blufStructure?: string;

  /**
   * Body param: Branding template ID (paid workspace feature)
   */
  brandingTemplateId?: string;

  /**
   * Body param
   */
  budgetConfig?: ProfilePartialUpdateParams.BudgetConfig;

  /**
   * Body param
   */
  customPrompt?: string;

  /**
   * Body param: Report generation frequency
   */
  frequency?: 'daily' | 'weekly' | 'biweekly' | 'monthly';

  /**
   * Body param
   */
  freshnessConfig?: ProfilePartialUpdateParams.FreshnessConfig;

  /**
   * Body param
   */
  isCommunity?: boolean;

  /**
   * Body param
   */
  modelConfig?: ProfilePartialUpdateParams.ModelConfig;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param
   */
  recursionConfig?: ProfilePartialUpdateParams.RecursionConfig;

  /**
   * Body param
   */
  scheduleDayOfMonth?: string;

  /**
   * Body param
   */
  scheduleDayOfWeek?: string;

  /**
   * Body param
   */
  scheduleTimeOfDay?: string;

  /**
   * Body param
   */
  searchConfig?: ProfilePartialUpdateParams.SearchConfig;

  /**
   * Body param: Profile status
   */
  status?: 'active' | 'paused' | 'cancelled';

  /**
   * Body param
   */
  tags?: Array<string>;

  /**
   * Body param
   */
  topic?: string;

  /**
   * Header param: Strong ETag from the latest representation. A mismatch
   * returns 412.
   */
  'If-Match'?: string;
}

export namespace ProfilePartialUpdateParams {
  export interface AudioConfig {
    enabled?: boolean;

    speed?: number;

    voiceId?: string;
  }

  export interface BudgetConfig {
    alertThreshold?: number;

    maxCostPerReport?: number;
  }

  export interface FreshnessConfig {
    enabled?: boolean;

    maxAgeMs?: number;

    preferRecentSources?: boolean;

    recencyWeight?: number;

    validateLinks?: boolean;
  }

  export interface ModelConfig {
    maxOutputTokens?: number;

    modelId?: string;

    temperature?: number;
  }

  export interface RecursionConfig {
    /**
     * When false, runs root-topic research without child subtopics.
     */
    enabled: boolean;

    /**
     * Requested child-layer depth. The current runtime defaults an enabled value of
     * `0` to `1` and caps values above `1` at one child layer. This field is ignored
     * when `enabled` is false.
     */
    maxDepth: number;

    /**
     * Stored strategy preference. The current report engine executes its implemented
     * breadth-first child-search path for every value.
     */
    strategy: 'breadth-first' | 'depth-first' | 'hybrid';
  }

  export interface SearchConfig {
    excludeDomains?: Array<string>;

    includeDomains?: Array<string>;

    maxResults?: number;

    searchDepth?: 'basic' | 'advanced';

    timeRange?: string;

    topic?: string;
  }
}

export declare namespace Profiles {
  export {
    type ProfileCreateResponse as ProfileCreateResponse,
    type ProfileUpdateResponse as ProfileUpdateResponse,
    type ProfileListResponse as ProfileListResponse,
    type ProfilePartialUpdateResponse as ProfilePartialUpdateResponse,
    type ProfileCreateParams as ProfileCreateParams,
    type ProfileUpdateParams as ProfileUpdateParams,
    type ProfileDeleteParams as ProfileDeleteParams,
    type ProfilePartialUpdateParams as ProfilePartialUpdateParams,
  };
}
