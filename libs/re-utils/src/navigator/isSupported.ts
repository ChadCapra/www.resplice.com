type Feature =
  | 'contacts'
  | 'ContactsManager'
  | 'Crypto'
  | 'geolocation'
  | 'indexedDB'
  | 'WebSocket'
  | 'Worker'
type FeatureMap = Record<Feature, boolean>

export function isSupported(feature: Feature): boolean
export function isSupported(features: Feature[]): [boolean, Partial<FeatureMap>]
export function isSupported(feature: Feature | Feature[]) {
  const features: FeatureMap = {
    contacts: 'contacts' in navigator,
    ContactsManager: 'ContactsManager' in window,
    Crypto: 'Crypto' in window,
    geolocation: 'geolocation' in navigator,
    indexedDB: 'indexedDB' in window,
    WebSocket: 'WebSocket' in window,
    Worker: 'Worker' in window
  }
  if (Array.isArray(feature)) {
    const feats: Partial<FeatureMap> = {}
    feature.forEach((f) => {
      feats[f] = features[f]
    })
    return [!!Object.values(feats).some((f) => f), feats]
  }

  return features[feature]
}

export function isRespliceSupported(): boolean {
  const [supported] = isSupported([
    'Crypto',
    'indexedDB',
    'WebSocket',
    'Worker'
  ])
  return supported
}

if (import.meta.vitest) {
  const { test, expect, vi } = import.meta.vitest
  // Polyfill window
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const navigator: any = window.navigator
  window.Crypto = vi.fn()
  navigator.geolocation = vi.fn() as any
  window.indexedDB = vi.fn() as any
  window.WebSocket = vi.fn() as any
  window.Worker = vi.fn()

  test('can detect feature support', () => {
    const crypto = isSupported('Crypto')
    const worker = isSupported('Worker')

    expect(crypto).toBe(true)
    expect(worker).toBe(true)
  })

  test('can detect support for many features', () => {
    const [supported, features] = isSupported(['indexedDB', 'WebSocket'])

    expect(features.Crypto).toBe(undefined)
    expect(features.indexedDB).toBe(true)
    expect(features.WebSocket).toBe(true)
    expect(supported).toBe(true)
  })

  test('can detect if resplice is supported', () => {
    const supported = isRespliceSupported()

    expect(supported).toBe(true)
  })
}
