import type { CountryCode } from 'libphonenumber-js'

export enum AuthStatus {
	EXPIRED = 0,
	PENDING_EMAIL_VERIFICATION = 1,
	PENDING_PHONE_VERIFICATION = 2,
	PENDING_USER_REGISRATION = 3,
	PENDING_ADDITIONAL_AUTHENTICATION = 4,
	AUTHENTICATED = 5,
	UNKNOWN = -1
}
export type AuthPhone = {
	value: string
	countryCode: CountryCode
}
export type Auth = {
	status: AuthStatus
	email: string
	phone: AuthPhone
	rememberMe: boolean
}

export type EmailValue = {
	email: string
}
export type PhoneValue = {
	number: number
	extension?: number
	smsEnabled: boolean
}
