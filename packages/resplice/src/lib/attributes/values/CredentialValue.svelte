<script lang="ts">
  import type { CredentialValue } from '$types/attribute'

  export let value: CredentialValue
</script>

<p>{value.identity}, {value.passcode}</p>
