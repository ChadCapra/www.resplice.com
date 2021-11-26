import IndexedDBWorker from '$workers/indexedDb?worker'
import WebSocketWorker from '$workers/ws?worker'

import cacheFactory from '$services/cache'
import clientFactory from '$services/api/appClient'
import type { Stores } from '$stores/index'

// async function load(url: string, stores: Stores, useMocks = false) {
//   const indexedDB = new IndexedDBWorker()
//   const ws = new WebSocketWorker()

//   let cacheFactory: CacheFactory
//   let clientFactory: ClientFactory
//   if (useMocks) {
//     await import('$services/mocks/server')
//     cacheFactory = (await import('$services/mocks/cache'))
//       .default as unknown as CacheFactory
//     clientFactory = (await import('$services/mocks/appClient'))
//       .default as unknown as ClientFactory
//   } else {
//     cacheFactory = (await import('$services/cache')).default
//     clientFactory = (await import('$services/api/appClient')).default
//   }
//   const cache = await cacheFactory(indexedDB)
//   const client = await clientFactory(url, ws, cache, stores)

//   return {
//     cache,
//     client
//   }
// }

async function load(url: string, stores: Stores) {
  const indexedDB = new IndexedDBWorker()
  const ws = new WebSocketWorker()

  const cache = await cacheFactory(indexedDB)
  const client = await clientFactory(url, ws, cache, stores)

  await client.sessions.authenticate()

  return {
    cache,
    client
  }
}

export default load
