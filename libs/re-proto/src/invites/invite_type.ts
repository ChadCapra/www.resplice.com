/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'

export enum InviteType {
  NOT_SET = 0,
  HANDLE = 1,
  PHONE = 2,
  EMAIL = 3,
  COMMON_SPLICE = 4,
  QR_INVITE = 5,
  UNRECOGNIZED = -1
}

export function inviteTypeFromJSON(object: any): InviteType {
  switch (object) {
    case 0:
    case 'NOT_SET':
      return InviteType.NOT_SET
    case 1:
    case 'HANDLE':
      return InviteType.HANDLE
    case 2:
    case 'PHONE':
      return InviteType.PHONE
    case 3:
    case 'EMAIL':
      return InviteType.EMAIL
    case 4:
    case 'COMMON_SPLICE':
      return InviteType.COMMON_SPLICE
    case 5:
    case 'QR_INVITE':
      return InviteType.QR_INVITE
    case -1:
    case 'UNRECOGNIZED':
    default:
      return InviteType.UNRECOGNIZED
  }
}

export function inviteTypeToJSON(object: InviteType): string {
  switch (object) {
    case InviteType.NOT_SET:
      return 'NOT_SET'
    case InviteType.HANDLE:
      return 'HANDLE'
    case InviteType.PHONE:
      return 'PHONE'
    case InviteType.EMAIL:
      return 'EMAIL'
    case InviteType.COMMON_SPLICE:
      return 'COMMON_SPLICE'
    case InviteType.QR_INVITE:
      return 'QR_INVITE'
    default:
      return 'UNKNOWN'
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}
