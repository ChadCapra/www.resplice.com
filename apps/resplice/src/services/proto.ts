import * as reproto from '@resplice/proto'

const ServerMessageType = reproto.server_message.ServerMessageType
const ClientMessageType = reproto.client_request.ClientRequestType

// TODO: Type the `data` attribute on ClientMessage (big union type)
type ClientMessage = {
  type: reproto.client_request.ClientRequestType
  data: any
}

type ServerMessage = {
  type: reproto.server_message.ServerMessageType
  data: Uint8Array
}

export function encodeClientMessageWrapper(
  data: reproto.client_request.ClientRequest
) {
  return reproto.client_request.ClientRequest.encode(data).finish()
}

// TODO: Finish mapper
const clientMessageMapper = {
  [ClientMessageType.SESSION_CREATE]:
    reproto.auth.request.session.Create.encode,
  [ClientMessageType.SESSION_VERIFY_EMAIL]:
    reproto.auth.request.session.VerifyEmail.encode,
  [ClientMessageType.SESSION_VERIFY_PHONE]:
    reproto.auth.request.session.VerifyPhone.encode,
  [ClientMessageType.ACCOUNT_CREATE]:
    reproto.auth.request.account.Create.encode,
  [ClientMessageType.SESSION_DELETE]:
    reproto.auth.request.session.Delete.encode,
  [ClientMessageType.ACCOUNT_DELETE]:
    reproto.auth.request.account.Delete.encode,
  [ClientMessageType.SOCKET_AUTHORIZE]:
    reproto.auth.request.socket.Authorize.encode,
  [ClientMessageType.PROFILE_EDIT_NAME]:
    reproto.user.request.profile.EditName.encode
}

// TODO: Discuss behavior of proto here, should we through or use default values
// when encoding with `.fromJSON(data)`
export function encodePayload(m: ClientMessage): Uint8Array {
  const encoder = clientMessageMapper[m.type]
  if (!encoder) throw Error(`Client Message ${m.type} is not supported`)

  return encoder(m.data).finish()
}

export function decodeServerMessageWrapper(data: Uint8Array) {
  return reproto.server_message.ServerMessage.decode(data)
}

// TODO: Finish mapper
const serverMessageMapper = {
  [ServerMessageType.CURRENT_SESSION]: reproto.auth.session.Session.decode,
  [ServerMessageType.USER_PROFILE]: reproto.user.profile.Profile.decode,
  [ServerMessageType.USER_ATTRIBUTES]:
    reproto.attributes.attribute.AttributeState.decode,
  [ServerMessageType.USER_ATTRIBUTE_GROUPS]:
    reproto.attributes.attribute_group.AttributeGroupState.decode,
  [ServerMessageType.USER_SESSIONS]: reproto.auth.session.SessionState.decode,
  [ServerMessageType.CONTACTS]: reproto.contacts.contact.ContactState.decode,
  [ServerMessageType.CONTACT_ATTRIBUTES]:
    reproto.contacts.contact_attribute.ContactAttributeState.decode,
  [ServerMessageType.CONTACT_SHARES]:
    reproto.contacts.contact_share.ContactShareState.decode,
  [ServerMessageType.PENDING_CONTACTS]:
    reproto.contacts.pending_contact.PendingContactState.decode,
  [ServerMessageType.PENDING_CONTACT_ATTRIBUTES]:
    reproto.contacts.pending_contact_attribute.PendingContactAttributeState
      .decode
}

// Maybe we use a mapper here instead if we just call decode everytime
// TODO: Define union return type explicitly
export function decodePayload(m: ServerMessage) {
  const decoder = serverMessageMapper[m.type]
  if (!decoder) throw Error(`Server Message ${m.type} is not supported`)

  return decoder(m.data)
}

// function encodeAddAttributeRequest(data: unknown) {
//   const err = proto.resplice.attributes.AddAttributeRequest.verify(data)
//   if (err) throw Error(err)

//   const addAttributeRequest =
//     proto.resplice.attributes.AddAttributeRequest.create(data)
//   return proto.resplice.attributes.AddAttributeRequest.encode(
//     addAttributeRequest
//   ).finish().buffer
// }
