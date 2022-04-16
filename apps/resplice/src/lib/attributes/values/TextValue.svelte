<script lang="ts">
  import type { TextValue } from '$types/attribute'

  export let value: TextValue
</script>

<p>{value.text}</p>
