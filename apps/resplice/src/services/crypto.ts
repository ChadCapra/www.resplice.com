import { btob64, b64tob64u } from '@resplice/utils'
// const LARGEST_INT_32 = 4294967295

export function generateAesKey() {
  return crypto.subtle.generateKey(
    {
      name: 'AES-GCM',
      length: 128
    },
    true,
    ['encrypt', 'decrypt']
  )
}

export function generateBaseIV() {
  return crypto.getRandomValues(new Uint8Array(8))
}

export async function exportKey(key: CryptoKey) {
  const rawBuf = await crypto.subtle.exportKey('raw', key)
  return new Uint8Array(rawBuf)
}

export async function encrypt(
  key: CryptoKey,
  iv: Uint8Array,
  data: Uint8Array
): Promise<Uint8Array> {
  const encryptedBuffer: ArrayBuffer = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv
    },
    key,
    data
  )

  const cipherText = new Uint8Array(encryptedBuffer)

  return cipherText
}

export async function decrypt(
  key: CryptoKey,
  iv: Uint8Array,
  cipherText: Uint8Array
): Promise<Uint8Array> {
  return await crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv // The initialization vector you used to encrypt
      // additionalData: ArrayBuffer, // The additionalData you used to encrypt (if any)
    },
    key,
    cipherText
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

export function importPublicKey(rawKey: ArrayBuffer): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    'jwk',
    buildJwk(rawKey),
    {
      name: 'RSA-OAEP',
      hash: 'SHA-256'
    },
    false,
    ['encrypt']
  )
}

export function publicKeyEncrypt(
  key: CryptoKey,
  data: Uint8Array
): Promise<Uint8Array> {
  return crypto.subtle.encrypt({ name: 'RSA-OAEP' }, key, data)
}

export function calculateClientIV(
  baseIV: Uint8Array,
  counter: number
): Uint8Array {
  const ivBuf = new ArrayBuffer(12)
  const ivArr = new Uint8Array(ivBuf)

  // set first 8 bytes of buffer with base
  ivArr.set(baseIV)
  // set last 4 bytes of buffer with message id int32
  new DataView(ivBuf).setUint32(8, counter * 2)

  return ivArr
}

export function calculateServerIV(
  baseIV: Uint8Array,
  counter: number
): Uint8Array {
  const ivBuf = new ArrayBuffer(12)
  const ivArr = new Uint8Array(ivBuf)

  // set first 8 bytes of buffer with base
  ivArr.set(baseIV)
  // set last 4 bytes of buffer with message id int32
  new DataView(ivBuf).setUint32(8, counter * 2 + 1)

  return ivArr
}

export function parseServerCipher(cipher: Uint8Array): {
  iv: Uint8Array
  cipherText: Uint8Array
} {
  const iv = cipher.slice(0, 4) // TODO: Add base IV
  const cipherText = cipher.slice(4)

  return {
    iv,
    cipherText
  }
}

export function combineBufferArrays(
  arr1: Uint8Array,
  arr2: Uint8Array
): Uint8Array {
  const newBuf = new ArrayBuffer(arr1.byteLength + arr2.byteLength)
  const newBufView = new Uint8Array(newBuf)
  newBufView.set(arr1)
  newBufView.set(arr2, arr1.byteLength)
  return newBufView
}

function buildJwk(rawKey: ArrayBuffer) {
  // NOTE: 'AQAB' = base64(65537)
  const b64Key = btob64(rawKey)
  const b64UrlKey = b64tob64u(b64Key)
  return {
    kty: 'RSA',
    e: 'AQAB',
    n: b64UrlKey,
    alg: 'RSA-OAEP-256',
    ext: true
  }
}

export type ReCrypto = {
  key: CryptoKey
  rawKey: Uint8Array
  baseIV: Uint8Array
}
export async function buildReCrypto(): Promise<ReCrypto> {
  const key = await generateAesKey()
  const rawKey = await exportKey(key)
  const baseIV = generateBaseIV()

  return {
    key,
    rawKey,
    baseIV
  }
}
