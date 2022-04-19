/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Phone } from "../attributes/attribute_value";

export interface Session {
  id: number;
  email: string;
  phone: Phone | undefined;
  emailVerifiedAt: number;
  phoneVerifiedAt: number;
  authenticatedAt: number;
  rememberMe: boolean;
  expiry: number;
}

export interface SessionState {
  sessions: Session[];
  expiredIds: number[];
}

function createBaseSession(): Session {
  return {
    id: 0,
    email: "",
    phone: undefined,
    emailVerifiedAt: 0,
    phoneVerifiedAt: 0,
    authenticatedAt: 0,
    rememberMe: false,
    expiry: 0,
  };
}

export const Session = {
  encode(
    message: Session,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.phone !== undefined) {
      Phone.encode(message.phone, writer.uint32(26).fork()).ldelim();
    }
    if (message.emailVerifiedAt !== 0) {
      writer.uint32(32).uint32(message.emailVerifiedAt);
    }
    if (message.phoneVerifiedAt !== 0) {
      writer.uint32(40).uint32(message.phoneVerifiedAt);
    }
    if (message.authenticatedAt !== 0) {
      writer.uint32(48).uint32(message.authenticatedAt);
    }
    if (message.rememberMe === true) {
      writer.uint32(56).bool(message.rememberMe);
    }
    if (message.expiry !== 0) {
      writer.uint32(64).uint32(message.expiry);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Session {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.email = reader.string();
          break;
        case 3:
          message.phone = Phone.decode(reader, reader.uint32());
          break;
        case 4:
          message.emailVerifiedAt = reader.uint32();
          break;
        case 5:
          message.phoneVerifiedAt = reader.uint32();
          break;
        case 6:
          message.authenticatedAt = reader.uint32();
          break;
        case 7:
          message.rememberMe = reader.bool();
          break;
        case 8:
          message.expiry = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Session {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      email: isSet(object.email) ? String(object.email) : "",
      phone: isSet(object.phone) ? Phone.fromJSON(object.phone) : undefined,
      emailVerifiedAt: isSet(object.emailVerifiedAt)
        ? Number(object.emailVerifiedAt)
        : 0,
      phoneVerifiedAt: isSet(object.phoneVerifiedAt)
        ? Number(object.phoneVerifiedAt)
        : 0,
      authenticatedAt: isSet(object.authenticatedAt)
        ? Number(object.authenticatedAt)
        : 0,
      rememberMe: isSet(object.rememberMe) ? Boolean(object.rememberMe) : false,
      expiry: isSet(object.expiry) ? Number(object.expiry) : 0,
    };
  },

  toJSON(message: Session): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.email !== undefined && (obj.email = message.email);
    message.phone !== undefined &&
      (obj.phone = message.phone ? Phone.toJSON(message.phone) : undefined);
    message.emailVerifiedAt !== undefined &&
      (obj.emailVerifiedAt = Math.round(message.emailVerifiedAt));
    message.phoneVerifiedAt !== undefined &&
      (obj.phoneVerifiedAt = Math.round(message.phoneVerifiedAt));
    message.authenticatedAt !== undefined &&
      (obj.authenticatedAt = Math.round(message.authenticatedAt));
    message.rememberMe !== undefined && (obj.rememberMe = message.rememberMe);
    message.expiry !== undefined && (obj.expiry = Math.round(message.expiry));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Session>, I>>(object: I): Session {
    const message = createBaseSession();
    message.id = object.id ?? 0;
    message.email = object.email ?? "";
    message.phone =
      object.phone !== undefined && object.phone !== null
        ? Phone.fromPartial(object.phone)
        : undefined;
    message.emailVerifiedAt = object.emailVerifiedAt ?? 0;
    message.phoneVerifiedAt = object.phoneVerifiedAt ?? 0;
    message.authenticatedAt = object.authenticatedAt ?? 0;
    message.rememberMe = object.rememberMe ?? false;
    message.expiry = object.expiry ?? 0;
    return message;
  },
};

function createBaseSessionState(): SessionState {
  return { sessions: [], expiredIds: [] };
}

export const SessionState = {
  encode(
    message: SessionState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.sessions) {
      Session.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.expiredIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SessionState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSessionState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessions.push(Session.decode(reader, reader.uint32()));
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.expiredIds.push(reader.uint32());
            }
          } else {
            message.expiredIds.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SessionState {
    return {
      sessions: Array.isArray(object?.sessions)
        ? object.sessions.map((e: any) => Session.fromJSON(e))
        : [],
      expiredIds: Array.isArray(object?.expiredIds)
        ? object.expiredIds.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: SessionState): unknown {
    const obj: any = {};
    if (message.sessions) {
      obj.sessions = message.sessions.map((e) =>
        e ? Session.toJSON(e) : undefined
      );
    } else {
      obj.sessions = [];
    }
    if (message.expiredIds) {
      obj.expiredIds = message.expiredIds.map((e) => Math.round(e));
    } else {
      obj.expiredIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SessionState>, I>>(
    object: I
  ): SessionState {
    const message = createBaseSessionState();
    message.sessions =
      object.sessions?.map((e) => Session.fromPartial(e)) || [];
    message.expiredIds = object.expiredIds?.map((e) => e) || [];
    return message;
  },
};

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
