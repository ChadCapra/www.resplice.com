import { writable } from 'svelte/store'
import type { Profile } from '$types/user'

import { profile as mockProfile } from '$services/mocks/state/user'

const profileStore = writable<Profile | null>(mockProfile)

export type ProfileStore = typeof profileStore

export default profileStore
