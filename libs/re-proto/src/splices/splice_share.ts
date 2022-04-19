/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export interface SpliceShare {
  id: number;
  spliceId: number;
  attributeId: number;
  sharedOn: number;
}

export interface SpliceShareState {
  spliceShares: SpliceShare[];
  expiredIds: number[];
}

function createBaseSpliceShare(): SpliceShare {
  return { id: 0, spliceId: 0, attributeId: 0, sharedOn: 0 };
}

export const SpliceShare = {
  encode(
    message: SpliceShare,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.spliceId !== 0) {
      writer.uint32(16).uint32(message.spliceId);
    }
    if (message.attributeId !== 0) {
      writer.uint32(24).uint32(message.attributeId);
    }
    if (message.sharedOn !== 0) {
      writer.uint32(32).uint32(message.sharedOn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpliceShare {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpliceShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.spliceId = reader.uint32();
          break;
        case 3:
          message.attributeId = reader.uint32();
          break;
        case 4:
          message.sharedOn = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SpliceShare {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0,
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0,
      sharedOn: isSet(object.sharedOn) ? Number(object.sharedOn) : 0,
    };
  },

  toJSON(message: SpliceShare): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId));
    message.attributeId !== undefined &&
      (obj.attributeId = Math.round(message.attributeId));
    message.sharedOn !== undefined &&
      (obj.sharedOn = Math.round(message.sharedOn));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SpliceShare>, I>>(
    object: I
  ): SpliceShare {
    const message = createBaseSpliceShare();
    message.id = object.id ?? 0;
    message.spliceId = object.spliceId ?? 0;
    message.attributeId = object.attributeId ?? 0;
    message.sharedOn = object.sharedOn ?? 0;
    return message;
  },
};

function createBaseSpliceShareState(): SpliceShareState {
  return { spliceShares: [], expiredIds: [] };
}

export const SpliceShareState = {
  encode(
    message: SpliceShareState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.spliceShares) {
      SpliceShare.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.expiredIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpliceShareState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpliceShareState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spliceShares.push(
            SpliceShare.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): SpliceShareState {
    return {
      spliceShares: Array.isArray(object?.spliceShares)
        ? object.spliceShares.map((e: any) => SpliceShare.fromJSON(e))
        : [],
      expiredIds: Array.isArray(object?.expiredIds)
        ? object.expiredIds.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: SpliceShareState): unknown {
    const obj: any = {};
    if (message.spliceShares) {
      obj.spliceShares = message.spliceShares.map((e) =>
        e ? SpliceShare.toJSON(e) : undefined
      );
    } else {
      obj.spliceShares = [];
    }
    if (message.expiredIds) {
      obj.expiredIds = message.expiredIds.map((e) => Math.round(e));
    } else {
      obj.expiredIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SpliceShareState>, I>>(
    object: I
  ): SpliceShareState {
    const message = createBaseSpliceShareState();
    message.spliceShares =
      object.spliceShares?.map((e) => SpliceShare.fromPartial(e)) || [];
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
