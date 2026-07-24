// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Y2 from 'y2-sdk';

const client = new Y2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscriptions', () => {
  // Mock server tests are disabled
  test.skip('updateDelivery: only required params', async () => {
    const responsePromise = client.subscriptions.updateDelivery('sub_210b9798eb53baa4e69d31c1', {
      deliveryMethod: 'email',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateDelivery: required and optional params', async () => {
    const response = await client.subscriptions.updateDelivery('sub_210b9798eb53baa4e69d31c1', {
      deliveryMethod: 'email',
      emailAudience: 'individual',
      webhookConfigId: 'whk_210b9798eb53baa4e69d31c1',
    });
  });
});
