import type { Attribute } from '$modules/user/user.types'
import { AttributeType } from '$modules/attribute/attribute.types'

export const attributes = new Map<number, Attribute>([
	[
		1,
		{
			id: 1,
			type: AttributeType.PHONE,
			name: 'Personal Phone',
			value: {
				number: 12185910657,
				extension: undefined,
				smsEnabled: true
			},
			groupId: null,
			sortOrder: 1,
			verifiedAt: 1634861779,
			verifyExpiry: 1634861779
		}
	],
	[
		2,
		{
			id: 2,
			type: AttributeType.EMAIL,
			name: 'Personal Email',
			value: {
				email: 'bastilla@jedi.com'
			},
			groupId: null,
			sortOrder: 2,
			verifiedAt: null,
			verifyExpiry: null
		}
	],
	[
		3,
		{
			id: 3,
			type: AttributeType.ADDRESS,
			name: 'Apartment',
			value: {
				streetAddress1: '778 Central Emporium',
				locality: 'Inner City',
				region: '2nd Quadrant',
				postalCode: '88961',
				country: 'Coruscant'
			},
			groupId: null,
			sortOrder: 4,
			verifiedAt: 1634861779,
			verifyExpiry: null
		}
	],
	[
		4,
		{
			id: 4,
			type: AttributeType.ADDRESS,
			name: 'Vacation Home',
			value: {
				streetAddress1: '1961 S Palm Canyon Dr',
				locality: 'Palm Springs',
				region: 'CA',
				postalCode: '92264',
				country: 'USA'
			},
			groupId: null,
			sortOrder: 3,
			verifiedAt: null,
			verifyExpiry: null
		}
	],
	[
		5,
		{
			id: 5,
			type: AttributeType.CREDENTIAL,
			name: 'Holocron Passcode',
			value: {
				identity: 'bastilla',
				passcode: 'r2-d2&c3p0'
			},
			groupId: null,
			sortOrder: 5,
			verifiedAt: null,
			verifyExpiry: null
		}
	],
	[
		6,
		{
			id: 6,
			type: AttributeType.DATE,
			name: 'Council Meeting',
			value: {
				year: 2167,
				month: 1,
				day: 12
			},
			groupId: null,
			sortOrder: 6,
			verifiedAt: null,
			verifyExpiry: null
		}
	],
	[
		7,
		{
			id: 7,
			type: AttributeType.SOCIAL,
			name: 'Instagram',
			value: {
				handle: 'bastilla_shan',
				url: 'https://www.instagram.com/bastilla_shan/'
			},
			groupId: null,
			sortOrder: 7,
			verifiedAt: null,
			verifyExpiry: null
		}
	]
])
