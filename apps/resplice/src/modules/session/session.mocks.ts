import type { Session, SessionItem } from '$modules/session/session.types'

export const currentSession: Session = {
	id: 1,
	userId: 1,
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

export const sessions: SessionItem[] = [
	{
		id: 2,
		device: 'iPhone XR',
		lastLocation: 'Minneapolis, MN'
	}
]
