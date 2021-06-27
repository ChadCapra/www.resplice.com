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
  address: {
    type: 'address',
    name: 'Address',
    valueMap: {
      addressLineOne: 1,
      addressLineTwo: 2,
      city: 3,
      state: 4,
      postalCode: 5,
      country: 6
    },
    actions: [Action.Navigate, Action.Locate, Action.Copy]
  },
  coordinates: {
    type: 'coordinates',
    name: 'Coordinates',
    valueMap: {
      lon: 1,
      lat: 2
    },
    actions: [Action.Locate, Action.Navigate, Action.Copy]
  },
  email: {
    type: 'email',
    name: 'Email',
    valueMap: {
      email: 1
    },
    actions: [Action.Email, Action.Copy]
  },
  event: {
    type: 'event',
    name: 'Event',
    valueMap: {
      datetime: 1,
      addressLineOne: 2,
      addressLineTwo: 3,
      city: 4,
      state: 5,
      postalCode: 6,
      country: 7
    },
    actions: [Action.Calendar, Action.Navigate, Action.Copy]
  },
  location: {
    type: 'location',
    name: 'Live Location',
    valueMap: {
      lon: 1,
      lat: 2,
      provider: 3
    },
    actions: [Action.Locate, Action.Navigate, Action.Copy]
  },
  phone: {
    type: 'phone',
    name: 'Phone',
    valueMap: {
      countryCallingCode: 1,
      number: 2,
      extension: 3
    },
    actions: [Action.Call, Action.Sms, Action.Copy]
  },
  social: {
    type: 'social',
    name: 'Social',
    valueMap: {
      handle: 1,
      provider: 2
    },
    actions: [Action.Link, Action.Copy]
  }
}

export default attributeTypes
