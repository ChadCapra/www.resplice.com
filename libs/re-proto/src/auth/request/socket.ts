/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

/**
 * wss://
 * Returns: All User Data
 * authenticated_at ensures at least one value, and simulates a PIN
 * The following always returned (in full) after socket is authorized:
 * profile & sessions
 * invites / pending contacts / pending attributes
 */
export interface AuthorizeSocket {
  authenticatedAt: number;
  userAttributesSince: number;
  userAttributeGroupsSince: number;
  contactsSince: number;
  contactAttributesSince: number;
  contactSharesSince: number;
  splicesSince: number;
  spliceMembersSince: number;
  spliceSharesSince: number;
}

function createBaseAuthorizeSocket(): AuthorizeSocket {
  return {
    authenticatedAt: 0,
    userAttributesSince: 0,
    userAttributeGroupsSince: 0,
    contactsSince: 0,
    contactAttributesSince: 0,
    contactSharesSince: 0,
    splicesSince: 0,
    spliceMembersSince: 0,
    spliceSharesSince: 0,
  };
}

export const AuthorizeSocket = {
  encode(
    message: AuthorizeSocket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authenticatedAt !== 0) {
      writer.uint32(8).uint32(message.authenticatedAt);
    }
    if (message.userAttributesSince !== 0) {
      writer.uint32(16).uint32(message.userAttributesSince);
    }
    if (message.userAttributeGroupsSince !== 0) {
      writer.uint32(24).uint32(message.userAttributeGroupsSince);
    }
    if (message.contactsSince !== 0) {
      writer.uint32(32).uint32(message.contactsSince);
    }
    if (message.contactAttributesSince !== 0) {
      writer.uint32(40).uint32(message.contactAttributesSince);
    }
    if (message.contactSharesSince !== 0) {
      writer.uint32(48).uint32(message.contactSharesSince);
    }
    if (message.splicesSince !== 0) {
      writer.uint32(56).uint32(message.splicesSince);
    }
    if (message.spliceMembersSince !== 0) {
      writer.uint32(64).uint32(message.spliceMembersSince);
    }
    if (message.spliceSharesSince !== 0) {
      writer.uint32(72).uint32(message.spliceSharesSince);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizeSocket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthorizeSocket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authenticatedAt = reader.uint32();
          break;
        case 2:
          message.userAttributesSince = reader.uint32();
          break;
        case 3:
          message.userAttributeGroupsSince = reader.uint32();
          break;
        case 4:
          message.contactsSince = reader.uint32();
          break;
        case 5:
          message.contactAttributesSince = reader.uint32();
          break;
        case 6:
          message.contactSharesSince = reader.uint32();
          break;
        case 7:
          message.splicesSince = reader.uint32();
          break;
        case 8:
          message.spliceMembersSince = reader.uint32();
          break;
        case 9:
          message.spliceSharesSince = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthorizeSocket {
    return {
      authenticatedAt: isSet(object.authenticatedAt)
        ? Number(object.authenticatedAt)
        : 0,
      userAttributesSince: isSet(object.userAttributesSince)
        ? Number(object.userAttributesSince)
        : 0,
      userAttributeGroupsSince: isSet(object.userAttributeGroupsSince)
        ? Number(object.userAttributeGroupsSince)
        : 0,
      contactsSince: isSet(object.contactsSince)
        ? Number(object.contactsSince)
        : 0,
      contactAttributesSince: isSet(object.contactAttributesSince)
        ? Number(object.contactAttributesSince)
        : 0,
      contactSharesSince: isSet(object.contactSharesSince)
        ? Number(object.contactSharesSince)
        : 0,
      splicesSince: isSet(object.splicesSince)
        ? Number(object.splicesSince)
        : 0,
      spliceMembersSince: isSet(object.spliceMembersSince)
        ? Number(object.spliceMembersSince)
        : 0,
      spliceSharesSince: isSet(object.spliceSharesSince)
        ? Number(object.spliceSharesSince)
        : 0,
    };
  },

  toJSON(message: AuthorizeSocket): unknown {
    const obj: any = {};
    message.authenticatedAt !== undefined &&
      (obj.authenticatedAt = Math.round(message.authenticatedAt));
    message.userAttributesSince !== undefined &&
      (obj.userAttributesSince = Math.round(message.userAttributesSince));
    message.userAttributeGroupsSince !== undefined &&
      (obj.userAttributeGroupsSince = Math.round(
        message.userAttributeGroupsSince
      ));
    message.contactsSince !== undefined &&
      (obj.contactsSince = Math.round(message.contactsSince));
    message.contactAttributesSince !== undefined &&
      (obj.contactAttributesSince = Math.round(message.contactAttributesSince));
    message.contactSharesSince !== undefined &&
      (obj.contactSharesSince = Math.round(message.contactSharesSince));
    message.splicesSince !== undefined &&
      (obj.splicesSince = Math.round(message.splicesSince));
    message.spliceMembersSince !== undefined &&
      (obj.spliceMembersSince = Math.round(message.spliceMembersSince));
    message.spliceSharesSince !== undefined &&
      (obj.spliceSharesSince = Math.round(message.spliceSharesSince));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthorizeSocket>, I>>(
    object: I
  ): AuthorizeSocket {
    const message = createBaseAuthorizeSocket();
    message.authenticatedAt = object.authenticatedAt ?? 0;
    message.userAttributesSince = object.userAttributesSince ?? 0;
    message.userAttributeGroupsSince = object.userAttributeGroupsSince ?? 0;
    message.contactsSince = object.contactsSince ?? 0;
    message.contactAttributesSince = object.contactAttributesSince ?? 0;
    message.contactSharesSince = object.contactSharesSince ?? 0;
    message.splicesSince = object.splicesSince ?? 0;
    message.spliceMembersSince = object.spliceMembersSince ?? 0;
    message.spliceSharesSince = object.spliceSharesSince ?? 0;
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
