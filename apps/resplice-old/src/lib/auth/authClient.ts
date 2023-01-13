import * as reproto from '@resplice/proto'
import { encodePayload } from '$services/proto'
import {
  buildReCrypto,
  importPublicKey,
  publicKeyEncrypt,
  type ReCrypto
} from '$services/crypto'
import {
  deserializeServerMessage,
  serializeClientMessage
} from '$services/serde'
import MockAuthClient from '$services/mocks/authClient'

import type {
  Create as CreateSession,
  VerifyEmail,
  VerifyPhone
} from '@resplice/proto/dist/auth/request/session'
import type { Create as CreateAccount } from '@resplice/proto/dist/auth/request/account'
import type { Api } from '$services/api/http'
import type { DB } from '$services/db'
import type { Session } from '$types/session'
import type { PhoneValue, EmailValue } from '$types/attribute'

const ClientMessageType = reproto.client_request.ClientRequestType

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

export class AuthClient {
  #api: Api
  #cache: DB
  #crypto: ReCrypto | null

  constructor(api: Api, cache: DB) {
    this.#api = api
    this.#cache = cache
    this.#crypto = null
  }

  async #fetchServerPublicKey() {
    const key: ArrayBuffer = await this.#api.get({ endpoint: '/pub-key' })
    return importPublicKey(key)
  }

  #checkAesKey() {
    if (!this.#crypto) throw new Error('Invalid AES Key')
  }

  async #updateAuthCache(session: Session): Promise<void> {
    const auth = { session, crypto: this.#crypto }
    await this.#cache.upsert('auth', auth, 0)
  }

  async submitRecaptchaToken(token: string): Promise<boolean> {
    return this.#api.post({
      endpoint: '/session/recaptcha-token',
      data: token,
      useBinary: false
    })
  }

  async createSession(
    params: CreateSessionRequest
  ): Promise<{ session: Session; crypto: ReCrypto }> {
    const publicKey = await this.#fetchServerPublicKey()
    this.#crypto = await buildReCrypto()

    const message = {
      type: ClientMessageType.SESSION_CREATE,
      data: {
        email: params.email.email,
        phone: { ...params.phone, extension: params.phone.extension || 0 },
        rememberMe: params.rememberMe,
        ivBase: this.#crypto.baseIV,
        aesKey: this.#crypto.rawKey
      } as CreateSession
    }

    const msgBytes = encodePayload(message)

    const encryptedMessage = await publicKeyEncrypt(publicKey, msgBytes)

    const resBuffer: ArrayBuffer = await this.#api.post({
      endpoint: '/init',
      data: encryptedMessage
    })

    // Add to events only after successful create session to prevent counter from increasing on failures
    await this.#cache.insert('events', message)

    const { currentSession }: { currentSession: Session } =
      await deserializeServerMessage(new Uint8Array(resBuffer), this.#crypto)

    await this.#updateAuthCache(currentSession)

    return { session: currentSession, crypto: this.#crypto }
  }

  async verifyEmail(params: VerifyRequest): Promise<Session> {
    this.#checkAesKey()

    const message = {
      type: ClientMessageType.SESSION_VERIFY_EMAIL,
      data: {
        verificationToken: params.verificationToken
      } as VerifyEmail
    }

    const [counter] = await this.#cache.insert('events', message)

    const clientMessageBytes = await serializeClientMessage(
      { ...message, counter },
      this.#crypto
    )

    const resBuffer: ArrayBuffer = await this.#api.post({
      endpoint: '/do',
      data: clientMessageBytes
    })

    const { currentSession }: { currentSession: Session } =
      await deserializeServerMessage(new Uint8Array(resBuffer), this.#crypto)

    await this.#updateAuthCache(currentSession)

    return currentSession
  }

  async verifyPhone(params: VerifyRequest): Promise<Session> {
    this.#checkAesKey()

    const message = {
      type: ClientMessageType.SESSION_VERIFY_PHONE,
      data: {
        verificationToken: params.verificationToken
      } as VerifyPhone
    }

    const [counter] = await this.#cache.insert('events', message)

    const clientMessageBytes = await serializeClientMessage(
      { ...message, counter },
      this.#crypto
    )

    const resBuffer: ArrayBuffer = await this.#api.post({
      endpoint: '/do',
      data: clientMessageBytes
    })

    const { currentSession }: { currentSession: Session } =
      await deserializeServerMessage(new Uint8Array(resBuffer), this.#crypto)

    await this.#updateAuthCache(currentSession)

    return currentSession
  }

  async createAccount(params: CreateAccountRequest): Promise<Session> {
    this.#checkAesKey()

    const message = {
      type: ClientMessageType.ACCOUNT_CREATE,
      data: {
        name: params.name,
        handle: params.handle,
        avatar: new Uint8Array(await params.avatar.arrayBuffer())
      } as CreateAccount
    }

    const [counter] = await this.#cache.insert('events', message)

    const clientMessageBytes = await serializeClientMessage(
      { ...message, counter },
      this.#crypto
    )

    const resBuffer: ArrayBuffer = await this.#api.post({
      endpoint: '/do',
      data: clientMessageBytes
    })

    const { currentSession }: { currentSession: Session } =
      await deserializeServerMessage(new Uint8Array(resBuffer), this.#crypto)

    await this.#updateAuthCache(currentSession)

    return currentSession
  }
}

export const contextKey = 'AuthClient'

function authClientFactory(api: Api, cache: DB, useMock = false) {
  if (useMock) return new MockAuthClient()

  return new AuthClient(api, cache)
}

export default authClientFactory