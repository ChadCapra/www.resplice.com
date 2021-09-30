import type { Attribute } from '$types/attribute'
import { AttributeType } from '$types/attribute'

const attributes: Attribute[] = [
  {
    uuid: '987sdf2',
    type: AttributeType.Address,
    name: 'Apartment',
    value: {
      address_1: '12 Temple Rd',
      address_2: '',
      locality: 'Red Light',
      region: 'Fief #80',
      postal_code: '91231',
      country: 'Taropolis',
      planet: 'Taris'
    },
    sort_order: 4
  },
  {
    uuid: 'cphone',
    type: AttributeType.Phone,
    name: 'Mobile',
    value: {
      countryCallingCode: '1',
      number: '2232620950',
      extension: '',
      isSms: true
    },
    sort_order: 1
  },
  {
    uuid: 'cemail',
    type: AttributeType.Email,
    name: 'Email',
    value: {
      email: 'anakin@naboo.com'
    },
    sort_order: 2
  },
  {
    uuid: 'caddress',
    type: AttributeType.Address,
    name: 'Address',
    value: {
      address_1: '154 Amidala Ln',
      address_2: 'Unit 12',
      locality: 'District 22',
      region: 'Inner City',
      postal_code: '86566',
      country: 'Eastern Hemisphere',
      planet: 'Coruscant'
    },
    sort_order: 3
  },
  {
    uuid: 'cemail',
    type: AttributeType.Email,
    name: 'Email',
    value: { email: 'vader@deathstar.com' },
    sort_order: 5
  },
  {
    uuid: 'cdatetime',
    type: AttributeType.Date,
    name: 'Mustafar Battle',
    value: { date: 1624828440000 },
    sort_order: 6
  }
]

export default attributes
