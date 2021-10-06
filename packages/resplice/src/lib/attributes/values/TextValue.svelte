<script lang="ts">
  import type { Text } from '$types/attribute'

  export let attribute: Text

  let text = attribute.value.text
</script>

<p>{text}</p>
