import { build, assets, timestamp } from '$service-worker'

// I export an empty object to satisfy the isolated modules TS requirement.
export {}

const ctx: ServiceWorker = self as any

const VERSION = 1
const ASSET_CACHE = `assets-${VERSION}`

// TODO: type Service Worker events
ctx.addEventListener('install', (e: any) => {
  console.log('Service Worker has been installed')
  e.waitUntil(createCache())
})

ctx.addEventListener('activate', async (e: any) => {
  e.waitUntil(cleanupCache())
})

async function createCache() {
  const cache = await caches.open(ASSET_CACHE)
  return cache.addAll(build)
}

async function cleanupCache() {
  const cacheNames = await caches.keys()
  const cacheDeletions = cacheNames.map(async (name) => {
    if (name !== ASSET_CACHE) caches.delete(name)
  })
  Promise.all(cacheDeletions)
}
