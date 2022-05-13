<script lang="ts">
  import dateType from '$lib/attributes/attributeTypes/date'
  import type { DateValue } from '$types/attribute'

  export let value: DateValue

  $: formattedDate = dateType.valueToString(value)
</script>

<!-- Can potentially localize this format per country, will use US format for now -->
<div class="flex flex-col">
  <span class="overflow-hidden text-ellipsis whitespace-pre-line h-6">
    {formattedDate}
  </span>
</div>
