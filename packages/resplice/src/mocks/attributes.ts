import type { Attribute } from '$types'
import { AttributeType } from '$types'

const attributes: Attribute[] = [
  {
    uuid: 'cphone',
    contact_uuid: 'darth-vader',
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
    contact_uuid: 'darth-vader',
    type: AttributeType.Email,
    name: 'Email',
    value: {
      email: 'anakin@naboo.com'
    },
    sort_order: 2
  },
  {
    uuid: 'caddress',
    contact_uuid: 'darth-vader',
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
    uuid: '987sdf2',
    contact_uuid: 'bastilla-shan',
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
    uuid: 'cemail',
    contact_uuid: 'darth-vader',
    type: AttributeType.Email,
    name: 'Email',
    value: { email: 'vader@deathstar.com' },
    sort_order: 5
  },
  {
    uuid: 'cdatetime',
    contact_uuid: 'darth-vader',
    type: AttributeType.Datetime,
    name: 'Mustafar Battle',
    value: { datetime: '2021-06-27T21:14:00.000Z' },
    sort_order: 6
  }
]

export default attributes
