import attributesApi from './attributes'
import contactsApi from './contacts'
import sessionsApi from './sessions'
import userApi from './user'

const mockClient = {
  ...attributesApi,
  ...contactsApi,
  ...sessionsApi,
  ...userApi
}

async function clientFactory(...args: any) {
  return mockClient
}

export default clientFactory
