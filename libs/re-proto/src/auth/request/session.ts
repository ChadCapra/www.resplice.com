/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Phone } from "../../attributes/attribute_value";

/**
 * payload must be encrypted with server's public key on first request
 * Returns: Session (Access token & session ID in cookie)
 */
export interface CreateSession {
  email: string;
  phone: Phone | undefined;
  rememberMe: boolean;
  /** iv_base is last 8 bytes */
  aesKeyIvBase: Uint8Array;
}

/** Returns: Encrypted Session */
export interface VerifySessionEmail {
  verificationToken: number;
}

export interface VerifySessionPhone {
  verificationToken: number;
}

/** If currentSession, returns session w/ expiry set to 0 */
export interface DeleteSession {
  sessionId: number;
}

function createBaseCreateSession(): CreateSession {
  return {
    email: "",
    phone: undefined,
    rememberMe: false,
    aesKeyIvBase: new Uint8Array(),
  };
}

export const CreateSession = {
  encode(
    message: CreateSession,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.phone !== undefined) {
      Phone.encode(message.phone, writer.uint32(18).fork()).ldelim();
    }
    if (message.rememberMe === true) {
      writer.uint32(24).bool(message.rememberMe);
    }
    if (message.aesKeyIvBase.length !== 0) {
      writer.uint32(34).bytes(message.aesKeyIvBase);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSession {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;
        case 2:
          message.phone = Phone.decode(reader, reader.uint32());
          break;
        case 3:
          message.rememberMe = reader.bool();
          break;
        case 4:
          message.aesKeyIvBase = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateSession {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      phone: isSet(object.phone) ? Phone.fromJSON(object.phone) : undefined,
      rememberMe: isSet(object.rememberMe) ? Boolean(object.rememberMe) : false,
      aesKeyIvBase: isSet(object.aesKeyIvBase)
        ? bytesFromBase64(object.aesKeyIvBase)
        : new Uint8Array(),
    };
  },

  toJSON(message: CreateSession): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.phone !== undefined &&
      (obj.phone = message.phone ? Phone.toJSON(message.phone) : undefined);
    message.rememberMe !== undefined && (obj.rememberMe = message.rememberMe);
    message.aesKeyIvBase !== undefined &&
      (obj.aesKeyIvBase = base64FromBytes(
        message.aesKeyIvBase !== undefined
          ? message.aesKeyIvBase
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateSession>, I>>(
    object: I
  ): CreateSession {
    const message = createBaseCreateSession();
    message.email = object.email ?? "";
    message.phone =
      object.phone !== undefined && object.phone !== null
        ? Phone.fromPartial(object.phone)
        : undefined;
    message.rememberMe = object.rememberMe ?? false;
    message.aesKeyIvBase = object.aesKeyIvBase ?? new Uint8Array();
    return message;
  },
};

function createBaseVerifySessionEmail(): VerifySessionEmail {
  return { verificationToken: 0 };
}

export const VerifySessionEmail = {
  encode(
    message: VerifySessionEmail,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.verificationToken !== 0) {
      writer.uint32(8).uint32(message.verificationToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifySessionEmail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifySessionEmail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verificationToken = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VerifySessionEmail {
    return {
      verificationToken: isSet(object.verificationToken)
        ? Number(object.verificationToken)
        : 0,
    };
  },

  toJSON(message: VerifySessionEmail): unknown {
    const obj: any = {};
    message.verificationToken !== undefined &&
      (obj.verificationToken = Math.round(message.verificationToken));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VerifySessionEmail>, I>>(
    object: I
  ): VerifySessionEmail {
    const message = createBaseVerifySessionEmail();
    message.verificationToken = object.verificationToken ?? 0;
    return message;
  },
};

function createBaseVerifySessionPhone(): VerifySessionPhone {
  return { verificationToken: 0 };
}

export const VerifySessionPhone = {
  encode(
    message: VerifySessionPhone,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.verificationToken !== 0) {
      writer.uint32(8).uint32(message.verificationToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifySessionPhone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifySessionPhone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verificationToken = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VerifySessionPhone {
    return {
      verificationToken: isSet(object.verificationToken)
        ? Number(object.verificationToken)
        : 0,
    };
  },

  toJSON(message: VerifySessionPhone): unknown {
    const obj: any = {};
    message.verificationToken !== undefined &&
      (obj.verificationToken = Math.round(message.verificationToken));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VerifySessionPhone>, I>>(
    object: I
  ): VerifySessionPhone {
    const message = createBaseVerifySessionPhone();
    message.verificationToken = object.verificationToken ?? 0;
    return message;
  },
};

function createBaseDeleteSession(): DeleteSession {
  return { sessionId: 0 };
}

export const DeleteSession = {
  encode(
    message: DeleteSession,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sessionId !== 0) {
      writer.uint32(8).uint32(message.sessionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteSession {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteSession {
    return {
      sessionId: isSet(object.sessionId) ? Number(object.sessionId) : 0,
    };
  },

  toJSON(message: DeleteSession): unknown {
    const obj: any = {};
    message.sessionId !== undefined &&
      (obj.sessionId = Math.round(message.sessionId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteSession>, I>>(
    object: I
  ): DeleteSession {
    const message = createBaseDeleteSession();
    message.sessionId = object.sessionId ?? 0;
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
