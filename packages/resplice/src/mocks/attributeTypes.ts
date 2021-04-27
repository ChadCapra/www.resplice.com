import type { AttributeTypeEnum, AttributeType } from '$types'

export enum Action {
  Calendar = 'calendar',
  Call = 'call',
  Copy = 'copy',
  Email = 'email',
  Link = 'link',
  Locate = 'locate',
  Navigate = 'navigate',
  Sms = 'sms'
}

const attributeTypes: Record<AttributeTypeEnum, AttributeType> = {
  phone: {
    type: 'phone',
    name: 'Phone',
    valueMap: {
      icon: 0,
      countryCallingCode: 1,
      number: 2,
      extension: 3
    },
    actions: [Action.Call, Action.Sms, Action.Copy]
  },
  email: {
    type: 'email',
    name: 'Email',
    valueMap: {
      icon: 0,
      email: 1
    },
    actions: [Action.Email, Action.Copy]
  },
  address: {
    type: 'address',
    name: 'Address',
    valueMap: {
      icon: 0,
      addressLineOne: 1,
      addressLineTwo: 2,
      city: 3,
      state: 4,
      postalCode: 5,
      country: 6,
      planet: 7
    },
    actions: [Action.Navigate, Action.Locate, Action.Copy]
  },
  coordinates: {
    type: 'coordinates',
    name: 'Coordinates',
    valueMap: {
      icon: 0,
      lon: 1,
      lat: 2
    },
    actions: [Action.Locate, Action.Navigate, Action.Copy]
  },
  location: {
    type: 'location',
    name: 'Live Location',
    valueMap: {
      icon: 0,
      lon: 1,
      lat: 2,
      provider: 3
    },
    actions: [Action.Locate, Action.Navigate, Action.Copy]
  },
  social: {
    type: 'social',
    name: 'Social',
    valueMap: {
      icon: 0,
      handle: 1,
      provider: 2
    },
    actions: [Action.Link, Action.Copy]
  }
}

export default attributeTypes
