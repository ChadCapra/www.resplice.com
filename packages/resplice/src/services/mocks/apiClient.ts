import contactsApi from './contacts'
import sessionsApi from './sessions'
import userApi from './user'

const apiClient = {
  ...contactsApi,
  ...sessionsApi,
  ...userApi
}

export default apiClient
