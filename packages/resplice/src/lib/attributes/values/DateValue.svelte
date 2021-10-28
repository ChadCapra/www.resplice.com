<script lang="ts">
  import type { Date } from '$types/attribute'
  import { format, parseISO } from 'date-fns'

  export let attribute: Date

  let datetime = new Date(attribute.value.date).toISOString()
</script>

<!-- Can potentially localize this format per country, will use US format for now -->
<div class="flex flex-col">
  <span class="overflow-hidden overflow-ellipsis whitespace-pre-line h-6">
    {format(parseISO(datetime), "MMMM dd',' yyyy 'at' hh:mm a")}
  </span>
</div>
