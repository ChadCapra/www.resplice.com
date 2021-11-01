<script lang="ts">
  import type { SocialValue } from '$types/attribute'

  export let value: SocialValue
</script>

<p>{value.provider}, {value.handle}</p>
