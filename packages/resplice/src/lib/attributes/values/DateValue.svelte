<script lang="ts">
  import type { DateValue } from '$types/attribute'
  // import { utcToZonedTime, format } from 'date-fns-tz'

  export let value: DateValue

  const monthMap = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  // function parseDateValue(date: number) {
  //   if (!date) return ''
  //   const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  //   const zonedDate = utcToZonedTime(date, timeZone)
  //   return format(zonedDate, "MMMM dd',' yyyy", {
  //     timeZone
  //   })
  // }
  function parseDateValue(value: DateValue) {
    if (!value.year || !value.month || !value.day) return ''
    return `${monthMap[value.month - 1]} ${value.day}, ${value.year}`
  }

  $: formattedDate = parseDateValue(value)
</script>

<!-- Can potentially localize this format per country, will use US format for now -->
<div class="flex flex-col">
  <span class="overflow-hidden overflow-ellipsis whitespace-pre-line h-6">
    {formattedDate}
  </span>
</div>
