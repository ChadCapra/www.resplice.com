enum ServerMessageType {
  NOT_SET = 'NOT_SET',
  ERROR = 'ERROR',
  AUTH_INFO = 'AUTH_INFO',
  ACTIVE_SESSION = 'ACTIVE_SESSION',
  SESSIONS = 'SESSIONS',
  USER = 'USER',
  USER_ATTRIBUTES = 'USER_ATTRIBUTES',
  USER_SHARES = 'USER_SHARES',
  USER_INVITES = 'USER_INVITES',
  CONTACTS = 'CONTACTS',
  CONTACT_ATTRIBUTES = 'CONTACT_ATTRIBUTES',
  DIRECT_MESSAGES = 'DIRECT_MESSAGES'
}

export type ServerMessage = {
  message_type: ServerMessageType
  request_id: number
  server_time: number
  payload_hmac: string
  encrypted_payload: ArrayBuffer
}

export enum ToastType {
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  INFO = 'INFO',
  DANGER = 'DANGER'
}

export type Toast = {
  id: string | number
  type: ToastType
  title: string
  detail: any
  created: Date
}
export type ToastParams = Pick<Toast, 'type' | 'title' | 'detail'>
