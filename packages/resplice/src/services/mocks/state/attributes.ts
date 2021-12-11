import type { Attribute } from '$types/attribute'
import { AttributeType } from '$types/attribute'

export const attributes: Record<string, Attribute> = {
  'phone-uuid': {
    uuid: 'phone-uuid',
    type: AttributeType.PHONE,
    name: 'Personal Phone',
    value: {
      countryCallingCode: 'US',
      number: '2185910657',
      extension: null,
      isSms: true
    },
    sort_order: 1
  },
  'email-uuid': {
    uuid: 'email-uuid',
    type: AttributeType.EMAIL,
    name: 'Personal Email',
    value: {
      email: 'bastilla@jedi.com'
    },
    sort_order: 2
  },
  'address-uuid': {
    uuid: 'address-uuid',
    type: AttributeType.ADDRESS,
    name: 'Apartment',
    value: {
      street_address_1: '778 Central Emporium',
      locality: 'Inner City',
      region: '2nd Quadrant',
      postal_code: '88961',
      country: 'Coruscant'
    },
    sort_order: 3
  },
  'address-2-uuid': {
    uuid: 'address-2-uuid',
    type: AttributeType.ADDRESS,
    name: 'Vacation Home',
    value: {
      street_address_1: '1961 S Palm Canyon Dr',
      locality: 'Palm Springs',
      region: 'CA',
      postal_code: '92264',
      country: 'USA'
    },
    sort_order: 4
  },
  'credential-uuid': {
    uuid: 'credential-uuid',
    type: AttributeType.CREDENTIAL,
    name: 'Holocron Passcode',
    value: {
      identity: 'bastilla',
      passcode: 'r2-d2&c3p0'
    },
    sort_order: 5
  },
  'date-uuid': {
    uuid: 'date-uuid',
    type: AttributeType.DATE,
    name: 'Council Meeting',
    value: {
      year: 2167,
      month: 1,
      day: 12
    },
    sort_order: 6
  },
  'insta-uuid': {
    uuid: 'insta-uuid',
    type: AttributeType.SOCIAL,
    name: 'Instagram',
    value: {
      handle: 'bastilla_shan',
      url: 'https://www.instagram.com/bastilla_shan/'
    },
    sort_order: 7
  }
}
