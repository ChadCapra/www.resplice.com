export function clamp(x: number, min: number, max: number): number {
  if (min > max) throw new Error('min must be greater than max')
  return Math.min(Math.max(x, min), max)
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('clamps between', () => {
    expect(clamp(10, 0, 20)).toBe(10)
    expect(clamp(10, 20, 30)).toBe(20)
    expect(clamp(40, 20, 30)).toBe(30)
  })
  test('handles bad min/max', () => {
    expect(() => clamp(10, 40, 30)).toThrowError('min must be greater than max')
  })
}
