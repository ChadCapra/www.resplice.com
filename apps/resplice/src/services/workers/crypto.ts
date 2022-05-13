import * as crypto from '$services/crypto'

export enum Command {
  GENERATE_AES_KEY = 'GENERATE_AES_KEY',
  ENCRYPT = 'ENCRYPT',
  DECRYPT = 'DECRYPT'
}
interface GenerateCommand {
  type: Command.GENERATE_AES_KEY
}
interface EncryptCommand {
  type: Command.ENCRYPT
  key: CryptoKey
  iv: Uint8Array
  data: Uint8Array
}
interface DecryptCommand {
  type: Command.DECRYPT
  key: CryptoKey
  iv: Uint8Array
  data: Uint8Array
}
type CryptoCommand = GenerateCommand | EncryptCommand | DecryptCommand

enum CryptoMessageType {
  GENERATED_AES_KEY = 'GENERATED_AES_KEY',
  ENCRYPTED = 'ENCRYPTED',
  DECRYPTED = 'DECRYPTED'
}
interface GeneratedMessage {
  type: CryptoMessageType.GENERATED_AES_KEY
  aesKey: CryptoKey
}
interface EncryptedMessage {
  type: CryptoMessageType.ENCRYPTED
  data: Uint8Array
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

async function generateKey() {
  const aesKey = await crypto.generateAesKey()
  ctx.postMessage({
    type: CryptoMessageType.GENERATED_AES_KEY,
    aesKey
  })
}

async function encrypt(key: CryptoKey, iv: Uint8Array, data: Uint8Array) {
  if (!key) throw new ReferenceError('Key must exist to encrypt data')

  const encryptedData = await crypto.encrypt(key, iv, data)
  return ctx.postMessage({
    type: CryptoMessageType.ENCRYPTED,
    data: encryptedData
  })
}

async function decrypt(key: CryptoKey, data: Uint8Array, iv: Uint8Array) {
  if (!key) throw new ReferenceError('Key must exist to decrypt data')

  const decryptedData = data ? await crypto.decrypt(key, data, iv) : ''
  return ctx.postMessage({
    type: CryptoMessageType.DECRYPTED,
    data: decryptedData
  })
}

ctx.onmessage = ({ data: cmd }) => {
  switch (cmd.type) {
    case Command.GENERATE_AES_KEY:
      generateKey()
      break
    case Command.ENCRYPT:
      if (!cmd.data) throw new Error('Data cannot be null')
      encrypt(cmd.key, cmd.iv, cmd.data)
      break
    case Command.DECRYPT:
      if (!cmd.data || cmd.iv) throw new Error('Data cannot be null')
      decrypt(cmd.key, cmd.data, cmd.iv)
      break
    default:
      throw new Error('Invalid command for Crypto worker')
  }
}
