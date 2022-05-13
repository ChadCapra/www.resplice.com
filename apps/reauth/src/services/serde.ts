import type * as reproto from '@resplice/proto'
import {
  ReCrypto,
  encrypt,
  decrypt,
  calculateServerIV,
  calculateClientIV
} from '$services/crypto'
import {
  encode,
  decode,
  decodeServerMessageWrapper,
  encodeClientMessageWrapper
} from '$services/proto'

type ClientMessage = {
  type: reproto.client_request.ClientRequestType
  data: any
}

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

  return decode({
    type: serverWrapper.messageType,
    data: serverMessageBytes
  })
}

export async function serializeClientMessage(
  message: ClientMessage,
  crypto: ReCrypto
) {
  const messageBytes = encode(message)

  const counter = crypto.counter
  const iv = calculateClientIV(crypto.baseIV, counter)

  const encryptedPayload = await encrypt(crypto.key, iv, messageBytes)

  return encodeClientMessageWrapper({
    requestType: message.type,
    requestId: counter,
    encryptedPayload
  })
}
