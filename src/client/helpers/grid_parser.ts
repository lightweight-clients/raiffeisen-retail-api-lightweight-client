/**
 * Parses a single row of grid data into an object keyed by column names.
 * Throws if row and columns length mismatch.
 * @param row - Array of string values for the row.
 * @param columns - Array of column names.
 * @returns Object mapping column names to row values.
 */
export const parseRow = <T extends Record<string, string>>(
  row: readonly string[],
  columns: readonly string[],
): T => {
  if (row.length !== columns.length) {
    throw new Error('Row and columns length mismatch');
  }

  const result: Record<string, string> = {};
  for (let i = 0; i < row.length; i++) {
    result[columns[i]] = row[i];
  }

  return result as T;
};

/**
 * Parses an array of grid rows into an array of objects keyed by column names.
 * Throws if any row and columns length mismatch.
 * @param data - Array of rows, each an array of string values.
 * @param columns - Array of column names.
 * @returns Array of objects mapping column names to row values.
 */
export const parseGrid = <T extends Record<string, string>>(
  data: readonly string[][],
  columns: readonly string[],
): T[] => data.map(row => parseRow<T>(row, columns));
