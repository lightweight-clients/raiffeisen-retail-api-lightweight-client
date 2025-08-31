import * as fs from 'fs';
import { InternalClient } from '../client/internal_client';

type GridDefinition = {
  Name: string,
  Columns: { Name: string }[],
}

const getGridDefinitions = async (): Promise<GridDefinition[]> => {
  const systemParameters = await new InternalClient().call<object, {
    Result: { GridDefinitions: GridDefinition[] };
  }>(
    'RetailLoginService.svc/GetSystemParametersCached',
    {});
  return systemParameters.Result.GridDefinitions;
};

const generateTs = (gridDefinitions: GridDefinition[]): string => {
  const members = [];
  const typeNames = [];

  for (const grid of Object.values(gridDefinitions)) {
    const normalizedName = grid.Name.replaceAll('-', '');

    typeNames.push(normalizedName);
    members.push(
      `export const ${normalizedName}Columns = [ ${grid.Columns.map(col => `'${col.Name}'`).join(', ')} ] as const;`,
      `export type ${normalizedName}Column = typeof ${normalizedName}Columns[number];`,
      `export const ${normalizedName}: { name: string, columns: readonly ${normalizedName}Column[] } = { name: '${grid.Name}', columns: ${normalizedName}Columns } as const;`,
    );
  }

  members.push(`export type GridData = ${typeNames.map(t => `typeof ${t}`).join(' | ')};`);

  return `// This file is auto-generated. Do not edit manually.\n\n${members.join('\n\n')}\n`;
};

export const generateGridTypes = async (): Promise<void> => {
  const gridDefinitions = await getGridDefinitions();
  const ts = generateTs(gridDefinitions);

  fs.writeFileSync('./src/client/grids.ts', ts);
};

await generateGridTypes();
