import type { Attribute } from '$types'

const attributes: Attribute[] = [
  {
    uuid: 'mphone',
    contact_uuid: 'darth-vader',
    type: 'phone',
    name: 'Mobile',
    collection: 'Personal',
    value: ['2232620950'],
    sort_order: 1
  },
  {
    uuid: 'pemail',
    contact_uuid: 'darth-vader',
    type: 'email',
    name: 'Email',
    collection: 'Personal',
    value: ['anakin@naboo.com'],
    sort_order: 2
  },
  {
    uuid: 'paddress',
    contact_uuid: 'darth-vader',
    type: 'address',
    name: 'Address',
    collection: 'Personal',
    value: ['154 Amidala Ln', 'Inner City'],
    sort_order: 4
  },
  {
    uuid: 'pemail',
    contact_uuid: 'darth-vader',
    type: 'email',
    name: 'Email',
    collection: 'Work',
    value: ['vader@deathstar.com'],
    sort_order: 3
  }
]

export default attributes
