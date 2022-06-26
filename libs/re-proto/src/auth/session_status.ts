/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'

export enum SessionStatus {
  EXPIRED = 0,
  PENDING_EMAIL_VERIFICATION = 1,
  PENDING_PHONE_VERIFICATION = 2,
  PENDING_USER_REGISRATION = 3,
  PENDING_ADDITIONAL_AUTHENTICATION = 4,
  AUTHENTICATED = 5,
  UNRECOGNIZED = -1
}

export function sessionStatusFromJSON(object: any): SessionStatus {
  switch (object) {
    case 0:
    case 'EXPIRED':
      return SessionStatus.EXPIRED
    case 1:
    case 'PENDING_EMAIL_VERIFICATION':
      return SessionStatus.PENDING_EMAIL_VERIFICATION
    case 2:
    case 'PENDING_PHONE_VERIFICATION':
      return SessionStatus.PENDING_PHONE_VERIFICATION
    case 3:
    case 'PENDING_USER_REGISRATION':
      return SessionStatus.PENDING_USER_REGISRATION
    case 4:
    case 'PENDING_ADDITIONAL_AUTHENTICATION':
      return SessionStatus.PENDING_ADDITIONAL_AUTHENTICATION
    case 5:
    case 'AUTHENTICATED':
      return SessionStatus.AUTHENTICATED
    case -1:
    case 'UNRECOGNIZED':
    default:
      return SessionStatus.UNRECOGNIZED
  }
}

export function sessionStatusToJSON(object: SessionStatus): string {
  switch (object) {
    case SessionStatus.EXPIRED:
      return 'EXPIRED'
    case SessionStatus.PENDING_EMAIL_VERIFICATION:
      return 'PENDING_EMAIL_VERIFICATION'
    case SessionStatus.PENDING_PHONE_VERIFICATION:
      return 'PENDING_PHONE_VERIFICATION'
    case SessionStatus.PENDING_USER_REGISRATION:
      return 'PENDING_USER_REGISRATION'
    case SessionStatus.PENDING_ADDITIONAL_AUTHENTICATION:
      return 'PENDING_ADDITIONAL_AUTHENTICATION'
    case SessionStatus.AUTHENTICATED:
      return 'AUTHENTICATED'
    default:
      return 'UNKNOWN'
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}
