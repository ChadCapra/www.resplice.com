import type { Attribute } from '$types/attribute'
import { AttributeType } from '$types/attribute'
import { returnPromise } from '../utils'

export const attributes: Attribute[] = [
  {
    uuid: '987sdf2',
    type: AttributeType.ADDRESS,
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
    type: AttributeType.PHONE,
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
    type: AttributeType.EMAIL,
    name: 'Email',
    value: {
      email: 'anakin@naboo.com'
    },
    sort_order: 2
  },
  {
    uuid: 'caddress',
    type: AttributeType.ADDRESS,
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
    type: AttributeType.EMAIL,
    name: 'Email',
    value: { email: 'vader@deathstar.com' },
    sort_order: 5
  },
  {
    uuid: 'cdatetime',
    type: AttributeType.DATE,
    name: 'Mustafar Battle',
    value: { date: 1624828440000 },
    sort_order: 6
  }
]

const attributesApi = {
  getAttributes: (...args) => returnPromise(attributes),
  addAttribute: (...args) => returnPromise(attributes[1]),
  editAttributeName: (...args) => returnPromise(attributes[1]),
  editAttributeValue: (...args) => returnPromise(attributes[1]),
  enableDefaultShare: (...args) => returnPromise({ status: 'SUCCESS' }),
  disableDefaultShare: (...args) => returnPromise({ status: 'SUCCESS' }),
  sendVerifyToken: (...args) => returnPromise(attributes[1]),
  verifyAttribute: (...args) => returnPromise(attributes[1]),
  deleteAttribute: (...args) => returnPromise(attributes[1])
}

export default attributesApi
