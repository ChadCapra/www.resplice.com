import {
	buildReCrypto,
	importPublicKey,
	publicKeyEncrypt,
	type ReCrypto,
	type Fetch
} from '@resplice/utils'
import {
	encodeMessage,
	type ClientMessage,
	ClientMessageType,
	ServerMessageType
} from '$common/proto'
import { deserializeServerMessage, serializeClientMessage } from '$common/serde'
import type { DB } from '$common/db'
import type { Auth, PhoneValue, EmailValue } from '$common/common.types'

type CreateSessionRequest = {
	phone: PhoneValue
	email: EmailValue
	rememberMe: boolean
}

type CreateAccountRequest = {
	name: string
	avatar: Blob | null
	handle: string
}

type VerifyRequest = {
	verificationToken: number
}

export class AuthProtocol {
	#fetch: Fetch
	#cache: DB
	#crypto: ReCrypto | null

	constructor(fetch: Fetch, cache: DB) {
		this.#fetch = fetch
		this.#cache = cache
		this.#crypto = null
	}

	async #fetchServerPublicKey() {
		const rawKey = await this.#fetch.get<ArrayBuffer>({ endpoint: '/pub-key' })
		return importPublicKey(rawKey)
	}

	async #updateAuthCache(auth: Auth): Promise<void> {
		await this.#cache.upsert('auth', { auth }, 0)
	}

	async submitRecaptchaToken(token: string): Promise<boolean> {
		return this.#fetch.post<boolean>({
			endpoint: '/session/recaptcha-token',
			data: token,
			useBinary: false
		})
	}

	async createSession(params: CreateSessionRequest): Promise<Auth> {
		const publicKey = await this.#fetchServerPublicKey()
		this.#crypto = await buildReCrypto()

		await this.#cache.upsert('auth', { crypto: this.#crypto }, 0)

		const message: ClientMessage = {
			type: ClientMessageType.SESSION_CREATE,
			data: {
				email: params.email.email,
				phone: { ...params.phone, extension: params.phone.extension || 0 },
				rememberMe: params.rememberMe,
				ivBase: this.#crypto.baseIV,
				aesKey: this.#crypto.rawKey
			}
		}

		const msgBytes = encodeMessage(message)

		const encryptedMessage = await publicKeyEncrypt(publicKey, msgBytes)

		const resBuffer = await this.#fetch.post<ArrayBuffer>({
			endpoint: '/init',
			data: encryptedMessage
		})

		// Add to events only after successful create session to prevent counter from increasing on failures
		await this.#cache.insert('events', message)

		const serverMessage = await deserializeServerMessage(new Uint8Array(resBuffer), this.#crypto)

		// TODO: Get new auth details object from proto, cast to Auth for now
		if (serverMessage.type !== ServerMessageType.SESSION_DETAILS) {
			throw new Error('Invalid server message')
		}

		const auth = serverMessage.data as unknown as Auth

		await this.#updateAuthCache(auth)

		return auth
	}

	async verifyEmail(params: VerifyRequest): Promise<Auth> {
		if (!this.#crypto) throw new Error('Invalid AES Key')

		const message: ClientMessage = {
			type: ClientMessageType.SESSION_VERIFY_EMAIL,
			data: {
				verificationToken: params.verificationToken
			}
		}

		const [counter] = await this.#cache.insert('events', message)

		const clientMessageBytes = await serializeClientMessage({ ...message, counter }, this.#crypto)

		const resBuffer = await this.#fetch.post<ArrayBuffer>({
			endpoint: '/do',
			data: clientMessageBytes
		})

		const serverMessage = await deserializeServerMessage(new Uint8Array(resBuffer), this.#crypto)

		// TODO: Get new auth details object from proto, cast to Auth for now
		if (serverMessage.type !== ServerMessageType.SESSION_DETAILS) {
			throw new Error('Invalid server message')
		}

		const auth = serverMessage.data as unknown as Auth

		await this.#updateAuthCache(auth)

		return auth
	}

	async verifyPhone(params: VerifyRequest): Promise<Auth> {
		if (!this.#crypto) throw new Error('Invalid AES Key')

		const message: ClientMessage = {
			type: ClientMessageType.SESSION_VERIFY_PHONE,
			data: {
				verificationToken: params.verificationToken
			}
		}

		const [counter] = await this.#cache.insert('events', message)

		const clientMessageBytes = await serializeClientMessage({ ...message, counter }, this.#crypto)

		const resBuffer = await this.#fetch.post<ArrayBuffer>({
			endpoint: '/do',
			data: clientMessageBytes
		})

		const serverMessage = await deserializeServerMessage(new Uint8Array(resBuffer), this.#crypto)

		// TODO: Get new auth details object from proto, cast to Auth for now
		if (serverMessage.type !== ServerMessageType.SESSION_DETAILS) {
			throw new Error('Invalid server message')
		}

		const auth = serverMessage.data as unknown as Auth

		await this.#updateAuthCache(auth)

		return auth
	}

	async createAccount(params: CreateAccountRequest): Promise<Auth> {
		if (!this.#crypto) throw new Error('Invalid AES Key')

		const message: ClientMessage = {
			type: ClientMessageType.ACCOUNT_CREATE,
			data: {
				name: params.name,
				handle: params.handle,
				avatar: params.avatar ? new Uint8Array(await params.avatar.arrayBuffer()) : new Uint8Array()
			}
		}

		const [counter] = await this.#cache.insert('events', message)

		const clientMessageBytes = await serializeClientMessage({ ...message, counter }, this.#crypto)

		const resBuffer = await this.#fetch.post<ArrayBuffer>({
			endpoint: '/do',
			data: clientMessageBytes
		})

		const serverMessage = await deserializeServerMessage(new Uint8Array(resBuffer), this.#crypto)

		// TODO: Get new auth details object from proto, cast to Auth for now
		if (serverMessage.type !== ServerMessageType.SESSION_DETAILS) {
			throw new Error('Invalid server message')
		}

		const auth = serverMessage.data as unknown as Auth

		await this.#updateAuthCache(auth)

		return auth
	}
}

export const contextKey = 'AuthProtocol'

export default AuthProtocol
