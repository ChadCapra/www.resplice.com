export function mockPromise<T>({
  data,
  timeout = 300,
  rejectPromise = false
}: {
  data: T
  timeout?: number
  rejectPromise?: boolean
}): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rejectPromise) {
        reject(new Error('Network Error'))
        return
      }
      console.trace(data)
      resolve(data)
    }, timeout)
  })
}

export async function getMockPublicKey(): Promise<ArrayBuffer> {
  const keyPair = await crypto.subtle.generateKey(
    {
      name: 'RSA-OAEP',
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: 'SHA-256'
    },
    true,
    ['encrypt']
  )
  return crypto.subtle.exportKey('raw', keyPair.publicKey)
}
