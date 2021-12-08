import { writable } from 'svelte/store'
import type { Contact, ContactDetail } from '$types/contact'

import { contacts } from '$services/mocks/state/contacts'

const contactsStore = writable<Record<
  string,
  { profile: Contact; detail: ContactDetail }
> | null>(contacts)

export type ContactStore = typeof contactsStore

export default contactsStore
