import {
  encrypt,
  decrypt,
  calculateServerIV,
  calculateClientIV,
  type ReCrypto
} from '$services/crypto'
import {
  encodePayload,
  decodePayload,
  decodeServerMessageWrapper,
  encodeClientMessageWrapper
} from '$services/proto'
import type { ClientMessage } from '$services/commuters/connCommuter'

export async function deserializeServerMessage(
  bytes: Uint8Array,
  crypto: ReCrypto
) {
  const serverWrapper = decodeServerMessageWrapper(bytes)
  const iv = calculateServerIV(crypto.baseIV, serverWrapper.messageId)

  const serverMessageBytes = await decrypt(
    crypto.key,
    iv,
    serverWrapper.encryptedPayload
  )

  return decodePayload({
    type: serverWrapper.messageType,
    data: serverMessageBytes
  })
}

export async function serializeClientMessage(
  message: ClientMessage,
  crypto: ReCrypto
) {
  const payloadBytes = encodePayload(message)

  const iv = calculateClientIV(crypto.baseIV, message.counter)

  const encryptedPayload = await encrypt(crypto.key, iv, payloadBytes)

  return encodeClientMessageWrapper({
    requestType: message.type,
    counter: message.counter,
    encryptedPayload
  })
}
