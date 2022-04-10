import { writable, derived } from 'svelte/store'
import type {
  Contact,
  Attribute,
  Share,
  PendingContact,
  PendingContactAttribute
} from '$types/contact'
import type { Writable } from 'svelte/store'

import {
  contacts as mockContacts,
  contactAttributes as mockContactAttributes,
  contactShares as mockContactShares,
  pendingContacts as mockPendingContacts,
  pendingContactAttributes as mockPendingContactAttributes
} from '$services/mocks/state/contacts'

type ContactRecord = Map<number, Contact>
const contacts = writable<ContactRecord | null>(mockContacts)

type ContactAttributeRecord = Map<number, Attribute>
const contactAttributes = writable<ContactAttributeRecord | null>(
  mockContactAttributes
)
const contactAttributesDict = derived<
  Writable<ContactAttributeRecord | null>,
  Record<number, Attribute[]>
>(contactAttributes, ($ca, set) => {
  const dict: Record<number, Attribute[]> = {}
  $ca.forEach((ca) => {
    if (dict[ca.contactId]) {
      dict[ca.contactId].push(ca)
    } else {
      dict[ca.contactId] = [ca]
    }
  })
  set(dict)
})

type ContactShareRecord = Map<number, Share>
const contactShares = writable<ContactShareRecord | null>(mockContactShares)
const contactSharesDict = derived<
  Writable<ContactShareRecord | null>,
  Record<number, Share[]>
>(contactShares, ($cs, set) => {
  const dict: Record<number, Share[]> = {}
  $cs.forEach((cs) => {
    if (dict[cs.contactId]) {
      dict[cs.contactId].push(cs)
    } else {
      dict[cs.contactId] = [cs]
    }
  })
  set(dict)
})

type PendingContactRecord = Map<number, PendingContact>
const pendingContacts = writable<PendingContactRecord | null>(
  mockPendingContacts
)

type PendingContactAttributeRecord = Map<number, PendingContactAttribute>
const pendingContactAttributes = writable<PendingContactAttributeRecord | null>(
  mockPendingContactAttributes
)
const pendingContactAttributesDict = derived<
  Writable<PendingContactAttributeRecord | null>,
  Record<number, PendingContactAttribute[]>
>(pendingContactAttributes, ($ia, set) => {
  const dict = {}
  $ia.forEach((ia) => {
    if (dict[ia.pendingContactId]) {
      dict[ia.pendingContactId].push(ia)
    } else {
      dict[ia.pendingContactId] = [ia]
    }
  })
  set(dict)
})

const contactStores = {
  contacts,
  contactAttributes,
  contactAttributesDict,
  contactShares,
  contactSharesDict,
  pendingContacts,
  pendingContactAttributes,
  pendingContactAttributesDict
}

export type ContactStore = typeof contactStores

export default contactStores
