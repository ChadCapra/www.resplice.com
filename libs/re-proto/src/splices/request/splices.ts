/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export interface CreateSplice {
  name: string;
  description: string;
  autoAcceptInvites: boolean;
  spliceIds: number[];
  memberIds: number[];
}

export interface EditSpliceName {
  name: string;
}

export interface EditSpliceDescription {
  description: string;
}

export interface EnableAutoAcceptInvites {
  spliceId: number;
}

export interface DisableAutoAcceptInvites {
  spliceId: number;
}

export interface FavorSplice {
  spliceId: number;
}

export interface UnfavorSplice {
  spliceId: number;
}

export interface MuteSplice {
  spliceId: number;
}

export interface UnmuteSplice {
  spliceId: number;
}

export interface ArchiveSplice {
  spliceId: number;
}

export interface UnarchiveSplice {
  spliceId: number;
}

export interface LeaveSplice {
  spliceId: number;
}

function createBaseCreateSplice(): CreateSplice {
  return {
    name: "",
    description: "",
    autoAcceptInvites: false,
    spliceIds: [],
    memberIds: [],
  };
}

export const CreateSplice = {
  encode(
    message: CreateSplice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.autoAcceptInvites === true) {
      writer.uint32(24).bool(message.autoAcceptInvites);
    }
    writer.uint32(34).fork();
    for (const v of message.spliceIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(42).fork();
    for (const v of message.memberIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSplice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSplice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.autoAcceptInvites = reader.bool();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.spliceIds.push(reader.uint32());
            }
          } else {
            message.spliceIds.push(reader.uint32());
          }
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.memberIds.push(reader.uint32());
            }
          } else {
            message.memberIds.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateSplice {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      autoAcceptInvites: isSet(object.autoAcceptInvites)
        ? Boolean(object.autoAcceptInvites)
        : false,
      spliceIds: Array.isArray(object?.spliceIds)
        ? object.spliceIds.map((e: any) => Number(e))
        : [],
      memberIds: Array.isArray(object?.memberIds)
        ? object.memberIds.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: CreateSplice): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.autoAcceptInvites !== undefined &&
      (obj.autoAcceptInvites = message.autoAcceptInvites);
    if (message.spliceIds) {
      obj.spliceIds = message.spliceIds.map((e) => Math.round(e));
    } else {
      obj.spliceIds = [];
    }
    if (message.memberIds) {
      obj.memberIds = message.memberIds.map((e) => Math.round(e));
    } else {
      obj.memberIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateSplice>, I>>(
    object: I
  ): CreateSplice {
    const message = createBaseCreateSplice();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.autoAcceptInvites = object.autoAcceptInvites ?? false;
    message.spliceIds = object.spliceIds?.map((e) => e) || [];
    message.memberIds = object.memberIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseEditSpliceName(): EditSpliceName {
  return { name: "" };
}

export const EditSpliceName = {
  encode(
    message: EditSpliceName,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditSpliceName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEditSpliceName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EditSpliceName {
    return {
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: EditSpliceName): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EditSpliceName>, I>>(
    object: I
  ): EditSpliceName {
    const message = createBaseEditSpliceName();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseEditSpliceDescription(): EditSpliceDescription {
  return { description: "" };
}

export const EditSpliceDescription = {
  encode(
    message: EditSpliceDescription,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EditSpliceDescription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEditSpliceDescription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EditSpliceDescription {
    return {
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: EditSpliceDescription): unknown {
    const obj: any = {};
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EditSpliceDescription>, I>>(
    object: I
  ): EditSpliceDescription {
    const message = createBaseEditSpliceDescription();
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseEnableAutoAcceptInvites(): EnableAutoAcceptInvites {
  return { spliceId: 0 };
}

export const EnableAutoAcceptInvites = {
  encode(
    message: EnableAutoAcceptInvites,
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
  ): EnableAutoAcceptInvites {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnableAutoAcceptInvites();
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

  fromJSON(object: any): EnableAutoAcceptInvites {
    return {
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0,
    };
  },

  toJSON(message: EnableAutoAcceptInvites): unknown {
    const obj: any = {};
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EnableAutoAcceptInvites>, I>>(
    object: I
  ): EnableAutoAcceptInvites {
    const message = createBaseEnableAutoAcceptInvites();
    message.spliceId = object.spliceId ?? 0;
    return message;
  },
};

function createBaseDisableAutoAcceptInvites(): DisableAutoAcceptInvites {
  return { spliceId: 0 };
}

export const DisableAutoAcceptInvites = {
  encode(
    message: DisableAutoAcceptInvites,
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
  ): DisableAutoAcceptInvites {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisableAutoAcceptInvites();
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

  fromJSON(object: any): DisableAutoAcceptInvites {
    return {
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0,
    };
  },

  toJSON(message: DisableAutoAcceptInvites): unknown {
    const obj: any = {};
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DisableAutoAcceptInvites>, I>>(
    object: I
  ): DisableAutoAcceptInvites {
    const message = createBaseDisableAutoAcceptInvites();
    message.spliceId = object.spliceId ?? 0;
    return message;
  },
};

function createBaseFavorSplice(): FavorSplice {
  return { spliceId: 0 };
}

export const FavorSplice = {
  encode(
    message: FavorSplice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FavorSplice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFavorSplice();
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

  fromJSON(object: any): FavorSplice {
    return {
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0,
    };
  },

  toJSON(message: FavorSplice): unknown {
    const obj: any = {};
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FavorSplice>, I>>(
    object: I
  ): FavorSplice {
    const message = createBaseFavorSplice();
    message.spliceId = object.spliceId ?? 0;
    return message;
  },
};

function createBaseUnfavorSplice(): UnfavorSplice {
  return { spliceId: 0 };
}

export const UnfavorSplice = {
  encode(
    message: UnfavorSplice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnfavorSplice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnfavorSplice();
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

  fromJSON(object: any): UnfavorSplice {
    return {
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0,
    };
  },

  toJSON(message: UnfavorSplice): unknown {
    const obj: any = {};
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnfavorSplice>, I>>(
    object: I
  ): UnfavorSplice {
    const message = createBaseUnfavorSplice();
    message.spliceId = object.spliceId ?? 0;
    return message;
  },
};

function createBaseMuteSplice(): MuteSplice {
  return { spliceId: 0 };
}

export const MuteSplice = {
  encode(
    message: MuteSplice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MuteSplice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMuteSplice();
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

  fromJSON(object: any): MuteSplice {
    return {
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0,
    };
  },

  toJSON(message: MuteSplice): unknown {
    const obj: any = {};
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MuteSplice>, I>>(
    object: I
  ): MuteSplice {
    const message = createBaseMuteSplice();
    message.spliceId = object.spliceId ?? 0;
    return message;
  },
};

function createBaseUnmuteSplice(): UnmuteSplice {
  return { spliceId: 0 };
}

export const UnmuteSplice = {
  encode(
    message: UnmuteSplice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnmuteSplice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnmuteSplice();
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

  fromJSON(object: any): UnmuteSplice {
    return {
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0,
    };
  },

  toJSON(message: UnmuteSplice): unknown {
    const obj: any = {};
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnmuteSplice>, I>>(
    object: I
  ): UnmuteSplice {
    const message = createBaseUnmuteSplice();
    message.spliceId = object.spliceId ?? 0;
    return message;
  },
};

function createBaseArchiveSplice(): ArchiveSplice {
  return { spliceId: 0 };
}

export const ArchiveSplice = {
  encode(
    message: ArchiveSplice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArchiveSplice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArchiveSplice();
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

  fromJSON(object: any): ArchiveSplice {
    return {
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0,
    };
  },

  toJSON(message: ArchiveSplice): unknown {
    const obj: any = {};
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ArchiveSplice>, I>>(
    object: I
  ): ArchiveSplice {
    const message = createBaseArchiveSplice();
    message.spliceId = object.spliceId ?? 0;
    return message;
  },
};

function createBaseUnarchiveSplice(): UnarchiveSplice {
  return { spliceId: 0 };
}

export const UnarchiveSplice = {
  encode(
    message: UnarchiveSplice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnarchiveSplice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnarchiveSplice();
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

  fromJSON(object: any): UnarchiveSplice {
    return {
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0,
    };
  },

  toJSON(message: UnarchiveSplice): unknown {
    const obj: any = {};
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnarchiveSplice>, I>>(
    object: I
  ): UnarchiveSplice {
    const message = createBaseUnarchiveSplice();
    message.spliceId = object.spliceId ?? 0;
    return message;
  },
};

function createBaseLeaveSplice(): LeaveSplice {
  return { spliceId: 0 };
}

export const LeaveSplice = {
  encode(
    message: LeaveSplice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spliceId !== 0) {
      writer.uint32(8).uint32(message.spliceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LeaveSplice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeaveSplice();
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

  fromJSON(object: any): LeaveSplice {
    return {
      spliceId: isSet(object.spliceId) ? Number(object.spliceId) : 0,
    };
  },

  toJSON(message: LeaveSplice): unknown {
    const obj: any = {};
    message.spliceId !== undefined &&
      (obj.spliceId = Math.round(message.spliceId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LeaveSplice>, I>>(
    object: I
  ): LeaveSplice {
    const message = createBaseLeaveSplice();
    message.spliceId = object.spliceId ?? 0;
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
