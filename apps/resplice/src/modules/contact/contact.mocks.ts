import type {
	Contact,
	Attribute,
	Share,
	PendingContact,
	PendingContactAttribute
} from '$modules/contact/contact.types'
import { AttributeType } from '$modules/attribute/attribute.types'
import { InviteType } from '$modules/invite/invite.types'

export const contacts = new Map<number, Contact>([
	[
		1,
		{
			id: 1,
			name: 'Darth Vader',
			handle: 'darth-vader',
			avatarUrl:
				'https://res.cloudinary.com/capabit-solutions/image/upload/v1529421479/Resplice/ncf3iws37vcg6tdofrgh.png',
			alias: 'Dark Lord',
			description: 'You do NOT want to mess with this guy',
			isFavored: false,
			isMuted: false,
			isArchived: false,
			connectedAt: 1638893210
		}
	],
	[
		2,
		{
			id: 2,
			name: 'Obi-Wan Kenobi',
			handle: 'obi-wan',
			avatarUrl:
				'https://res.cloudinary.com/capabit-solutions/image/upload/v1529422158/Resplice/m3ifzpxcjmwnhl4d4gmi.png',
			alias: 'Ben Kenobi',
			description: 'He lives on Tatooine',
			isFavored: true,
			isMuted: false,
			isArchived: false,
			connectedAt: 1638893210
		}
	],
	[
		3,
		{
			id: 3,
			name: 'Luke Skywalker',
			handle: 'master-luke',
			avatarUrl:
				'https://res.cloudinary.com/capabit-solutions/image/upload/v1533236856/Resplice/bxs2g8ciuk7nipbngiep.png',
			alias: 'Luke',
			description: null,
			isFavored: true,
			isMuted: false,
			isArchived: false,
			connectedAt: 1638893210
		}
	]
])

export const contactAttributes = new Map<number, Attribute>([
	[
		1,
		{
			id: 1,
			contactId: 1,
			type: AttributeType.PHONE,
			name: 'Personal Phone',
			value: {
				number: 6654781136,
				extension: undefined,
				smsEnabled: true
			},
			sortOrder: 1,
			sharedOn: 1638893210
		}
	],
	[
		2,
		{
			id: 2,
			contactId: 1,
			type: AttributeType.ADDRESS,
			name: 'Mustafar Castle',
			value: {
				streetAddress1: 'Facility #25',
				locality: 'Divine Rift',
				region: 'Astra Region',
				postalCode: '66666',
				country: 'Mustafar'
			},
			sortOrder: 2,
			sharedOn: 1638893210
		}
	],
	[
		3,
		{
			id: 3,
			contactId: 2,
			type: AttributeType.EMAIL,
			name: 'Jedi Email',
			value: {
				email: 'obi@jedi.com'
			},
			sortOrder: 1,
			sharedOn: 1638893210
		}
	],
	[
		4,
		{
			id: 4,
			contactId: 2,
			type: AttributeType.CREDENTIAL,
			name: 'Holocron Passcode',
			value: {
				identity: 'ben-kenobi',
				passcode: 'hellothere123'
			},
			sortOrder: 2,
			sharedOn: 1638893210
		}
	],
	[
		5,
		{
			id: 5,
			contactId: 2,
			type: AttributeType.ADDRESS,
			name: 'Home',
			value: {
				streetAddress1: '1211 N 11th Ave',
				locality: 'Minneapolis',
				region: 'Minnesota',
				postalCode: '55411',
				country: 'USA'
			},
			sortOrder: 3,
			sharedOn: 1638893210
		}
	],
	[
		6,
		{
			id: 6,
			contactId: 3,
			type: AttributeType.DATE,
			name: 'Council Meeting',
			value: {
				year: 2167,
				month: 1,
				day: 12
			},
			sortOrder: 1,
			sharedOn: 1638893210
		}
	],
	[
		7,
		{
			id: 7,
			contactId: 3,
			type: AttributeType.COORDINATE,
			name: 'Secret Temple',
			value: {
				latitude: 28.353914,
				longitude: -81.56194
			},
			sortOrder: 2,
			sharedOn: 1638893210
		}
	]
])

export const contactShares = new Map<number, Share>([
	[
		1,
		{
			id: 1,
			contactId: 1,
			attributeId: 1
		}
	],
	[
		2,
		{
			id: 2,
			contactId: 2,
			attributeId: 1
		}
	],
	[
		3,
		{
			id: 3,
			contactId: 2,
			attributeId: 2
		}
	],
	[
		4,
		{
			id: 4,
			contactId: 2,
			attributeId: 3
		}
	],
	[
		5,
		{
			id: 5,
			contactId: 2,
			attributeId: 5
		}
	]
])

export const pendingContacts = new Map<number, PendingContact>([
	[
		1,
		{
			id: 1,
			type: InviteType.EMAIL,
			name: 'Finn',
			avatarUrl:
				'https://res.cloudinary.com/capabit-solutions/image/upload/v1529421559/Resplice/gjt75zp3rbwmj0jsrcap.png',
			email: { email: 'finn@firstorder.com' },
			expiry: 1697933779
		}
	]
])

export const pendingContactAttributes = new Map<number, PendingContactAttribute>([
	[
		1,
		{
			id: 1,
			pendingContactId: 1,
			type: AttributeType.PHONE,
			name: 'Finn Phone'
		}
	]
])

export const pendingContactNowContact: Contact = {
	id: 4,
	name: 'Finn',
	handle: 'FN-2187',
	avatarUrl:
		'https://res.cloudinary.com/capabit-solutions/image/upload/v1529421559/Resplice/gjt75zp3rbwmj0jsrcap.png',
	alias: null,
	description: null,
	isFavored: true,
	isMuted: false,
	isArchived: false,
	connectedAt: 1638893210
}
