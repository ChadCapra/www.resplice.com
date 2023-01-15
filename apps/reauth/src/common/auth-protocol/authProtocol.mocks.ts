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

class MockAuthProtocol {
	async createSession(_: CreateSessionRequest): Promise<Auth> {
		return mockPromise({ data: pendingEmailAuth })
	}
	async verifyEmail(_: VerifyRequest): Promise<Auth> {
		return mockPromise({ data: pendingPhoneAuth })
	}
	async verifyPhone(_: VerifyRequest): Promise<Auth> {
		return mockPromise({ data: pendingUserRegistrationAuth })
	}
	async createAccount(_: CreateAccountRequest): Promise<Auth> {
		return mockPromise({ data: authenticatedAuth })
	}
}

export default MockAuthProtocol
