# Raiffeisen Retail API Client

[![NPM Version](https://img.shields.io/npm/v/raiffeisen-retail-api)](https://www.npmjs.com/package/raiffeisen-retail-api)
![NPM Downloads](https://img.shields.io/npm/dm/raiffeisen-retail-api)
![GitHub License](https://img.shields.io/github/license/raiffeisen-retail-api)

A Raiffeisen Retail API client for Node.js and the browser, fully typed with TypeScript.

## Features

- No dependencies.
- When using code minifiers, only the fetch command is exported.
- Can be used in browser and Node.js.
- Fully compatible with AWS LLRT.
- Fully typed API.

## Installation

```bash
npm install @lightweight-clients/raiffeisen-retail-api-lightweight-client
```

## Usage

### Examples

```typescript
import {
  authorize,
  getTransactionalAccountTurnover,
  getAllAccountBalance,
} from '@lightweight-clients/raiffeisen-retail-api-lightweight-client';

const main = async () => {
  // See 'Retrieving Password' for details on how to get the hashed password.
  const client = await authorize('john.doe', 'b1e222bfab614fa09d0897d6a5ee82d0b1e222bfab614fa09d0897d6a5ee82d0');

  const accounts = await getAllAccountBalance(client);

  const transactions = await getTransactionalAccountTurnover(client, {
    accountNumber: accounts[0].AccountNumber,
    productCoreID: accounts[0].ProductCodeCore,
    filterParam: {
      CurrencyCodeNumeric: accounts[0].CurrencyCodeNumber,
      FromDate: '15.08.2025',
      ToDate: '30.08.2025',
      ItemType: '',
      ItemCount: '',
      FromAmount: '',
      ToAmount: '',
      PaymentPurpose: '',
    },
  });

  console.log(transactions[0].TransactionID)
};

main();
```

### Methods

Currently, the following API methods are implemented:

- `authorize(username: string, hashed_password: string): Promise<Client>` -
  Creates a client by authorizing with the provided username and hashed password.
  See 'Retrieving Password' below for details on how to get the hashed password.
- `getAllAccountBalance(client: Client): Promise<...>` -
  Results list of accounts with balances and other details.
- `getTransactionalAccountTurnover(client: Client, params): Promise<...>` -
  Returns list of completed transactions for the specified account and filter parameters.
- `getTransactionalAccountReservedFunds(client: Client, params): Promise<...>` -
  Returns list of reserved funds for the specified account.

### Retrieving Password

API accepts only hashed passwords. There are 2 ways to get the hashed password:

1. **From Raiffeisen Online Banking** (fast and easy):
   - Log in to your Raiffeisen online banking account.
   - Open the browser's developer console (usually by pressing `F12` or `Ctrl+Shift+I`).
   - Navigate to the "Network" tab.
   - Perform an action that requires authentication (e.g., refresh the page or navigate to a different section).
   - Look for a request to `.../LoginFont`.
   - Inspect the request payload to find the hashed password.

2. **Hashing it yourself**:

   Use a Argon2 hashing library to hash your plain text password.
   Example using `argon2` library:

   ```typescript
   import { argon2i, hash, Options } from 'argon2';
   
   const ARGON_SETTINGS: Options & { raw: true } = {
       type: argon2i,
       timeCost: 3,
       memoryCost: 4096,
       hashLength: 32,
       version: 0x13,
       parallelism: 1,
       raw: true,
   };
   
   function padSalt(username: string): Buffer {
       let salt = username.toLowerCase();
       if (salt.length < 8) {
           salt += '\x00'.repeat(8 - salt.length);
       }
       return Buffer.from(salt, 'utf8');
   }
   
   export const argon2HashHex = async (password: string, username: string): Promise<string> => {
       const salt = padSalt(username);
       const buf = await hash(password, { ...ARGON_SETTINGS, salt });
       return buf.toString('hex');
   };
   ```

## Regenerating Grid Definitions

If the bank updates grid definitions, regenerate `src/client/grids.ts`:

```bash
npm run generate-grid-types
```

## Environment Variables for Integration Tests

Integration tests require the following environment variables:

- `RAIF_USERNAME`: Your Raiffeisen username
- `RAIF_HASHED_PASSWORD`: Your Argon2-hashed password

Set these in your environment before running tests.

## Running Tests

Run all tests using:

```bash
npm test
```

## Linting

Check code style and quality:

```bash
npm run prepack
```

## Versioning

This project uses [Semantic Versioning](https://semver.org/). The version number is in the format `MAJOR.MINOR.PATCH`.

- **MAJOR** version changes indicate incompatible library updates or breaking API changes.
- **MINOR** version changes indicate API additions in a backwards-compatible manner.
- **PATCH** version changes indicate backwards-compatible bug fixes.

## Schema

This project uses SystemParameters to generate some types, but mainly it is manually typed,
unlike other @lightweight-clients packages.

## License

Unlicensed - use at your own risk. This project is not affiliated with or endorsed by Raiffeisen Bank.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
All contributions should adhere to the existing code style and include appropriate tests.
