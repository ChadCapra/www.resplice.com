import type { EmailValue, PhoneValue } from '$modules/attribute/attribute.types'

export type Session = {
	id: number
	userId: number
	email: EmailValue
	phone: PhoneValue
	rememberMe: boolean
	expiry: number
}

export type SessionItem = {
	id: number
	device: string
	lastLocation: string
}

export type SessionState = {
	currentSession: Session | null
	sessions: SessionItem[]
}
