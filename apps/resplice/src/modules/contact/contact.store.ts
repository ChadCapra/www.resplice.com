import { writable, derived } from 'svelte/store'
import type {
	Contact,
	Attribute,
	Share,
	PendingContact,
	PendingContactAttribute
} from '$modules/contact/contact.types'
import type { Writable } from 'svelte/store'

import {
	contacts as mockContacts,
	contactAttributes as mockContactAttributes,
	contactShares as mockContactShares,
	pendingContacts as mockPendingContacts,
	pendingContactAttributes as mockPendingContactAttributes
} from '$modules/contact/contact.mocks'

type ContactRecord = Map<Contact['id'], Contact>
const contacts = writable<ContactRecord | null>(mockContacts)

type ContactAttributeRecord = Map<Attribute['id'], Attribute>
const contactAttributes = writable<ContactAttributeRecord | null>(mockContactAttributes)

type ContactAttributesRecord = Record<Attribute['contactId'], Attribute[]>
const contactAttributesDict = derived<
	Writable<ContactAttributeRecord | null>,
	ContactAttributesRecord
>(contactAttributes, ($ca, set) => {
	if (!$ca) return

	const dict: ContactAttributesRecord = {}
	$ca.forEach((ca) => {
		if (dict[ca.contactId]) {
			dict[ca.contactId].push(ca)
		} else {
			dict[ca.contactId] = [ca]
		}
	})
	set(dict)
})

type ContactShareRecord = Map<Share['id'], Share>
const contactShares = writable<ContactShareRecord | null>(mockContactShares)

type ContactSharesRecord = Record<Share['contactId'], Share[]>
const contactSharesDict = derived<Writable<ContactShareRecord | null>, ContactSharesRecord>(
	contactShares,
	($cs, set) => {
		if (!$cs) return

		const dict: ContactSharesRecord = {}
		$cs.forEach((cs) => {
			if (dict[cs.contactId]) {
				dict[cs.contactId].push(cs)
			} else {
				dict[cs.contactId] = [cs]
			}
		})
		set(dict)
	}
)

type PendingContactRecord = Map<number, PendingContact>
const pendingContacts = writable<PendingContactRecord | null>(mockPendingContacts)

type PendingContactAttributeRecord = Map<PendingContactAttribute['id'], PendingContactAttribute>
const pendingContactAttributes = writable<PendingContactAttributeRecord | null>(
	mockPendingContactAttributes
)

type PendingContactAttributesRecord = Record<
	PendingContactAttribute['pendingContactId'],
	PendingContactAttribute[]
>
const pendingContactAttributesDict = derived<
	Writable<PendingContactAttributeRecord | null>,
	PendingContactAttributesRecord
>(pendingContactAttributes, ($ia, set) => {
	if (!$ia) return

	const dict: PendingContactAttributesRecord = {}
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
