import { writable } from 'svelte/store'
import type { Auth } from '$common/common.types'

const authStore = writable<Auth | null>(null)

export type AuthStore = typeof authStore

export default authStore
