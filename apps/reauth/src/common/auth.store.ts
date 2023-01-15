import { writable } from 'svelte/store'
import { AuthStatus, type Auth } from '$common/common.types'

const initialAuth: Auth = {
	status: AuthStatus.UNKNOWN,
	email: '',
	phone: '',
	rememberMe: false
}

const authStore = writable<Auth>(initialAuth)

export type AuthStore = typeof authStore

export default authStore
