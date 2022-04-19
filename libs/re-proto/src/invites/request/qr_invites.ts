/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

/** repeated uint32 attribute_ids = 1; */
export interface CreateQrInvite {}

export interface DeleteQrInvite {
  qrInviteId: number;
}

export interface OpenQrInvite {
  inviteUuid: Uint8Array;
}

function createBaseCreateQrInvite(): CreateQrInvite {
  return {};
}

export const CreateQrInvite = {
  encode(
    _: CreateQrInvite,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateQrInvite {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateQrInvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): CreateQrInvite {
    return {};
  },

  toJSON(_: CreateQrInvite): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateQrInvite>, I>>(
    _: I
  ): CreateQrInvite {
    const message = createBaseCreateQrInvite();
    return message;
  },
};

function createBaseDeleteQrInvite(): DeleteQrInvite {
  return { qrInviteId: 0 };
}

export const DeleteQrInvite = {
  encode(
    message: DeleteQrInvite,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.qrInviteId !== 0) {
      writer.uint32(8).uint32(message.qrInviteId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteQrInvite {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteQrInvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.qrInviteId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteQrInvite {
    return {
      qrInviteId: isSet(object.qrInviteId) ? Number(object.qrInviteId) : 0,
    };
  },

  toJSON(message: DeleteQrInvite): unknown {
    const obj: any = {};
    message.qrInviteId !== undefined &&
      (obj.qrInviteId = Math.round(message.qrInviteId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteQrInvite>, I>>(
    object: I
  ): DeleteQrInvite {
    const message = createBaseDeleteQrInvite();
    message.qrInviteId = object.qrInviteId ?? 0;
    return message;
  },
};

function createBaseOpenQrInvite(): OpenQrInvite {
  return { inviteUuid: new Uint8Array() };
}

export const OpenQrInvite = {
  encode(
    message: OpenQrInvite,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.inviteUuid.length !== 0) {
      writer.uint32(10).bytes(message.inviteUuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenQrInvite {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenQrInvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inviteUuid = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpenQrInvite {
    return {
      inviteUuid: isSet(object.inviteUuid)
        ? bytesFromBase64(object.inviteUuid)
        : new Uint8Array(),
    };
  },

  toJSON(message: OpenQrInvite): unknown {
    const obj: any = {};
    message.inviteUuid !== undefined &&
      (obj.inviteUuid = base64FromBytes(
        message.inviteUuid !== undefined ? message.inviteUuid : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OpenQrInvite>, I>>(
    object: I
  ): OpenQrInvite {
    const message = createBaseOpenQrInvite();
    message.inviteUuid = object.inviteUuid ?? new Uint8Array();
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
