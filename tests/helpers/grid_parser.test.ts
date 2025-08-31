import { describe, it, expect } from 'vitest';
import { parseRow, parseGrid } from '../../src/client/helpers/grid_parser';

describe('grid_parser', () => {
  describe('parseRow', () => {
    it('should parse a row into an object', () => {
      const row = ['a', 'b', 'c'];
      const columns = ['x', 'y', 'z'];
      expect(parseRow(row, columns)).toEqual({ x: 'a', y: 'b', z: 'c' });
    });

    it('should throw error if row and columns length mismatch', () => {
      const row = ['a', 'b'];
      const columns = ['x', 'y', 'z'];
      expect(() => parseRow(row, columns)).toThrow();
    });

    it('should return empty object for empty row and columns', () => {
      expect(parseRow([], [])).toEqual({});
    });
  });

  describe('parseGrid', () => {
    it('should parse multiple rows into an array of objects', () => {
      const data = [
        ['a1', 'b1', 'c1'],
        ['a2', 'b2', 'c2'],
      ];
      const columns = ['x', 'y', 'z'];
      expect(parseGrid(data, columns)).toEqual([
        { x: 'a1', y: 'b1', z: 'c1' },
        { x: 'a2', y: 'b2', z: 'c2' },
      ]);
    });

    it('should throw error if any row and columns length mismatch', () => {
      const data = [
        ['a1', 'b1'],
        ['a2', 'b2', 'c2'],
      ];
      const columns = ['x', 'y', 'z'];
      expect(() => parseGrid(data, columns)).toThrow();
    });

    it('should return empty array for empty data and columns', () => {
      expect(parseGrid([], [])).toEqual([]);
    });
  });
});
