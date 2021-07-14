import type { User } from '$types'
import attributes from './attributes'

const MOCK_UUID = 'bastilla-shan'

const user: User = {
  uuid: MOCK_UUID,
  name: 'Bastilla Shan',
  avatar: null,
  attributes: attributes.filter((a) => a.contact_uuid === MOCK_UUID)
}

export default user
