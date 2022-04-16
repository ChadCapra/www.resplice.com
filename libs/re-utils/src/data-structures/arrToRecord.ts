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
