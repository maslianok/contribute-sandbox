import { describe, expect, it } from 'vitest';
import { parseDuration } from '../src/duration';

describe('parseDuration', () => {
  it('parses seconds', () => expect(parseDuration('45s')).toBe(45_000));
  it('parses hours', () => expect(parseDuration('2h')).toBe(7_200_000));
  it('rejects garbage', () => expect(() => parseDuration('soon')).toThrow());
  it('adds up compound durations', () => {
    expect(parseDuration('1h30m')).toBe(5_400_000);
    expect(parseDuration('2m15s')).toBe(135_000);
  });
  it('rejects trailing text', () => expect(() => parseDuration('1h30')).toThrow());
});
