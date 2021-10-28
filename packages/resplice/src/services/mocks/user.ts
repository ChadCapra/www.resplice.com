import type { User } from '$types/user'
import { attributes } from './attributes'
import { returnPromise } from './utils'

const MOCK_UUID = 'bastilla-shan'

export const user: User = {
  uuid: MOCK_UUID,
  name: 'Bastilla Shan',
  avatar: null,
  handle: null,
  public_access_enabled: false,
  user_registered_at: new Date('2021-10-25T03:46:40.690Z')
}

export const userAttributes = attributes

const userApi = {
  createUser: (...args) => returnPromise(user),
  getProfile: (...args) => returnPromise(user),
  editName: (...args) => returnPromise(user),
  editHandle: (...args) => returnPromise(user),
  editAvatar: (...args) => returnPromise(user),
  enablePublicAccess: (...args) => returnPromise({ status: 'SUCCESS' }),
  disablePublicAccess: (...args) => returnPromise({ status: 'SUCCESS' }),
  deleteAccount: (...args) => returnPromise({ status: 'SUCCESS' })
}

export default userApi
