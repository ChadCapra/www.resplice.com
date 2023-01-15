import { mockPromise } from '@resplice/utils'
import {
	pendingEmailAuth,
	pendingPhoneAuth,
	pendingUserRegistrationAuth,
	authenticatedAuth
} from '$common/mocks'
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

// async function getMockPublicKey(): Promise<ArrayBuffer> {
// 	const keyPair = await crypto.subtle.generateKey(
// 		{
// 			name: 'RSA-OAEP',
// 			modulusLength: 2048,
// 			publicExponent: new Uint8Array([1, 0, 1]),
// 			hash: 'SHA-256'
// 		},
// 		true,
// 		['encrypt']
// 	)
// 	return crypto.subtle.exportKey('raw', keyPair.publicKey)
// }

class MockAuthProtocol {
	createSession(_: CreateSessionRequest): Promise<Auth> {
		return mockPromise({ data: pendingEmailAuth })
	}
	verifyEmail(_: VerifyRequest): Promise<Auth> {
		return mockPromise({ data: pendingPhoneAuth })
	}
	verifyPhone(_: VerifyRequest): Promise<Auth> {
		return mockPromise({ data: pendingUserRegistrationAuth })
	}
	createAccount(_: CreateAccountRequest): Promise<Auth> {
		return mockPromise({ data: authenticatedAuth })
	}
}

export default MockAuthProtocol
