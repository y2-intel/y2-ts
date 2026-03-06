// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Subscription profile operations
 */
export class Profiles extends APIResource {
  /**
   * Creates a new intelligence profile with the specified configuration. The profile
   * will be owned by the authenticated user and start with `active` status.
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
  create(body: ProfileCreateParams, options?: RequestOptions): APIPromise<ProfileCreateResponse> {
    return this._client.post('/profiles', { body, ...options });
  }

  /**
   * Replaces all mutable fields of an existing intelligence profile. Only profiles
   * owned by the authenticated user can be updated.
   *
   * @example
   * ```ts
   * const profile = await client.profiles.update(
   *   'k57abc123def456',
   * );
   * ```
   */
  update(
    profileID: string,
    body: ProfileUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProfileUpdateResponse> {
    return this._client.put(path`/profiles/${profileID}`, { body, ...options });
  }

  /**
   * Returns a list of intelligence profiles the user is subscribed to, including
   * subscription status and delivery preferences.
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
   * Permanently deletes an intelligence profile and all associated subscriptions.
   * Only profiles owned by the authenticated user can be deleted. This action cannot
   * be undone.
   *
   * @example
   * ```ts
   * const profile = await client.profiles.delete(
   *   'k57abc123def456',
   * );
   * ```
   */
  delete(profileID: string, options?: RequestOptions): APIPromise<ProfileDeleteResponse> {
    return this._client.delete(path`/profiles/${profileID}`, options);
  }

  /**
   * Partially updates an existing intelligence profile. Only the fields included in
   * the request body will be modified; all other fields remain unchanged. Only
   * profiles owned by the authenticated user can be updated.
   *
   * @example
   * ```ts
   * const response = await client.profiles.partialUpdate(
   *   'k57abc123def456',
   * );
   * ```
   */
  partialUpdate(
    profileID: string,
    body: ProfilePartialUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProfilePartialUpdateResponse> {
    return this._client.patch(path`/profiles/${profileID}`, { body, ...options });
  }
}

export interface ProfileCreateResponse {
  data: ProfileCreateResponse.Data;

  meta: ProfileCreateResponse.Meta;
}

export namespace ProfileCreateResponse {
  export interface Data {
    /**
     * The ID of the newly created profile
     */
    profileId: string;
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
    profileId: string;

    success: boolean;
  }

  export interface Meta {
    message?: string;
  }
}

export interface ProfileListResponse {
  data: Array<ProfileListResponse.Data>;

  meta: ProfileListResponse.Meta;
}

export namespace ProfileListResponse {
  export interface Data {
    deliveryMethod: 'email' | 'sms' | 'webhook' | 'both_email_sms';

    isActive: boolean;

    profileId: string;

    subscribedAt: number;

    subscriptionId: string;

    profile?: Data.Profile | null;
  }

  export namespace Data {
    export interface Profile {
      audioEnabled?: boolean;

      blufStructure?: string;

      brandingTemplateId?: string;

      budgetConfig?: unknown;

      cronConfig?: unknown;

      customPrompt?: string;

      frequency?: string;

      freshnessConfig?: unknown;

      isCommunity?: boolean;

      isGlobal?: boolean;

      modelConfig?: unknown;

      name?: string;

      recursionConfig?: unknown;

      searchConfig?: unknown;

      status?: string;

      tags?: Array<string>;

      toolConfig?: unknown;

      topic?: string;
    }
  }

  export interface Meta {
    count?: number;
  }
}

export interface ProfileDeleteResponse {
  data: ProfileDeleteResponse.Data;

  meta: ProfileDeleteResponse.Meta;
}

export namespace ProfileDeleteResponse {
  export interface Data {
    deleted: boolean;

    profileId: string;
  }

  export interface Meta {
    message?: string;
  }
}

export interface ProfilePartialUpdateResponse {
  data: ProfilePartialUpdateResponse.Data;

  meta: ProfilePartialUpdateResponse.Meta;
}

export namespace ProfilePartialUpdateResponse {
  export interface Data {
    profileId: string;

    success: boolean;
  }

  export interface Meta {
    message?: string;
  }
}

export interface ProfileCreateParams {
  /**
   * Report generation frequency
   */
  frequency: 'daily' | 'weekly' | 'biweekly' | 'monthly';

  /**
   * Profile display name
   */
  name: string;

  /**
   * Time of day for report generation (HH:mm, UTC)
   */
  scheduleTimeOfDay: string;

  /**
   * Topic description for research
   */
  topic: string;

  /**
   * Audio generation configuration
   */
  audioConfig?: ProfileCreateParams.AudioConfig;

  /**
   * Custom BLUF report structure template
   */
  blufStructure?: string;

  /**
   * Branding template ID (Pro feature)
   */
  brandingTemplateId?: string;

  /**
   * Cost budget configuration
   */
  budgetConfig?: ProfileCreateParams.BudgetConfig;

  /**
   * Custom system prompt for the AI analyst
   */
  customPrompt?: string;

  /**
   * Source freshness configuration
   */
  freshnessConfig?: ProfileCreateParams.FreshnessConfig;

  /**
   * Whether this is a community (public) profile
   */
  isCommunity?: boolean;

  /**
   * AI model configuration
   */
  modelConfig?: ProfileCreateParams.ModelConfig;

  recursionConfig?: ProfileCreateParams.RecursionConfig;

  /**
   * Day of month for monthly profiles
   */
  scheduleDayOfMonth?: string;

  /**
   * Day of week for weekly/biweekly profiles
   */
  scheduleDayOfWeek?: string;

  /**
   * Web search configuration
   */
  searchConfig?: ProfileCreateParams.SearchConfig;

  /**
   * Tags for categorization
   */
  tags?: Array<string>;

  /**
   * Tool configuration for report generation
   */
  toolConfig?: unknown;
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
    enabled: boolean;

    maxDepth: number;

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
  audioConfig?: ProfileUpdateParams.AudioConfig;

  blufStructure?: string;

  /**
   * Branding template ID (Pro feature)
   */
  brandingTemplateId?: string;

  budgetConfig?: ProfileUpdateParams.BudgetConfig;

  customPrompt?: string;

  /**
   * Report generation frequency
   */
  frequency?: 'daily' | 'weekly' | 'biweekly' | 'monthly';

  freshnessConfig?: ProfileUpdateParams.FreshnessConfig;

  isCommunity?: boolean;

  modelConfig?: ProfileUpdateParams.ModelConfig;

  name?: string;

  recursionConfig?: ProfileUpdateParams.RecursionConfig;

  scheduleDayOfMonth?: string;

  scheduleDayOfWeek?: string;

  scheduleTimeOfDay?: string;

  searchConfig?: ProfileUpdateParams.SearchConfig;

  /**
   * Profile status
   */
  status?: 'active' | 'paused' | 'cancelled';

  tags?: Array<string>;

  topic?: string;
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
    enabled: boolean;

    maxDepth: number;

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

export interface ProfilePartialUpdateParams {
  audioConfig?: ProfilePartialUpdateParams.AudioConfig;

  blufStructure?: string;

  /**
   * Branding template ID (Pro feature)
   */
  brandingTemplateId?: string;

  budgetConfig?: ProfilePartialUpdateParams.BudgetConfig;

  customPrompt?: string;

  /**
   * Report generation frequency
   */
  frequency?: 'daily' | 'weekly' | 'biweekly' | 'monthly';

  freshnessConfig?: ProfilePartialUpdateParams.FreshnessConfig;

  isCommunity?: boolean;

  modelConfig?: ProfilePartialUpdateParams.ModelConfig;

  name?: string;

  recursionConfig?: ProfilePartialUpdateParams.RecursionConfig;

  scheduleDayOfMonth?: string;

  scheduleDayOfWeek?: string;

  scheduleTimeOfDay?: string;

  searchConfig?: ProfilePartialUpdateParams.SearchConfig;

  /**
   * Profile status
   */
  status?: 'active' | 'paused' | 'cancelled';

  tags?: Array<string>;

  topic?: string;
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
    enabled: boolean;

    maxDepth: number;

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
    type ProfileDeleteResponse as ProfileDeleteResponse,
    type ProfilePartialUpdateResponse as ProfilePartialUpdateResponse,
    type ProfileCreateParams as ProfileCreateParams,
    type ProfileUpdateParams as ProfileUpdateParams,
    type ProfilePartialUpdateParams as ProfilePartialUpdateParams,
  };
}
