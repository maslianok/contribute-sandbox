import { describe, expect, it } from 'vitest';
import { truncate } from '../src/truncate';

describe('truncate', () => {
  it('keeps short strings', () => expect(truncate('abc', 5)).toBe('abc'));
  it('keeps strings of exactly max characters', () => expect(truncate('abcdef', 6)).toBe('abcdef'));
  it('adds an ellipsis when cut', () => expect(truncate('abcdefgh', 6).endsWith('…')).toBe(true));
  it('never exceeds max, ellipsis included', () => expect(truncate('abcdefgh', 6)).toBe('abcde…'));
  it('returns an empty string when max is 0', () => expect(truncate('abc', 0)).toBe(''));
});
