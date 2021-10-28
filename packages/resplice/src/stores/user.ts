import { writable } from 'svelte/store'
import type { User } from '$types/user'

const userStore = writable<User | null>(null)

export type UserStore = typeof userStore

export default userStore
