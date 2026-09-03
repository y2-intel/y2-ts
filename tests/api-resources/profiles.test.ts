// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Y2 from 'y2-sdk';

const client = new Y2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource profiles', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.profiles.create({
      frequency: 'daily',
      name: 'Cybersecurity Weekly',
      scheduleTimeOfDay: '09:00',
      topic: 'Cybersecurity threats, vulnerabilities, and defense strategies',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.profiles.create({
      frequency: 'daily',
      name: 'Cybersecurity Weekly',
      scheduleTimeOfDay: '09:00',
      topic: 'Cybersecurity threats, vulnerabilities, and defense strategies',
      audioConfig: {
        enabled: true,
        speed: 0,
        voiceId: 'voiceId',
      },
      blufStructure: 'blufStructure',
      brandingTemplateId: 'brandingTemplateId',
      budgetConfig: { alertThreshold: 0, maxCostPerReport: 0 },
      customPrompt: 'customPrompt',
      freshnessConfig: {
        enabled: true,
        maxAgeMs: 0,
        preferRecentSources: true,
        recencyWeight: 0,
        validateLinks: true,
      },
      isCommunity: true,
      modelConfig: {
        maxOutputTokens: 0,
        modelId: 'modelId',
        temperature: 0,
      },
      recursionConfig: {
        enabled: true,
        maxDepth: 0,
        strategy: 'breadth-first',
      },
      scheduleDayOfMonth: '1',
      scheduleDayOfWeek: 'monday',
      searchConfig: {
        excludeDomains: ['string'],
        includeDomains: ['string'],
        maxResults: 0,
        searchDepth: 'basic',
        timeRange: 'timeRange',
        topic: 'topic',
      },
      tags: ['string'],
      toolConfig: {},
      'Idempotency-Key': 'Idempotency-Key',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.profiles.update('prf_210b9798eb53baa4e69d31c1', {
      frequency: 'daily',
      name: 'name',
      scheduleTimeOfDay: '73:16',
      topic: 'topic',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.profiles.update('prf_210b9798eb53baa4e69d31c1', {
      frequency: 'daily',
      name: 'name',
      scheduleTimeOfDay: '73:16',
      topic: 'topic',
      audioConfig: {
        enabled: true,
        speed: 0,
        voiceId: 'voiceId',
      },
      blufStructure: 'blufStructure',
      brandingTemplateId: 'brandingTemplateId',
      budgetConfig: { alertThreshold: 0, maxCostPerReport: 0 },
      customPrompt: 'customPrompt',
      freshnessConfig: {
        enabled: true,
        maxAgeMs: 0,
        preferRecentSources: true,
        recencyWeight: 0,
        validateLinks: true,
      },
      isCommunity: true,
      modelConfig: {
        maxOutputTokens: 0,
        modelId: 'modelId',
        temperature: 0,
      },
      recursionConfig: {
        enabled: true,
        maxDepth: 0,
        strategy: 'breadth-first',
      },
      scheduleDayOfMonth: 'scheduleDayOfMonth',
      scheduleDayOfWeek: 'scheduleDayOfWeek',
      searchConfig: {
        excludeDomains: ['string'],
        includeDomains: ['string'],
        maxResults: 0,
        searchDepth: 'basic',
        timeRange: 'timeRange',
        topic: 'topic',
      },
      status: 'active',
      tags: ['string'],
      toolConfig: {},
      'If-Match': 'If-Match',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.profiles.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.profiles.delete('prf_210b9798eb53baa4e69d31c1');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.profiles.delete(
        'prf_210b9798eb53baa4e69d31c1',
        { 'If-Match': 'If-Match' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Y2.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('partialUpdate', async () => {
    const responsePromise = client.profiles.partialUpdate('prf_210b9798eb53baa4e69d31c1', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
