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

// export type ClientMessageType = {
//   NO_TYPE = 0;
//   LIVE_CHECK = 1;
//   DASHBOARD = 2;
//   EDIT_NAME = 3; // EditNameRequest
//   EDIT_AVATAR = 4;
//   EDIT_HANDLE = 5;
//   ENABLE_PUBLIC_ACCESS = 6;
//   DISABLE_PUBLIC_ACCESS = 7;
//   DELETE_ACCOUNT = 8;
//   ADD_ATTRIBUTE = 9;
//   EDIT_ATTRIBUTE_NAME = 10;
//   EDIT_ATTRIBUTE_VALUE = 11;
//   ENABLE_DEFAULT_SHARE = 12;
//   DISABLE_DEFAULT_SHARE = 13;
//   SEND_VERIFY_TOKEN = 14;
//   VERIFY_ATTRIBUTE = 15;
//   DELETE_ATTRIBUTE = 16;
//   GET_PUBLIC_CONTACT = 17;
//   EDIT_CONTACT_ALIAS = 18;
//   EDIT_CONTACT_DESCRIPTION = 19;
//   FAVOR_CONTACT = 20;
//   UNFAVOR_CONTACT = 21;
//   DELETE_CONTACT = 22;
//   ADD_CONTACT_SHARE = 23;
//   REMOVE_CONTACT_SHARE = 24;
//   INVITE_VIA_PHONE = 25;
//   INVITE_VIA_EMAIL = 26;
//   INVITE_VIA_HANDLE = 27;
//   INVITE_VIA_QR = 28;
//   INVITE_VIA_UUID = 29;
//   ADD_INVITE_ATTRIBUTE = 30;
//   REMOVE_INVITE_ATTRIBUTE = 31;
//   DELETE_INVITE = 32;
//   EXPIRE_SESSION = 33;
// }

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
