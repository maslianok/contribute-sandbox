const UNITS: Record<string, number> = { ms: 1, s: 1000, m: 60_000, h: 3_600_000, d: 86_400_000 };

/** Parses durations such as "250ms", "45s", "2h" or "1h30m" into milliseconds. */
export function parseDuration(input: string): number {
  const text = input.trim();
  if (!/^(\d+(ms|s|m|h|d))+$/.test(text)) throw new Error(`Invalid duration: ${input}`);
  let total = 0;
  for (const [, amount, unit] of text.matchAll(/(\d+)(ms|s|m|h|d)/g)) total += Number(amount) * UNITS[unit];
  return total;
}
