/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export enum ClientRequestType {
  NOT_SET = 0,
  /** SESSION_CREATE - The following use http post (NOT websocket), return CurrentSession */
  SESSION_CREATE = 1,
  SESSION_VERIFY_EMAIL = 2,
  SESSION_VERIFY_PHONE = 3,
  ACCOUNT_CREATE = 4,
  /** SOCKET_AUTHORIZE - Now, open websocket and authorize to receive entities (i.e. "Responses") */
  SOCKET_AUTHORIZE = 5,
  /**
   * ACCOUNT_DELETE - Then, use "authorized" socket for all additional calls
   * Account / Session
   */
  ACCOUNT_DELETE = 6,
  SESSION_DELETE = 7,
  /** USER_PROFILE_EDIT_NAME - User Profile */
  USER_PROFILE_EDIT_NAME = 8,
  USER_PROFILE_EDIT_HANDLE = 9,
  USER_PROFILE_EDIT_AVATAR = 10,
  /** USER_ATTRIBUTE_CREATE - User Attributes */
  USER_ATTRIBUTE_CREATE = 11,
  USER_ATTRIBUTE_EDIT_NAME = 12,
  USER_ATTRIBUTE_EDIT_VALUE = 13,
  USER_ATTRIBUTE_SORT = 14,
  USER_ATTRIBUTE_SEND_VERIFICATION = 15,
  USER_ATTRIBUTE_VERIFY = 16,
  USER_ATTRIBUTE_DELETE = 17,
  /** USER_ATTRIBUTE_GROUP_CREATE - User Attribute Groups */
  USER_ATTRIBUTE_GROUP_CREATE = 18,
  USER_ATTRIBUTE_GROUP_EDIT_NAME = 19,
  USER_ATTRIBUTE_GROUP_SORT = 20,
  USER_ATTRIBUTE_GROUP_DELETE = 21,
  /** CONTACT_EDIT_ALIAS - Contacts */
  CONTACT_EDIT_ALIAS = 22,
  CONTACT_EDIT_DESCRIPTION = 23,
  CONTACT_FAVOR = 24,
  CONTACT_UNFAVOR = 25,
  /** CONTACT_MUTE - future? */
  CONTACT_MUTE = 26,
  /** CONTACT_UNMUTE - future? */
  CONTACT_UNMUTE = 27,
  /** CONTACT_ARCHIVE - future? */
  CONTACT_ARCHIVE = 28,
  /** CONTACT_UNARCHIVE - future? */
  CONTACT_UNARCHIVE = 29,
  CONTACT_DELETE = 30,
  /** CONTACT_REQUEST_ATTRIBUTE_TYPE - Contact Attributes */
  CONTACT_REQUEST_ATTRIBUTE_TYPE = 31,
  /** CONTACT_REMOVE_ATTRIBUTE - future? */
  CONTACT_REMOVE_ATTRIBUTE = 32,
  /** CONTACT_ADD_SHARE - Contact Shares */
  CONTACT_ADD_SHARE = 33,
  CONTACT_REMOVE_SHARE = 34,
  /** PENDING_CONTACT_CREATE_VIA_QR - Pending Contacts */
  PENDING_CONTACT_CREATE_VIA_QR = 35,
  PENDING_CONTACT_ACCEPT = 36,
  PENDING_CONTACT_DECLINE = 37,
  /** CONTACT_INVITE_VIA_HANDLE - Contact Invites */
  CONTACT_INVITE_VIA_HANDLE = 38,
  CONTACT_INVITE_VIA_PHONE = 39,
  CONTACT_INVITE_VIA_EMAIL = 40,
  /** CONTACT_INVITE_VIA_MEMBERSHIP - future? */
  CONTACT_INVITE_VIA_MEMBERSHIP = 41,
  CONTACT_INVITE_DELETE = 42,
  /** CONTACT_INVITE_ADD_ATTRIBUTE - Contact Invite Attributes */
  CONTACT_INVITE_ADD_ATTRIBUTE = 43,
  CONTACT_INVITE_REMOVE_ATTRIBUTE = 44,
  /** QR_CONTACT_INVITE_CREATE - QR Contact Invites */
  QR_CONTACT_INVITE_CREATE = 45,
  QR_CONTACT_INVITE_DELETE = 46,
  /** QR_CONTACT_INVITE_ADD_ATTRIBUTE - QR Contact Invite Attributes */
  QR_CONTACT_INVITE_ADD_ATTRIBUTE = 47,
  QR_CONTACT_INVITE_REMOVE_ATTRIBUTE = 48,
  /** SPLICE_CREATE - Splices */
  SPLICE_CREATE = 49,
  SPLICE_EDIT_NAME = 50,
  SPLICE_EDIT_DESCRIPTION = 51,
  SPLICE_ENABLE_AUTO_ACCEPT_INVITES = 52,
  SPLICE_DISABLE_AUTO_ACCEPT_INVITES = 53,
  SPLICE_FAVOR = 54,
  SPLICE_UNFAVOR = 55,
  SPLICE_MUTE = 56,
  SPLICE_UNMUTE = 57,
  SPLICE_ARCHIVE = 58,
  SPLICE_UNARCHIVE = 59,
  SPLICE_LEAVE = 60,
  /** SPLICE_ADD_MEMBER - Splice Members */
  SPLICE_ADD_MEMBER = 61,
  SPLICE_REMOVE_MEMBER = 62,
  SPLICE_ENABLE_MODERATOR = 63,
  SPLICE_DISABLE_MODERATOR = 64,
  /** SPLICE_ADD_SHARE - Splice Shares */
  SPLICE_ADD_SHARE = 65,
  SPLICE_REMOVE_SHARE = 66,
  /** PENDING_SPLICE_CREATE_VIA_QR - Pending Splices */
  PENDING_SPLICE_CREATE_VIA_QR = 67,
  PENDING_SPLICE_ACCEPT = 68,
  PENDING_SPLICE_DECLINE = 69,
  /** SPLICE_INVITE_VIA_HANDLE - Splice Invites */
  SPLICE_INVITE_VIA_HANDLE = 70,
  SPLICE_INVITE_VIA_PHONE = 71,
  SPLICE_INVITE_VIA_EMAIL = 72,
  SPLICE_INVITE_VIA_MEMBERSHIP = 73,
  SPLICE_INVITE_DELETE = 74,
  /** QR_SPLICE_INVITE_CREATE - QR Splice Invites */
  QR_SPLICE_INVITE_CREATE = 75,
  QR_SPLICE_INVITE_DELETE = 76,
  UNRECOGNIZED = -1,
}

export function clientRequestTypeFromJSON(object: any): ClientRequestType {
  switch (object) {
    case 0:
    case "NOT_SET":
      return ClientRequestType.NOT_SET;
    case 1:
    case "SESSION_CREATE":
      return ClientRequestType.SESSION_CREATE;
    case 2:
    case "SESSION_VERIFY_EMAIL":
      return ClientRequestType.SESSION_VERIFY_EMAIL;
    case 3:
    case "SESSION_VERIFY_PHONE":
      return ClientRequestType.SESSION_VERIFY_PHONE;
    case 4:
    case "ACCOUNT_CREATE":
      return ClientRequestType.ACCOUNT_CREATE;
    case 5:
    case "SOCKET_AUTHORIZE":
      return ClientRequestType.SOCKET_AUTHORIZE;
    case 6:
    case "ACCOUNT_DELETE":
      return ClientRequestType.ACCOUNT_DELETE;
    case 7:
    case "SESSION_DELETE":
      return ClientRequestType.SESSION_DELETE;
    case 8:
    case "USER_PROFILE_EDIT_NAME":
      return ClientRequestType.USER_PROFILE_EDIT_NAME;
    case 9:
    case "USER_PROFILE_EDIT_HANDLE":
      return ClientRequestType.USER_PROFILE_EDIT_HANDLE;
    case 10:
    case "USER_PROFILE_EDIT_AVATAR":
      return ClientRequestType.USER_PROFILE_EDIT_AVATAR;
    case 11:
    case "USER_ATTRIBUTE_CREATE":
      return ClientRequestType.USER_ATTRIBUTE_CREATE;
    case 12:
    case "USER_ATTRIBUTE_EDIT_NAME":
      return ClientRequestType.USER_ATTRIBUTE_EDIT_NAME;
    case 13:
    case "USER_ATTRIBUTE_EDIT_VALUE":
      return ClientRequestType.USER_ATTRIBUTE_EDIT_VALUE;
    case 14:
    case "USER_ATTRIBUTE_SORT":
      return ClientRequestType.USER_ATTRIBUTE_SORT;
    case 15:
    case "USER_ATTRIBUTE_SEND_VERIFICATION":
      return ClientRequestType.USER_ATTRIBUTE_SEND_VERIFICATION;
    case 16:
    case "USER_ATTRIBUTE_VERIFY":
      return ClientRequestType.USER_ATTRIBUTE_VERIFY;
    case 17:
    case "USER_ATTRIBUTE_DELETE":
      return ClientRequestType.USER_ATTRIBUTE_DELETE;
    case 18:
    case "USER_ATTRIBUTE_GROUP_CREATE":
      return ClientRequestType.USER_ATTRIBUTE_GROUP_CREATE;
    case 19:
    case "USER_ATTRIBUTE_GROUP_EDIT_NAME":
      return ClientRequestType.USER_ATTRIBUTE_GROUP_EDIT_NAME;
    case 20:
    case "USER_ATTRIBUTE_GROUP_SORT":
      return ClientRequestType.USER_ATTRIBUTE_GROUP_SORT;
    case 21:
    case "USER_ATTRIBUTE_GROUP_DELETE":
      return ClientRequestType.USER_ATTRIBUTE_GROUP_DELETE;
    case 22:
    case "CONTACT_EDIT_ALIAS":
      return ClientRequestType.CONTACT_EDIT_ALIAS;
    case 23:
    case "CONTACT_EDIT_DESCRIPTION":
      return ClientRequestType.CONTACT_EDIT_DESCRIPTION;
    case 24:
    case "CONTACT_FAVOR":
      return ClientRequestType.CONTACT_FAVOR;
    case 25:
    case "CONTACT_UNFAVOR":
      return ClientRequestType.CONTACT_UNFAVOR;
    case 26:
    case "CONTACT_MUTE":
      return ClientRequestType.CONTACT_MUTE;
    case 27:
    case "CONTACT_UNMUTE":
      return ClientRequestType.CONTACT_UNMUTE;
    case 28:
    case "CONTACT_ARCHIVE":
      return ClientRequestType.CONTACT_ARCHIVE;
    case 29:
    case "CONTACT_UNARCHIVE":
      return ClientRequestType.CONTACT_UNARCHIVE;
    case 30:
    case "CONTACT_DELETE":
      return ClientRequestType.CONTACT_DELETE;
    case 31:
    case "CONTACT_REQUEST_ATTRIBUTE_TYPE":
      return ClientRequestType.CONTACT_REQUEST_ATTRIBUTE_TYPE;
    case 32:
    case "CONTACT_REMOVE_ATTRIBUTE":
      return ClientRequestType.CONTACT_REMOVE_ATTRIBUTE;
    case 33:
    case "CONTACT_ADD_SHARE":
      return ClientRequestType.CONTACT_ADD_SHARE;
    case 34:
    case "CONTACT_REMOVE_SHARE":
      return ClientRequestType.CONTACT_REMOVE_SHARE;
    case 35:
    case "PENDING_CONTACT_CREATE_VIA_QR":
      return ClientRequestType.PENDING_CONTACT_CREATE_VIA_QR;
    case 36:
    case "PENDING_CONTACT_ACCEPT":
      return ClientRequestType.PENDING_CONTACT_ACCEPT;
    case 37:
    case "PENDING_CONTACT_DECLINE":
      return ClientRequestType.PENDING_CONTACT_DECLINE;
    case 38:
    case "CONTACT_INVITE_VIA_HANDLE":
      return ClientRequestType.CONTACT_INVITE_VIA_HANDLE;
    case 39:
    case "CONTACT_INVITE_VIA_PHONE":
      return ClientRequestType.CONTACT_INVITE_VIA_PHONE;
    case 40:
    case "CONTACT_INVITE_VIA_EMAIL":
      return ClientRequestType.CONTACT_INVITE_VIA_EMAIL;
    case 41:
    case "CONTACT_INVITE_VIA_MEMBERSHIP":
      return ClientRequestType.CONTACT_INVITE_VIA_MEMBERSHIP;
    case 42:
    case "CONTACT_INVITE_DELETE":
      return ClientRequestType.CONTACT_INVITE_DELETE;
    case 43:
    case "CONTACT_INVITE_ADD_ATTRIBUTE":
      return ClientRequestType.CONTACT_INVITE_ADD_ATTRIBUTE;
    case 44:
    case "CONTACT_INVITE_REMOVE_ATTRIBUTE":
      return ClientRequestType.CONTACT_INVITE_REMOVE_ATTRIBUTE;
    case 45:
    case "QR_CONTACT_INVITE_CREATE":
      return ClientRequestType.QR_CONTACT_INVITE_CREATE;
    case 46:
    case "QR_CONTACT_INVITE_DELETE":
      return ClientRequestType.QR_CONTACT_INVITE_DELETE;
    case 47:
    case "QR_CONTACT_INVITE_ADD_ATTRIBUTE":
      return ClientRequestType.QR_CONTACT_INVITE_ADD_ATTRIBUTE;
    case 48:
    case "QR_CONTACT_INVITE_REMOVE_ATTRIBUTE":
      return ClientRequestType.QR_CONTACT_INVITE_REMOVE_ATTRIBUTE;
    case 49:
    case "SPLICE_CREATE":
      return ClientRequestType.SPLICE_CREATE;
    case 50:
    case "SPLICE_EDIT_NAME":
      return ClientRequestType.SPLICE_EDIT_NAME;
    case 51:
    case "SPLICE_EDIT_DESCRIPTION":
      return ClientRequestType.SPLICE_EDIT_DESCRIPTION;
    case 52:
    case "SPLICE_ENABLE_AUTO_ACCEPT_INVITES":
      return ClientRequestType.SPLICE_ENABLE_AUTO_ACCEPT_INVITES;
    case 53:
    case "SPLICE_DISABLE_AUTO_ACCEPT_INVITES":
      return ClientRequestType.SPLICE_DISABLE_AUTO_ACCEPT_INVITES;
    case 54:
    case "SPLICE_FAVOR":
      return ClientRequestType.SPLICE_FAVOR;
    case 55:
    case "SPLICE_UNFAVOR":
      return ClientRequestType.SPLICE_UNFAVOR;
    case 56:
    case "SPLICE_MUTE":
      return ClientRequestType.SPLICE_MUTE;
    case 57:
    case "SPLICE_UNMUTE":
      return ClientRequestType.SPLICE_UNMUTE;
    case 58:
    case "SPLICE_ARCHIVE":
      return ClientRequestType.SPLICE_ARCHIVE;
    case 59:
    case "SPLICE_UNARCHIVE":
      return ClientRequestType.SPLICE_UNARCHIVE;
    case 60:
    case "SPLICE_LEAVE":
      return ClientRequestType.SPLICE_LEAVE;
    case 61:
    case "SPLICE_ADD_MEMBER":
      return ClientRequestType.SPLICE_ADD_MEMBER;
    case 62:
    case "SPLICE_REMOVE_MEMBER":
      return ClientRequestType.SPLICE_REMOVE_MEMBER;
    case 63:
    case "SPLICE_ENABLE_MODERATOR":
      return ClientRequestType.SPLICE_ENABLE_MODERATOR;
    case 64:
    case "SPLICE_DISABLE_MODERATOR":
      return ClientRequestType.SPLICE_DISABLE_MODERATOR;
    case 65:
    case "SPLICE_ADD_SHARE":
      return ClientRequestType.SPLICE_ADD_SHARE;
    case 66:
    case "SPLICE_REMOVE_SHARE":
      return ClientRequestType.SPLICE_REMOVE_SHARE;
    case 67:
    case "PENDING_SPLICE_CREATE_VIA_QR":
      return ClientRequestType.PENDING_SPLICE_CREATE_VIA_QR;
    case 68:
    case "PENDING_SPLICE_ACCEPT":
      return ClientRequestType.PENDING_SPLICE_ACCEPT;
    case 69:
    case "PENDING_SPLICE_DECLINE":
      return ClientRequestType.PENDING_SPLICE_DECLINE;
    case 70:
    case "SPLICE_INVITE_VIA_HANDLE":
      return ClientRequestType.SPLICE_INVITE_VIA_HANDLE;
    case 71:
    case "SPLICE_INVITE_VIA_PHONE":
      return ClientRequestType.SPLICE_INVITE_VIA_PHONE;
    case 72:
    case "SPLICE_INVITE_VIA_EMAIL":
      return ClientRequestType.SPLICE_INVITE_VIA_EMAIL;
    case 73:
    case "SPLICE_INVITE_VIA_MEMBERSHIP":
      return ClientRequestType.SPLICE_INVITE_VIA_MEMBERSHIP;
    case 74:
    case "SPLICE_INVITE_DELETE":
      return ClientRequestType.SPLICE_INVITE_DELETE;
    case 75:
    case "QR_SPLICE_INVITE_CREATE":
      return ClientRequestType.QR_SPLICE_INVITE_CREATE;
    case 76:
    case "QR_SPLICE_INVITE_DELETE":
      return ClientRequestType.QR_SPLICE_INVITE_DELETE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClientRequestType.UNRECOGNIZED;
  }
}

export function clientRequestTypeToJSON(object: ClientRequestType): string {
  switch (object) {
    case ClientRequestType.NOT_SET:
      return "NOT_SET";
    case ClientRequestType.SESSION_CREATE:
      return "SESSION_CREATE";
    case ClientRequestType.SESSION_VERIFY_EMAIL:
      return "SESSION_VERIFY_EMAIL";
    case ClientRequestType.SESSION_VERIFY_PHONE:
      return "SESSION_VERIFY_PHONE";
    case ClientRequestType.ACCOUNT_CREATE:
      return "ACCOUNT_CREATE";
    case ClientRequestType.SOCKET_AUTHORIZE:
      return "SOCKET_AUTHORIZE";
    case ClientRequestType.ACCOUNT_DELETE:
      return "ACCOUNT_DELETE";
    case ClientRequestType.SESSION_DELETE:
      return "SESSION_DELETE";
    case ClientRequestType.USER_PROFILE_EDIT_NAME:
      return "USER_PROFILE_EDIT_NAME";
    case ClientRequestType.USER_PROFILE_EDIT_HANDLE:
      return "USER_PROFILE_EDIT_HANDLE";
    case ClientRequestType.USER_PROFILE_EDIT_AVATAR:
      return "USER_PROFILE_EDIT_AVATAR";
    case ClientRequestType.USER_ATTRIBUTE_CREATE:
      return "USER_ATTRIBUTE_CREATE";
    case ClientRequestType.USER_ATTRIBUTE_EDIT_NAME:
      return "USER_ATTRIBUTE_EDIT_NAME";
    case ClientRequestType.USER_ATTRIBUTE_EDIT_VALUE:
      return "USER_ATTRIBUTE_EDIT_VALUE";
    case ClientRequestType.USER_ATTRIBUTE_SORT:
      return "USER_ATTRIBUTE_SORT";
    case ClientRequestType.USER_ATTRIBUTE_SEND_VERIFICATION:
      return "USER_ATTRIBUTE_SEND_VERIFICATION";
    case ClientRequestType.USER_ATTRIBUTE_VERIFY:
      return "USER_ATTRIBUTE_VERIFY";
    case ClientRequestType.USER_ATTRIBUTE_DELETE:
      return "USER_ATTRIBUTE_DELETE";
    case ClientRequestType.USER_ATTRIBUTE_GROUP_CREATE:
      return "USER_ATTRIBUTE_GROUP_CREATE";
    case ClientRequestType.USER_ATTRIBUTE_GROUP_EDIT_NAME:
      return "USER_ATTRIBUTE_GROUP_EDIT_NAME";
    case ClientRequestType.USER_ATTRIBUTE_GROUP_SORT:
      return "USER_ATTRIBUTE_GROUP_SORT";
    case ClientRequestType.USER_ATTRIBUTE_GROUP_DELETE:
      return "USER_ATTRIBUTE_GROUP_DELETE";
    case ClientRequestType.CONTACT_EDIT_ALIAS:
      return "CONTACT_EDIT_ALIAS";
    case ClientRequestType.CONTACT_EDIT_DESCRIPTION:
      return "CONTACT_EDIT_DESCRIPTION";
    case ClientRequestType.CONTACT_FAVOR:
      return "CONTACT_FAVOR";
    case ClientRequestType.CONTACT_UNFAVOR:
      return "CONTACT_UNFAVOR";
    case ClientRequestType.CONTACT_MUTE:
      return "CONTACT_MUTE";
    case ClientRequestType.CONTACT_UNMUTE:
      return "CONTACT_UNMUTE";
    case ClientRequestType.CONTACT_ARCHIVE:
      return "CONTACT_ARCHIVE";
    case ClientRequestType.CONTACT_UNARCHIVE:
      return "CONTACT_UNARCHIVE";
    case ClientRequestType.CONTACT_DELETE:
      return "CONTACT_DELETE";
    case ClientRequestType.CONTACT_REQUEST_ATTRIBUTE_TYPE:
      return "CONTACT_REQUEST_ATTRIBUTE_TYPE";
    case ClientRequestType.CONTACT_REMOVE_ATTRIBUTE:
      return "CONTACT_REMOVE_ATTRIBUTE";
    case ClientRequestType.CONTACT_ADD_SHARE:
      return "CONTACT_ADD_SHARE";
    case ClientRequestType.CONTACT_REMOVE_SHARE:
      return "CONTACT_REMOVE_SHARE";
    case ClientRequestType.PENDING_CONTACT_CREATE_VIA_QR:
      return "PENDING_CONTACT_CREATE_VIA_QR";
    case ClientRequestType.PENDING_CONTACT_ACCEPT:
      return "PENDING_CONTACT_ACCEPT";
    case ClientRequestType.PENDING_CONTACT_DECLINE:
      return "PENDING_CONTACT_DECLINE";
    case ClientRequestType.CONTACT_INVITE_VIA_HANDLE:
      return "CONTACT_INVITE_VIA_HANDLE";
    case ClientRequestType.CONTACT_INVITE_VIA_PHONE:
      return "CONTACT_INVITE_VIA_PHONE";
    case ClientRequestType.CONTACT_INVITE_VIA_EMAIL:
      return "CONTACT_INVITE_VIA_EMAIL";
    case ClientRequestType.CONTACT_INVITE_VIA_MEMBERSHIP:
      return "CONTACT_INVITE_VIA_MEMBERSHIP";
    case ClientRequestType.CONTACT_INVITE_DELETE:
      return "CONTACT_INVITE_DELETE";
    case ClientRequestType.CONTACT_INVITE_ADD_ATTRIBUTE:
      return "CONTACT_INVITE_ADD_ATTRIBUTE";
    case ClientRequestType.CONTACT_INVITE_REMOVE_ATTRIBUTE:
      return "CONTACT_INVITE_REMOVE_ATTRIBUTE";
    case ClientRequestType.QR_CONTACT_INVITE_CREATE:
      return "QR_CONTACT_INVITE_CREATE";
    case ClientRequestType.QR_CONTACT_INVITE_DELETE:
      return "QR_CONTACT_INVITE_DELETE";
    case ClientRequestType.QR_CONTACT_INVITE_ADD_ATTRIBUTE:
      return "QR_CONTACT_INVITE_ADD_ATTRIBUTE";
    case ClientRequestType.QR_CONTACT_INVITE_REMOVE_ATTRIBUTE:
      return "QR_CONTACT_INVITE_REMOVE_ATTRIBUTE";
    case ClientRequestType.SPLICE_CREATE:
      return "SPLICE_CREATE";
    case ClientRequestType.SPLICE_EDIT_NAME:
      return "SPLICE_EDIT_NAME";
    case ClientRequestType.SPLICE_EDIT_DESCRIPTION:
      return "SPLICE_EDIT_DESCRIPTION";
    case ClientRequestType.SPLICE_ENABLE_AUTO_ACCEPT_INVITES:
      return "SPLICE_ENABLE_AUTO_ACCEPT_INVITES";
    case ClientRequestType.SPLICE_DISABLE_AUTO_ACCEPT_INVITES:
      return "SPLICE_DISABLE_AUTO_ACCEPT_INVITES";
    case ClientRequestType.SPLICE_FAVOR:
      return "SPLICE_FAVOR";
    case ClientRequestType.SPLICE_UNFAVOR:
      return "SPLICE_UNFAVOR";
    case ClientRequestType.SPLICE_MUTE:
      return "SPLICE_MUTE";
    case ClientRequestType.SPLICE_UNMUTE:
      return "SPLICE_UNMUTE";
    case ClientRequestType.SPLICE_ARCHIVE:
      return "SPLICE_ARCHIVE";
    case ClientRequestType.SPLICE_UNARCHIVE:
      return "SPLICE_UNARCHIVE";
    case ClientRequestType.SPLICE_LEAVE:
      return "SPLICE_LEAVE";
    case ClientRequestType.SPLICE_ADD_MEMBER:
      return "SPLICE_ADD_MEMBER";
    case ClientRequestType.SPLICE_REMOVE_MEMBER:
      return "SPLICE_REMOVE_MEMBER";
    case ClientRequestType.SPLICE_ENABLE_MODERATOR:
      return "SPLICE_ENABLE_MODERATOR";
    case ClientRequestType.SPLICE_DISABLE_MODERATOR:
      return "SPLICE_DISABLE_MODERATOR";
    case ClientRequestType.SPLICE_ADD_SHARE:
      return "SPLICE_ADD_SHARE";
    case ClientRequestType.SPLICE_REMOVE_SHARE:
      return "SPLICE_REMOVE_SHARE";
    case ClientRequestType.PENDING_SPLICE_CREATE_VIA_QR:
      return "PENDING_SPLICE_CREATE_VIA_QR";
    case ClientRequestType.PENDING_SPLICE_ACCEPT:
      return "PENDING_SPLICE_ACCEPT";
    case ClientRequestType.PENDING_SPLICE_DECLINE:
      return "PENDING_SPLICE_DECLINE";
    case ClientRequestType.SPLICE_INVITE_VIA_HANDLE:
      return "SPLICE_INVITE_VIA_HANDLE";
    case ClientRequestType.SPLICE_INVITE_VIA_PHONE:
      return "SPLICE_INVITE_VIA_PHONE";
    case ClientRequestType.SPLICE_INVITE_VIA_EMAIL:
      return "SPLICE_INVITE_VIA_EMAIL";
    case ClientRequestType.SPLICE_INVITE_VIA_MEMBERSHIP:
      return "SPLICE_INVITE_VIA_MEMBERSHIP";
    case ClientRequestType.SPLICE_INVITE_DELETE:
      return "SPLICE_INVITE_DELETE";
    case ClientRequestType.QR_SPLICE_INVITE_CREATE:
      return "QR_SPLICE_INVITE_CREATE";
    case ClientRequestType.QR_SPLICE_INVITE_DELETE:
      return "QR_SPLICE_INVITE_DELETE";
    default:
      return "UNKNOWN";
  }
}

/** Sent in plain binary, except encrypted payload is data encrypted via AES key */
export interface ClientRequest {
  requestType: ClientRequestType;
  /** This is a counter since session creation */
  requestId: number;
  encryptedPayload: Uint8Array;
}

function createBaseClientRequest(): ClientRequest {
  return { requestType: 0, requestId: 0, encryptedPayload: new Uint8Array() };
}

export const ClientRequest = {
  encode(
    message: ClientRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requestType !== 0) {
      writer.uint32(8).int32(message.requestType);
    }
    if (message.requestId !== 0) {
      writer.uint32(16).uint32(message.requestId);
    }
    if (message.encryptedPayload.length !== 0) {
      writer.uint32(26).bytes(message.encryptedPayload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestType = reader.int32() as any;
          break;
        case 2:
          message.requestId = reader.uint32();
          break;
        case 3:
          message.encryptedPayload = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClientRequest {
    return {
      requestType: isSet(object.requestType)
        ? clientRequestTypeFromJSON(object.requestType)
        : 0,
      requestId: isSet(object.requestId) ? Number(object.requestId) : 0,
      encryptedPayload: isSet(object.encryptedPayload)
        ? bytesFromBase64(object.encryptedPayload)
        : new Uint8Array(),
    };
  },

  toJSON(message: ClientRequest): unknown {
    const obj: any = {};
    message.requestType !== undefined &&
      (obj.requestType = clientRequestTypeToJSON(message.requestType));
    message.requestId !== undefined &&
      (obj.requestId = Math.round(message.requestId));
    message.encryptedPayload !== undefined &&
      (obj.encryptedPayload = base64FromBytes(
        message.encryptedPayload !== undefined
          ? message.encryptedPayload
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClientRequest>, I>>(
    object: I
  ): ClientRequest {
    const message = createBaseClientRequest();
    message.requestType = object.requestType ?? 0;
    message.requestId = object.requestId ?? 0;
    message.encryptedPayload = object.encryptedPayload ?? new Uint8Array();
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach((byte) => {
    bin.push(String.fromCharCode(byte));
  });
  return btoa(bin.join(""));
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string }
  ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & {
      $case: T["$case"];
    }
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
