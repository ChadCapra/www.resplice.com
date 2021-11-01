<script lang="ts">
  import type { DateValue } from '$types/attribute'
  import { utcToZonedTime, format } from 'date-fns-tz'

  export let value: DateValue

  function parseDate(date: number) {
    if (!date) return ''
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const zonedDate = utcToZonedTime(date, timeZone)
    return format(zonedDate, "MMMM dd',' yyyy", {
      timeZone
    })
  }

  $: formattedDate = parseDate(value.date)
</script>

<!-- Can potentially localize this format per country, will use US format for now -->
<div class="flex flex-col">
  <span class="overflow-hidden overflow-ellipsis whitespace-pre-line h-6">
    {formattedDate}
  </span>
</div>
