import IndexedDBWorker from '$workers/indexedDb?worker'
import ConnWorker from '$workers/conn?worker'

import cacheFactory from '$services/cache'
import type { AppCache } from '$services/cache'
import clientFactory from '$services/api/appClient'
import type { AppClient } from '$services/api/appClient'
import type { Stores } from '$stores/index'

// async function load(url: string, stores: Stores, useMocks = false) {
//   const indexedDB = new IndexedDBWorker()
//   const ws = new ConnWorker()

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

async function load(
  ws_endpoint: string,
  stores: Stores,
  useMocks = false
): Promise<{ cache: AppCache; client: AppClient }> {
  let indexedDB: Worker
  let conn: Worker

  if (useMocks) {
    const mockIndexedDB = (await import(
      '$services/mocks/indexedDb?worker'
    )) as unknown as new () => Worker
    const mockConnWorker = (await import(
      '$services/mocks/conn?worker'
    )) as unknown as new () => Worker
    indexedDB = new mockIndexedDB()
    conn = new mockConnWorker()
  } else {
    indexedDB = new IndexedDBWorker()
    conn = new ConnWorker()
  }

  const cache = await cacheFactory(indexedDB)
  const client = await clientFactory(ws_endpoint, conn, cache, stores)

  // await client.sessions.authenticate()

  return {
    cache,
    client
  }
}

export default load
