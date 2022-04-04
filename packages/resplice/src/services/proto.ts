import * as reproto from '$lib/reproto'

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

// TODO: Discuss behavior of proto here, should we through or use default values
// when encoding with `.fromJSON(data)`
// Again look into using mapper here vs switch statement
export function encode(m: ClientMessage): Uint8Array {
  switch (m.type) {
    case ClientMessageType.SESSION_CREATE:
      return reproto.auth.request.session.CreateSession.encode(m.data).finish()
    case ClientMessageType.SESSION_VERIFY_EMAIL:
      return reproto.auth.request.session.VerifySessionEmail.encode(
        m.data
      ).finish()
    case ClientMessageType.SESSION_VERIFY_PHONE:
      return reproto.auth.request.session.VerifySessionPhone.encode(
        m.data
      ).finish()
    case ClientMessageType.ACCOUNT_CREATE:
      return reproto.user.request.account.CreateAccount.encode(m.data).finish()
    default:
      throw Error(`Client Message ${m.type} is not supported`)
  }
}

export function decodeServerMessageWrapper(data: Uint8Array) {
  return reproto.client_request.ClientRequest.decode(data)
}

// Maybe we use a mapper here instead if we just call decode everytime
// TODO: Define union return type explicitly
export function decode(m: ServerMessage): any {
  switch (m.type) {
    case ServerMessageType.CURRENT_SESSION:
      return reproto.auth.session.Session.decode(m.data)
    case ServerMessageType.USER_PROFILE:
      return reproto.user.profile.Profile.decode(m.data)
    default:
      throw Error(`Server Message ${m.type} is not supported`)
  }
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
