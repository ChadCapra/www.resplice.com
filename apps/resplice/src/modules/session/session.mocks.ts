import { type Session, SessionStatus } from '$modules/session/session.types'

export const currentSession: Session = {
	id: 1,
	status: SessionStatus.AUTHENTICATED,
	email: {
		email: 'bastilla.shan@jedi.com'
	},
	phone: {
		number: 5555555555,
		extension: undefined,
		smsEnabled: true
	},
	rememberMe: true,
	expiry: 0
}

export const sessions: Session[] = []
