// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Y2 from 'y2-sdk';

const client = new Y2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource news', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.news.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.news.list(
        { limit: 1, topics: 'crypto,ai_agents,bitcoin' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Y2.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getRecaps', async () => {
    const responsePromise = client.news.getRecaps();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getRecaps: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.news.getRecaps({ timeframe: '12h', topics: 'topics' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Y2.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listFeeds', async () => {
    const responsePromise = client.news.listFeeds();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
