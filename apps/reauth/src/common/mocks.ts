import { type Auth, AuthStatus, type AuthPhone } from '$common/common.types'

export const authPhone: AuthPhone = {
	value: '(555) 555-5555',
	countryCode: 'US'
}
export const authEmail = 'bastilla.shan@jedi.com'

export const baseAuth: Auth = {
	status: AuthStatus.UNKNOWN,
	email: authEmail,
	phone: authPhone,
	rememberMe: false
}

export const pendingEmailAuth: Auth = {
	...baseAuth,
	status: AuthStatus.PENDING_EMAIL_VERIFICATION
}

export const pendingPhoneAuth: Auth = {
	...baseAuth,
	status: AuthStatus.PENDING_PHONE_VERIFICATION
}

export const pendingUserRegistrationAuth: Auth = {
	...baseAuth,
	status: AuthStatus.PENDING_USER_REGISRATION
}

export const pendingAdditionalAuthenticationAuth: Auth = {
	...baseAuth,
	status: AuthStatus.PENDING_ADDITIONAL_AUTHENTICATION
}

export const authenticatedAuth: Auth = {
	...baseAuth,
	status: AuthStatus.AUTHENTICATED
}
