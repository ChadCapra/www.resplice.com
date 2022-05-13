export function capitalize(text: string): string {
  return text.substring(0, 1).toUpperCase() + text.substring(1)
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('capitalizes', () => {
    expect(capitalize('lightsaber')).toBe('Lightsaber')
    expect(capitalize('Lightsaber')).toBe('Lightsaber')
    expect(capitalize('two lightsabers')).toBe('Two lightsabers')
  })
  test('capitalizes a sentence', () => {
    expect(capitalize('two lightsabers')).toBe('Two lightsabers')
  })
}
