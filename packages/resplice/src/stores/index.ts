import auth from './auth'
import attributes from './attributes'
import chat from './chat'
import conn from './conn'
import user from './user'

const stores = {
  auth,
  attributes,
  chat,
  conn,
  user
}

export type Stores = typeof stores

export default stores
