<script lang="ts">
  import type { Email } from '$types/attribute'

  export let attribute: Email

  $: email = attribute.value.email
</script>

<span class="overflow-hidden overflow-ellipsis whitespace-pre-line h-6">
  {email}
</span>
