export async function generateKeys() {
  // Public Private Key generation
  // const keys = await crypto.subtle.generateKey(
  //   {
  //     name: 'ECDH',
  //     namedCurve: 'P-256'
  //   },
  //   true,
  //   ['deriveKey', 'deriveBits']
  // )
  // const derivedKey = await crypto.subtle.deriveKey(
  //   { name: 'ECDH', public: keys.publicKey },
  //   keys.privateKey,
  //   { name: 'AES-GCM', length: 256 },
  //   true,
  //   ['encrypt', 'decrypt']
  // )
  // TODO: 128 or 256
  const aesKey = await crypto.subtle.generateKey(
    {
      name: 'AES-GCM',
      length: 256
    },
    true,
    ['encrypt', 'decrypt']
  )
  const hmacKey = await crypto.subtle.generateKey(
    {
      name: 'HMAC',
      hash: 'SHA-256'
    },
    true,
    ['sign', 'verify']
  )
  const aesJwk = await crypto.subtle.exportKey('jwk', aesKey)
  const hmacJwk = await crypto.subtle.exportKey('jwk', hmacKey)
  return {
    jwk: { aes: aesJwk.k, hmac: hmacJwk.k },
    keys: { aes: aesKey, hmac: hmacKey }
  }
}

export async function encrypt(key: CryptoKey, data: ArrayBuffer) {
  // The IV should change everytime encryption happens
  const encryptedData: Uint8Array = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      // Recommended to use 12 bytes length
      iv: crypto.getRandomValues(new Uint8Array(12))
      // Additional authentication data (optional)
      // additionalData: ArrayBuffer,
    },
    key,
    data
  )
  return encryptedData
}

export async function decrypt(key: CryptoKey, data: ArrayBuffer) {
  const decryptedData: Uint8Array = await crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: crypto.getRandomValues(new Uint8Array(12)) // The initialization vector you used to encrypt
      // additionalData: ArrayBuffer, // The additionalData you used to encrypt (if any)
    },
    key,
    data
  )
  return decryptedData
}

export function sign(key: CryptoKey, data: ArrayBuffer) {
  return crypto.subtle.sign('HMAC', key, data)
}

export function verify(
  key: CryptoKey,
  signature: ArrayBuffer,
  data: ArrayBuffer
) {
  return crypto.subtle.verify('HMAC', key, signature, data)
}
