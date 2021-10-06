<script lang="ts">
  import type { Social } from '$types/attribute'

  export let attribute: Social

  let provider = attribute.value.provider
  let passcode = attribute.value.handle
</script>

<p>{provider}, {passcode}</p>
