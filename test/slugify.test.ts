import { describe, expect, it } from 'vitest';
import { slugify } from '../src/slugify';

describe('slugify', () => {
  it('lower-cases and dashes words', () => expect(slugify('Hello World')).toBe('hello-world'));
  it('drops accents', () => expect(slugify('Crème brûlée')).toBe('creme-brulee'));
  it('trims dashes at the ends', () => expect(slugify('  hi  ')).toBe('hi'));
  it('collapses a run of spaces or punctuation into one dash', () => {
    expect(slugify('Hello   World')).toBe('hello-world');
    expect(slugify('Tom & Jerry')).toBe('tom-jerry');
    expect(slugify('a -- b')).toBe('a-b');
    expect(slugify('  Hi!  ')).toBe('hi');
  });
});
