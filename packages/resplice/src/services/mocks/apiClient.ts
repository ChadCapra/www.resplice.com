import attributesApi from './attributes'
import contactsApi from './contacts'
import sessionsApi from './sessions'
import userApi from './user'

const apiClient = {
  ...attributesApi,
  ...contactsApi,
  ...sessionsApi,
  ...userApi
}

export default apiClient
