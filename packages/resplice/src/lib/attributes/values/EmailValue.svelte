<script>
  import type { Attribute } from '$types'

  export let attribute: Pick<Attribute, 'type' | 'value'>

  $: email = attribute.value[0] || ''
</script>

<span class="overflow-hidden overflow-ellipsis whitespace-pre-line h-6">
  {email}
</span>
