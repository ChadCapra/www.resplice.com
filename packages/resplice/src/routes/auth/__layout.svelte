<script lang="ts">
  import { setContext } from 'svelte'
  import { RespliceClient } from '$services/api/respliceClient';
  import respliceClientFactory, { contextKey } from '$api'
  import api from '$services/mocks/apiClient'

  const respliceClient = respliceClientFactory(api, {})
</script>

<slot />
