import { AuthorizeParams, AuthorizeResult, GetSystemParametersResponse } from './types/static-types.js';
import {
  GridRow,
  RetailAccountBalancePreviewFlatL,
  RetailAccountReservedFundsPreviewFlat, RetailAccountTurnoverTransactionPreviewMasterDetailS,
} from './types/grids.js';
import { InternalClient } from './internal-client.js';
import { initGridParser, parseGrid } from './helpers/grid-parser.js';

const fetchGrid = async <Params, ApiResult, ResultName extends keyof GridRow>(
  client: InternalClient,
  endpoint: string,
  data: Params,
  responseMapper: (response: ApiResult) => string[][],
  gridName: ResultName,
): Promise<GridRow[ResultName][]> => {
  const response = await client.call<Params & { gridName: string }, ApiResult>(
    endpoint,
    { gridName: gridName, ...data },
  );

  const mappedResult = responseMapper(response);

  return parseGrid<ResultName>(mappedResult, gridName);
};

/**
 * Fetches system parameters including grid definitions.
 *
 * @param client - An InternalClient instance.
 * @returns Promise resolving to system parameters response.
 */
export const getSystemParameters = async (
  client: InternalClient,
): Promise<GetSystemParametersResponse> => client.call<object, GetSystemParametersResponse>(
  'RetailLoginService.svc/GetSystemParametersCached',
  {},
);

/**
 * Authorizes a user and returns an authenticated InternalClient instance.
 *
 * @param username - The username for authentication.
 * @param hashedPassword - The Argon2-hashed password (must be 64 characters).
 * @returns Promise resolving to an authenticated InternalClient.
 * @throws Error if password is not 64 characters or authorization fails.
 */
export const authorize = async function (
  username: string,
  hashedPassword: string,
): Promise<InternalClient> {
  if (hashedPassword.length !== 64) {
    throw new Error('Password must be Argon2-hashed. ' +
      'Authorize on the bank portal and find the call to /LoginFont for the correct value.');
  }

  const client = new InternalClient();

  const result = await client.call<AuthorizeParams, AuthorizeResult>(
    'RetailLoginService.svc/LoginFont',
    { username, password: hashedPassword, sessionID: 1 },
  );

  if (!result.AuthenticationType) {
    throw new Error('Authorization failed');
  }

  const systemParameters = await getSystemParameters(client);
  initGridParser(systemParameters.Result.GridDefinitions);

  return client;
};

export const getAllAccountBalance = async function (
  client: InternalClient,
): Promise<RetailAccountBalancePreviewFlatL[]> {
  return fetchGrid<object, string[][], 'RetailAccountBalancePreviewFlat-L'>(
    client,
    'DataService.svc/GetAllAccountBalance',
    {},
    res => res,
    'RetailAccountBalancePreviewFlat-L',
  );
};

/**
 * Fetches reserved funds for a transactional account.
 *
 * @param client - The authenticated InternalClient instance.
 * @param params - Parameters containing the account number.
 * @returns Promise resolving to an array of reserved funds items.
 */
export type GetTransactionalAccountReservedFundsParams = {
  accountNumber: string,
}

export const getTransactionalAccountReservedFunds = async function (
  client: InternalClient,
  params: GetTransactionalAccountReservedFundsParams,
): Promise<RetailAccountReservedFundsPreviewFlat[]> {
  return fetchGrid<object, string[][], 'RetailAccountReservedFundsPreviewFlat'>(
    client,
    'DataService.svc/GetTransactionalAccountReservedFunds',
    params,
    res => res,
    'RetailAccountReservedFundsPreviewFlat',
  );
};

/**
 * Fetches turnover transactions for a transactional account.
 *
 * @param client - The authenticated InternalClient instance.
 * @param params - Parameters including account number, productCoreID, and filter options.
 * @returns Promise resolving to an array of turnover transaction items.
 */
export type GetTransactionalAccountTurnoverParams = {
  accountNumber: string,
  productCoreID: string,
  filterParam: {
    CurrencyCodeNumeric: string,
    FromDate: string,
    ToDate: string,
    ItemType: string,
    ItemCount: string,
    FromAmount: string,
    ToAmount: string,
    PaymentPurpose: string
  },
};

export const getTransactionalAccountTurnover = async function (
  client: InternalClient,
  params: GetTransactionalAccountTurnoverParams,
): Promise<RetailAccountTurnoverTransactionPreviewMasterDetailS[]> {
  return fetchGrid<object, string[][][][], 'RetailAccountTurnoverTransactionPreviewMasterDetail-S'>(
    client,
    'DataService.svc/GetTransactionalAccountTurnover',
    params,
    (response) => response[0][1],
    'RetailAccountTurnoverTransactionPreviewMasterDetail-S',
  );
};
