/** Shortens `input` to at most `max` characters, ending with an ellipsis when cut. */
export function truncate(input: string, max: number): string {
  if (input.length <= max) return input;
  if (max < 1) return '';
  return input.slice(0, max - 1) + '…';
}
