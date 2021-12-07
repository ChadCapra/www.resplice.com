import { writable } from 'svelte/store'
import type { User } from '$types/user'

import { user } from '$services/mocks/state/user'

const userStore = writable<User | null>(user)

export type UserStore = typeof userStore

export default userStore
