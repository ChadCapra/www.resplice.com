/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Attribute, Contact } from '$types/contact'
import { ContactType } from '$types/contact'
import attributes from './attributes'
import { returnPromise } from '../utils'

export const contacts: Contact[] = [
  {
    uuid: 'darth-vader',
    type: ContactType.CONTACT,
    name: 'Darth Vader',
    isFavored: false
    // tags: ['Sith', 'Legends']
  },
  {
    uuid: 'darth-revan',
    type: ContactType.CONTACT,
    name: 'Darth Revan',
    isFavored: true
    // tags: ['Nemesis']
  },
  {
    uuid: 'luke-skywalker',
    type: ContactType.CONTACT,
    name: 'Luke Skywalker',
    isFavored: false
    // tags: ['Friends']
  },
  {
    uuid: 'mace-windu',
    type: ContactType.PENDING,
    name: 'Mace Windu',
    isFavored: false
    // tags: ['Jedi']
  },
  {
    uuid: 'han-solo',
    type: ContactType.CONTACT,
    name: 'Han Solo',
    isFavored: false
    // tags: ['Hero']
  }
]

const contactAttributes: Attribute[] = [
  {
    ...attributes[0],
    contact_uuid: 'bastilla-shan'
  },
  {
    ...attributes[1],
    contact_uuid: 'darth-vader'
  },
  {
    ...attributes[2],
    contact_uuid: 'darth-vader'
  },
  {
    ...attributes[3],
    contact_uuid: 'darth-vader'
  },
  {
    ...attributes[4],
    contact_uuid: 'darth-vader'
  },
  {
    ...attributes[5],
    contact_uuid: 'darth-vader'
  }
]

const contactsApi = {
  getContact: (contactUUID: string) =>
    returnPromise(contacts.find((c) => c.uuid === contactUUID)),
  getAllContacts: (): Promise<Contact[]> => returnPromise(contacts),
  updateContact: (_contactUUID: string, _contact: Contact) =>
    returnPromise(contacts[0]),
  deleteContact: (_contactUUID: string) => {
    return
  },
  getAllAttributes: () => returnPromise(attributes),
  getAttribute: (contactUUID: string) =>
    returnPromise(
      contactAttributes.filter((a) => a.contact_uuid === contactUUID)
    )
}

export default contactsApi
