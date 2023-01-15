import { userEmail, userPhone } from '$modules/user/user.mocks'
import { type Auth, AuthStatus } from '$common/common.types'

const baseAuth: Auth = {
	status: AuthStatus.UNKNOWN,
	email: userEmail,
	phone: userPhone,
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
