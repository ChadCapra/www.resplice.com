/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export interface Profile {
  /** string uuid = 1; // Do I need UUID? */
  name: string;
  avatarUrl: string;
  handle: string;
  userRegisteredAt: number;
}

function createBaseProfile(): Profile {
  return { name: "", avatarUrl: "", handle: "", userRegisteredAt: 0 };
}

export const Profile = {
  encode(
    message: Profile,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(26).string(message.avatarUrl);
    }
    if (message.handle !== "") {
      writer.uint32(34).string(message.handle);
    }
    if (message.userRegisteredAt !== 0) {
      writer.uint32(40).uint32(message.userRegisteredAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Profile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.avatarUrl = reader.string();
          break;
        case 4:
          message.handle = reader.string();
          break;
        case 5:
          message.userRegisteredAt = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Profile {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : "",
      handle: isSet(object.handle) ? String(object.handle) : "",
      userRegisteredAt: isSet(object.userRegisteredAt)
        ? Number(object.userRegisteredAt)
        : 0,
    };
  },

  toJSON(message: Profile): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.avatarUrl !== undefined && (obj.avatarUrl = message.avatarUrl);
    message.handle !== undefined && (obj.handle = message.handle);
    message.userRegisteredAt !== undefined &&
      (obj.userRegisteredAt = Math.round(message.userRegisteredAt));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Profile>, I>>(object: I): Profile {
    const message = createBaseProfile();
    message.name = object.name ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
    message.handle = object.handle ?? "";
    message.userRegisteredAt = object.userRegisteredAt ?? 0;
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
