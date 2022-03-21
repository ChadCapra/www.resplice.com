import * as reproto from '$lib/reproto'

const ServerMessageType = reproto.api_response.ResponseType
const ClientMessageType = reproto.api_request.RequestType

// TODO: Type the `data` attribute on ClientMessage (big union type)
type ClientMessage = {
  type: reproto.api_request.RequestType
  data: any
}

type ServerMessage = {
  type: reproto.api_response.ResponseType
  data: Uint8Array
}

export function encodeClientMessageWrapper(
  data: reproto.api_request.ApiRequest
) {
  return reproto.api_request.ApiRequest.encode(data).finish()
}

// TODO: Discuss behavior of proto here, should we through or use default values
// when encoding with `.fromJSON(data)`
// Again look into using mapper here vs switch statement
export function encode(m: ClientMessage): Uint8Array {
  switch (m.type) {
    case ClientMessageType.SESSION_CREATE:
      return reproto.auth.session.CreateSession.encode(m.data).finish()
    case ClientMessageType.SESSION_VERIFY_EMAIL:
      return reproto.auth.session.VerifySessionEmail.encode(m.data).finish()
    case ClientMessageType.SESSION_VERIFY_PHONE:
      return reproto.auth.session.VerifySessionPhone.encode(m.data).finish()
    case ClientMessageType.ACCOUNT_CREATE:
      return reproto.auth.account.CreateAccount.encode(m.data).finish()
    default:
      throw Error(`Client Message ${m.type} is not supported`)
  }
}

export function decodeServerMessageWrapper(data: Uint8Array) {
  return reproto.api_response.ApiResponse.decode(data)
}

// Maybe we use a mapper here instead if we just call decode everytime
// TODO: Define union return type explicitly
export function decode(m: ServerMessage): any {
  switch (m.type) {
    case ServerMessageType.CURRENT_SESSION:
      return reproto.auth.session.Session.decode(m.data)
    case ServerMessageType.USER_PROFILE:
      return reproto.user.profile.UserProfile.decode(m.data)
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
