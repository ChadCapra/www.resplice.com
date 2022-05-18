export function bytesToInt32(bytes: Uint8Array, offset = 0) {
  return new DataView(bytes.buffer).getUint32(offset)
}

export function int32ToBytes(int: number): Uint8Array {
  const bufView = new Uint8Array(4)
  new DataView(bufView.buffer).setUint32(0, int)
  return bufView
}

// export function bytesToString(bytes: Uint8Array) {
//   console.log(bytes)
// }

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  test('converts bytes into an integer', () => {
    const two = new Uint8Array([0, 0, ...new Uint8Array([0, 2])])
    const ten = new Uint8Array([0, 0, 0, 10])
    const fifteen = new Uint8Array([0, 0, 0, 15])
    const twelve_thousand = new Uint8Array([0, 0, 46, 224])
    const max = new Uint8Array([255, 255, 255, 255])

    expect(bytesToInt32(two)).toBe(2)
    expect(bytesToInt32(ten)).toBe(10)
    expect(bytesToInt32(fifteen)).toBe(15)
    expect(bytesToInt32(twelve_thousand)).toBe(12000)
    expect(bytesToInt32(max)).toBe(4294967295)
  })

  test('converts an integer to a byte array', () => {
    const ten = 10
    const fifteen = 15
    const twelve_thousand = 12000
    const max = 4294967295

    expect(int32ToBytes(ten)).toEqual(new Uint8Array([0, 0, 0, 10]))
    expect(int32ToBytes(fifteen)).toEqual(new Uint8Array([0, 0, 0, 15]))
    expect(int32ToBytes(twelve_thousand)).toEqual(
      new Uint8Array([0, 0, 46, 224])
    )
    expect(int32ToBytes(max)).toEqual(new Uint8Array([255, 255, 255, 255]))
  })
}
