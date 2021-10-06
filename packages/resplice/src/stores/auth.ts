import { writable } from 'svelte/store'
import type { Session } from '$types/session'

type Auth = {
  loginValues: {
    phone: {
      countryCallingCode: string
      value: string
    }
    email: string
  }
  session: Session
}

const authStore = writable<Auth | null>(null)

export type AuthStore = typeof authStore

export default authStore
