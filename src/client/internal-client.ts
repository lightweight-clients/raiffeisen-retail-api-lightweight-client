import { UnauthorizedError } from './errors/unauthorized-error.js';

/**
 * Internal API client for Raiffeisen Retail API.
 * Handles cookies and error reporting.
 */
export class InternalClient {
  private static readonly BASE_ENDPOINT = 'https://rol.raiffeisenbank.rs/Retail/Protected/Services';

  private static DEFAULT_HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  private cookies: string = '';

  constructor() {
    this.cookies = '';
  }

  /**
   * Makes a POST request to the given endpoint with the provided body.
   * Handles cookies and error reporting.
   * @param endpoint - The API endpoint (relative to base URL).
   * @param body - The request body to be sent as JSON.
   * @returns Promise resolving to the parsed JSON response.
   * @throws UnauthorizedError if the response status is 401.
   * @throws Error for other non-200 responses with status and body details.
   */
  public async call<T, R>(endpoint: string, body: T): Promise<R> {
    const absoluteUrl = `${InternalClient.BASE_ENDPOINT}/${endpoint}`;
    const response = await fetch(absoluteUrl, {
      method: 'POST',
      headers: {
        ...InternalClient.DEFAULT_HEADERS,
        'Cookie': this.cookies,
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      // Only the first response's Set-Cookie should be stored and reused
      // Otherwise, session cookies might get lost. We can merge them, but it is
      // not necessary for the current use case.
      this.cookies = this.cookies || response.headers.get('Set-Cookie') || '';
      return (await response.json()) as R;
    } else if (response.status === 401) {
      throw new UnauthorizedError('Unauthorized', { cause: await response.text() });
    } else {
      const bodyText = await response.text();
      throw new Error(`API error: status ${response.status}, body: ${bodyText}`);
    }
  }
}

