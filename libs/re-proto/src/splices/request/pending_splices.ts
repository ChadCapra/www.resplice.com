/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export interface CreatePendingSpliceViaQR {
  inviteUuid: Uint8Array;
}

export interface AcceptPendingSplice {
  pendingSpliceId: number;
  attributeIds: number[];
}

export interface DeclinePendingSplice {
  pendingSpliceId: number;
}

function createBaseCreatePendingSpliceViaQR(): CreatePendingSpliceViaQR {
  return { inviteUuid: new Uint8Array() };
}

export const CreatePendingSpliceViaQR = {
  encode(
    message: CreatePendingSpliceViaQR,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.inviteUuid.length !== 0) {
      writer.uint32(10).bytes(message.inviteUuid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreatePendingSpliceViaQR {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePendingSpliceViaQR();
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

  fromJSON(object: any): CreatePendingSpliceViaQR {
    return {
      inviteUuid: isSet(object.inviteUuid)
        ? bytesFromBase64(object.inviteUuid)
        : new Uint8Array(),
    };
  },

  toJSON(message: CreatePendingSpliceViaQR): unknown {
    const obj: any = {};
    message.inviteUuid !== undefined &&
      (obj.inviteUuid = base64FromBytes(
        message.inviteUuid !== undefined ? message.inviteUuid : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreatePendingSpliceViaQR>, I>>(
    object: I
  ): CreatePendingSpliceViaQR {
    const message = createBaseCreatePendingSpliceViaQR();
    message.inviteUuid = object.inviteUuid ?? new Uint8Array();
    return message;
  },
};

function createBaseAcceptPendingSplice(): AcceptPendingSplice {
  return { pendingSpliceId: 0, attributeIds: [] };
}

export const AcceptPendingSplice = {
  encode(
    message: AcceptPendingSplice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pendingSpliceId !== 0) {
      writer.uint32(8).uint32(message.pendingSpliceId);
    }
    writer.uint32(18).fork();
    for (const v of message.attributeIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcceptPendingSplice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptPendingSplice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingSpliceId = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.attributeIds.push(reader.uint32());
            }
          } else {
            message.attributeIds.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AcceptPendingSplice {
    return {
      pendingSpliceId: isSet(object.pendingSpliceId)
        ? Number(object.pendingSpliceId)
        : 0,
      attributeIds: Array.isArray(object?.attributeIds)
        ? object.attributeIds.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: AcceptPendingSplice): unknown {
    const obj: any = {};
    message.pendingSpliceId !== undefined &&
      (obj.pendingSpliceId = Math.round(message.pendingSpliceId));
    if (message.attributeIds) {
      obj.attributeIds = message.attributeIds.map((e) => Math.round(e));
    } else {
      obj.attributeIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AcceptPendingSplice>, I>>(
    object: I
  ): AcceptPendingSplice {
    const message = createBaseAcceptPendingSplice();
    message.pendingSpliceId = object.pendingSpliceId ?? 0;
    message.attributeIds = object.attributeIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseDeclinePendingSplice(): DeclinePendingSplice {
  return { pendingSpliceId: 0 };
}

export const DeclinePendingSplice = {
  encode(
    message: DeclinePendingSplice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pendingSpliceId !== 0) {
      writer.uint32(8).uint32(message.pendingSpliceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeclinePendingSplice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeclinePendingSplice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingSpliceId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeclinePendingSplice {
    return {
      pendingSpliceId: isSet(object.pendingSpliceId)
        ? Number(object.pendingSpliceId)
        : 0,
    };
  },

  toJSON(message: DeclinePendingSplice): unknown {
    const obj: any = {};
    message.pendingSpliceId !== undefined &&
      (obj.pendingSpliceId = Math.round(message.pendingSpliceId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeclinePendingSplice>, I>>(
    object: I
  ): DeclinePendingSplice {
    const message = createBaseDeclinePendingSplice();
    message.pendingSpliceId = object.pendingSpliceId ?? 0;
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
