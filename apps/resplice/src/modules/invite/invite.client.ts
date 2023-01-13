import * as reproto from '@resplice/proto'
import { ConnCommandType, onlyRecievedMessages } from '$services/commuters/connCommuter'
import { deserializeServerMessage, serializeClientMessage } from '$services/serde'
import processRecords from '$stores/utils'

import type { ReCrypto } from '$services/crypto'
import type { ConnCommuter } from '$services/commuters/connCommuter'
import type { Api } from '$services/api/http'
import type { DB } from '$services/db'
import type { InviteStore } from '$stores/invites'
import type { Invite, QrInvite } from '$types/invite'
import type { EmailValue, PhoneValue, Attribute as UserAttribute } from '$types/attribute'
import type { Contact, PendingContact } from '$types/contact'
import type { Attribute } from '$types/user'

const ServerMessageType = reproto.server_message.ServerMessageType
const ClientMessageType = reproto.client_request.ClientRequestType

export interface InvitesClient {
	inviteViaHandle: (
		name: string,
		handle: Contact['handle'],
		attributeIds: Attribute['id'][]
	) => Promise<void>
	inviteViaPhone: (
		name: string,
		phone: PhoneValue,
		attributeIds: Attribute['id'][]
	) => Promise<void>
	inviteViaEmail: (
		name: string,
		email: EmailValue,
		attributeIds: Attribute['id'][]
	) => Promise<void>
	delete: (id: Invite['id']) => Promise<void>
	createQr: () => Promise<QrInvite>
	deleteQr: (id: QrInvite['id']) => Promise<void>
	openQr: (id: QrInvite['id'], accessCode: QrInvite['accessCode']) => Promise<PendingContact>
	addShare: (id: Invite['id'], attributeId: UserAttribute['id']) => Promise<void>
	removeShare: (id: Invite['id'], attributeId: UserAttribute['id']) => Promise<void>
}

type FactoryParams = {
	crypto: ReCrypto
	commuter: ConnCommuter
	api: Api
	cache: DB
	store: InviteStore
}
function invitesClientFactory({
	crypto,
	commuter,
	api,
	cache,
	store
}: FactoryParams): InvitesClient {
	commuter.messages$.pipe(onlyRecievedMessages()).subscribe((m) => {
		switch (m.type) {
			case ServerMessageType.INVITE_STATE:
				if (m.data.invites) {
					store.invites.update((state) =>
						processRecords(state, 'id', m.data.invites, m.data.expiredInviteIds)
					)
				}

				if (m.data.inviteAttributes) {
					store.inviteAttributes.update((state) =>
						processRecords(state, 'id', m.data.inviteAttributes, m.data.expiredInviteAttributeIds)
					)
				}
				break
		}
	})

	return {
		inviteViaHandle: async (name, handle, attributeIds) => {
			const message = {
				type: ClientMessageType.INVITE_VIA_EMAIL,
				data: { name, handle, attributeIds }
			}
			const [counter] = await cache.insert('events', message)
			commuter.postMessage({
				type: ConnCommandType.SEND,
				message: { ...message, counter }
			})
		},
		inviteViaPhone: async (name, phone, attributeIds) => {
			const message = {
				type: ClientMessageType.INVITE_VIA_PHONE,
				data: { name, phone, attributeIds }
			}
			const [counter] = await cache.insert('events', message)
			commuter.postMessage({
				type: ConnCommandType.SEND,
				message: { ...message, counter }
			})
		},
		inviteViaEmail: async (name, email, attributeIds) => {
			const message = {
				type: ClientMessageType.INVITE_VIA_EMAIL,
				data: { name, email, attributeIds }
			}
			const [counter] = await cache.insert('events', message)
			commuter.postMessage({
				type: ConnCommandType.SEND,
				message: { ...message, counter }
			})
		},
		delete: async (id) => {
			const message = {
				type: ClientMessageType.INVITE_DELETE,
				data: { id }
			}
			const [counter] = await cache.insert('events', message)
			commuter.postMessage({
				type: ConnCommandType.SEND,
				message: { ...message, counter }
			})
		},
		createQr: async () => {
			const message = {
				type: ClientMessageType.QR_INVITE_CREATE,
				data: {}
			}
			const [counter] = await cache.insert('events', message)
			const clientMessageBytes = await serializeClientMessage({ ...message, counter }, crypto)
			const resBuffer: ArrayBuffer = await api.post({
				endpoint: '/do',
				data: clientMessageBytes
			})
			const qrInvite: QrInvite = await deserializeServerMessage(new Uint8Array(resBuffer), crypto)

			return qrInvite
		},
		deleteQr: async (id) => {
			const message = {
				type: ClientMessageType.QR_INVITE_DELETE,
				data: { id }
			}
			const [counter] = await cache.insert('events', message)
			commuter.postMessage({
				type: ConnCommandType.SEND,
				message: { ...message, counter }
			})
		},
		openQr: async (qrInviteId, accessCode) => {
			const message = {
				type: ClientMessageType.QR_INVITE_OPEN,
				data: { qrInviteId, accessCode }
			}
			const [counter] = await cache.insert('events', message)
			const clientMessageBytes = await serializeClientMessage({ ...message, counter }, crypto)
			const resBuffer: ArrayBuffer = await api.post({
				endpoint: '/do',
				data: clientMessageBytes
			})
			const pendingContact: PendingContact = await deserializeServerMessage(
				new Uint8Array(resBuffer),
				crypto
			)

			return pendingContact
		},
		addShare: async (id, attributeId) => {
			const message = {
				type: ClientMessageType.INVITE_ATTRIBUTE_ADD,
				data: { id, attributeId }
			}
			const [counter] = await cache.insert('events', message)
			commuter.postMessage({
				type: ConnCommandType.SEND,
				message: { ...message, counter }
			})
		},
		removeShare: async (id, attributeId) => {
			const message = {
				type: ClientMessageType.INVITE_ATTRIBUTE_REMOVE,
				data: { id, attributeId }
			}
			const [counter] = await cache.insert('events', message)
			commuter.postMessage({
				type: ConnCommandType.SEND,
				message: { ...message, counter }
			})
		}
	}
}

export default invitesClientFactory
