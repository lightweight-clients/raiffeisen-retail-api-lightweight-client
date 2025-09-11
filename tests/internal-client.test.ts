/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { describe, test, expect, beforeEach, vi } from 'vitest';
import { InternalClient } from '../src/client/internal-client.js';
import { UnauthorizedError } from '../src/client/errors/unauthorized-error.js';

describe('InternalClient', () => {
  const DEFAULT_RESPONSE_HEADERS_MOCK = {
    get: vi.fn().mockReturnValue(''),
  };

  let client: InternalClient;

  beforeEach(() => {
    client = new InternalClient();
    vi.restoreAllMocks();
  });

  test('should return response data on success', async () => {
    const mockResponse = {
      ok: true,
      status: 200,
      json: async () => ({ success: true }),
      headers: DEFAULT_RESPONSE_HEADERS_MOCK,
    };
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(mockResponse));
    const result = await client.call('test-endpoint', { foo: 'bar' });
    expect(result).toEqual({ success: true });
  });

  test('should throw UnauthorizedError on 401', async () => {
    const mockResponse = {
      ok: false,
      status: 401,
      text: async () => 'Unauthorized',
      headers: DEFAULT_RESPONSE_HEADERS_MOCK,
    };
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(mockResponse));
    await expect(client.call('test-endpoint', {})).rejects.toThrow(UnauthorizedError);
  });

  test('should throw generic Error on other errors', async () => {
    const mockResponse = {
      ok: false,
      status: 500,
      text: async () => 'Server error',
      headers: DEFAULT_RESPONSE_HEADERS_MOCK,
    };
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(mockResponse));
    await expect(client.call('test-endpoint', {})).rejects
      .toThrow('API error: status 500, body: Server error');
  });

  test('should set cookies from Set-Cookie header on first success', async () => {
    const setCookie = 'sessionid=abc123';
    const mockResponse = {
      ok: true,
      status: 200,
      json: async () => ({ foo: 'bar' }),
      headers: { get: vi.fn().mockReturnValue(setCookie) },
    };
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(mockResponse));
    await client.call('test-endpoint', {});
    // Call again, cookie should persist
    expect(client['cookies']).toBe(setCookie);
  });
});

describe('UnauthorizedError', () => {
  test('should set name and message', () => {
    const err = new UnauthorizedError('msg');
    expect(err.name).toBe('UnauthorizedError');
    expect(err.message).toBe('msg');
  });
});

