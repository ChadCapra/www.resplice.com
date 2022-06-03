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

export function encode(m: ClientMessage) {
  const encodedPayload = encodePayload(m)
  return encodeClientMessageWrapper({
    requestType: m.type,
    encodedPayload
  })
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
    reproto.auth.request.session.AuthorizeSocket.encode,
  [ClientMessageType.PROFILE_EDIT_NAME]:
    reproto.user.request.profile.EditName.encode,
  [ClientMessageType.PROFILE_EDIT_HANDLE]:
    reproto.user.request.profile.EditHandle.encode,
  [ClientMessageType.PROFILE_EDIT_AVATAR]:
    reproto.user.request.profile.EditAvatar.encode,
  [ClientMessageType.ATTRIBUTE_CREATE]:
    reproto.attributes.request.attribute.Create.encode,
  [ClientMessageType.ATTRIBUTE_EDIT_NAME]:
    reproto.attributes.request.attribute.EditName.encode,
  [ClientMessageType.ATTRIBUTE_EDIT_VALUE]:
    reproto.attributes.request.attribute.EditValue.encode,
  [ClientMessageType.ATTRIBUTE_SORT]:
    reproto.attributes.request.attribute.Sort.encode,
  [ClientMessageType.ATTRIBUTE_SEND_VERIFICATION]:
    reproto.attributes.request.attribute.SendVerification.encode,
  [ClientMessageType.ATTRIBUTE_VERIFY]:
    reproto.attributes.request.attribute.Verify.encode,
  [ClientMessageType.ATTRIBUTE_DELETE]:
    reproto.attributes.request.attribute.Delete.encode,
  [ClientMessageType.ATTRIBUTE_GROUP_CREATE]:
    reproto.attributes.request.attribute_group.Create.encode,
  [ClientMessageType.ATTRIBUTE_GROUP_EDIT_NAME]:
    reproto.attributes.request.attribute_group.EditName.encode,
  [ClientMessageType.ATTRIBUTE_GROUP_SORT]:
    reproto.attributes.request.attribute_group.Sort.encode,
  [ClientMessageType.ATTRIBUTE_GROUP_DELETE]:
    reproto.attributes.request.attribute_group.Delete.encode,
  [ClientMessageType.INVITE_VIA_HANDLE]:
    reproto.invites.request.invite.ViaHandle.encode,
  [ClientMessageType.INVITE_VIA_PHONE]:
    reproto.invites.request.invite.ViaPhone.encode,
  [ClientMessageType.INVITE_VIA_EMAIL]:
    reproto.invites.request.invite.ViaEmail.encode,
  [ClientMessageType.INVITE_VIA_MEMBERSHIP]:
    reproto.invites.request.invite.ViaMembership.encode,
  [ClientMessageType.INVITE_DELETE]:
    reproto.invites.request.invite.Delete.encode,
  [ClientMessageType.INVITE_ATTRIBUTE_ADD]:
    reproto.invites.request.invite_attribute.Add.encode,
  [ClientMessageType.INVITE_ATTRIBUTE_REMOVE]:
    reproto.invites.request.invite_attribute.Remove.encode,
  [ClientMessageType.QR_INVITE_CREATE]:
    reproto.invites.request.qr_invite.Create.encode,
  [ClientMessageType.QR_INVITE_DELETE]:
    reproto.invites.request.qr_invite.Delete.encode,
  [ClientMessageType.QR_INVITE_OPEN]:
    reproto.invites.request.qr_invite.Open.encode,
  [ClientMessageType.QR_INVITE_ATTRIBUTE_ADD]:
    reproto.invites.request.qr_invite_attribute.Add.encode,
  [ClientMessageType.QR_INVITE_ATTRIBUTE_REMOVE]:
    reproto.invites.request.qr_invite_attribute.Remove.encode,
  [ClientMessageType.PENDING_CONTACT_ACCEPT]:
    reproto.contacts.request.pending_contact.Accept.encode,
  [ClientMessageType.PENDING_CONTACT_DECLINE]:
    reproto.contacts.request.pending_contact.Decline.encode,
  [ClientMessageType.CONTACT_EDIT_ALIAS]:
    reproto.contacts.request.contact.EditAlias.encode,
  [ClientMessageType.CONTACT_EDIT_DESCRIPTION]:
    reproto.contacts.request.contact.EditDescription.encode,
  [ClientMessageType.CONTACT_FAVOR]:
    reproto.contacts.request.contact.Favor.encode,
  [ClientMessageType.CONTACT_UNFAVOR]:
    reproto.contacts.request.contact.Unfavor.encode,
  [ClientMessageType.CONTACT_MUTE]:
    reproto.contacts.request.contact.Mute.encode,
  [ClientMessageType.CONTACT_UNMUTE]:
    reproto.contacts.request.contact.Unmute.encode,
  [ClientMessageType.CONTACT_ARCHIVE]:
    reproto.contacts.request.contact.Archive.encode,
  [ClientMessageType.CONTACT_UNARCHIVE]:
    reproto.contacts.request.contact.Unarchive.encode,
  [ClientMessageType.CONTACT_DELETE]:
    reproto.contacts.request.contact.Delete.encode,
  [ClientMessageType.CONTACT_ATTRIBUTE_REQUEST_NEW]:
    reproto.contacts.request.contact_attribute.RequestNew.encode,
  [ClientMessageType.CONTACT_ATTRIBUTE_REMOVE]:
    reproto.contacts.request.contact_attribute.Remove.encode,
  [ClientMessageType.CONTACT_SHARE_ADD]:
    reproto.contacts.request.contact_share.Add.encode,
  [ClientMessageType.CONTACT_SHARE_REMOVE]:
    reproto.contacts.request.contact_share.Remove.encode,
  // [ClientMessageType.SPLICE_INVITE_VIA_HANDLE]:
  //   reproto.splices.request.splice_invite.ViaHandle.encode,
  // [ClientMessageType.SPLICE_INVITE_VIA_PHONE]:
  //   reproto.splices.request.splice_invite.ViaPhone.encode,
  // [ClientMessageType.SPLICE_INVITE_VIA_EMAIL]:
  //   reproto.splices.request.splice_invite.ViaEmail.encode,
  // [ClientMessageType.SPLICE_INVITE_VIA_MEMBERSHIP]:
  //   reproto.splices.request.splice_invite.ViaMembership.encode,
  // [ClientMessageType.SPLICE_INVITE_DELETE]:
  //   reproto.splices.request.splice_invite.Delete.encode,
  // [ClientMessageType.SPLICE_QR_INVITE_CREATE]:
  //   reproto.splice_qr_invite.request.Create.encode,
  // [ClientMessageType.SPLICE_QR_INVITE_DELETE]:
  //   reproto.splice_qr_invite.request.Delete.encode,
  // [ClientMessageType.SPLICE_QR_INVITE_OPEN]:
  //   reproto.splice_qr_invite.request.Open.encode,
  // [ClientMessageType.PENDING_SPLICE_ACCEPT]:
  //   reproto.pending_splice.request.Accept.encode,
  // [ClientMessageType.PENDING_SPLICE_DECLINE]:
  //   reproto.pending_splice.request.Decline.encode,
  [ClientMessageType.SPLICE_CREATE]:
    reproto.splices.request.splice.Create.encode,
  [ClientMessageType.SPLICE_EDIT_NAME]:
    reproto.splices.request.splice.EditName.encode,
  [ClientMessageType.SPLICE_EDIT_DESCRIPTION]:
    reproto.splices.request.splice.EditDescription.encode,
  // [ClientMessageType.SPLICE_ENABLE_AUTO_ACCEPT]: reproto.splice.request.EnableAutoAccept.encode,
  // [ClientMessageType.SPLICE_DISABLE_AUTO_ACCEPT]: reproto.splice.request.DisableAutoAccept.encode,
  [ClientMessageType.SPLICE_FAVOR]: reproto.splices.request.splice.Favor.encode,
  [ClientMessageType.SPLICE_UNFAVOR]:
    reproto.splices.request.splice.Unfavor.encode,
  [ClientMessageType.SPLICE_MUTE]: reproto.splices.request.splice.Mute.encode,
  [ClientMessageType.SPLICE_UNMUTE]:
    reproto.splices.request.splice.Unmute.encode,
  [ClientMessageType.SPLICE_ARCHIVE]:
    reproto.splices.request.splice.Archive.encode,
  [ClientMessageType.SPLICE_UNARCHIVE]:
    reproto.splices.request.splice.Unarchive.encode,
  [ClientMessageType.SPLICE_LEAVE]: reproto.splices.request.splice.Leave.encode
  // [ClientMessageType.SPLICE_MEMBER_ADD]: reproto.splice_member.request.Add.encode,
  // [ClientMessageType.SPLICE_MEMBER_REMOVE]: reproto.splice_member.request.Remove.encode,
  // [ClientMessageType.SPLICE_MEMBER_ENABLE_MODERATOR]: reproto.splice_member.request.EnableModerator.encode,
  // [ClientMessageType.SPLICE_MEMBER_DISABLE_MODERATOR]: reproto.splice_member.request.DisableModerator.encode,
  // [ClientMessageType.SPLICE_SHARE_ADD]: reproto.splice_share.request.Add.encode,
  // [ClientMessageType.SPLICE_SHARE_REMOVE]: reproto.splice_share.request.Remove.encode,
  // [ClientMessageType.DASHBOARD_GET]: reproto.dashboard.request.Get.encode,
  // [ClientMessageType.REQUESTS_GET]: reproto.requests.request.Get.encode,
}

// TODO: Discuss behavior of proto here, should we through or use default values
// when encoding with `.fromJSON(data)`
export function encodePayload(m: ClientMessage): Uint8Array {
  const encoder = clientMessageMapper[m.type]
  if (!encoder) throw Error(`Client Message ${m.type} is not supported`)

  return encoder(m.data).finish()
}

export function decode(bytes: Uint8Array) {
  const serverMessage = decodeServerMessageWrapper(bytes)
  return decodePayload({
    type: serverMessage.messageType,
    data: serverMessage.encodedPayload
  })
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
