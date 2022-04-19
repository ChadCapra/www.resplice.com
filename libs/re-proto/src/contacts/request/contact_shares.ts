/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export interface AddContactShare {
  contactId: number;
  attributeId: number;
}

export interface RemoveContactShare {
  contactShareId: number;
}

function createBaseAddContactShare(): AddContactShare {
  return { contactId: 0, attributeId: 0 };
}

export const AddContactShare = {
  encode(
    message: AddContactShare,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId);
    }
    if (message.attributeId !== 0) {
      writer.uint32(16).uint32(message.attributeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddContactShare {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddContactShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contactId = reader.uint32();
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

  fromJSON(object: any): AddContactShare {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0,
      attributeId: isSet(object.attributeId) ? Number(object.attributeId) : 0,
    };
  },

  toJSON(message: AddContactShare): unknown {
    const obj: any = {};
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId));
    message.attributeId !== undefined &&
      (obj.attributeId = Math.round(message.attributeId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddContactShare>, I>>(
    object: I
  ): AddContactShare {
    const message = createBaseAddContactShare();
    message.contactId = object.contactId ?? 0;
    message.attributeId = object.attributeId ?? 0;
    return message;
  },
};

function createBaseRemoveContactShare(): RemoveContactShare {
  return { contactShareId: 0 };
}

export const RemoveContactShare = {
  encode(
    message: RemoveContactShare,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactShareId !== 0) {
      writer.uint32(8).uint32(message.contactShareId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveContactShare {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveContactShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contactShareId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveContactShare {
    return {
      contactShareId: isSet(object.contactShareId)
        ? Number(object.contactShareId)
        : 0,
    };
  },

  toJSON(message: RemoveContactShare): unknown {
    const obj: any = {};
    message.contactShareId !== undefined &&
      (obj.contactShareId = Math.round(message.contactShareId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveContactShare>, I>>(
    object: I
  ): RemoveContactShare {
    const message = createBaseRemoveContactShare();
    message.contactShareId = object.contactShareId ?? 0;
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
