/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export interface EditContactAlias {
  contactId: number;
  alias: string;
}

export interface EditContactDescription {
  contactId: number;
  description: string;
}

export interface FavorContact {
  contactId: number;
}

export interface UnfavorContact {
  contactId: number;
}

export interface MuteContact {
  contactId: number;
}

export interface UnmuteContact {
  contactId: number;
}

export interface ArchiveContact {
  contactId: number;
}

export interface UnarchiveContact {
  contactId: number;
}

export interface DeleteContact {
  contactId: number;
}

function createBaseEditContactAlias(): EditContactAlias {
  return { contactId: 0, alias: "" };
}

export const EditContactAlias = {
  encode(
    message: EditContactAlias,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId);
    }
    if (message.alias !== "") {
      writer.uint32(18).string(message.alias);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditContactAlias {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEditContactAlias();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contactId = reader.uint32();
          break;
        case 2:
          message.alias = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EditContactAlias {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0,
      alias: isSet(object.alias) ? String(object.alias) : "",
    };
  },

  toJSON(message: EditContactAlias): unknown {
    const obj: any = {};
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId));
    message.alias !== undefined && (obj.alias = message.alias);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EditContactAlias>, I>>(
    object: I
  ): EditContactAlias {
    const message = createBaseEditContactAlias();
    message.contactId = object.contactId ?? 0;
    message.alias = object.alias ?? "";
    return message;
  },
};

function createBaseEditContactDescription(): EditContactDescription {
  return { contactId: 0, description: "" };
}

export const EditContactDescription = {
  encode(
    message: EditContactDescription,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EditContactDescription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEditContactDescription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contactId = reader.uint32();
          break;
        case 2:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EditContactDescription {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0,
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: EditContactDescription): unknown {
    const obj: any = {};
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId));
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EditContactDescription>, I>>(
    object: I
  ): EditContactDescription {
    const message = createBaseEditContactDescription();
    message.contactId = object.contactId ?? 0;
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseFavorContact(): FavorContact {
  return { contactId: 0 };
}

export const FavorContact = {
  encode(
    message: FavorContact,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FavorContact {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFavorContact();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contactId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FavorContact {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0,
    };
  },

  toJSON(message: FavorContact): unknown {
    const obj: any = {};
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FavorContact>, I>>(
    object: I
  ): FavorContact {
    const message = createBaseFavorContact();
    message.contactId = object.contactId ?? 0;
    return message;
  },
};

function createBaseUnfavorContact(): UnfavorContact {
  return { contactId: 0 };
}

export const UnfavorContact = {
  encode(
    message: UnfavorContact,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnfavorContact {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnfavorContact();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contactId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnfavorContact {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0,
    };
  },

  toJSON(message: UnfavorContact): unknown {
    const obj: any = {};
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnfavorContact>, I>>(
    object: I
  ): UnfavorContact {
    const message = createBaseUnfavorContact();
    message.contactId = object.contactId ?? 0;
    return message;
  },
};

function createBaseMuteContact(): MuteContact {
  return { contactId: 0 };
}

export const MuteContact = {
  encode(
    message: MuteContact,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MuteContact {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMuteContact();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contactId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MuteContact {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0,
    };
  },

  toJSON(message: MuteContact): unknown {
    const obj: any = {};
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MuteContact>, I>>(
    object: I
  ): MuteContact {
    const message = createBaseMuteContact();
    message.contactId = object.contactId ?? 0;
    return message;
  },
};

function createBaseUnmuteContact(): UnmuteContact {
  return { contactId: 0 };
}

export const UnmuteContact = {
  encode(
    message: UnmuteContact,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnmuteContact {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnmuteContact();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contactId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnmuteContact {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0,
    };
  },

  toJSON(message: UnmuteContact): unknown {
    const obj: any = {};
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnmuteContact>, I>>(
    object: I
  ): UnmuteContact {
    const message = createBaseUnmuteContact();
    message.contactId = object.contactId ?? 0;
    return message;
  },
};

function createBaseArchiveContact(): ArchiveContact {
  return { contactId: 0 };
}

export const ArchiveContact = {
  encode(
    message: ArchiveContact,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArchiveContact {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArchiveContact();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contactId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ArchiveContact {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0,
    };
  },

  toJSON(message: ArchiveContact): unknown {
    const obj: any = {};
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ArchiveContact>, I>>(
    object: I
  ): ArchiveContact {
    const message = createBaseArchiveContact();
    message.contactId = object.contactId ?? 0;
    return message;
  },
};

function createBaseUnarchiveContact(): UnarchiveContact {
  return { contactId: 0 };
}

export const UnarchiveContact = {
  encode(
    message: UnarchiveContact,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnarchiveContact {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnarchiveContact();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contactId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnarchiveContact {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0,
    };
  },

  toJSON(message: UnarchiveContact): unknown {
    const obj: any = {};
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnarchiveContact>, I>>(
    object: I
  ): UnarchiveContact {
    const message = createBaseUnarchiveContact();
    message.contactId = object.contactId ?? 0;
    return message;
  },
};

function createBaseDeleteContact(): DeleteContact {
  return { contactId: 0 };
}

export const DeleteContact = {
  encode(
    message: DeleteContact,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contactId !== 0) {
      writer.uint32(8).uint32(message.contactId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteContact {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteContact();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contactId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteContact {
    return {
      contactId: isSet(object.contactId) ? Number(object.contactId) : 0,
    };
  },

  toJSON(message: DeleteContact): unknown {
    const obj: any = {};
    message.contactId !== undefined &&
      (obj.contactId = Math.round(message.contactId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteContact>, I>>(
    object: I
  ): DeleteContact {
    const message = createBaseDeleteContact();
    message.contactId = object.contactId ?? 0;
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
