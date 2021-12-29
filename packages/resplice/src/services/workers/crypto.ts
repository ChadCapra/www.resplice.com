import * as crypto from '$services/crypto'

export enum Command {
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
  data: ArrayBuffer
}
interface DecryptCommand {
  type: Command.DECRYPT
  derived_key: CryptoKey
  data: ArrayBuffer
  iv: Uint8Array
}
type CryptoCommand = GenerateCommand | EncryptCommand | DecryptCommand

enum CryptoMessageType {
  GENERATED = 'GENERATED',
  ENCRYPTED = 'ENCRYPTED',
  DECRYPTED = 'DECRYPTED'
}
interface GeneratedMessage {
  type: CryptoMessageType.GENERATED
  keys: {
    jwk: { aes: string; hmac: string }
    keys: { aes: CryptoKey; hmac: CryptoKey }
  }
}
interface EncryptedMessage {
  type: CryptoMessageType.ENCRYPTED
  data: ArrayBuffer
}
interface DecryptedMessage {
  type: CryptoMessageType.DECRYPTED
  data: unknown
}
type CryptoMessage = GeneratedMessage | EncryptedMessage | DecryptedMessage

// TODO: Figure out how to get type hints in consumers of this worker
interface CryptoWorker extends Worker {
  onmessage: (this: Worker, ev: MessageEvent<CryptoCommand>) => void
  postMessage: {
    (message: CryptoMessage, transfer: Transferable[]): void
    (message: CryptoMessage, options?: StructuredSerializeOptions): void
  }
}

const ctx: CryptoWorker = self as any

async function generateKeys() {
  const keys = await crypto.generateKeys()
  ctx.postMessage({
    type: CryptoMessageType.GENERATED,
    keys
  })
}

async function encrypt(key: CryptoKey, data: ArrayBuffer) {
  if (!key) throw new ReferenceError('Key must exist to encrypt data')

  const encryptedData = data
    ? await crypto.encrypt(key, data)
    : new ArrayBuffer(0)
  return ctx.postMessage({
    type: CryptoMessageType.ENCRYPTED,
    data: encryptedData
  })
}

async function decrypt(key: CryptoKey, data: ArrayBuffer, iv: Uint8Array) {
  if (!key) throw new ReferenceError('Key must exist to decrypt data')

  const decryptedData = data ? await crypto.decrypt(key, data, iv) : ''
  return ctx.postMessage({
    type: CryptoMessageType.DECRYPTED,
    data: decryptedData
  })
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
      decrypt(cmd.derived_key, cmd.data, cmd.iv)
      break
    default:
      throw new Error('Invalid command for Crypto worker')
  }
}
