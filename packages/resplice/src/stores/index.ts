import auth from './auth'
import attributes from './attributes'
import chat from './chat'
import conn from './conn'
import contacts from './contacts'
import invites from './invites'
import user from './user'

const stores = {
  auth,
  attributes,
  chat,
  conn,
  contacts,
  invites,
  user
}

export type Stores = typeof stores

export default stores
