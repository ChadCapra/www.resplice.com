<script>
  import type { Attribute } from '$types'
  import { format, parseISO } from 'date-fns'

  export let attribute: Pick<Attribute, 'type' | 'value'>

  let datetime = attribute.value[0] || ''
  let address1 = attribute.value[1] || ''
  let address2 = attribute.value[2] || ''
  let city = attribute.value[3] || ''
  let state = attribute.value[4] || ''
  let postalCode = attribute.value[5] || ''
  let country = attribute.value[6] || ''
</script>

<!-- Can potentially localize this format per country, will use US format for now -->
<div class="flex flex-col">
  <span class="overflow-hidden overflow-ellipsis whitespace-pre-line h-6">
    {format(parseISO(datetime), "MMMM dd',' yyyy 'at' hh:mm a")}
  </span>
  <span class="overflow-hidden overflow-ellipsis whitespace-pre-line h-6">
    {address1}
  </span>
  {#if !!address2}
    <span class="overflow-hidden overflow-ellipsis whitespace-pre-line h-6">
      {address2}
    </span>
  {/if}
  <span class="overflow-hidden overflow-ellipsis whitespace-pre-line h-6">
    {city ? `${city}, ${state} ${postalCode}` : `${state} ${postalCode}`}
  </span>
  <span class="overflow-hidden overflow-ellipsis whitespace-pre-line h-6">
    {country}
  </span>
</div>
