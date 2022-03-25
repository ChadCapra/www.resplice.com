import { writable, derived } from 'svelte/store'
import type {
  Contact,
  Attribute,
  PendingContact,
  PendingAttribute
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

type PendingContactRecord = Map<number, PendingContact>
const pendingContacts = writable<PendingContactRecord | null>(null)

type PendingContactAttributeRecord = Map<number, PendingAttribute>
const pendingContactAttributes = writable<PendingContactAttributeRecord | null>(
  null
)
const pendingContactAttributesDict = derived(
  pendingContactAttributes,
  ($pca, set) => {
    const dict = {}
    $pca.forEach((pca) => {
      if (dict[pca.pendingContactId]) {
        dict[pca.pendingContactId].push(pca)
      } else {
        dict[pca.pendingContactId] = [pca]
      }
    })
    set(dict)
  }
)

// Export Stores
const contactStores = {
  contacts,
  contactAttributes,
  contactAttributesDict,
  pendingContacts,
  pendingContactAttributes,
  pendingContactAttributesDict
}

export type ContactStore = typeof contactStores

export default contactStores
