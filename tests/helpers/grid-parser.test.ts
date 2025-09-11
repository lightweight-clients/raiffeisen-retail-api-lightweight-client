import type { GridDefinitions } from '../../src/client/index.js';
import { describe, it, expect } from 'vitest';
import { initGridParser, parseRow, parseGrid } from '../../src/client/helpers/grid-parser.js';

describe('grid-parser', () => {
  const mockGridDefinitions: GridDefinitions = {
    RetailAccountBalancePreviewFlatL: {
      Name: 'RetailAccountBalancePreviewFlat-L',
      Columns: [
        { Name: 'KEY_COLUMN' },
        { Name: 'AccountNumber' },
        { Name: 'AccountType' },
        { Name: 'CurrencyCode' },
      ],
    },
  };

  const validRow = ['key1', 'acc123', 'typeA', 'USD'];
  const validRows = [
    ['key1', 'acc123', 'typeA', 'USD'],
    ['key2', 'acc456', 'typeB', 'EUR'],
  ];

  it('throws if grid definitions are not initialized', () => {
    expect(() => parseRow(validRow, 'RetailAccountBalancePreviewFlat-L')).toThrow(
      /Grid definitions not loaded/,
    );
  });

  it('parses a single row correctly', () => {
    initGridParser(mockGridDefinitions);

    const result = parseRow(validRow, 'RetailAccountBalancePreviewFlat-L');
    expect(result).toEqual({
      KEY_COLUMN: 'key1',
      AccountNumber: 'acc123',
      AccountType: 'typeA',
      CurrencyCode: 'USD',
    });
  });

  it('parses multiple rows correctly', () => {
    initGridParser(mockGridDefinitions);

    const results = parseGrid(validRows, 'RetailAccountBalancePreviewFlat-L');
    expect(results).toEqual([
      {
        KEY_COLUMN: 'key1',
        AccountNumber: 'acc123',
        AccountType: 'typeA',
        CurrencyCode: 'USD',
      },
      {
        KEY_COLUMN: 'key2',
        AccountNumber: 'acc456',
        AccountType: 'typeB',
        CurrencyCode: 'EUR',
      },
    ]);
  });
});

