import type { Attribute } from '$types/index.type'
const attributes: Attribute[] = [
  {
    uuid: 'mphone',
    contact_uuid: 'darth-vader',
    type: 'phone',
    name: 'Mobile',
    collection: 'Personal',
    value: '2232620950'
  },
  {
    uuid: 'pemail',
    contact_uuid: 'darth-vader',
    type: 'email',
    name: 'Email',
    collection: 'Personal',
    value: 'anakin@naboo.com'
  },
  {
    uuid: 'paddress',
    contact_uuid: 'darth-vader',
    type: 'address',
    name: 'Address',
    collection: 'Personal',
    value: '154 Amidala Ln, Inner City'
  },
  {
    uuid: 'pemail',
    contact_uuid: 'darth-vader',
    type: 'email',
    name: 'Email',
    collection: 'Work',
    value: 'vader@deathstar.com'
  }
]

export default attributes
