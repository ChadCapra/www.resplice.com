/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export enum ServerMessageType {
  ERROR = 0,
  /** CURRENT_SESSION - User, Sessions and Attributes */
  CURRENT_SESSION = 1,
  USER_PROFILE = 2,
  USER_ATTRIBUTES = 3,
  USER_ATTRIBUTE_GROUPS = 4,
  /** USER_SESSIONS - future */
  USER_SESSIONS = 5,
  /** CONTACTS - Contact Entities */
  CONTACTS = 6,
  CONTACT_ATTRIBUTES = 7,
  CONTACT_SHARES = 8,
  PENDING_CONTACTS = 9,
  PENDING_CONTACT_ATTRIBUTES = 10,
  /** CONTACT_INVITES - Contact Invites */
  CONTACT_INVITES = 11,
  CONTACT_INVITE_ATTRIBUTES = 12,
  QR_CONTACT_INVITES = 13,
  QR_CONTACT_INVITE_ATTRIBUTES = 14,
  /** SPLICES - Splices */
  SPLICES = 15,
  SPLICE_MEMBERS = 16,
  SPLICE_SHARES = 17,
  PENDING_SPLICES = 18,
  PENDING_SPLICE_MEMBERS = 19,
  /** SPLICE_INVITES - Splice Invites */
  SPLICE_INVITES = 20,
  SPLICE_INVITE_ATTRIBUTES = 21,
  QR_SPLICE_INVITES = 22,
  QR_SPLICE_INVITE_ATTRIBUTES = 23,
  UNRECOGNIZED = -1,
}

export function serverMessageTypeFromJSON(object: any): ServerMessageType {
  switch (object) {
    case 0:
    case "ERROR":
      return ServerMessageType.ERROR;
    case 1:
    case "CURRENT_SESSION":
      return ServerMessageType.CURRENT_SESSION;
    case 2:
    case "USER_PROFILE":
      return ServerMessageType.USER_PROFILE;
    case 3:
    case "USER_ATTRIBUTES":
      return ServerMessageType.USER_ATTRIBUTES;
    case 4:
    case "USER_ATTRIBUTE_GROUPS":
      return ServerMessageType.USER_ATTRIBUTE_GROUPS;
    case 5:
    case "USER_SESSIONS":
      return ServerMessageType.USER_SESSIONS;
    case 6:
    case "CONTACTS":
      return ServerMessageType.CONTACTS;
    case 7:
    case "CONTACT_ATTRIBUTES":
      return ServerMessageType.CONTACT_ATTRIBUTES;
    case 8:
    case "CONTACT_SHARES":
      return ServerMessageType.CONTACT_SHARES;
    case 9:
    case "PENDING_CONTACTS":
      return ServerMessageType.PENDING_CONTACTS;
    case 10:
    case "PENDING_CONTACT_ATTRIBUTES":
      return ServerMessageType.PENDING_CONTACT_ATTRIBUTES;
    case 11:
    case "CONTACT_INVITES":
      return ServerMessageType.CONTACT_INVITES;
    case 12:
    case "CONTACT_INVITE_ATTRIBUTES":
      return ServerMessageType.CONTACT_INVITE_ATTRIBUTES;
    case 13:
    case "QR_CONTACT_INVITES":
      return ServerMessageType.QR_CONTACT_INVITES;
    case 14:
    case "QR_CONTACT_INVITE_ATTRIBUTES":
      return ServerMessageType.QR_CONTACT_INVITE_ATTRIBUTES;
    case 15:
    case "SPLICES":
      return ServerMessageType.SPLICES;
    case 16:
    case "SPLICE_MEMBERS":
      return ServerMessageType.SPLICE_MEMBERS;
    case 17:
    case "SPLICE_SHARES":
      return ServerMessageType.SPLICE_SHARES;
    case 18:
    case "PENDING_SPLICES":
      return ServerMessageType.PENDING_SPLICES;
    case 19:
    case "PENDING_SPLICE_MEMBERS":
      return ServerMessageType.PENDING_SPLICE_MEMBERS;
    case 20:
    case "SPLICE_INVITES":
      return ServerMessageType.SPLICE_INVITES;
    case 21:
    case "SPLICE_INVITE_ATTRIBUTES":
      return ServerMessageType.SPLICE_INVITE_ATTRIBUTES;
    case 22:
    case "QR_SPLICE_INVITES":
      return ServerMessageType.QR_SPLICE_INVITES;
    case 23:
    case "QR_SPLICE_INVITE_ATTRIBUTES":
      return ServerMessageType.QR_SPLICE_INVITE_ATTRIBUTES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ServerMessageType.UNRECOGNIZED;
  }
}

export function serverMessageTypeToJSON(object: ServerMessageType): string {
  switch (object) {
    case ServerMessageType.ERROR:
      return "ERROR";
    case ServerMessageType.CURRENT_SESSION:
      return "CURRENT_SESSION";
    case ServerMessageType.USER_PROFILE:
      return "USER_PROFILE";
    case ServerMessageType.USER_ATTRIBUTES:
      return "USER_ATTRIBUTES";
    case ServerMessageType.USER_ATTRIBUTE_GROUPS:
      return "USER_ATTRIBUTE_GROUPS";
    case ServerMessageType.USER_SESSIONS:
      return "USER_SESSIONS";
    case ServerMessageType.CONTACTS:
      return "CONTACTS";
    case ServerMessageType.CONTACT_ATTRIBUTES:
      return "CONTACT_ATTRIBUTES";
    case ServerMessageType.CONTACT_SHARES:
      return "CONTACT_SHARES";
    case ServerMessageType.PENDING_CONTACTS:
      return "PENDING_CONTACTS";
    case ServerMessageType.PENDING_CONTACT_ATTRIBUTES:
      return "PENDING_CONTACT_ATTRIBUTES";
    case ServerMessageType.CONTACT_INVITES:
      return "CONTACT_INVITES";
    case ServerMessageType.CONTACT_INVITE_ATTRIBUTES:
      return "CONTACT_INVITE_ATTRIBUTES";
    case ServerMessageType.QR_CONTACT_INVITES:
      return "QR_CONTACT_INVITES";
    case ServerMessageType.QR_CONTACT_INVITE_ATTRIBUTES:
      return "QR_CONTACT_INVITE_ATTRIBUTES";
    case ServerMessageType.SPLICES:
      return "SPLICES";
    case ServerMessageType.SPLICE_MEMBERS:
      return "SPLICE_MEMBERS";
    case ServerMessageType.SPLICE_SHARES:
      return "SPLICE_SHARES";
    case ServerMessageType.PENDING_SPLICES:
      return "PENDING_SPLICES";
    case ServerMessageType.PENDING_SPLICE_MEMBERS:
      return "PENDING_SPLICE_MEMBERS";
    case ServerMessageType.SPLICE_INVITES:
      return "SPLICE_INVITES";
    case ServerMessageType.SPLICE_INVITE_ATTRIBUTES:
      return "SPLICE_INVITE_ATTRIBUTES";
    case ServerMessageType.QR_SPLICE_INVITES:
      return "QR_SPLICE_INVITES";
    case ServerMessageType.QR_SPLICE_INVITE_ATTRIBUTES:
      return "QR_SPLICE_INVITE_ATTRIBUTES";
    default:
      return "UNKNOWN";
  }
}

/**
 * Sent in plain binary, except encrypted payload is data encrypted via AES key
 * encrypted_response is 0 bytes (not encrypted) if the ActionRequest was invalid
 */
export interface ServerMessage {
  messageType: ServerMessageType;
  messageId: number;
  /** used to clear expired entities on client side */
  serverTime: number;
  encryptedPayload: Uint8Array;
}

function createBaseServerMessage(): ServerMessage {
  return {
    messageType: 0,
    messageId: 0,
    serverTime: 0,
    encryptedPayload: new Uint8Array(),
  };
}

export const ServerMessage = {
  encode(
    message: ServerMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.messageType !== 0) {
      writer.uint32(8).int32(message.messageType);
    }
    if (message.messageId !== 0) {
      writer.uint32(16).uint32(message.messageId);
    }
    if (message.serverTime !== 0) {
      writer.uint32(24).uint32(message.serverTime);
    }
    if (message.encryptedPayload.length !== 0) {
      writer.uint32(34).bytes(message.encryptedPayload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageType = reader.int32() as any;
          break;
        case 2:
          message.messageId = reader.uint32();
          break;
        case 3:
          message.serverTime = reader.uint32();
          break;
        case 4:
          message.encryptedPayload = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ServerMessage {
    return {
      messageType: isSet(object.messageType)
        ? serverMessageTypeFromJSON(object.messageType)
        : 0,
      messageId: isSet(object.messageId) ? Number(object.messageId) : 0,
      serverTime: isSet(object.serverTime) ? Number(object.serverTime) : 0,
      encryptedPayload: isSet(object.encryptedPayload)
        ? bytesFromBase64(object.encryptedPayload)
        : new Uint8Array(),
    };
  },

  toJSON(message: ServerMessage): unknown {
    const obj: any = {};
    message.messageType !== undefined &&
      (obj.messageType = serverMessageTypeToJSON(message.messageType));
    message.messageId !== undefined &&
      (obj.messageId = Math.round(message.messageId));
    message.serverTime !== undefined &&
      (obj.serverTime = Math.round(message.serverTime));
    message.encryptedPayload !== undefined &&
      (obj.encryptedPayload = base64FromBytes(
        message.encryptedPayload !== undefined
          ? message.encryptedPayload
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ServerMessage>, I>>(
    object: I
  ): ServerMessage {
    const message = createBaseServerMessage();
    message.messageType = object.messageType ?? 0;
    message.messageId = object.messageId ?? 0;
    message.serverTime = object.serverTime ?? 0;
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
