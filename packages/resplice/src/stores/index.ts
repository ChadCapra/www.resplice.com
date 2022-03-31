import attributes from './attributes'
import chat from './chat'
import conn from './conn'
import contacts from './contacts'
import invites from './invites'
import profile from './profile'
import session from './session'
import toasts from './toasts'

const stores = {
  attributes,
  chat,
  conn,
  contacts,
  invites,
  profile,
  session,
  toasts
}

export type Stores = typeof stores

export default stores
