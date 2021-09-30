import { getContext } from 'svelte'
import type { RespliceClient } from '$services/api'
import { contextKey } from '$services/api'

function useRespliceClient() {
  const client = getContext<RespliceClient>(contextKey)
  if (!client) throw Error('Resplice Client has not yet been initialized')
  return client
}

export default useRespliceClient
