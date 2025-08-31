/**
 * Error thrown when an API call returns 401 Unauthorized.
 */
export class UnauthorizedError extends Error {
    constructor(message: string, options?: ErrorOptions) {
        super(message, options);
        this.name = "UnauthorizedError";
    }
}

/**
 * Internal API client for Raiffeisen Retail API.
 * Handles cookies and error reporting.
 */
export class InternalClient {
    private static readonly BASE_ENDPOINT = "https://rol.raiffeisenbank.rs/Retail/Protected/Services";

    private static DEFAULT_HEADERS = {
        "Accept": "application/json",
        "Content-Type": "application/json",
    }

    private cookies: string = '';

    constructor() {
        this.cookies = '';
    }

    /**
     * Makes a POST request to the given endpoint with the provided body.
     * Handles cookies and error reporting.
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

