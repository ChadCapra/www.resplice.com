import { bytesToInt32, int32ToBytes } from '@resplice/utils'
import {
	encrypt,
	decrypt,
	calculateServerIV,
	calculateClientIV,
	combineBufferArrays,
	type ReCrypto
} from '@resplice/utils'
import {
	decode,
	encode,
	type SerializableClientMessage,
	type AuthServerMessage
} from '$common/proto'

export async function deserializeServerMessage(
	bytes: Uint8Array,
	crypto: ReCrypto
): Promise<AuthServerMessage> {
	const counter = bytesToInt32(new Uint8Array([0, 0, ...bytes.slice(0, 2)]))
	const message = bytes.slice(2)
	const iv = calculateServerIV(crypto.baseIV, counter)

	const messageBytes = await decrypt(crypto.key, iv, message)

	return decode(messageBytes) as AuthServerMessage
}

export async function serializeClientMessage(
	message: SerializableClientMessage,
	crypto: ReCrypto
): Promise<Uint8Array> {
	const payloadBytes = encode(message)

	const iv = calculateClientIV(crypto.baseIV, message.counter)

	const encryptedPayload = await encrypt(crypto.key, iv, payloadBytes)

	const counterBytes = int32ToBytes(message.counter).slice(-2)

	return combineBufferArrays(counterBytes, encryptedPayload)
}
