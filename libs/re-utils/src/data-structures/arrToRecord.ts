/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export function arrToRecord<V extends Record<string, any>>(
  arr: V[],
  key: string
): Record<string, V> {
  const record: Record<string, V> = {}
  arr.forEach((i) => {
    record[i[key]] = i
  })
  return record
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('transforms record array to record', () => {
    const arr = [
      { id: '1', name: 'Bastilla' },
      { id: '2', name: 'Han' }
    ]
    const expected = arrToRecord(arr, 'id')
    expect(expected).toBeTypeOf('object')
    expect(expected['2']).toMatchObject({
      id: '2',
      name: 'Han'
    })
  })
  test('handles empty array', () => {
    expect(arrToRecord([], 'id')).toMatchObject({})
  })
}
