import { InternalClient } from './internal_client.js';
import { AuthorizeParams, AuthorizeResult } from './types.js';
import { parseGrid } from './helpers/grid_parser.js';
import {
  GridData,
  RetailAccountBalancePreviewFlatL,
  RetailAccountReservedFundsPreviewFlat,
  RetailAccountTurnoverTransactionPreviewMasterDetailS,
} from './grids.js';

const fetchGrid = async <Params, ApiResult, TGridData extends GridData, Result extends Record<TGridData['columns'][number], string>>(
  client: InternalClient,
  endpoint: string,
  gridData: TGridData,
  data: Params,
  responseMapper: (response: ApiResult) => string[][],
): Promise<Result[]> => {
  const response = await client.call<Params & { gridName: string }, ApiResult>(
    endpoint,
    { gridName: gridData.name, ...data },
  );

  const mappedResult = responseMapper(response);

  return parseGrid<Result>(mappedResult, gridData.columns);
};

/**
 * Authorizes a user and returns an authenticated InternalClient instance.
 *
 * @param username - The username for authentication.
 * @param hashedPassword - The Argon2-hashed password (must be 64 characters).
 * @returns Promise resolving to an authenticated InternalClient.
 * @throws Error if password is not 64 characters or authorization fails.
 */
export const authorize = async (
  username: string,
  hashedPassword: string,
): Promise<InternalClient> => {
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

  return client;
};

export type GetAllAccountBalanceResponseItem =
  Record<typeof RetailAccountBalancePreviewFlatL['columns'][number], string>;

export type GetAllAccountBalanceResponse = GetAllAccountBalanceResponseItem[];

export const getAllAccountBalance = async (
  client: InternalClient,
): Promise<GetAllAccountBalanceResponse> => fetchGrid<object, string[][], typeof RetailAccountBalancePreviewFlatL, GetAllAccountBalanceResponseItem>(
  client,
  'DataService.svc/GetAllAccountBalance',
  RetailAccountBalancePreviewFlatL,
  {},
  res => res,
);

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

export type GetTransactionalAccountReservedFundsResponseItem =
  Record<typeof RetailAccountReservedFundsPreviewFlat['columns'][number], string>;

export type GetTransactionalAccountReservedFundsResponse =
  GetTransactionalAccountReservedFundsResponseItem[];

export const getTransactionalAccountReservedFunds = async (
  client: InternalClient,
  params: GetTransactionalAccountReservedFundsParams,
): Promise<GetTransactionalAccountReservedFundsResponse> => fetchGrid<object, string[][], typeof RetailAccountReservedFundsPreviewFlat, GetTransactionalAccountReservedFundsResponseItem>(
  client,
  'DataService.svc/GetTransactionalAccountReservedFunds',
  RetailAccountReservedFundsPreviewFlat,
  params,
  res => res,
);

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

export type GetTransactionalAccountTurnoverResponseItem =
  Record<typeof RetailAccountTurnoverTransactionPreviewMasterDetailS['columns'][number], string>;

export type GetTransactionalAccountTurnoverResponse =
  GetTransactionalAccountTurnoverResponseItem[];

export const getTransactionalAccountTurnover = async (
  client: InternalClient,
  params: GetTransactionalAccountTurnoverParams,
): Promise<GetTransactionalAccountTurnoverResponse> => fetchGrid<object, string[][][][], typeof RetailAccountTurnoverTransactionPreviewMasterDetailS, GetTransactionalAccountTurnoverResponseItem>(
  client,
  'DataService.svc/GetTransactionalAccountTurnover',
  RetailAccountTurnoverTransactionPreviewMasterDetailS,
  params,
  (response) => response[0][1],
);
