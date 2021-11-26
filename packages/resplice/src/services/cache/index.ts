import type { User } from '$types/user'

export interface AppCache {
  addUser: (user: User) => void
}

enum MessageType {
  CONNECT = 'CONNECT',
  READ_CACHE = 'READ_CACHE',
  READ_STORE = 'READ_STORE',
  ADD_TO_STORE = 'ADD_TO_STORE',
  UPDATE_STORE = 'UPDATE_STORE',
  REMOVE_FROM_STORE = 'REMOVE_FROM_STORE',
  ERROR = 'ERROR'
}

async function cacheFactory(indexedDB: Worker) {
  const cache: AppCache = {
    addUser: (user) =>
      indexedDB.postMessage({
        type: 'ADD_TO_STORE',
        store: 'user',
        key: user.uuid,
        data: user
      })
  }

  return new Promise((resolve, reject) => {
    indexedDB.onmessage = ({ data: cmd }) => {
      switch (cmd.type as MessageType) {
        case MessageType.CONNECT:
          resolve(cache)
          break
        case MessageType.ERROR:
          reject(cmd.reason)
          break
        default:
          console.log(cmd)
      }
    }
    indexedDB.postMessage({ type: 'CONNECT' })
  })
}

export const contextKey = 'Cache'

export default cacheFactory
