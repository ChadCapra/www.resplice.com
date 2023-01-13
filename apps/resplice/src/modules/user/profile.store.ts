import { writable } from 'svelte/store'
import type { Profile } from '$modules/user/user.types'

import { profile as mockProfile } from '$modules/user/user.mocks'

const profileStore = writable<Profile | null>(mockProfile)

export type ProfileStore = typeof profileStore

export default profileStore
