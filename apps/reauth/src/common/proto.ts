import * as reproto from '@resplice/proto'

export const ServerMessageType = reproto.protocol.response.ServerMessageType
export const ClientMessageType = reproto.protocol.request.Action

type SessionCreateMessage = {
	type: reproto.protocol.request.Action.SESSION_CREATE
	data: reproto.service.auth.CreateSession
}
type SessionVerifyEmailMessage = {
	type: reproto.protocol.request.Action.SESSION_VERIFY_EMAIL
	data: reproto.service.auth.VerifySessionEmail
}
type SessionVerifyPhoneMessage = {
	type: reproto.protocol.request.Action.SESSION_VERIFY_PHONE
	data: reproto.service.auth.VerifySessionPhone
}
type AccountCreateMessage = {
	type: reproto.protocol.request.Action.ACCOUNT_CREATE
	data: reproto.service.auth.CreateAccount
}
type SessionDeleteMessage = {
	type: reproto.protocol.request.Action.SESSION_DELETE
	data: reproto.service.auth.DeleteSession
}
export type ClientMessage =
	| SessionCreateMessage
	| SessionVerifyEmailMessage
	| SessionVerifyPhoneMessage
	| AccountCreateMessage
	| SessionDeleteMessage

export type SerializableClientMessage = ClientMessage & {
	counter: number
}

type SessionDetailsMessage = {
	type: reproto.protocol.response.ServerMessageType.SESSION_DETAILS
	data: reproto.auth.Session
}
type UserProfileMessage = {
	type: reproto.protocol.response.ServerMessageType.USER_PROFILE
	data: reproto.user.Profile
}
type ErrorMessage = {
	type: reproto.protocol.response.ServerMessageType.ERROR
	data: reproto.protocol.response.ServerError
}
export type AuthServerMessage = SessionDetailsMessage | UserProfileMessage | ErrorMessage
type AuthServerMessageType =
	| reproto.protocol.response.ServerMessageType.USER_PROFILE
	| reproto.protocol.response.ServerMessageType.SESSION_DETAILS
	| reproto.protocol.response.ServerMessageType.ERROR

// Encoders/Decoders

const clientMessageMapper = {
	[ClientMessageType.NOT_SET]: () => undefined,
	[ClientMessageType.SESSION_CREATE]: reproto.service.auth.CreateSession.encode,
	[ClientMessageType.SESSION_VERIFY_EMAIL]: reproto.service.auth.VerifySessionEmail.encode,
	[ClientMessageType.SESSION_VERIFY_PHONE]: reproto.service.auth.VerifySessionPhone.encode,
	[ClientMessageType.ACCOUNT_CREATE]: reproto.service.auth.CreateAccount.encode,
	[ClientMessageType.SESSION_DELETE]: reproto.service.auth.DeleteSession.encode
}

export function encodeClientMessageWrapper(data: reproto.protocol.request.ClientRequest) {
	return reproto.protocol.request.ClientRequest.encode(data).finish()
}

export function encodeMessage(m: ClientMessage): Uint8Array {
	const encoder = clientMessageMapper[m.type]
	if (!encoder) throw Error(`Client Message ${m.type} is not supported`)

	return encoder(m.data as any).finish()
}

export function encode(m: ClientMessage) {
	return encodeClientMessageWrapper({
		action: m.type,
		encodedParams: encodeMessage(m)
	})
}

const serverMessageMapper = {
	// TODO: Get new auth details object from proto
	[ServerMessageType.SESSION_DETAILS]: reproto.auth.Session.decode,
	[ServerMessageType.USER_PROFILE]: reproto.user.Profile.decode,
	[ServerMessageType.ERROR]: reproto.protocol.response.ServerError.decode
}

export function decodeServerMessageWrapper(data: Uint8Array) {
	return reproto.protocol.response.ServerMessage.decode(data)
}

export function decodeMessage(m: reproto.protocol.response.ServerMessage) {
	const decoder = serverMessageMapper[m.messageType as AuthServerMessageType]
	if (!decoder) throw Error(`Server Message ${m.messageType} is not supported`)

	return decoder(m.encodedPayload)
}

export function decode(bytes: Uint8Array) {
	const serverMessage = decodeServerMessageWrapper(bytes)
	const decodedMessage = decodeMessage(serverMessage)

	return {
		type: serverMessage.messageType as AuthServerMessageType,
		data: decodedMessage
	}
}
