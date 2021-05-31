<script>
  import type { Attribute } from '$types'

  export let attribute: Pick<Attribute, 'type' | 'value'>

  let address1 = attribute.value[0] || ''
  let address2 = attribute.value[1] || ''
  let city = attribute.value[2] || ''
  let state = attribute.value[3] || ''
  let postalCode = attribute.value[4] || ''
  let country = attribute.value[5] || ''
</script>

<!-- Can potentially localize this format per country, will use US format for now -->
<div class="flex flex-col">
  <span class="overflow-hidden overflow-ellipsis whitespace-pre-line h-6">
    {address1}
  </span>
  <span class="overflow-hidden overflow-ellipsis whitespace-pre-line h-6">
    {address2}
  </span>
  <span class="overflow-hidden overflow-ellipsis whitespace-pre-line h-6">
    {city ? `${city}, ${state} ${postalCode}` : `${state} ${postalCode}`}
  </span>
  <span class="overflow-hidden overflow-ellipsis whitespace-pre-line h-6">
    {country}
  </span>
</div>
