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
   * Changes the delivery method for a subscription. When setting to `webhook`, a
   * valid `webhookConfigId` must be provided. The webhook must be active.
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
    /**
     * Subscription delivery method
     */
    deliveryMethod: 'email' | 'sms' | 'webhook' | 'both_email_sms';

    subscriptionId: string;

    success: boolean;
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
