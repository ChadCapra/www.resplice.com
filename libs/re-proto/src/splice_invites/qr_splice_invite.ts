/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export interface QrSpliceInvite {
  id: number;
  unlockCode: number;
  expiry: number;
}

function createBaseQrSpliceInvite(): QrSpliceInvite {
  return { id: 0, unlockCode: 0, expiry: 0 };
}

export const QrSpliceInvite = {
  encode(
    message: QrSpliceInvite,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.unlockCode !== 0) {
      writer.uint32(16).uint32(message.unlockCode);
    }
    if (message.expiry !== 0) {
      writer.uint32(24).uint32(message.expiry);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QrSpliceInvite {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQrSpliceInvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.unlockCode = reader.uint32();
          break;
        case 3:
          message.expiry = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QrSpliceInvite {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      unlockCode: isSet(object.unlockCode) ? Number(object.unlockCode) : 0,
      expiry: isSet(object.expiry) ? Number(object.expiry) : 0,
    };
  },

  toJSON(message: QrSpliceInvite): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.unlockCode !== undefined &&
      (obj.unlockCode = Math.round(message.unlockCode));
    message.expiry !== undefined && (obj.expiry = Math.round(message.expiry));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QrSpliceInvite>, I>>(
    object: I
  ): QrSpliceInvite {
    const message = createBaseQrSpliceInvite();
    message.id = object.id ?? 0;
    message.unlockCode = object.unlockCode ?? 0;
    message.expiry = object.expiry ?? 0;
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
