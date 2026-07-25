import { beforeAll, describe, expect, test } from 'vitest';
import {
  authorize,
  dateToSerbianTimestamp,
  getAllAccountBalance,
  getTransactionalAccountReservedFunds,
  getTransactionalAccountTurnover,
  type RetailAccountBalancePreviewFlatL,
} from '../src/client/index.js';
import type { InternalClient } from '../src/client/internal-client.js';

const RAIF_USERNAME = process.env.RAIF_USERNAME || '';
const RAIF_HASHED_PASSWORD: string = process.env.RAIF_HASHED_PASSWORD || '';
const TIMEOUT_MS = 5000;

describe.skipIf(!RAIF_USERNAME || !RAIF_HASHED_PASSWORD)(
  'raiffeisen api client tests',
  () => {
    let client: InternalClient | null = null;
    let accountData: Record<keyof RetailAccountBalancePreviewFlatL, string>;

    beforeAll(() => {
      expect(!!RAIF_USERNAME).toBe(true);
      expect(!!RAIF_HASHED_PASSWORD).toBe(true);
      expect(RAIF_HASHED_PASSWORD.length).toBe(64);
    });

    test(
      'authorize',
      async () => {
        const response = await authorize(RAIF_USERNAME, RAIF_HASHED_PASSWORD);
        // biome-ignore lint/complexity/useLiteralKeys: Verify private authorization state.
        expect(response['cookies']).toBeDefined();
        // biome-ignore lint/complexity/useLiteralKeys: Verify private authorization state.
        expect(response['cookies']).toContain('rzbretv4_HolosToken');

        client = response;
      },
      TIMEOUT_MS,
    );

    test(
      'getAllAccountBalance',
      async (context) => {
        if (!client) {
          context.skip();
          throw new Error('Unreachable');
        }

        const response = await getAllAccountBalance(client);
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
      },
      TIMEOUT_MS,
    );

    test(
      'getTransactionalAccountReservedFunds',
      async (context) => {
        if (!client || !accountData) {
          context.skip();
          throw new Error('Unreachable');
        }

        const response = await getTransactionalAccountReservedFunds(client, {
          accountNumber: accountData.AccountNumber,
        });
        expect(response).toBeDefined();
        expect(Array.isArray(response)).toBe(true);
        expect(response.length).toBeGreaterThan(0);

        const totalReservedFunds = response.reduce(
          (sum, item) => sum + parseFloat(item.Amount),
          0,
        );
        expect(totalReservedFunds).closeTo(
          parseFloat(accountData.Balance) -
            parseFloat(accountData.AvailableBalance),
          0.01,
        );
      },
      TIMEOUT_MS,
    );

    test(
      'getTransactionalAccountTurnover',
      async (context) => {
        if (!client || !accountData) {
          context.skip();
          throw new Error('Unreachable');
        }

        const now = new Date();
        const fromDate = dateToSerbianTimestamp(
          new Date(now.getFullYear(), now.getMonth() - 1, 1),
        );
        const toDate = dateToSerbianTimestamp(
          new Date(now.getFullYear(), now.getMonth(), 0),
        );

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
        expect(response).toBeDefined();
        expect(Array.isArray(response)).toBe(true);
        expect(response.length).toBeGreaterThan(0);
      },
      TIMEOUT_MS,
    );
  },
);
