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

export function importPublicKey(rawKey: Uint8Array) {
  return crypto.subtle.importKey('raw', rawKey, 'RSA-OAEP', false, ['encrypt'])
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
  console.log(cipher)
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
  const newBufArr = new Uint8Array(newBuf)
  newBufArr.set(arr1)
  newBufArr.set(arr2, arr1.byteLength)
  return newBufArr
}

export class ReCrypto {
  key: CryptoKey
  rawKey: Uint8Array
  baseIV: Uint8Array
  #counter: number

  constructor(
    key: CryptoKey,
    rawKey: Uint8Array,
    baseIV: Uint8Array,
    counter?: number
  ) {
    this.key = key
    this.rawKey = rawKey
    this.baseIV = baseIV
    this.#counter = counter || 0
  }

  static async generateAesKey(): Promise<ReCrypto> {
    // TODO: Cache this in IndexedDB (not localStorage) to support
    // page refreshing during auth
    const key = await generateAesKey()
    const rawKey = await exportKey(key)
    const baseIV = generateBaseIV()
    return new ReCrypto(key, rawKey, baseIV)
  }

  get counter() {
    return this.#counter++
  }
}

// const baseIV = crypto.getRandomValues(new Uint8Array(8))

// function getInt64Bytes(x) {
//   let y= Math.floor(x/2**32);
//   return [y,(y<<8),(y<<16),(y<<24), x,(x<<8),(x<<16),(x<<24)].map(z=> z>>>24)
// }

// function intFromBytes(byteArr) {
//     return byteArr.reduce((a,c,i)=> a+c*2**(56-i*8),0)
// }

// // TEST

// let n = 40*2**40 + 245*2**32 + 194*2**24 + 143*2**16 + 92*2**8 + 40;
// let b = getInt64Bytes(n);
// let i = intFromBytes(b);

// console.log(`number      : ${n}`);
// console.log(`int to bytes: [${b}]`);
// console.log(`bytes to int: ${i}`);
