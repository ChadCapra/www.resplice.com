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
  const algorithm = {
    name: 'ECDH',
    namedCurve: 'P-256'
  }
  const keys = await crypto.subtle.generateKey(algorithm, true, [
    'deriveKey',
    'deriveBits'
  ])
  const publicKey = await crypto.subtle.exportKey('jwk', keys.publicKey)
  const privateKey = await crypto.subtle.exportKey('jwk', keys.privateKey)
  const derivedKey = await crypto.subtle.deriveKey(
    { name: 'ECDH', public: keys.publicKey },
    keys.privateKey,
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt', 'decrypt']
  )
  ctx.postMessage({
    type: Command.GENERATE_KEYS,
    data: { jwk: { publicKey, privateKey }, keys, derivedKey }
  })
}

async function encrypt(derivedKey: CryptoKey, data: unknown) {
  if (!data) ctx.postMessage('')
  if (!derivedKey) throw new Error('Key must exist to encrypt data')
  // The IV should change everytime encryption happens?
  const algorithm = {
    name: 'AES-GCM',
    iv: new TextEncoder().encode('IV')
  }
  const encodedData = new TextEncoder().encode(JSON.stringify(data))
  const encryptedData = await crypto.subtle.encrypt(
    algorithm,
    derivedKey,
    encodedData
  )
  return ctx.postMessage({ type: Command.ENCRYPT, data: encryptedData })
}

async function decrypt(derivedKey: CryptoKey, data: unknown) {
  if (!data) ctx.postMessage('')
  return ctx.postMessage('')
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
      throw new Error('Invalid command for worker')
  }
}
