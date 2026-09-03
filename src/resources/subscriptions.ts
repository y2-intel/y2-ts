// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Subscription delivery management
 */
export class Subscriptions extends APIResource {
  /**
   * Changes a subscription's delivery method. Setting `webhook` requires an active
   * `webhookConfigId`. On plans with member seats, set `emailAudience` to
   * `workspace` to email active workspace members.
   */
  updateDelivery(
    subscriptionID: string,
    body: SubscriptionUpdateDeliveryParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionUpdateDeliveryResponse> {
    return this._client.patch(path`/subscriptions/${subscriptionID}/delivery`, { body, ...options });
  }
}

export interface SubscriptionUpdateDeliveryResponse {
  data: SubscriptionUpdateDeliveryResponse.Data;

  meta: SubscriptionUpdateDeliveryResponse.Meta;
}

export namespace SubscriptionUpdateDeliveryResponse {
  export interface Data {
    id: string;

    delivery: Data.Delivery;

    links: Data.Links;

    type: 'subscription';
  }

  export namespace Data {
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

  export interface Meta {
    message?: string;
  }
}

export interface SubscriptionUpdateDeliveryParams {
  /**
   * Subscription delivery method
   */
  deliveryMethod: 'email' | 'sms' | 'webhook' | 'both_email_sms';

  /**
   * Email recipients for email-capable subscription delivery
   */
  emailAudience?: 'individual' | 'workspace';

  /**
   * Required when deliveryMethod is "webhook"
   */
  webhookConfigId?: string;
}

export declare namespace Subscriptions {
  export {
    type SubscriptionUpdateDeliveryResponse as SubscriptionUpdateDeliveryResponse,
    type SubscriptionUpdateDeliveryParams as SubscriptionUpdateDeliveryParams,
  };
}
