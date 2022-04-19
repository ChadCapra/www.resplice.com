/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export interface AddSpliceShare {
  spliceId: number;
  attributeId: number;
}

export interface RemoveSpliceShare {
  spliceShareId: number;
}

function createBaseAddSpliceShare(): AddSpliceShare {
  return { spliceId: 0, attributeId: 0 };
}

export const AddSpliceShare = {
  encode(
    message: AddSpliceShare,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId);
    }
    if (message.attributeId !== 0) {
      writer.uint32(16).uint32(message.attributeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddSpliceShare {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddSpliceShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spliceId = reader.uint32();
          break;
        case 2:
          message.attributeId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddSpliceShare {
    return {
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0,
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0,
    };
  },

  toJSON(message: AddSpliceShare): unknown {
    const obj: any = {};
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId));
    message.attributeId !== undefined &&
      (obj.attributeId = Math.round(message.attributeId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddSpliceShare>, I>>(
    object: I
  ): AddSpliceShare {
    const message = createBaseAddSpliceShare();
    message.spliceId = object.spliceId ?? 0;
    message.attributeId = object.attributeId ?? 0;
    return message;
  },
};

function createBaseRemoveSpliceShare(): RemoveSpliceShare {
  return { spliceShareId: 0 };
}

export const RemoveSpliceShare = {
  encode(
    message: RemoveSpliceShare,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceShareId !== 0) {
      writer.uint32(8).uint32(message.spliceShareId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveSpliceShare {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveSpliceShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spliceShareId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveSpliceShare {
    return {
      spliceShareId: isSet(object.spliceShareId)
        ? Number(object.spliceShareId)
        : 0,
    };
  },

  toJSON(message: RemoveSpliceShare): unknown {
    const obj: any = {};
    message.spliceShareId !== undefined &&
      (obj.spliceShareId = Math.round(message.spliceShareId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveSpliceShare>, I>>(
    object: I
  ): RemoveSpliceShare {
    const message = createBaseRemoveSpliceShare();
    message.spliceShareId = object.spliceShareId ?? 0;
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