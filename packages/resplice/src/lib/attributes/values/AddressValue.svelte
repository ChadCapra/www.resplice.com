<script lang="ts">
  import type { Address } from '$types/attribute'

  export let attribute: Address

  let address1 = attribute.value.address_1
  let address2 = attribute.value.address_2
  let city = attribute.value.locality
  let state = attribute.value.region
  let postalCode = attribute.value.postal_code
  let country = attribute.value.country
  let planet = attribute.value.planet
</script>

<!-- Can potentially localize this format per country, will use US format for now -->
<div class="flex flex-col">
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
    {country}{planet ? `, ${planet}` : ''}
  </span>
</div>
