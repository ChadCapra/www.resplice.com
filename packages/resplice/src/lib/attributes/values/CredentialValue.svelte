<script lang="ts">
  import type { Credential } from '$types/attribute'

  export let attribute: Credential

  let identity = attribute.value.identity
  let passcode = attribute.value.passcode
</script>

<p>{identity}, {passcode}</p>
