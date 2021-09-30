import contactsApi from './contacts'
import sessionsApi from './sessions'

const apiClient = {
  ...contactsApi,
  ...sessionsApi
}

export default apiClient
