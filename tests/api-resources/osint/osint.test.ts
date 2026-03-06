// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Y2 from 'y2-sdk';

const client = new Y2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource osint', () => {
  // Mock server tests are disabled
  test.skip('getConflictIndicators', async () => {
    const responsePromise = client.osint.getConflictIndicators();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getConflictIndicators: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.osint.getConflictIndicators(
        {
          category: 'seismic',
          limit: 1,
          region: 'mena',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Y2.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getGpsJammingZones', async () => {
    const responsePromise = client.osint.getGpsJammingZones();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getGpsJammingZones: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.osint.getGpsJammingZones({ limit: 1, severity: 'low' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Y2.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getMilitaryPosture', async () => {
    const responsePromise = client.osint.getMilitaryPosture();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getMilitaryPosture: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.osint.getMilitaryPosture({ limit: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Y2.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listAircraft', async () => {
    const responsePromise = client.osint.listAircraft();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listAircraft: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.osint.listAircraft({ limit: 1, theater: 'theater' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Y2.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listEvents', async () => {
    const responsePromise = client.osint.listEvents();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listEvents: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.osint.listEvents(
        {
          category: 'seismic',
          limit: 1,
          severity: 'low',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Y2.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listVessels', async () => {
    const responsePromise = client.osint.listVessels();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listVessels: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.osint.listVessels({ limit: 1, region: 'region' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Y2.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('mapEvents', async () => {
    const responsePromise = client.osint.mapEvents();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('mapEvents: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.osint.mapEvents({ limit: 1, region: 'mena' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Y2.NotFoundError);
  });
});
