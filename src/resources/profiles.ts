// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Profiles extends APIResource {
  /**
   * Returns a list of intelligence profiles the user is subscribed to, including
   * subscription status and delivery preferences.
   */
  list(options?: RequestOptions): APIPromise<ProfileListResponse> {
    return this._client.get('/profiles', options);
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

      frequency?: string;

      name?: string;

      status?: string;

      topic?: string;
    }
  }

  export interface Meta {
    count?: number;
  }
}

export declare namespace Profiles {
  export { type ProfileListResponse as ProfileListResponse };
}
