<script lang="ts">
  import type { CoordinateValue } from '$types/attribute'

  export let value: CoordinateValue
</script>

<p>{value.latitude},{value.longitude}</p>
