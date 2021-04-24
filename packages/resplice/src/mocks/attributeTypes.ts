import type {
  AttributeAction,
  AttributeActionType,
  AttributeType,
  AttributeTypeConfig
} from '$types'

const actions: Record<AttributeActionType, AttributeAction> = {
  calendar: {
    iconName: 'calendar',
    action: 'calendar'
  },
  call: {
    iconName: 'call',
    action: 'call'
  },
  copy: {
    iconName: 'clipboard',
    action: 'copy'
  },
  email: {
    iconName: 'mail',
    action: 'email'
  },
  link: {
    iconName: 'link',
    action: 'link'
  },
  locate: {
    iconName: 'locate',
    action: 'locate'
  },
  map: {
    iconName: 'map',
    action: 'map'
  },
  navigate: {
    iconName: 'navigate',
    action: 'navigate'
  },
  sms: {
    iconName: 'chatbox',
    action: 'sms'
  }
}

const attributeTypes: Record<AttributeType, AttributeTypeConfig> = {
  phone: {
    type: 'phone',
    name: 'Phone',
    valueMap: {
      icon: 0,
      countryCallingCode: 1,
      number: 2,
      extension: 3
    },
    actions: [actions.call, actions.sms, actions.copy]
  },
  email: {
    type: 'email',
    name: 'Email',
    valueMap: {
      icon: 0,
      email: 1
    },
    actions: [actions.email, actions.copy]
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
    actions: [actions.map, actions.navigate, actions.copy]
  },
  coordinates: {
    type: 'coordinates',
    name: 'Coordinates',
    valueMap: {
      icon: 0,
      lon: 1,
      lat: 2
    },
    actions: [actions.locate, actions.navigate, actions.copy]
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
    actions: [actions.locate, actions.navigate, actions.copy]
  },
  social: {
    type: 'social',
    name: 'Social',
    valueMap: {
      icon: 0,
      handle: 1,
      provider: 2
    },
    actions: [actions.link, actions.copy]
  }
}

export default attributeTypes
