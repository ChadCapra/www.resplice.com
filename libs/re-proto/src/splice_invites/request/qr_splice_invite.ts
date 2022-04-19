/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export interface CreateQrSpliceInvite {
  spliceId: number;
}

export interface DeleteQrSpliceInvite {
  qrInviteId: number;
}

function createBaseCreateQrSpliceInvite(): CreateQrSpliceInvite {
  return { spliceId: 0 };
}

export const CreateQrSpliceInvite = {
  encode(
    message: CreateQrSpliceInvite,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateQrSpliceInvite {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateQrSpliceInvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spliceId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateQrSpliceInvite {
    return {
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0,
    };
  },

  toJSON(message: CreateQrSpliceInvite): unknown {
    const obj: any = {};
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateQrSpliceInvite>, I>>(
    object: I
  ): CreateQrSpliceInvite {
    const message = createBaseCreateQrSpliceInvite();
    message.spliceId = object.spliceId ?? 0;
    return message;
  },
};

function createBaseDeleteQrSpliceInvite(): DeleteQrSpliceInvite {
  return { qrInviteId: 0 };
}

export const DeleteQrSpliceInvite = {
  encode(
    message: DeleteQrSpliceInvite,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.qrInviteId !== 0) {
      writer.uint32(8).uint32(message.qrInviteId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteQrSpliceInvite {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteQrSpliceInvite();
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

  fromJSON(object: any): DeleteQrSpliceInvite {
    return {
      qrInviteId: isSet(object.qrInviteId) ? Number(object.qrInviteId) : 0,
    };
  },

  toJSON(message: DeleteQrSpliceInvite): unknown {
    const obj: any = {};
    message.qrInviteId !== undefined &&
      (obj.qrInviteId = Math.round(message.qrInviteId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteQrSpliceInvite>, I>>(
    object: I
  ): DeleteQrSpliceInvite {
    const message = createBaseDeleteQrSpliceInvite();
    message.qrInviteId = object.qrInviteId ?? 0;
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
