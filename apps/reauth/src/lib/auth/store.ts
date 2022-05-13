import { writable } from 'svelte/store'
import type { Session } from '$types/session'

type LoginValues = {
  phone: {
    countryCode: string
    value: string
  }
  email: string
}
type Auth = {
  loginValues?: LoginValues
  session: Session | null
}

const authStore = writable<Auth | null>(null)

export type AuthStore = typeof authStore

export default authStore
