import auth from './auth'
import attributes from './attributes'
import user from './user'

const stores = {
  auth,
  attributes,
  user
}

export type Stores = typeof stores

export default stores
