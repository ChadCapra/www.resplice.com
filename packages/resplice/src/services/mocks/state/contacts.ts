import type { Contact, ContactDetail } from '$types/contact'
import { ContactType } from '$types/contact'
import { AttributeType } from '$types/attribute'

export const contacts: Record<
  string,
  { profile: Contact; detail: ContactDetail }
> = {
  'darth-vader': {
    profile: {
      uuid: 'darth-vader',
      type: ContactType.CONTACT,
      name: 'Darth Vader',
      avatar_url:
        'https://res.cloudinary.com/capabit-solutions/image/upload/v1529421479/Resplice/ncf3iws37vcg6tdofrgh.png',
      handle: null,
      alias: 'Dark Lord',
      description: 'You do NOT want to mess with this guy',
      isFavored: false,
      connected_at: new Date('2021-12-07T16:06:50.271Z')
    },
    detail: {
      uuid: 'darth-vader',
      attributes: [
        {
          contact_uuid: 'darth-vader',
          uuid: 'darth-phone-uuid',
          type: AttributeType.PHONE,
          name: 'Personal Phone',
          value: {
            countryCallingCode: 'US',
            number: '6654781136',
            extension: null,
            isSms: true
          },
          sort_order: 1
        },
        {
          contact_uuid: 'darth-vader',
          uuid: 'darth-address-uuid',
          type: AttributeType.ADDRESS,
          name: 'Mustafar Castle',
          value: {
            street_address_1: 'Facility #25',
            locality: 'Divine Rift',
            region: 'Astra Region',
            postal_code: '66666',
            country: 'Mustafar'
          },
          sort_order: 2
        }
      ],
      pending_attributes: [],
      common_splices: [],
      chats: []
    }
  },
  'obi-wan': {
    profile: {
      uuid: 'obi-wan',
      type: ContactType.CONTACT,
      name: 'Obi-wan Kenobi',
      avatar_url:
        'https://res.cloudinary.com/capabit-solutions/image/upload/v1529422158/Resplice/m3ifzpxcjmwnhl4d4gmi.png',
      handle: null,
      alias: null,
      description: 'Old Ben',
      isFavored: true,
      connected_at: new Date('2021-12-07T16:06:50.271Z')
    },
    detail: {
      uuid: 'obi-wan',
      attributes: [
        {
          contact_uuid: 'obi-wan',
          uuid: 'obi-email-uuid',
          type: AttributeType.EMAIL,
          name: 'Jedi Email',
          value: {
            email: 'obi@jedi.com'
          },
          sort_order: 1
        },
        {
          contact_uuid: 'obi-wan',
          uuid: 'obi-credential-uuid',
          type: AttributeType.CREDENTIAL,
          name: 'Holocron Passcode',
          value: {
            identity: 'ben-kenobi',
            passcode: 'hellothere123'
          },
          sort_order: 2
        },
        {
          contact_uuid: 'obi-wan',
          uuid: 'obi-address-uuid',
          type: AttributeType.ADDRESS,
          name: 'Home',
          value: {
            street_address_1: '1211 N 11th Ave',
            locality: 'Minneapolis',
            region: 'Minnesota',
            postal_code: '55411',
            country: 'USA'
          },
          sort_order: 2
        }
      ],
      pending_attributes: [],
      common_splices: [],
      chats: []
    }
  },
  'luke-skywalker': {
    profile: {
      uuid: 'luke-skywalker',
      type: ContactType.CONTACT,
      name: 'Luke Skywalker',
      avatar_url:
        'https://res.cloudinary.com/capabit-solutions/image/upload/v1533236856/Resplice/bxs2g8ciuk7nipbngiep.png',
      handle: null,
      alias: 'Luke',
      description: null,
      isFavored: true,
      connected_at: new Date('2021-12-07T16:06:50.271Z')
    },
    detail: {
      uuid: 'luke-skywalker',
      attributes: [
        {
          contact_uuid: 'luke-skywalker',
          uuid: 'luke-date-uuid',
          type: AttributeType.DATE,
          name: 'Council Meeting',
          value: {
            year: 2167,
            month: 1,
            day: 12
          },
          sort_order: 1
        },
        {
          contact_uuid: 'luke-skywalker',
          uuid: 'luke-coordinate-uuid',
          type: AttributeType.COORDINATE,
          name: 'Secret Temple',
          value: {
            latitude: 28.353914,
            longitude: -81.56194
          },
          sort_order: 2
        }
      ],
      pending_attributes: [],
      common_splices: [],
      chats: []
    }
  }
}
