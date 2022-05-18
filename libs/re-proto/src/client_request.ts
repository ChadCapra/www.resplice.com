/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'

export enum ClientRequestType {
  NOT_SET = 0,
  /**
   * SESSION_CREATE - The following use http post (NOT websocket), returns CurrentSession
   * Account / Session
   */
  SESSION_CREATE = 1,
  SESSION_VERIFY_EMAIL = 2,
  SESSION_VERIFY_PHONE = 3,
  ACCOUNT_CREATE = 4,
  /** SESSION_DELETE - Logout / Delete Account */
  SESSION_DELETE = 5,
  ACCOUNT_DELETE = 6,
  /** SOCKET_AUTHORIZE - Now, open websocket and authorize to receive entities (i.e. "Responses") */
  SOCKET_AUTHORIZE = 7,
  /** PROFILE_EDIT_NAME - User Profile */
  PROFILE_EDIT_NAME = 8,
  PROFILE_EDIT_HANDLE = 9,
  PROFILE_EDIT_AVATAR = 10,
  /** ATTRIBUTE_CREATE - Attributes */
  ATTRIBUTE_CREATE = 11,
  ATTRIBUTE_EDIT_NAME = 12,
  ATTRIBUTE_EDIT_VALUE = 13,
  ATTRIBUTE_SORT = 14,
  ATTRIBUTE_SEND_VERIFICATION = 15,
  ATTRIBUTE_VERIFY = 16,
  ATTRIBUTE_DELETE = 17,
  /** ATTRIBUTE_GROUP_CREATE - Attribute Groups */
  ATTRIBUTE_GROUP_CREATE = 18,
  ATTRIBUTE_GROUP_EDIT_NAME = 19,
  ATTRIBUTE_GROUP_SORT = 20,
  ATTRIBUTE_GROUP_DELETE = 21,
  /** INVITE_VIA_HANDLE - Invites */
  INVITE_VIA_HANDLE = 22,
  INVITE_VIA_PHONE = 23,
  INVITE_VIA_EMAIL = 24,
  /** INVITE_VIA_MEMBERSHIP - future? */
  INVITE_VIA_MEMBERSHIP = 25,
  INVITE_DELETE = 26,
  /** INVITE_ATTRIBUTE_ADD - Invite Attributes */
  INVITE_ATTRIBUTE_ADD = 27,
  INVITE_ATTRIBUTE_REMOVE = 28,
  /** QR_INVITE_CREATE - QR Invites */
  QR_INVITE_CREATE = 29,
  QR_INVITE_DELETE = 30,
  QR_INVITE_OPEN = 31,
  /** QR_INVITE_ATTRIBUTE_ADD - QR Invite Attributes */
  QR_INVITE_ATTRIBUTE_ADD = 32,
  QR_INVITE_ATTRIBUTE_REMOVE = 33,
  /** PENDING_CONTACT_ACCEPT - Pending Contacts */
  PENDING_CONTACT_ACCEPT = 34,
  PENDING_CONTACT_DECLINE = 35,
  /** CONTACT_EDIT_ALIAS - Contacts */
  CONTACT_EDIT_ALIAS = 36,
  CONTACT_EDIT_DESCRIPTION = 37,
  CONTACT_FAVOR = 38,
  CONTACT_UNFAVOR = 39,
  /** CONTACT_MUTE - future? */
  CONTACT_MUTE = 40,
  /** CONTACT_UNMUTE - future? */
  CONTACT_UNMUTE = 41,
  /** CONTACT_ARCHIVE - future? */
  CONTACT_ARCHIVE = 42,
  /** CONTACT_UNARCHIVE - future? */
  CONTACT_UNARCHIVE = 43,
  CONTACT_DELETE = 44,
  /** CONTACT_ATTRIBUTE_REQUEST_NEW - Contact Attributes */
  CONTACT_ATTRIBUTE_REQUEST_NEW = 45,
  /** CONTACT_ATTRIBUTE_REMOVE - future? */
  CONTACT_ATTRIBUTE_REMOVE = 46,
  /** CONTACT_SHARE_ADD - Contact Shares */
  CONTACT_SHARE_ADD = 47,
  CONTACT_SHARE_REMOVE = 48,
  /** SPLICE_INVITE_VIA_HANDLE - Splice Invites */
  SPLICE_INVITE_VIA_HANDLE = 49,
  SPLICE_INVITE_VIA_PHONE = 50,
  SPLICE_INVITE_VIA_EMAIL = 51,
  SPLICE_INVITE_VIA_MEMBERSHIP = 52,
  SPLICE_INVITE_DELETE = 53,
  /** SPLICE_QR_INVITE_CREATE - QR Splice Invites */
  SPLICE_QR_INVITE_CREATE = 54,
  SPLICE_QR_INVITE_DELETE = 55,
  SPLICE_QR_INVITE_OPEN = 56,
  /** PENDING_SPLICE_ACCEPT - Pending Splices */
  PENDING_SPLICE_ACCEPT = 57,
  PENDING_SPLICE_DECLINE = 58,
  /** SPLICE_CREATE - Splices */
  SPLICE_CREATE = 59,
  SPLICE_EDIT_NAME = 60,
  SPLICE_EDIT_DESCRIPTION = 61,
  SPLICE_ENABLE_AUTO_ACCEPT_INVITES = 62,
  SPLICE_DISABLE_AUTO_ACCEPT_INVITES = 63,
  SPLICE_FAVOR = 64,
  SPLICE_UNFAVOR = 65,
  SPLICE_MUTE = 66,
  SPLICE_UNMUTE = 67,
  SPLICE_ARCHIVE = 68,
  SPLICE_UNARCHIVE = 69,
  SPLICE_LEAVE = 70,
  /** SPLICE_ADD_MEMBER - Splice Members */
  SPLICE_ADD_MEMBER = 71,
  SPLICE_REMOVE_MEMBER = 72,
  SPLICE_ENABLE_MODERATOR = 73,
  SPLICE_DISABLE_MODERATOR = 74,
  /** SPLICE_ADD_SHARE - Splice Shares */
  SPLICE_ADD_SHARE = 75,
  SPLICE_REMOVE_SHARE = 76,
  UNRECOGNIZED = -1
}

export function clientRequestTypeFromJSON(object: any): ClientRequestType {
  switch (object) {
    case 0:
    case 'NOT_SET':
      return ClientRequestType.NOT_SET
    case 1:
    case 'SESSION_CREATE':
      return ClientRequestType.SESSION_CREATE
    case 2:
    case 'SESSION_VERIFY_EMAIL':
      return ClientRequestType.SESSION_VERIFY_EMAIL
    case 3:
    case 'SESSION_VERIFY_PHONE':
      return ClientRequestType.SESSION_VERIFY_PHONE
    case 4:
    case 'ACCOUNT_CREATE':
      return ClientRequestType.ACCOUNT_CREATE
    case 5:
    case 'SESSION_DELETE':
      return ClientRequestType.SESSION_DELETE
    case 6:
    case 'ACCOUNT_DELETE':
      return ClientRequestType.ACCOUNT_DELETE
    case 7:
    case 'SOCKET_AUTHORIZE':
      return ClientRequestType.SOCKET_AUTHORIZE
    case 8:
    case 'PROFILE_EDIT_NAME':
      return ClientRequestType.PROFILE_EDIT_NAME
    case 9:
    case 'PROFILE_EDIT_HANDLE':
      return ClientRequestType.PROFILE_EDIT_HANDLE
    case 10:
    case 'PROFILE_EDIT_AVATAR':
      return ClientRequestType.PROFILE_EDIT_AVATAR
    case 11:
    case 'ATTRIBUTE_CREATE':
      return ClientRequestType.ATTRIBUTE_CREATE
    case 12:
    case 'ATTRIBUTE_EDIT_NAME':
      return ClientRequestType.ATTRIBUTE_EDIT_NAME
    case 13:
    case 'ATTRIBUTE_EDIT_VALUE':
      return ClientRequestType.ATTRIBUTE_EDIT_VALUE
    case 14:
    case 'ATTRIBUTE_SORT':
      return ClientRequestType.ATTRIBUTE_SORT
    case 15:
    case 'ATTRIBUTE_SEND_VERIFICATION':
      return ClientRequestType.ATTRIBUTE_SEND_VERIFICATION
    case 16:
    case 'ATTRIBUTE_VERIFY':
      return ClientRequestType.ATTRIBUTE_VERIFY
    case 17:
    case 'ATTRIBUTE_DELETE':
      return ClientRequestType.ATTRIBUTE_DELETE
    case 18:
    case 'ATTRIBUTE_GROUP_CREATE':
      return ClientRequestType.ATTRIBUTE_GROUP_CREATE
    case 19:
    case 'ATTRIBUTE_GROUP_EDIT_NAME':
      return ClientRequestType.ATTRIBUTE_GROUP_EDIT_NAME
    case 20:
    case 'ATTRIBUTE_GROUP_SORT':
      return ClientRequestType.ATTRIBUTE_GROUP_SORT
    case 21:
    case 'ATTRIBUTE_GROUP_DELETE':
      return ClientRequestType.ATTRIBUTE_GROUP_DELETE
    case 22:
    case 'INVITE_VIA_HANDLE':
      return ClientRequestType.INVITE_VIA_HANDLE
    case 23:
    case 'INVITE_VIA_PHONE':
      return ClientRequestType.INVITE_VIA_PHONE
    case 24:
    case 'INVITE_VIA_EMAIL':
      return ClientRequestType.INVITE_VIA_EMAIL
    case 25:
    case 'INVITE_VIA_MEMBERSHIP':
      return ClientRequestType.INVITE_VIA_MEMBERSHIP
    case 26:
    case 'INVITE_DELETE':
      return ClientRequestType.INVITE_DELETE
    case 27:
    case 'INVITE_ATTRIBUTE_ADD':
      return ClientRequestType.INVITE_ATTRIBUTE_ADD
    case 28:
    case 'INVITE_ATTRIBUTE_REMOVE':
      return ClientRequestType.INVITE_ATTRIBUTE_REMOVE
    case 29:
    case 'QR_INVITE_CREATE':
      return ClientRequestType.QR_INVITE_CREATE
    case 30:
    case 'QR_INVITE_DELETE':
      return ClientRequestType.QR_INVITE_DELETE
    case 31:
    case 'QR_INVITE_OPEN':
      return ClientRequestType.QR_INVITE_OPEN
    case 32:
    case 'QR_INVITE_ATTRIBUTE_ADD':
      return ClientRequestType.QR_INVITE_ATTRIBUTE_ADD
    case 33:
    case 'QR_INVITE_ATTRIBUTE_REMOVE':
      return ClientRequestType.QR_INVITE_ATTRIBUTE_REMOVE
    case 34:
    case 'PENDING_CONTACT_ACCEPT':
      return ClientRequestType.PENDING_CONTACT_ACCEPT
    case 35:
    case 'PENDING_CONTACT_DECLINE':
      return ClientRequestType.PENDING_CONTACT_DECLINE
    case 36:
    case 'CONTACT_EDIT_ALIAS':
      return ClientRequestType.CONTACT_EDIT_ALIAS
    case 37:
    case 'CONTACT_EDIT_DESCRIPTION':
      return ClientRequestType.CONTACT_EDIT_DESCRIPTION
    case 38:
    case 'CONTACT_FAVOR':
      return ClientRequestType.CONTACT_FAVOR
    case 39:
    case 'CONTACT_UNFAVOR':
      return ClientRequestType.CONTACT_UNFAVOR
    case 40:
    case 'CONTACT_MUTE':
      return ClientRequestType.CONTACT_MUTE
    case 41:
    case 'CONTACT_UNMUTE':
      return ClientRequestType.CONTACT_UNMUTE
    case 42:
    case 'CONTACT_ARCHIVE':
      return ClientRequestType.CONTACT_ARCHIVE
    case 43:
    case 'CONTACT_UNARCHIVE':
      return ClientRequestType.CONTACT_UNARCHIVE
    case 44:
    case 'CONTACT_DELETE':
      return ClientRequestType.CONTACT_DELETE
    case 45:
    case 'CONTACT_ATTRIBUTE_REQUEST_NEW':
      return ClientRequestType.CONTACT_ATTRIBUTE_REQUEST_NEW
    case 46:
    case 'CONTACT_ATTRIBUTE_REMOVE':
      return ClientRequestType.CONTACT_ATTRIBUTE_REMOVE
    case 47:
    case 'CONTACT_SHARE_ADD':
      return ClientRequestType.CONTACT_SHARE_ADD
    case 48:
    case 'CONTACT_SHARE_REMOVE':
      return ClientRequestType.CONTACT_SHARE_REMOVE
    case 49:
    case 'SPLICE_INVITE_VIA_HANDLE':
      return ClientRequestType.SPLICE_INVITE_VIA_HANDLE
    case 50:
    case 'SPLICE_INVITE_VIA_PHONE':
      return ClientRequestType.SPLICE_INVITE_VIA_PHONE
    case 51:
    case 'SPLICE_INVITE_VIA_EMAIL':
      return ClientRequestType.SPLICE_INVITE_VIA_EMAIL
    case 52:
    case 'SPLICE_INVITE_VIA_MEMBERSHIP':
      return ClientRequestType.SPLICE_INVITE_VIA_MEMBERSHIP
    case 53:
    case 'SPLICE_INVITE_DELETE':
      return ClientRequestType.SPLICE_INVITE_DELETE
    case 54:
    case 'SPLICE_QR_INVITE_CREATE':
      return ClientRequestType.SPLICE_QR_INVITE_CREATE
    case 55:
    case 'SPLICE_QR_INVITE_DELETE':
      return ClientRequestType.SPLICE_QR_INVITE_DELETE
    case 56:
    case 'SPLICE_QR_INVITE_OPEN':
      return ClientRequestType.SPLICE_QR_INVITE_OPEN
    case 57:
    case 'PENDING_SPLICE_ACCEPT':
      return ClientRequestType.PENDING_SPLICE_ACCEPT
    case 58:
    case 'PENDING_SPLICE_DECLINE':
      return ClientRequestType.PENDING_SPLICE_DECLINE
    case 59:
    case 'SPLICE_CREATE':
      return ClientRequestType.SPLICE_CREATE
    case 60:
    case 'SPLICE_EDIT_NAME':
      return ClientRequestType.SPLICE_EDIT_NAME
    case 61:
    case 'SPLICE_EDIT_DESCRIPTION':
      return ClientRequestType.SPLICE_EDIT_DESCRIPTION
    case 62:
    case 'SPLICE_ENABLE_AUTO_ACCEPT_INVITES':
      return ClientRequestType.SPLICE_ENABLE_AUTO_ACCEPT_INVITES
    case 63:
    case 'SPLICE_DISABLE_AUTO_ACCEPT_INVITES':
      return ClientRequestType.SPLICE_DISABLE_AUTO_ACCEPT_INVITES
    case 64:
    case 'SPLICE_FAVOR':
      return ClientRequestType.SPLICE_FAVOR
    case 65:
    case 'SPLICE_UNFAVOR':
      return ClientRequestType.SPLICE_UNFAVOR
    case 66:
    case 'SPLICE_MUTE':
      return ClientRequestType.SPLICE_MUTE
    case 67:
    case 'SPLICE_UNMUTE':
      return ClientRequestType.SPLICE_UNMUTE
    case 68:
    case 'SPLICE_ARCHIVE':
      return ClientRequestType.SPLICE_ARCHIVE
    case 69:
    case 'SPLICE_UNARCHIVE':
      return ClientRequestType.SPLICE_UNARCHIVE
    case 70:
    case 'SPLICE_LEAVE':
      return ClientRequestType.SPLICE_LEAVE
    case 71:
    case 'SPLICE_ADD_MEMBER':
      return ClientRequestType.SPLICE_ADD_MEMBER
    case 72:
    case 'SPLICE_REMOVE_MEMBER':
      return ClientRequestType.SPLICE_REMOVE_MEMBER
    case 73:
    case 'SPLICE_ENABLE_MODERATOR':
      return ClientRequestType.SPLICE_ENABLE_MODERATOR
    case 74:
    case 'SPLICE_DISABLE_MODERATOR':
      return ClientRequestType.SPLICE_DISABLE_MODERATOR
    case 75:
    case 'SPLICE_ADD_SHARE':
      return ClientRequestType.SPLICE_ADD_SHARE
    case 76:
    case 'SPLICE_REMOVE_SHARE':
      return ClientRequestType.SPLICE_REMOVE_SHARE
    case -1:
    case 'UNRECOGNIZED':
    default:
      return ClientRequestType.UNRECOGNIZED
  }
}

export function clientRequestTypeToJSON(object: ClientRequestType): string {
  switch (object) {
    case ClientRequestType.NOT_SET:
      return 'NOT_SET'
    case ClientRequestType.SESSION_CREATE:
      return 'SESSION_CREATE'
    case ClientRequestType.SESSION_VERIFY_EMAIL:
      return 'SESSION_VERIFY_EMAIL'
    case ClientRequestType.SESSION_VERIFY_PHONE:
      return 'SESSION_VERIFY_PHONE'
    case ClientRequestType.ACCOUNT_CREATE:
      return 'ACCOUNT_CREATE'
    case ClientRequestType.SESSION_DELETE:
      return 'SESSION_DELETE'
    case ClientRequestType.ACCOUNT_DELETE:
      return 'ACCOUNT_DELETE'
    case ClientRequestType.SOCKET_AUTHORIZE:
      return 'SOCKET_AUTHORIZE'
    case ClientRequestType.PROFILE_EDIT_NAME:
      return 'PROFILE_EDIT_NAME'
    case ClientRequestType.PROFILE_EDIT_HANDLE:
      return 'PROFILE_EDIT_HANDLE'
    case ClientRequestType.PROFILE_EDIT_AVATAR:
      return 'PROFILE_EDIT_AVATAR'
    case ClientRequestType.ATTRIBUTE_CREATE:
      return 'ATTRIBUTE_CREATE'
    case ClientRequestType.ATTRIBUTE_EDIT_NAME:
      return 'ATTRIBUTE_EDIT_NAME'
    case ClientRequestType.ATTRIBUTE_EDIT_VALUE:
      return 'ATTRIBUTE_EDIT_VALUE'
    case ClientRequestType.ATTRIBUTE_SORT:
      return 'ATTRIBUTE_SORT'
    case ClientRequestType.ATTRIBUTE_SEND_VERIFICATION:
      return 'ATTRIBUTE_SEND_VERIFICATION'
    case ClientRequestType.ATTRIBUTE_VERIFY:
      return 'ATTRIBUTE_VERIFY'
    case ClientRequestType.ATTRIBUTE_DELETE:
      return 'ATTRIBUTE_DELETE'
    case ClientRequestType.ATTRIBUTE_GROUP_CREATE:
      return 'ATTRIBUTE_GROUP_CREATE'
    case ClientRequestType.ATTRIBUTE_GROUP_EDIT_NAME:
      return 'ATTRIBUTE_GROUP_EDIT_NAME'
    case ClientRequestType.ATTRIBUTE_GROUP_SORT:
      return 'ATTRIBUTE_GROUP_SORT'
    case ClientRequestType.ATTRIBUTE_GROUP_DELETE:
      return 'ATTRIBUTE_GROUP_DELETE'
    case ClientRequestType.INVITE_VIA_HANDLE:
      return 'INVITE_VIA_HANDLE'
    case ClientRequestType.INVITE_VIA_PHONE:
      return 'INVITE_VIA_PHONE'
    case ClientRequestType.INVITE_VIA_EMAIL:
      return 'INVITE_VIA_EMAIL'
    case ClientRequestType.INVITE_VIA_MEMBERSHIP:
      return 'INVITE_VIA_MEMBERSHIP'
    case ClientRequestType.INVITE_DELETE:
      return 'INVITE_DELETE'
    case ClientRequestType.INVITE_ATTRIBUTE_ADD:
      return 'INVITE_ATTRIBUTE_ADD'
    case ClientRequestType.INVITE_ATTRIBUTE_REMOVE:
      return 'INVITE_ATTRIBUTE_REMOVE'
    case ClientRequestType.QR_INVITE_CREATE:
      return 'QR_INVITE_CREATE'
    case ClientRequestType.QR_INVITE_DELETE:
      return 'QR_INVITE_DELETE'
    case ClientRequestType.QR_INVITE_OPEN:
      return 'QR_INVITE_OPEN'
    case ClientRequestType.QR_INVITE_ATTRIBUTE_ADD:
      return 'QR_INVITE_ATTRIBUTE_ADD'
    case ClientRequestType.QR_INVITE_ATTRIBUTE_REMOVE:
      return 'QR_INVITE_ATTRIBUTE_REMOVE'
    case ClientRequestType.PENDING_CONTACT_ACCEPT:
      return 'PENDING_CONTACT_ACCEPT'
    case ClientRequestType.PENDING_CONTACT_DECLINE:
      return 'PENDING_CONTACT_DECLINE'
    case ClientRequestType.CONTACT_EDIT_ALIAS:
      return 'CONTACT_EDIT_ALIAS'
    case ClientRequestType.CONTACT_EDIT_DESCRIPTION:
      return 'CONTACT_EDIT_DESCRIPTION'
    case ClientRequestType.CONTACT_FAVOR:
      return 'CONTACT_FAVOR'
    case ClientRequestType.CONTACT_UNFAVOR:
      return 'CONTACT_UNFAVOR'
    case ClientRequestType.CONTACT_MUTE:
      return 'CONTACT_MUTE'
    case ClientRequestType.CONTACT_UNMUTE:
      return 'CONTACT_UNMUTE'
    case ClientRequestType.CONTACT_ARCHIVE:
      return 'CONTACT_ARCHIVE'
    case ClientRequestType.CONTACT_UNARCHIVE:
      return 'CONTACT_UNARCHIVE'
    case ClientRequestType.CONTACT_DELETE:
      return 'CONTACT_DELETE'
    case ClientRequestType.CONTACT_ATTRIBUTE_REQUEST_NEW:
      return 'CONTACT_ATTRIBUTE_REQUEST_NEW'
    case ClientRequestType.CONTACT_ATTRIBUTE_REMOVE:
      return 'CONTACT_ATTRIBUTE_REMOVE'
    case ClientRequestType.CONTACT_SHARE_ADD:
      return 'CONTACT_SHARE_ADD'
    case ClientRequestType.CONTACT_SHARE_REMOVE:
      return 'CONTACT_SHARE_REMOVE'
    case ClientRequestType.SPLICE_INVITE_VIA_HANDLE:
      return 'SPLICE_INVITE_VIA_HANDLE'
    case ClientRequestType.SPLICE_INVITE_VIA_PHONE:
      return 'SPLICE_INVITE_VIA_PHONE'
    case ClientRequestType.SPLICE_INVITE_VIA_EMAIL:
      return 'SPLICE_INVITE_VIA_EMAIL'
    case ClientRequestType.SPLICE_INVITE_VIA_MEMBERSHIP:
      return 'SPLICE_INVITE_VIA_MEMBERSHIP'
    case ClientRequestType.SPLICE_INVITE_DELETE:
      return 'SPLICE_INVITE_DELETE'
    case ClientRequestType.SPLICE_QR_INVITE_CREATE:
      return 'SPLICE_QR_INVITE_CREATE'
    case ClientRequestType.SPLICE_QR_INVITE_DELETE:
      return 'SPLICE_QR_INVITE_DELETE'
    case ClientRequestType.SPLICE_QR_INVITE_OPEN:
      return 'SPLICE_QR_INVITE_OPEN'
    case ClientRequestType.PENDING_SPLICE_ACCEPT:
      return 'PENDING_SPLICE_ACCEPT'
    case ClientRequestType.PENDING_SPLICE_DECLINE:
      return 'PENDING_SPLICE_DECLINE'
    case ClientRequestType.SPLICE_CREATE:
      return 'SPLICE_CREATE'
    case ClientRequestType.SPLICE_EDIT_NAME:
      return 'SPLICE_EDIT_NAME'
    case ClientRequestType.SPLICE_EDIT_DESCRIPTION:
      return 'SPLICE_EDIT_DESCRIPTION'
    case ClientRequestType.SPLICE_ENABLE_AUTO_ACCEPT_INVITES:
      return 'SPLICE_ENABLE_AUTO_ACCEPT_INVITES'
    case ClientRequestType.SPLICE_DISABLE_AUTO_ACCEPT_INVITES:
      return 'SPLICE_DISABLE_AUTO_ACCEPT_INVITES'
    case ClientRequestType.SPLICE_FAVOR:
      return 'SPLICE_FAVOR'
    case ClientRequestType.SPLICE_UNFAVOR:
      return 'SPLICE_UNFAVOR'
    case ClientRequestType.SPLICE_MUTE:
      return 'SPLICE_MUTE'
    case ClientRequestType.SPLICE_UNMUTE:
      return 'SPLICE_UNMUTE'
    case ClientRequestType.SPLICE_ARCHIVE:
      return 'SPLICE_ARCHIVE'
    case ClientRequestType.SPLICE_UNARCHIVE:
      return 'SPLICE_UNARCHIVE'
    case ClientRequestType.SPLICE_LEAVE:
      return 'SPLICE_LEAVE'
    case ClientRequestType.SPLICE_ADD_MEMBER:
      return 'SPLICE_ADD_MEMBER'
    case ClientRequestType.SPLICE_REMOVE_MEMBER:
      return 'SPLICE_REMOVE_MEMBER'
    case ClientRequestType.SPLICE_ENABLE_MODERATOR:
      return 'SPLICE_ENABLE_MODERATOR'
    case ClientRequestType.SPLICE_DISABLE_MODERATOR:
      return 'SPLICE_DISABLE_MODERATOR'
    case ClientRequestType.SPLICE_ADD_SHARE:
      return 'SPLICE_ADD_SHARE'
    case ClientRequestType.SPLICE_REMOVE_SHARE:
      return 'SPLICE_REMOVE_SHARE'
    default:
      return 'UNKNOWN'
  }
}

/** Sent in plain binary, except encrypted payload is data encrypted via AES key */
export interface ClientRequest {
  requestType: ClientRequestType
  encodedPayload: Uint8Array
}

function createBaseClientRequest(): ClientRequest {
  return { requestType: 0, encodedPayload: new Uint8Array() }
}

export const ClientRequest = {
  encode(
    message: ClientRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requestType !== 0) {
      writer.uint32(8).int32(message.requestType)
    }
    if (message.encodedPayload.length !== 0) {
      writer.uint32(18).bytes(message.encodedPayload)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseClientRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.requestType = reader.int32() as any
          break
        case 2:
          message.encodedPayload = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ClientRequest {
    return {
      requestType: isSet(object.requestType)
        ? clientRequestTypeFromJSON(object.requestType)
        : 0,
      encodedPayload: isSet(object.encodedPayload)
        ? bytesFromBase64(object.encodedPayload)
        : new Uint8Array()
    }
  },

  toJSON(message: ClientRequest): unknown {
    const obj: any = {}
    message.requestType !== undefined &&
      (obj.requestType = clientRequestTypeToJSON(message.requestType))
    message.encodedPayload !== undefined &&
      (obj.encodedPayload = base64FromBytes(
        message.encodedPayload !== undefined
          ? message.encodedPayload
          : new Uint8Array()
      ))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<ClientRequest>, I>>(
    object: I
  ): ClientRequest {
    const message = createBaseClientRequest()
    message.requestType = object.requestType ?? 0
    message.encodedPayload = object.encodedPayload ?? new Uint8Array()
    return message
  }
}

declare var self: any | undefined
declare var window: any | undefined
declare var global: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'))
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64)
  const arr = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i)
  }
  return arr
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'))
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = []
  arr.forEach((byte) => {
    bin.push(String.fromCharCode(byte))
  })
  return btoa(bin.join(''))
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined

type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string }
  ? { [K in keyof Omit<T, '$case'>]?: DeepPartial<T[K]> } & {
      $case: T['$case']
    }
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

type KeysOfUnion<T> = T extends T ? keyof T : never
type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
