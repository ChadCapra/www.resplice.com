<script lang="ts">
  import type { EmailValue } from '$types/attribute'

  export let value: EmailValue
</script>

<span class="overflow-hidden overflow-ellipsis whitespace-pre-line h-6">
  {value.email}
</span>
