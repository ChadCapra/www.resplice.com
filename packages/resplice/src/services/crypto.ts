export async function generateAesKey() {
  const key = await crypto.subtle.generateKey(
    {
      name: 'AES-GCM',
      length: 128
    },
    true,
    ['encrypt', 'decrypt']
  )
  const raw = await crypto.subtle.exportKey('raw', key)
  return {
    key,
    raw
  }
}

export async function encrypt(
  key: CryptoKey,
  data: Uint8Array
): Promise<{ iv: Uint8Array; cipherText: Uint8Array }> {
  // The IV should change everytime encryption happens
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const encryptedBuffer: ArrayBuffer = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      // Recommended to use at least 12 bytes length for iv
      iv
      // Additional authentication data (optional)
      // additionalData: ArrayBuffer,
    },
    key,
    data
  )

  const cipherText = new Uint8Array(encryptedBuffer)

  return { iv, cipherText }
}

export async function decrypt(
  key: CryptoKey,
  iv: Uint8Array,
  data: Uint8Array
): Promise<Uint8Array> {
  return await crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv // The initialization vector you used to encrypt
      // additionalData: ArrayBuffer, // The additionalData you used to encrypt (if any)
    },
    key,
    data
  )
}

export function sign(key: CryptoKey, data: Uint8Array) {
  return crypto.subtle.sign('HMAC', key, data)
}

export function verify(
  key: CryptoKey,
  signature: Uint8Array,
  data: Uint8Array
) {
  return crypto.subtle.verify('HMAC', key, signature, data)
}

export function importPublicKey(rawKey: Uint8Array) {
  return crypto.subtle.importKey('raw', rawKey, 'RSA-OAEP', false, ['encrypt'])
}

export function publicKeyEncrypt(key: CryptoKey, data: Uint8Array) {
  return crypto.subtle.encrypt({ name: 'RSA-OAEP' }, key, data)
}

const BASE_IV = ''

export function generateClientIV(counter: number) {
  return crypto.getRandomValues(new Uint8Array(12))
}

export function deriveServerIV(counter: number) {
  console.log('')
}
