/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export interface AddSpliceMember {
  spliceId: number;
  contactId: number;
}

export interface RemoveSpliceMember {
  spliceMemberId: number;
}

export interface EnableSpliceModerator {
  spliceMemberId: number;
}

export interface DisableSpliceModerator {
  spliceMemberId: number;
}

function createBaseAddSpliceMember(): AddSpliceMember {
  return { spliceId: 0, contactId: 0 };
}

export const AddSpliceMember = {
  encode(
    message: AddSpliceMember,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId);
    }
    if (message.contactId !== 0) {
      writer.uint32(16).uint32(message.contactId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddSpliceMember {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddSpliceMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spliceId = reader.uint32();
          break;
        case 2:
          message.contactId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddSpliceMember {
    return {
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0,
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0,
    };
  },

  toJSON(message: AddSpliceMember): unknown {
    const obj: any = {};
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId));
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddSpliceMember>, I>>(
    object: I
  ): AddSpliceMember {
    const message = createBaseAddSpliceMember();
    message.spliceId = object.spliceId ?? 0;
    message.contactId = object.contactId ?? 0;
    return message;
  },
};

function createBaseRemoveSpliceMember(): RemoveSpliceMember {
  return { spliceMemberId: 0 };
}

export const RemoveSpliceMember = {
  encode(
    message: RemoveSpliceMember,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceMemberId !== 0) {
      writer.uint32(8).uint32(message.spliceMemberId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveSpliceMember {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveSpliceMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spliceMemberId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveSpliceMember {
    return {
      spliceMemberId: isSet(object.spliceMemberId)
        ? Number(object.spliceMemberId)
        : 0,
    };
  },

  toJSON(message: RemoveSpliceMember): unknown {
    const obj: any = {};
    message.spliceMemberId !== undefined &&
      (obj.spliceMemberId = Math.round(message.spliceMemberId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveSpliceMember>, I>>(
    object: I
  ): RemoveSpliceMember {
    const message = createBaseRemoveSpliceMember();
    message.spliceMemberId = object.spliceMemberId ?? 0;
    return message;
  },
};

function createBaseEnableSpliceModerator(): EnableSpliceModerator {
  return { spliceMemberId: 0 };
}

export const EnableSpliceModerator = {
  encode(
    message: EnableSpliceModerator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceMemberId !== 0) {
      writer.uint32(8).uint32(message.spliceMemberId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EnableSpliceModerator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnableSpliceModerator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spliceMemberId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EnableSpliceModerator {
    return {
      spliceMemberId: isSet(object.spliceMemberId)
        ? Number(object.spliceMemberId)
        : 0,
    };
  },

  toJSON(message: EnableSpliceModerator): unknown {
    const obj: any = {};
    message.spliceMemberId !== undefined &&
      (obj.spliceMemberId = Math.round(message.spliceMemberId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EnableSpliceModerator>, I>>(
    object: I
  ): EnableSpliceModerator {
    const message = createBaseEnableSpliceModerator();
    message.spliceMemberId = object.spliceMemberId ?? 0;
    return message;
  },
};

function createBaseDisableSpliceModerator(): DisableSpliceModerator {
  return { spliceMemberId: 0 };
}

export const DisableSpliceModerator = {
  encode(
    message: DisableSpliceModerator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceMemberId !== 0) {
      writer.uint32(8).uint32(message.spliceMemberId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DisableSpliceModerator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisableSpliceModerator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spliceMemberId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DisableSpliceModerator {
    return {
      spliceMemberId: isSet(object.spliceMemberId)
        ? Number(object.spliceMemberId)
        : 0,
    };
  },

  toJSON(message: DisableSpliceModerator): unknown {
    const obj: any = {};
    message.spliceMemberId !== undefined &&
      (obj.spliceMemberId = Math.round(message.spliceMemberId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DisableSpliceModerator>, I>>(
    object: I
  ): DisableSpliceModerator {
    const message = createBaseDisableSpliceModerator();
    message.spliceMemberId = object.spliceMemberId ?? 0;
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
