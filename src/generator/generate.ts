import type { GetSystemParametersResponse, GridDefinitions } from '../client/types/static-types.js';
import * as fs from 'fs';
import { InternalClient } from '../client/internal-client.js';

const supportedGridNames = [
  'RetailAccountBalancePreviewFlat-L',
  'RetailAccountReservedFundsPreviewFlat',
  'RetailAccountTurnoverTransactionPreviewMasterDetail-S',
];

const normalizeGridName = (name: string): string => name.replaceAll('-', '');

const getGridDefinitions = async (): Promise<GridDefinitions> => {
  const systemParameters = await new InternalClient().call<object, GetSystemParametersResponse>(
    'RetailLoginService.svc/GetSystemParametersCached',
    {});
  return systemParameters.Result.GridDefinitions;
};

const generateTs = (gridDefinitions: GridDefinitions): string => {
  const members = Object.values(gridDefinitions)
    .filter(grid => supportedGridNames.includes(grid.Name))
    .map(grid => ({
      name: grid.Name,
      columns: [...new Set(grid.Columns.map(col => col.Name))],
    }))
    .map(pair => `export type ${normalizeGridName(pair.name)} = {\n${pair.columns.map(col => `  ${col}: string;`).join('\n')}\n};`);

  members.push(`export type GridRow = {\n${supportedGridNames.map(name => `  '${name}': ${normalizeGridName(name)};`).join('\n')}\n};`);

  return `// This file is auto-generated. Do not edit manually.\n\n${members.join('\n\n')}\n`;
};

export const generateGridTypes = async (): Promise<void> => {
  const gridDefinitions = await getGridDefinitions();
  const ts = generateTs(gridDefinitions);

  fs.writeFileSync('./src/client/types/grids.ts', ts);
};

await generateGridTypes();
