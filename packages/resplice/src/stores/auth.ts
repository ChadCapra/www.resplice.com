import { writable } from 'svelte/store'
import type { Session } from '$types/session'

type LoginValues = {
  phone: {
    countryCallingCode: string
    value: string
  }
  email: string
}
type Auth = {
  loginValues?: LoginValues
  session: Session
  public_key?: Record<string, string>
  private_key?: Record<string, string>
}

const authStore = writable<Auth | null>(null)

export type AuthStore = typeof authStore

export default authStore
