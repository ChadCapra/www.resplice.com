// Export an empty object to satisfy the isolated modules TS requirement.
export {}

enum Command {
  GENERATE_KEYS = 'GENERATE_KEYS',
  ENCRYPT = 'ENCRYPT',
  DECRYPT = 'DECRYPT'
}
interface GenerateCommand {
  type: Command.GENERATE_KEYS
}
interface EncryptCommand {
  type: Command.ENCRYPT
  derived_key: CryptoKey
  data: any
}
interface DecryptCommand {
  type: Command.DECRYPT
  derived_key: CryptoKey
  data: any
}
type WorkerCommand = GenerateCommand | EncryptCommand | DecryptCommand

// TODO: Figure out how to get type hints in consumers of this worker
interface CryptoWorker extends Worker {
  onmessage: (this: Worker, ev: MessageEvent<WorkerCommand>) => void
}

const ctx: CryptoWorker = self as any

async function generateKeys() {
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
    ['sign']
  )
  const aesJwk = await crypto.subtle.exportKey('jwk', aesKey)
  const hmacJwk = await crypto.subtle.exportKey('jwk', hmacKey)
  ctx.postMessage({
    type: Command.GENERATE_KEYS,
    data: {
      jwk: { hmac: hmacJwk.k, aes: aesJwk.k },
      keys: { aes: aesKey, hmac: hmacKey }
    }
  })
}

async function encrypt(key: CryptoKey, data: ArrayBuffer) {
  if (!data) ctx.postMessage({ type: Command.ENCRYPT, data: '' })
  if (!key) throw new Error('Key must exist to encrypt data')
  // The IV should change everytime encryption happens?
  const encryptedData = await crypto.subtle.encrypt(
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
  return ctx.postMessage({ type: Command.ENCRYPT, data: encryptedData })
}

async function decrypt(key: CryptoKey, data: ArrayBuffer) {
  if (!data) ctx.postMessage({ type: Command.DECRYPT, data: '' })
  const decryptedData = await crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: new ArrayBuffer(12) // The initialization vector you used to encrypt
      // additionalData: ArrayBuffer, // The additionalData you used to encrypt (if any)
    },
    key,
    data
  )
  return ctx.postMessage({ type: Command.DECRYPT, data: decryptedData })
}

ctx.onmessage = ({ data: cmd }) => {
  switch (cmd.type) {
    case Command.GENERATE_KEYS:
      generateKeys()
      break
    case Command.ENCRYPT:
      encrypt(cmd.derived_key, cmd.data)
      break
    case Command.DECRYPT:
      decrypt(cmd.derived_key, cmd.data)
      break
    default:
      throw new Error('Invalid command for Crypto worker')
  }
}
