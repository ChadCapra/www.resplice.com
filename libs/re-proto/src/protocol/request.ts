/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'

export enum Action {
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
  SESSION_DETAILS_GET = 77,
  UNRECOGNIZED = -1
}

export function actionFromJSON(object: any): Action {
  switch (object) {
    case 0:
    case 'NOT_SET':
      return Action.NOT_SET
    case 1:
    case 'SESSION_CREATE':
      return Action.SESSION_CREATE
    case 2:
    case 'SESSION_VERIFY_EMAIL':
      return Action.SESSION_VERIFY_EMAIL
    case 3:
    case 'SESSION_VERIFY_PHONE':
      return Action.SESSION_VERIFY_PHONE
    case 4:
    case 'ACCOUNT_CREATE':
      return Action.ACCOUNT_CREATE
    case 5:
    case 'SESSION_DELETE':
      return Action.SESSION_DELETE
    case 6:
    case 'ACCOUNT_DELETE':
      return Action.ACCOUNT_DELETE
    case 7:
    case 'SOCKET_AUTHORIZE':
      return Action.SOCKET_AUTHORIZE
    case 8:
    case 'PROFILE_EDIT_NAME':
      return Action.PROFILE_EDIT_NAME
    case 9:
    case 'PROFILE_EDIT_HANDLE':
      return Action.PROFILE_EDIT_HANDLE
    case 10:
    case 'PROFILE_EDIT_AVATAR':
      return Action.PROFILE_EDIT_AVATAR
    case 11:
    case 'ATTRIBUTE_CREATE':
      return Action.ATTRIBUTE_CREATE
    case 12:
    case 'ATTRIBUTE_EDIT_NAME':
      return Action.ATTRIBUTE_EDIT_NAME
    case 13:
    case 'ATTRIBUTE_EDIT_VALUE':
      return Action.ATTRIBUTE_EDIT_VALUE
    case 14:
    case 'ATTRIBUTE_SORT':
      return Action.ATTRIBUTE_SORT
    case 15:
    case 'ATTRIBUTE_SEND_VERIFICATION':
      return Action.ATTRIBUTE_SEND_VERIFICATION
    case 16:
    case 'ATTRIBUTE_VERIFY':
      return Action.ATTRIBUTE_VERIFY
    case 17:
    case 'ATTRIBUTE_DELETE':
      return Action.ATTRIBUTE_DELETE
    case 18:
    case 'ATTRIBUTE_GROUP_CREATE':
      return Action.ATTRIBUTE_GROUP_CREATE
    case 19:
    case 'ATTRIBUTE_GROUP_EDIT_NAME':
      return Action.ATTRIBUTE_GROUP_EDIT_NAME
    case 20:
    case 'ATTRIBUTE_GROUP_SORT':
      return Action.ATTRIBUTE_GROUP_SORT
    case 21:
    case 'ATTRIBUTE_GROUP_DELETE':
      return Action.ATTRIBUTE_GROUP_DELETE
    case 22:
    case 'INVITE_VIA_HANDLE':
      return Action.INVITE_VIA_HANDLE
    case 23:
    case 'INVITE_VIA_PHONE':
      return Action.INVITE_VIA_PHONE
    case 24:
    case 'INVITE_VIA_EMAIL':
      return Action.INVITE_VIA_EMAIL
    case 25:
    case 'INVITE_VIA_MEMBERSHIP':
      return Action.INVITE_VIA_MEMBERSHIP
    case 26:
    case 'INVITE_DELETE':
      return Action.INVITE_DELETE
    case 27:
    case 'INVITE_ATTRIBUTE_ADD':
      return Action.INVITE_ATTRIBUTE_ADD
    case 28:
    case 'INVITE_ATTRIBUTE_REMOVE':
      return Action.INVITE_ATTRIBUTE_REMOVE
    case 29:
    case 'QR_INVITE_CREATE':
      return Action.QR_INVITE_CREATE
    case 30:
    case 'QR_INVITE_DELETE':
      return Action.QR_INVITE_DELETE
    case 31:
    case 'QR_INVITE_OPEN':
      return Action.QR_INVITE_OPEN
    case 32:
    case 'QR_INVITE_ATTRIBUTE_ADD':
      return Action.QR_INVITE_ATTRIBUTE_ADD
    case 33:
    case 'QR_INVITE_ATTRIBUTE_REMOVE':
      return Action.QR_INVITE_ATTRIBUTE_REMOVE
    case 34:
    case 'PENDING_CONTACT_ACCEPT':
      return Action.PENDING_CONTACT_ACCEPT
    case 35:
    case 'PENDING_CONTACT_DECLINE':
      return Action.PENDING_CONTACT_DECLINE
    case 36:
    case 'CONTACT_EDIT_ALIAS':
      return Action.CONTACT_EDIT_ALIAS
    case 37:
    case 'CONTACT_EDIT_DESCRIPTION':
      return Action.CONTACT_EDIT_DESCRIPTION
    case 38:
    case 'CONTACT_FAVOR':
      return Action.CONTACT_FAVOR
    case 39:
    case 'CONTACT_UNFAVOR':
      return Action.CONTACT_UNFAVOR
    case 40:
    case 'CONTACT_MUTE':
      return Action.CONTACT_MUTE
    case 41:
    case 'CONTACT_UNMUTE':
      return Action.CONTACT_UNMUTE
    case 42:
    case 'CONTACT_ARCHIVE':
      return Action.CONTACT_ARCHIVE
    case 43:
    case 'CONTACT_UNARCHIVE':
      return Action.CONTACT_UNARCHIVE
    case 44:
    case 'CONTACT_DELETE':
      return Action.CONTACT_DELETE
    case 45:
    case 'CONTACT_ATTRIBUTE_REQUEST_NEW':
      return Action.CONTACT_ATTRIBUTE_REQUEST_NEW
    case 46:
    case 'CONTACT_ATTRIBUTE_REMOVE':
      return Action.CONTACT_ATTRIBUTE_REMOVE
    case 47:
    case 'CONTACT_SHARE_ADD':
      return Action.CONTACT_SHARE_ADD
    case 48:
    case 'CONTACT_SHARE_REMOVE':
      return Action.CONTACT_SHARE_REMOVE
    case 49:
    case 'SPLICE_INVITE_VIA_HANDLE':
      return Action.SPLICE_INVITE_VIA_HANDLE
    case 50:
    case 'SPLICE_INVITE_VIA_PHONE':
      return Action.SPLICE_INVITE_VIA_PHONE
    case 51:
    case 'SPLICE_INVITE_VIA_EMAIL':
      return Action.SPLICE_INVITE_VIA_EMAIL
    case 52:
    case 'SPLICE_INVITE_VIA_MEMBERSHIP':
      return Action.SPLICE_INVITE_VIA_MEMBERSHIP
    case 53:
    case 'SPLICE_INVITE_DELETE':
      return Action.SPLICE_INVITE_DELETE
    case 54:
    case 'SPLICE_QR_INVITE_CREATE':
      return Action.SPLICE_QR_INVITE_CREATE
    case 55:
    case 'SPLICE_QR_INVITE_DELETE':
      return Action.SPLICE_QR_INVITE_DELETE
    case 56:
    case 'SPLICE_QR_INVITE_OPEN':
      return Action.SPLICE_QR_INVITE_OPEN
    case 57:
    case 'PENDING_SPLICE_ACCEPT':
      return Action.PENDING_SPLICE_ACCEPT
    case 58:
    case 'PENDING_SPLICE_DECLINE':
      return Action.PENDING_SPLICE_DECLINE
    case 59:
    case 'SPLICE_CREATE':
      return Action.SPLICE_CREATE
    case 60:
    case 'SPLICE_EDIT_NAME':
      return Action.SPLICE_EDIT_NAME
    case 61:
    case 'SPLICE_EDIT_DESCRIPTION':
      return Action.SPLICE_EDIT_DESCRIPTION
    case 62:
    case 'SPLICE_ENABLE_AUTO_ACCEPT_INVITES':
      return Action.SPLICE_ENABLE_AUTO_ACCEPT_INVITES
    case 63:
    case 'SPLICE_DISABLE_AUTO_ACCEPT_INVITES':
      return Action.SPLICE_DISABLE_AUTO_ACCEPT_INVITES
    case 64:
    case 'SPLICE_FAVOR':
      return Action.SPLICE_FAVOR
    case 65:
    case 'SPLICE_UNFAVOR':
      return Action.SPLICE_UNFAVOR
    case 66:
    case 'SPLICE_MUTE':
      return Action.SPLICE_MUTE
    case 67:
    case 'SPLICE_UNMUTE':
      return Action.SPLICE_UNMUTE
    case 68:
    case 'SPLICE_ARCHIVE':
      return Action.SPLICE_ARCHIVE
    case 69:
    case 'SPLICE_UNARCHIVE':
      return Action.SPLICE_UNARCHIVE
    case 70:
    case 'SPLICE_LEAVE':
      return Action.SPLICE_LEAVE
    case 71:
    case 'SPLICE_ADD_MEMBER':
      return Action.SPLICE_ADD_MEMBER
    case 72:
    case 'SPLICE_REMOVE_MEMBER':
      return Action.SPLICE_REMOVE_MEMBER
    case 73:
    case 'SPLICE_ENABLE_MODERATOR':
      return Action.SPLICE_ENABLE_MODERATOR
    case 74:
    case 'SPLICE_DISABLE_MODERATOR':
      return Action.SPLICE_DISABLE_MODERATOR
    case 75:
    case 'SPLICE_ADD_SHARE':
      return Action.SPLICE_ADD_SHARE
    case 76:
    case 'SPLICE_REMOVE_SHARE':
      return Action.SPLICE_REMOVE_SHARE
    case 77:
    case 'SESSION_DETAILS_GET':
      return Action.SESSION_DETAILS_GET
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Action.UNRECOGNIZED
  }
}

export function actionToJSON(object: Action): string {
  switch (object) {
    case Action.NOT_SET:
      return 'NOT_SET'
    case Action.SESSION_CREATE:
      return 'SESSION_CREATE'
    case Action.SESSION_VERIFY_EMAIL:
      return 'SESSION_VERIFY_EMAIL'
    case Action.SESSION_VERIFY_PHONE:
      return 'SESSION_VERIFY_PHONE'
    case Action.ACCOUNT_CREATE:
      return 'ACCOUNT_CREATE'
    case Action.SESSION_DELETE:
      return 'SESSION_DELETE'
    case Action.ACCOUNT_DELETE:
      return 'ACCOUNT_DELETE'
    case Action.SOCKET_AUTHORIZE:
      return 'SOCKET_AUTHORIZE'
    case Action.PROFILE_EDIT_NAME:
      return 'PROFILE_EDIT_NAME'
    case Action.PROFILE_EDIT_HANDLE:
      return 'PROFILE_EDIT_HANDLE'
    case Action.PROFILE_EDIT_AVATAR:
      return 'PROFILE_EDIT_AVATAR'
    case Action.ATTRIBUTE_CREATE:
      return 'ATTRIBUTE_CREATE'
    case Action.ATTRIBUTE_EDIT_NAME:
      return 'ATTRIBUTE_EDIT_NAME'
    case Action.ATTRIBUTE_EDIT_VALUE:
      return 'ATTRIBUTE_EDIT_VALUE'
    case Action.ATTRIBUTE_SORT:
      return 'ATTRIBUTE_SORT'
    case Action.ATTRIBUTE_SEND_VERIFICATION:
      return 'ATTRIBUTE_SEND_VERIFICATION'
    case Action.ATTRIBUTE_VERIFY:
      return 'ATTRIBUTE_VERIFY'
    case Action.ATTRIBUTE_DELETE:
      return 'ATTRIBUTE_DELETE'
    case Action.ATTRIBUTE_GROUP_CREATE:
      return 'ATTRIBUTE_GROUP_CREATE'
    case Action.ATTRIBUTE_GROUP_EDIT_NAME:
      return 'ATTRIBUTE_GROUP_EDIT_NAME'
    case Action.ATTRIBUTE_GROUP_SORT:
      return 'ATTRIBUTE_GROUP_SORT'
    case Action.ATTRIBUTE_GROUP_DELETE:
      return 'ATTRIBUTE_GROUP_DELETE'
    case Action.INVITE_VIA_HANDLE:
      return 'INVITE_VIA_HANDLE'
    case Action.INVITE_VIA_PHONE:
      return 'INVITE_VIA_PHONE'
    case Action.INVITE_VIA_EMAIL:
      return 'INVITE_VIA_EMAIL'
    case Action.INVITE_VIA_MEMBERSHIP:
      return 'INVITE_VIA_MEMBERSHIP'
    case Action.INVITE_DELETE:
      return 'INVITE_DELETE'
    case Action.INVITE_ATTRIBUTE_ADD:
      return 'INVITE_ATTRIBUTE_ADD'
    case Action.INVITE_ATTRIBUTE_REMOVE:
      return 'INVITE_ATTRIBUTE_REMOVE'
    case Action.QR_INVITE_CREATE:
      return 'QR_INVITE_CREATE'
    case Action.QR_INVITE_DELETE:
      return 'QR_INVITE_DELETE'
    case Action.QR_INVITE_OPEN:
      return 'QR_INVITE_OPEN'
    case Action.QR_INVITE_ATTRIBUTE_ADD:
      return 'QR_INVITE_ATTRIBUTE_ADD'
    case Action.QR_INVITE_ATTRIBUTE_REMOVE:
      return 'QR_INVITE_ATTRIBUTE_REMOVE'
    case Action.PENDING_CONTACT_ACCEPT:
      return 'PENDING_CONTACT_ACCEPT'
    case Action.PENDING_CONTACT_DECLINE:
      return 'PENDING_CONTACT_DECLINE'
    case Action.CONTACT_EDIT_ALIAS:
      return 'CONTACT_EDIT_ALIAS'
    case Action.CONTACT_EDIT_DESCRIPTION:
      return 'CONTACT_EDIT_DESCRIPTION'
    case Action.CONTACT_FAVOR:
      return 'CONTACT_FAVOR'
    case Action.CONTACT_UNFAVOR:
      return 'CONTACT_UNFAVOR'
    case Action.CONTACT_MUTE:
      return 'CONTACT_MUTE'
    case Action.CONTACT_UNMUTE:
      return 'CONTACT_UNMUTE'
    case Action.CONTACT_ARCHIVE:
      return 'CONTACT_ARCHIVE'
    case Action.CONTACT_UNARCHIVE:
      return 'CONTACT_UNARCHIVE'
    case Action.CONTACT_DELETE:
      return 'CONTACT_DELETE'
    case Action.CONTACT_ATTRIBUTE_REQUEST_NEW:
      return 'CONTACT_ATTRIBUTE_REQUEST_NEW'
    case Action.CONTACT_ATTRIBUTE_REMOVE:
      return 'CONTACT_ATTRIBUTE_REMOVE'
    case Action.CONTACT_SHARE_ADD:
      return 'CONTACT_SHARE_ADD'
    case Action.CONTACT_SHARE_REMOVE:
      return 'CONTACT_SHARE_REMOVE'
    case Action.SPLICE_INVITE_VIA_HANDLE:
      return 'SPLICE_INVITE_VIA_HANDLE'
    case Action.SPLICE_INVITE_VIA_PHONE:
      return 'SPLICE_INVITE_VIA_PHONE'
    case Action.SPLICE_INVITE_VIA_EMAIL:
      return 'SPLICE_INVITE_VIA_EMAIL'
    case Action.SPLICE_INVITE_VIA_MEMBERSHIP:
      return 'SPLICE_INVITE_VIA_MEMBERSHIP'
    case Action.SPLICE_INVITE_DELETE:
      return 'SPLICE_INVITE_DELETE'
    case Action.SPLICE_QR_INVITE_CREATE:
      return 'SPLICE_QR_INVITE_CREATE'
    case Action.SPLICE_QR_INVITE_DELETE:
      return 'SPLICE_QR_INVITE_DELETE'
    case Action.SPLICE_QR_INVITE_OPEN:
      return 'SPLICE_QR_INVITE_OPEN'
    case Action.PENDING_SPLICE_ACCEPT:
      return 'PENDING_SPLICE_ACCEPT'
    case Action.PENDING_SPLICE_DECLINE:
      return 'PENDING_SPLICE_DECLINE'
    case Action.SPLICE_CREATE:
      return 'SPLICE_CREATE'
    case Action.SPLICE_EDIT_NAME:
      return 'SPLICE_EDIT_NAME'
    case Action.SPLICE_EDIT_DESCRIPTION:
      return 'SPLICE_EDIT_DESCRIPTION'
    case Action.SPLICE_ENABLE_AUTO_ACCEPT_INVITES:
      return 'SPLICE_ENABLE_AUTO_ACCEPT_INVITES'
    case Action.SPLICE_DISABLE_AUTO_ACCEPT_INVITES:
      return 'SPLICE_DISABLE_AUTO_ACCEPT_INVITES'
    case Action.SPLICE_FAVOR:
      return 'SPLICE_FAVOR'
    case Action.SPLICE_UNFAVOR:
      return 'SPLICE_UNFAVOR'
    case Action.SPLICE_MUTE:
      return 'SPLICE_MUTE'
    case Action.SPLICE_UNMUTE:
      return 'SPLICE_UNMUTE'
    case Action.SPLICE_ARCHIVE:
      return 'SPLICE_ARCHIVE'
    case Action.SPLICE_UNARCHIVE:
      return 'SPLICE_UNARCHIVE'
    case Action.SPLICE_LEAVE:
      return 'SPLICE_LEAVE'
    case Action.SPLICE_ADD_MEMBER:
      return 'SPLICE_ADD_MEMBER'
    case Action.SPLICE_REMOVE_MEMBER:
      return 'SPLICE_REMOVE_MEMBER'
    case Action.SPLICE_ENABLE_MODERATOR:
      return 'SPLICE_ENABLE_MODERATOR'
    case Action.SPLICE_DISABLE_MODERATOR:
      return 'SPLICE_DISABLE_MODERATOR'
    case Action.SPLICE_ADD_SHARE:
      return 'SPLICE_ADD_SHARE'
    case Action.SPLICE_REMOVE_SHARE:
      return 'SPLICE_REMOVE_SHARE'
    case Action.SESSION_DETAILS_GET:
      return 'SESSION_DETAILS_GET'
    default:
      return 'UNKNOWN'
  }
}

/** Sent in plain binary, except encrypted payload is data encrypted via AES key */
export interface ClientRequest {
  action: Action
  encodedParams: Uint8Array
}

function createBaseClientRequest(): ClientRequest {
  return { action: 0, encodedParams: new Uint8Array() }
}

export const ClientRequest = {
  encode(
    message: ClientRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.action !== 0) {
      writer.uint32(8).int32(message.action)
    }
    if (message.encodedParams.length !== 0) {
      writer.uint32(18).bytes(message.encodedParams)
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
          message.action = reader.int32() as any
          break
        case 2:
          message.encodedParams = reader.bytes()
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
      action: isSet(object.action) ? actionFromJSON(object.action) : 0,
      encodedParams: isSet(object.encodedParams)
        ? bytesFromBase64(object.encodedParams)
        : new Uint8Array()
    }
  },

  toJSON(message: ClientRequest): unknown {
    const obj: any = {}
    message.action !== undefined && (obj.action = actionToJSON(message.action))
    message.encodedParams !== undefined &&
      (obj.encodedParams = base64FromBytes(
        message.encodedParams !== undefined
          ? message.encodedParams
          : new Uint8Array()
      ))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<ClientRequest>, I>>(
    object: I
  ): ClientRequest {
    const message = createBaseClientRequest()
    message.action = object.action ?? 0
    message.encodedParams = object.encodedParams ?? new Uint8Array()
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
