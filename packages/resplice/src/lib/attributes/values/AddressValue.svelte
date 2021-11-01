<script lang="ts">
  import type { AddressValue } from '$types/attribute'

  export let value: AddressValue
</script>

<!-- Can potentially localize this format per country, will use US format for now -->
<div class="flex flex-col">
  <span class="overflow-hidden overflow-ellipsis whitespace-pre-line h-6">
    {value.address_1}
  </span>
  {#if !!value.address_2}
    <span class="overflow-hidden overflow-ellipsis whitespace-pre-line h-6">
      {value.address_2}
    </span>
  {/if}
  <span class="overflow-hidden overflow-ellipsis whitespace-pre-line h-6">
    {value.locality
      ? `${value.locality}, ${value.region} ${value.postal_code}`
      : `${value.region} ${value.postal_code}`}
  </span>
  <span class="overflow-hidden overflow-ellipsis whitespace-pre-line h-6">
    {value.country}{value.planet ? `, ${value.planet}` : ''}
  </span>
</div>
