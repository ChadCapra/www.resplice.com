/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export interface EditProfileName {
  name: string;
}

export interface EditProfileHandle {
  handle: string;
}

export interface EditProfileAvatar {
  avatar: Uint8Array;
}

function createBaseEditProfileName(): EditProfileName {
  return { name: "" };
}

export const EditProfileName = {
  encode(
    message: EditProfileName,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditProfileName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEditProfileName();
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

  fromJSON(object: any): EditProfileName {
    return {
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: EditProfileName): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EditProfileName>, I>>(
    object: I
  ): EditProfileName {
    const message = createBaseEditProfileName();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseEditProfileHandle(): EditProfileHandle {
  return { handle: "" };
}

export const EditProfileHandle = {
  encode(
    message: EditProfileHandle,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.handle !== "") {
      writer.uint32(10).string(message.handle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditProfileHandle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEditProfileHandle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.handle = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EditProfileHandle {
    return {
      handle: isSet(object.handle) ? String(object.handle) : "",
    };
  },

  toJSON(message: EditProfileHandle): unknown {
    const obj: any = {};
    message.handle !== undefined && (obj.handle = message.handle);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EditProfileHandle>, I>>(
    object: I
  ): EditProfileHandle {
    const message = createBaseEditProfileHandle();
    message.handle = object.handle ?? "";
    return message;
  },
};

function createBaseEditProfileAvatar(): EditProfileAvatar {
  return { avatar: new Uint8Array() };
}

export const EditProfileAvatar = {
  encode(
    message: EditProfileAvatar,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.avatar.length !== 0) {
      writer.uint32(10).bytes(message.avatar);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditProfileAvatar {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEditProfileAvatar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.avatar = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EditProfileAvatar {
    return {
      avatar: isSet(object.avatar)
        ? bytesFromBase64(object.avatar)
        : new Uint8Array(),
    };
  },

  toJSON(message: EditProfileAvatar): unknown {
    const obj: any = {};
    message.avatar !== undefined &&
      (obj.avatar = base64FromBytes(
        message.avatar !== undefined ? message.avatar : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EditProfileAvatar>, I>>(
    object: I
  ): EditProfileAvatar {
    const message = createBaseEditProfileAvatar();
    message.avatar = object.avatar ?? new Uint8Array();
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
