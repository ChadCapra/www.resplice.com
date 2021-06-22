<script>
  import type { Attribute } from '$types'
  import parsePhoneNumber from 'libphonenumber-js'

  export let attribute: Pick<Attribute, 'type' | 'value'>

  console.log(attribute.value)

  $: phone = attribute.value[1]
    ? parsePhoneNumber(attribute.value[1]).formatNational()
    : ''
</script>

<span class="overflow-hidden overflow-ellipsis whitespace-pre-line h-6">
  {phone}
</span>
