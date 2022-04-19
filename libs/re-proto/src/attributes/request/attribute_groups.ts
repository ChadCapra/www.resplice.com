/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export interface CreateAttributeGroup {
  name: string;
}

export interface EditAttributeGroupName {
  id: number;
  name: string;
}

export interface SortAttributeGroup {
  id: number;
  newPosition: number;
}

export interface DeleteAttributeGroup {
  id: number;
}

function createBaseCreateAttributeGroup(): CreateAttributeGroup {
  return { name: "" };
}

export const CreateAttributeGroup = {
  encode(
    message: CreateAttributeGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateAttributeGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAttributeGroup();
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

  fromJSON(object: any): CreateAttributeGroup {
    return {
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: CreateAttributeGroup): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateAttributeGroup>, I>>(
    object: I
  ): CreateAttributeGroup {
    const message = createBaseCreateAttributeGroup();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseEditAttributeGroupName(): EditAttributeGroupName {
  return { id: 0, name: "" };
}

export const EditAttributeGroupName = {
  encode(
    message: EditAttributeGroupName,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EditAttributeGroupName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEditAttributeGroupName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EditAttributeGroupName {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: EditAttributeGroupName): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EditAttributeGroupName>, I>>(
    object: I
  ): EditAttributeGroupName {
    const message = createBaseEditAttributeGroupName();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseSortAttributeGroup(): SortAttributeGroup {
  return { id: 0, newPosition: 0 };
}

export const SortAttributeGroup = {
  encode(
    message: SortAttributeGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.newPosition !== 0) {
      writer.uint32(16).uint32(message.newPosition);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SortAttributeGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSortAttributeGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.newPosition = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SortAttributeGroup {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      newPosition: isSet(object.newPosition) ? Number(object.newPosition) : 0,
    };
  },

  toJSON(message: SortAttributeGroup): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.newPosition !== undefined &&
      (obj.newPosition = Math.round(message.newPosition));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SortAttributeGroup>, I>>(
    object: I
  ): SortAttributeGroup {
    const message = createBaseSortAttributeGroup();
    message.id = object.id ?? 0;
    message.newPosition = object.newPosition ?? 0;
    return message;
  },
};

function createBaseDeleteAttributeGroup(): DeleteAttributeGroup {
  return { id: 0 };
}

export const DeleteAttributeGroup = {
  encode(
    message: DeleteAttributeGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteAttributeGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAttributeGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteAttributeGroup {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: DeleteAttributeGroup): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteAttributeGroup>, I>>(
    object: I
  ): DeleteAttributeGroup {
    const message = createBaseDeleteAttributeGroup();
    message.id = object.id ?? 0;
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
