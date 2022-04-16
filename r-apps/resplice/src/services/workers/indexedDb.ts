// Export an empty object to satisfy the isolated modules TS requirement.
export {}

const CACHE_VERSION = 1
const CACHE_NAME = 'RESPLICE_CACHE'

type Store = 'user' | 'contacts' | 'splices'

enum Command {
  CONNECT = 'CONNECT',
  READ_CACHE = 'READ_CACHE',
  ADD_TO_STORE = 'ADD_TO_STORE',
  READ_STORE = 'READ_STORE',
  UPDATE_STORE = 'UPDATE_STORE',
  REMOVE_FROM_STORE = 'REMOVE_FROM_STORE'
}
interface ConnectCommand {
  type: Command.CONNECT
}
interface ReadCacheCommand {
  type: Command.READ_CACHE
}
interface AddToStoreCommand {
  type: Command.ADD_TO_STORE
  store: Store
  key: string
  data: any
}
interface ReadStoreCommand {
  type: Command.READ_STORE
  store: Store
  key?: string
}
interface UpdateStoreCommand {
  type: Command.UPDATE_STORE
  store: Store
  key: string
  data: any
}
interface RemoveFromStoreCommand {
  type: Command.REMOVE_FROM_STORE
  store: Store
  key: string
}
type WorkerCommand =
  | ConnectCommand
  | ReadCacheCommand
  | AddToStoreCommand
  | ReadStoreCommand
  | UpdateStoreCommand
  | RemoveFromStoreCommand

interface IndexedDbWorker extends Worker {
  onmessage: (this: Worker, ev: MessageEvent<WorkerCommand>) => void
}

const ctx: IndexedDbWorker = self as any

let db: IDBDatabase

function handleCacheError(e: any, type: Command, data?: any) {
  ctx.postMessage({
    type,
    ...data,
    error: Error(
      `Something went wrong when querying to the cache: ${e.errorCode}`
    )
  })
}

function openIndexedDb() {
  const request = indexedDB.open(CACHE_NAME, CACHE_VERSION)
  request.onsuccess = () => {
    console.log('Connected to Cache!')
    db = request.result
    ctx.postMessage({ type: Command.CONNECT, data: true })
  }
  request.onerror = (e: any) => {
    console.log(e)
    ctx.postMessage({
      type: Command.CONNECT,
      data: false,
      err: Error(
        `Something went wrong when connection to the cache: ${e.errorCode}`
      )
    })
  }
  request.onupgradeneeded = () => {
    console.log(`Upgrading cache ${CACHE_NAME} to version: ${CACHE_VERSION}`)
    // Database needs to be created or updated
    const new_db = request.result

    new_db.createObjectStore('user', { keyPath: 'name' })

    const contactsStore = new_db.createObjectStore('contacts', {
      keyPath: 'uuid'
    })
    contactsStore.createIndex('name', 'name', { unique: false })
    contactsStore.createIndex('type', 'type', { unique: false })

    db = new_db
  }
}

function readCache() {
  const cache: any = {}

  const transaction = db.transaction(['user', 'contacts'], 'readonly')
  transaction.oncomplete = () =>
    ctx.postMessage({ type: Command.READ_CACHE, cache })
  transaction.onerror = (e) => handleCacheError(e, Command.READ_CACHE)

  transaction.objectStore('user').getAll().onsuccess = (e) => {
    cache['user'] = (e.target as any).result[0]
  }
  transaction.objectStore('contacts').getAll().onsuccess = (e) => {
    cache['contacts'] = (e.target as any).result
  }
}

function addToStore(store: Store, key: string, data: any) {
  const transaction = db.transaction(store, 'readwrite')
  transaction.oncomplete = () =>
    ctx.postMessage({ type: Command.ADD_TO_STORE, store, key })
  transaction.onerror = (e) =>
    handleCacheError(e, Command.ADD_TO_STORE, { store, key })

  transaction.objectStore(store).add(data, key)
}

function readStore(store: Store, key?: string) {
  const transaction = db.transaction(store, 'readonly')
  transaction.onerror = (e) =>
    handleCacheError(e, Command.READ_STORE, { store, key })

  if (key) {
    transaction.objectStore(store).get(key).onsuccess = (e) =>
      ctx.postMessage({
        type: Command.READ_STORE,
        store,
        key,
        data: (e.target as any).result
      })
  } else {
    transaction.objectStore(store).getAll().onsuccess = (e) =>
      ctx.postMessage({
        type: Command.READ_STORE,
        store,
        key,
        data: (e.target as any).result
      })
  }
}

function updateStore(store: Store, key: string, data: any) {
  const transaction = db.transaction(store, 'readwrite')
  transaction.onerror = (e) =>
    handleCacheError(e, Command.UPDATE_STORE, { store, key })

  transaction.objectStore(store).put(data, key)
}

function removeFromStore(store: Store, key: string) {
  const transaction = db.transaction(store, 'readwrite')
  transaction.onerror = (e) =>
    handleCacheError(e, Command.REMOVE_FROM_STORE, { store, key })

  transaction.objectStore(store).delete(key).onsuccess = () =>
    ctx.postMessage({ type: Command.REMOVE_FROM_STORE, store, key })
}

ctx.onmessage = ({ data: cmd }) => {
  switch (cmd.type) {
    case Command.CONNECT:
      openIndexedDb()
      break
    case Command.READ_CACHE:
      readCache()
      break
    case Command.READ_STORE:
      readStore(cmd.store, cmd.key)
      break
    case Command.ADD_TO_STORE:
      addToStore(cmd.store, cmd.key, cmd.data)
      break
    case Command.UPDATE_STORE:
      updateStore(cmd.store, cmd.key, cmd.data)
      break
    case Command.REMOVE_FROM_STORE:
      removeFromStore(cmd.store, cmd.key)
      break
    default:
      throw new Error('Invalid command for Indexed DB worker')
  }
}
