// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Y2 from 'y2-sdk';

const client = new Y2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource reports', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.reports.retrieve('rpt_0123456789abcdef01234567');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reports.retrieve(
        'rpt_0123456789abcdef01234567',
        {
          format: 'markdown',
          include: 'include',
          view: 'agent',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Y2.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.reports.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reports.list(
        {
          cursor: 'cursor',
          format: 'json',
          limit: 1,
          profileId: 'prf_0123456789abcdef01234567',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Y2.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieveAudio', async () => {
    const responsePromise = client.reports.retrieveAudio('rpt_210b9798eb53baa4e69d31c1');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveAudio: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reports.retrieveAudio(
        'rpt_210b9798eb53baa4e69d31c1',
        { redirect: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Y2.NotFoundError);
  });
});
