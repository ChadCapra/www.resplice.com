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
