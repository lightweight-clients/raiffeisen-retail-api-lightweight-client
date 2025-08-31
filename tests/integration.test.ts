import { describe, test, expect, beforeAll } from 'vitest';
import {
  authorize,
  getAllAccountBalance,
  getTransactionalAccountReservedFunds,
  getTransactionalAccountTurnover,
  dateToSerbianTimestamp,
  RetailAccountBalancePreviewFlatL,
} from '../src/client';
import { InternalClient } from '../src/client/internal_client';

const RAIF_USERNAME = process.env.RAIF_USERNAME || '';
const RAIF_HASHED_PASSWORD: string & { length: 64 } = process.env.RAIF_HASHED_PASSWORD || '';

describe.skipIf(!RAIF_USERNAME || !RAIF_HASHED_PASSWORD)('raiffeisen api client tests', () => {
  let client: InternalClient | null = null;
  let accountData: Record<typeof RetailAccountBalancePreviewFlatL['columns'][number], string>;

  beforeAll(() => {
    expect(!!RAIF_USERNAME).toBe(true);
    expect(!!RAIF_HASHED_PASSWORD).toBe(true);
  });

  test('authorize', async () => {
    const response = await authorize(RAIF_USERNAME, RAIF_HASHED_PASSWORD);
    console.log(response);
    expect(response['cookies']).toBeDefined();
    expect(response['cookies']).includes('rzbretv4_HolosToken');

    client = response;
  });

  test('getAllAccountBalance', async (context) => {
    if (!client) {
      context.skip();
      throw new Error('Unreachable');
    }

    const response = await getAllAccountBalance(client);
    console.log(response);
    expect(response).toBeDefined();
    expect(Array.isArray(response)).toBe(true);
    expect(response.length).toBeGreaterThan(0);
    for (const account of response) {
      expect(account).toHaveProperty('AccountNumber');
      expect(account).toHaveProperty('Balance');
      expect(account).toHaveProperty('CurrencyCodeNumber');
      expect(account).toHaveProperty('ProductCodeCore');
    }

    accountData = response[0];
  });

  test('getTransactionalAccountReservedFunds', async (context) => {
    if (!client || !accountData) {
      context.skip();
      throw new Error('Unreachable');
    }

    const response = await getTransactionalAccountReservedFunds(
      client,
      { accountNumber: accountData.AccountNumber },
    );
    console.log(response);
    expect(response).toBeDefined();
    expect(Array.isArray(response)).toBe(true);
    expect(response.length).toBeGreaterThan(0);

    const totalReservedFunds = response.reduce((sum, item) => sum + parseFloat(item.Amount), 0);
    expect(totalReservedFunds)
      .closeTo(parseFloat(accountData.Balance) - parseFloat(accountData.AvailableBalance), 0.01);
  });

  test('getTransactionalAccountTurnover', async (context) => {
    if (!client || !accountData) {
      context.skip();
      throw new Error('Unreachable');
    }

    const now = new Date();
    const fromDate = dateToSerbianTimestamp(new Date(now.getFullYear(), now.getMonth() - 1, 1));
    const toDate = dateToSerbianTimestamp(new Date(now.getFullYear(), now.getMonth(), 0));

    const response = await getTransactionalAccountTurnover(client, {
      accountNumber: accountData.AccountNumber,
      productCoreID: accountData.ProductCodeCore,
      filterParam: {
        CurrencyCodeNumeric: accountData.CurrencyCodeNumber,
        FromDate: fromDate,
        ToDate: toDate,
        ItemType: '',
        ItemCount: '',
        FromAmount: '',
        ToAmount: '',
        PaymentPurpose: '',
      },
    });
    console.log(response);
    expect(response).toBeDefined();
    expect(Array.isArray(response)).toBe(true);
    expect(response.length).toBeGreaterThan(0);
  });
});
