import { writable } from 'svelte/store'
import type { Contact, ContactDetail } from '$types/contact'

const contactsStore = writable<Record<
  string,
  { profile: Contact; detail: ContactDetail }
> | null>(null)

export type ContactStore = typeof contactsStore

export default contactsStore
