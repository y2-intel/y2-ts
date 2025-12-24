// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Y2 } from '../client';

export abstract class APIResource {
  protected _client: Y2;

  constructor(client: Y2) {
    this._client = client;
  }
}
