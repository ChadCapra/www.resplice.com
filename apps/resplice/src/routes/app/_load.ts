import startCommuter from '$services/commuters/connCommuter'
import cacheFactory from '$services/cache'
import AppClient from '$services/api/appClient'

import type { AppCache } from '$services/cache'
import type { Stores } from '$stores/index'

async function load(
  wsEndpoint: string,
  stores: Stores,
  useMocks = false
): Promise<{ cache: AppCache; client: AppClient }> {
  let indexedDB: Worker

  if (useMocks) {
    indexedDB = new Worker(
      new URL('../../services/mocks/indexedDb', import.meta.url),
      { type: 'module' }
    )
  } else {
    indexedDB = new Worker(
      new URL('../../services/workers/indexedDb', import.meta.url),
      { type: 'module' }
    )
  }

  const cache = await cacheFactory(indexedDB)
  const connCommuter = startCommuter(useMocks)
  const client = new AppClient(wsEndpoint, connCommuter, cache, stores)

  return {
    cache,
    client
  }
}

export default load
