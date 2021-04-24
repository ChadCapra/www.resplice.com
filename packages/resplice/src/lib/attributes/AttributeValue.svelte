<script>
  import type { Attribute } from '$types'

  export let attribute: Attribute
</script>

<!-- TODO: Format attributes values based on type -->
<span class="overflow-hidden overflow-ellipsis">{attribute.value}</span>
