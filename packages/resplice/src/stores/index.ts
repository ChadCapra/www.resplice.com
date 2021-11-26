import auth from './auth'
import attributes from './attributes'
import conn from './conn'
import user from './user'

const stores = {
  auth,
  attributes,
  conn,
  user
}

export type Stores = typeof stores

export default stores
