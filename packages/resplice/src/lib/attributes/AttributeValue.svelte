<script>
  import type { Attribute } from '$types'

  export let attribute: Pick<Attribute, 'type' | 'value'>

  $: formattedValue = attribute.value.reduce((str, value, idx) => {
    if (typeof value === 'string' || typeof value === 'number') {
      if (idx === 0) {
        return value
      }
      return str + '\n' + value
    } else return str
  }, '')
</script>

<!-- TODO: Format attributes values based on type -->
<span class="overflow-hidden overflow-ellipsis whitespace-pre-line">
  {formattedValue}
</span>
