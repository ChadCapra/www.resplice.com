<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { zonedTimeToUtc } from 'date-fns-tz'
  import TextField from '$lib/common/form/TextField.svelte'
  import DateField from '$lib/common/form/DateField.svelte'
  import FormButtons from '$lib/attributes/form/FormButtons.svelte'

  const dispatch = createEventDispatcher()

  export let name = ''
  export let date = null

  function toEpochTime(date: Date | string) {
    if (!date) return null
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const utc = zonedTimeToUtc(date, timeZone)
    return utc.getTime()
  }

  let dateStr = ''

  $: {
    date = toEpochTime(dateStr)
  }

  let formErrs: any = {}

  function onSave() {
    formErrs = {}
    if (!name) formErrs.name = 'A name is required'
    if (!date) formErrs.date = 'A date is required'

    if (!Object.keys(formErrs).length) {
      dispatch('save')
    }
  }
</script>

<form class="flex flex-col items-center justify-between my-4 px-2 flex-1">
  <div class="w-full flex flex-col space-y-6">
    <TextField
      name="attribute-name"
      label="Name"
      bind:value={name}
      error={formErrs.name}
    />
    <DateField
      name="date"
      label="Date"
      bind:value={dateStr}
      error={formErrs.date}
    />
  </div>

  <FormButtons on:save={onSave} />
</form>
