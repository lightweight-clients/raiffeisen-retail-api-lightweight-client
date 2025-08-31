import { describe, it, expect } from 'vitest';
import { dateToSerbianTimestamp } from '../../src/client';

describe('dateToSerbianTimestamp', () => {
  it('formats a typical date correctly', () => {
    const date = new Date('2024-06-01T15:30:45');
    expect(dateToSerbianTimestamp(date)).toBe('01.06.2024 15:30:45');
  });

  it('pads single-digit day and month', () => {
    const date = new Date('2024-01-09T08:05:09');
    expect(dateToSerbianTimestamp(date)).toBe('09.01.2024 08:05:09');
  });

  it('handles midnight', () => {
    const date = new Date('2024-12-31T00:00:00');
    expect(dateToSerbianTimestamp(date)).toBe('31.12.2024 00:00:00');
  });
});
