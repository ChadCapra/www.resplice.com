import { writable } from 'svelte/store'
import type { Session } from '$types/session'

type Auth = {
  loginValues: {
    phone: string[]
    email: string[]
  }
  session: Session
}

const auth = writable<Auth | null>(null)

export default auth
