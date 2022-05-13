function processRecords<K, T extends Record<string, any>>(
  record: Map<K, T>,
  key: string,
  newItems: T[],
  expiredKeys: K[]
): Map<K, T> {
  // Does shallow clone of current record map
  const newRecord = new Map(record)

  expiredKeys.forEach((k) => {
    newRecord.delete(k)
  })

  newItems.forEach((i) => {
    newRecord.set(i[key] as K, i)
  })

  return newRecord
}

export default processRecords
