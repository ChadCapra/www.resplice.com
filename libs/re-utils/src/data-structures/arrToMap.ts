/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export function arrToMap<V extends Record<string, any>>(
  arr: V[],
  key: string
): Map<string, V> {
  const map = new Map<string, V>()

  arr.forEach((i) => {
    map.set(i[key], i)
  })

  return map
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('transforms record array to map', () => {
    const arr = [
      { id: '1', name: 'Bastilla' },
      { id: '2', name: 'Han' }
    ]
    const expected = arrToMap(arr, 'id')
    expect(expected).toBeInstanceOf(Map)
    expect(expected.get('1')).toMatchObject({
      id: '1',
      name: 'Bastilla'
    })
  })
  test('handles empty array', () => {
    expect(arrToMap([], 'id')).toMatchObject({})
  })
}
