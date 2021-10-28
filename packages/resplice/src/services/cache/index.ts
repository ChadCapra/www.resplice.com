import IndexedDB from '$workers/indexedDb?worker'
import type { User } from '$types/user'

const indexedDB = new IndexedDB()
indexedDB.postMessage({ type: 'CONNECT' })

export interface RespliceCache {
  addUser: (user: User) => void
}

const respliceCache: RespliceCache = {
  addUser: (user) =>
    indexedDB.postMessage({
      type: 'ADD_TO_STORE',
      store: 'user',
      key: user.uuid,
      data: user
    })
}

export default respliceCache
