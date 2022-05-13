export function btob64(bytes: ArrayBufferLike): string {
  // NOTE: This won't work for large buffers, should be fine for keys and small messages
  return btoa(String.fromCharCode(...new Uint8Array(bytes)))
}

/**
 * Converts Base64 to Base64Url
 * @param b - Base64 encoded data
 * @returns Base64Url encoded data
 */
export function b64tob64u(b: string): string {
  // eslint-disable-next-line
  return b.replace(/\=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  test('converts bytes to base64', () => {
    const bytes = new Uint8Array([22, 32])
    const base64 = 'FiA='

    expect(btob64(bytes.buffer)).toBe(base64)
  })

  test('converts base64 to base64url', () => {
    const base64 = 'FiA='
    const base64Url = 'FiA'

    expect(b64tob64u(base64)).toBe(base64Url)
  })
}
