import { writable } from 'svelte/store'
import type { Session } from '$types/session'
import type { ReCrypto } from '$services/crypto'

type LoginValues = {
  phone: {
    countryCode: string
    value: string
  }
  email: string
}
type Auth = {
  loginValues?: LoginValues
  session: Session
  crypto: ReCrypto
}

const authStore = writable<Auth | null>(null)

export type AuthStore = typeof authStore

export default authStore
