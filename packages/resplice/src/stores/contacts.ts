import { writable, derived } from 'svelte/store'
import type {
  Contact,
  Attribute,
  Invite,
  InviteAttribute
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

type InviteRecord = Map<number, Invite>
const invites = writable<InviteRecord | null>(null)

type InviteAttributeRecord = Map<number, InviteAttribute>
const inviteAttributes = writable<InviteAttributeRecord | null>(null)
const inviteAttributesDict = derived(inviteAttributes, ($ia, set) => {
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
  invites,
  inviteAttributes,
  inviteAttributesDict
}

export type ContactStore = typeof contactStores

export default contactStores
