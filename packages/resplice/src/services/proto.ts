import proto from '$services/resplice-pb'

const ServerMessageType = proto.resplice.util.ServerMessageType
const ClientMessageType = proto.resplice.util.ClientMessageType
export type Message = {
  type: proto.resplice.util.ClientMessageType
  data: unknown
}

export function decode(m: {
  type: proto.resplice.util.ServerMessageType
  data: Uint8Array
}) {
  switch (m.type) {
    case ServerMessageType.ACTIVE_SESSION:
      return proto.resplice.session.Session.decode(m.data)
    default:
      throw Error(`Server Message ${m.type} is not supported`)
  }
}

export function encode(m: Message): ArrayBuffer {
  switch (m.type) {
    case ClientMessageType.ADD_ATTRIBUTE:
      return encodeAddAttributeRequest(m.data)
    default:
      throw Error(`Client Message ${m.type} is not supported`)
  }
}

function encodeAddAttributeRequest(data: unknown) {
  const err = proto.resplice.attributes.AddAttributeRequest.verify(data)
  if (err) throw Error(err)

  const addAttributeRequest =
    proto.resplice.attributes.AddAttributeRequest.create(data)
  return proto.resplice.attributes.AddAttributeRequest.encode(
    addAttributeRequest
  ).finish().buffer
}
