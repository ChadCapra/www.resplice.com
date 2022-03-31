import { writable } from 'svelte/store'
import type { Profile } from '$types/user'

import { user } from '$services/mocks/state/user'

const profileStore = writable<Profile | null>(user)

export type ProfileStore = typeof profileStore

export default profileStore
