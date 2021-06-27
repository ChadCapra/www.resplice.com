import type { Attribute } from '$types'

const attributes: Attribute[] = [
  {
    uuid: 'mphone',
    contact_uuid: 'darth-vader',
    type: 'phone',
    name: 'Mobile',
    value: ['1', '+12232620950', ''],
    sort_order: 1
  },
  {
    uuid: 'pemail',
    contact_uuid: 'darth-vader',
    type: 'email',
    name: 'Email',
    value: ['anakin@naboo.com'],
    sort_order: 2
  },
  {
    uuid: 'paddress',
    contact_uuid: 'darth-vader',
    type: 'address',
    name: 'Address',
    value: [
      '154 Amidala Ln',
      'Unit 12',
      'Inner City',
      'District 22',
      '86566',
      'Coruscant'
    ],
    sort_order: 4
  },
  {
    uuid: 'pemail',
    contact_uuid: 'darth-vader',
    type: 'email',
    name: 'Email',
    value: ['vader@deathstar.com'],
    sort_order: 3
  },
  {
    uuid: 'pevent',
    contact_uuid: 'darth-vader',
    type: 'event',
    name: 'Vietnam Flight',
    value: [
      '2021-06-27T21:14:00.000Z',
      '4300 Glumack Dr',
      '',
      'St. Paul',
      'MN',
      '55111',
      'United States'
    ],
    sort_order: 4
  },
  {
    uuid: 'kjnkj2n342',
    contact_uuid: 'han-solo',
    type: 'event',
    name: 'Planning Session',
    value: [
      '2021-06-23T23:00:00.000Z',
      '1211 11th Ave N',
      '',
      'Minneapolis',
      'MN',
      '55411',
      'United States'
    ],
    sort_order: 5
  }
]

export default attributes
