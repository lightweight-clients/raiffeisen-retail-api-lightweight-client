/**
 * Error thrown when an API call returns 401 Unauthorized.
 */
export class UnauthorizedError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = 'UnauthorizedError';
  }
}
