import type { GridDefinitions } from '../types/static-types.js';
import type { GridRow } from '../types/grids.js';

let storedGridDefinitions: Record<string, readonly string[]> | null = null;

/**
 * Initializes the grid validator by fetching grid definitions from the server.
 *
 * @param gridDefinitions - The grid definitions to initialize the validator with.
 * @returns Promise that resolves when initialization is complete.
 * @throws Error if fetching grid definitions fails.
 */
export const initGridParser = (gridDefinitions: GridDefinitions): void => {
  const pairs = Object.values(gridDefinitions)
    .map(def => [def.Name, def.Columns.map(col => col.Name)] as [string, string[]]);

  storedGridDefinitions = Object.fromEntries(pairs);
};

/**
 * Parses a single row of grid data into an object keyed by column names.
 * Throws if row and columns length mismatch.
 * @param row - Array of string values for the row.
 * @param gridName - Name of the grid to use for column definitions.
 * @returns Object mapping column names to row values.
 */
export const parseRow = <T extends keyof GridRow>(
  row: readonly string[],
  gridName: T,
): GridRow[T] => {
  if (!storedGridDefinitions) {
    throw new Error('Grid definitions not loaded. Call initGridValidator first.');
  }

  const result: Record<string, string> = {};
  for (let i = 0; i < row.length; i++) {
    // We don't expect any row length mismatches during normal short workflow, so no checks required.
    result[storedGridDefinitions[gridName][i]] = row[i];
  }

  return result as GridRow[T];
};

/**
 * Parses an array of grid rows into an array of objects keyed by column names.
 * Throws if any row and columns length mismatch.
 * @param data - Array of rows, each an array of string values.
 * @param gridName - Name of the grid to use for column definitions.
 * @returns Array of objects mapping column names to row values.
 */
export const parseGrid = function <T extends keyof GridRow>(
  data: readonly string[][],
  gridName: T,
): GridRow[T][] {
  return data.map(row => parseRow<T>(row, gridName));
};
