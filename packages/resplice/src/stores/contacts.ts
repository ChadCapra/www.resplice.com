import { writable, derived } from 'svelte/store'
import type {
  Contact,
  Attribute,
  Share,
  PendingContact,
  PendingContactAttribute
} from '$types/contact'

// import { contacts } from '$services/mocks/state/contacts'

type ContactRecord = Map<number, Contact>
const contacts = writable<ContactRecord | null>(null)

type ContactAttributeRecord = Map<number, Attribute>
const contactAttributes = writable<ContactAttributeRecord | null>(null)
const contactAttributesDict = derived(contactAttributes, ($ca, set) => {
  const dict = {}
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
const contactShares = writable<ContactShareRecord | null>(null)

type PendingContactRecord = Map<number, PendingContact>
const pendingContacts = writable<PendingContactRecord | null>(null)

type PendingContactAttributeRecord = Map<number, PendingContactAttribute>
const pendingContactAttributes = writable<PendingContactAttributeRecord | null>(
  null
)
const pendingContactAttributesDict = derived(
  pendingContactAttributes,
  ($ia, set) => {
    const dict = {}
    $ia.forEach((ia) => {
      if (dict[ia.pendingContactId]) {
        dict[ia.pendingContactId].push(ia)
      } else {
        dict[ia.pendingContactId] = [ia]
      }
    })
    set(dict)
  }
)

const contactStores = {
  contacts,
  contactAttributes,
  contactAttributesDict,
  contactShares,
  pendingContacts,
  pendingContactAttributes,
  pendingContactAttributesDict
}

export type ContactStore = typeof contactStores

export default contactStores
