import { writable } from 'svelte/store'
import type { Auth } from '$types/auth'
import { auth as mockAuth } from '$services/mocks/state/auth'

const authStore = writable<Auth | null>(mockAuth)

export type AuthStore = typeof authStore

export default authStore
