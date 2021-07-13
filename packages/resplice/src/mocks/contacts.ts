/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Attribute, Contact } from '$types'
import attributes from './attributes'
import { returnPromise } from './utils'

export const contacts: Contact[] = [
  {
    uuid: 'darth-vader',
    name: 'Darth Vader',
    tags: ['Sith', 'Legends']
  },
  {
    uuid: 'darth-revan',
    name: 'Darth Revan',
    tags: ['Nemesis']
  },
  {
    uuid: 'luke-skywalker',
    name: 'Luke Skywalker',
    tags: ['Friends']
  },
  {
    uuid: 'mace-windu',
    name: 'Mace Windu',
    tags: ['Jedi']
  },
  {
    uuid: 'han-solo',
    name: 'Han Solo',
    tags: ['Hero']
  }
]

const contactsApi = {
  getContact: (contactUUID: string): Promise<Contact[]> =>
    returnPromise(contacts.find((c) => c.uuid === contactUUID)),
  getAllContacts: (): Promise<Contact[]> => returnPromise(contacts),
  updateContact: (_contactUUID: string, _contact: Contact): Promise<Contact> =>
    returnPromise(contacts[0]),
  deleteContact: (_contactUUID: string): void => {
    return
  },
  getAllAttributes: (): Promise<Attribute[]> => returnPromise(attributes),
  getAttribute: (contactUUID: string): Promise<Attribute[]> =>
    returnPromise(attributes.filter((a) => a.contact_uuid === contactUUID))
}

export default contactsApi
