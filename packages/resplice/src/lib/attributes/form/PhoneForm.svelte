<script>
  import parsePhoneNumber from 'libphonenumber-js'
  import { createEventDispatcher } from 'svelte'
  import Button from '$lib/common/Button.svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import PhoneField from '$lib/common/form/PhoneField.svelte'
  import Toggle from '$lib/common/form/Toggle.svelte'
  import { capitalize } from '$lib/utils'

  const dispatch = createEventDispatcher()

  export let name = ''
  export let countryCallingCode = ''
  export let number = ''
  export let extension = ''
  export let sms = true

  let formErrs: any = {}
  let errorString = ''
  let phone = ''

  function onSave() {
    formErrs = {}
    if (!name) formErrs.name = 'A name is required'
    if (!number) formErrs.phone = 'Please enter a valid phone number'

    if (!Object.keys(formErrs).length) {
      dispatch('save')
    }
  }

  $: {
    if (phone) {
      const ph = parsePhoneNumber(phone)
      console.log(ph)
      // countryCallingCode = ph.countryCallingCode.toString()
      // number = ph.number.toString()
      // extension = ph.ext.toString()
    }
  }

  $: {
    const keys = Object.keys(formErrs)
    if (keys.length) {
      errorString =
        keys.map((k) => capitalize(k)).join(', ') + ' are missing or invalid.'
    } else {
      errorString = ''
    }
  }
</script>

<form class="flex flex-col items-center my-4 space-y-6 px-2">
  <TextField
    name="attribute-name"
    label="Name"
    bind:value={name}
    error={formErrs.name}
  />
  <PhoneField
    name="phone"
    label="Phone"
    bind:value={phone}
    error={formErrs.phone}
  />
  <Toggle name="sms" label="Allow SMS" bind:isActive={sms} />
  <p class="text-red-600 h-6 w-full" style={'margin-top: 0.25rem'}>
    {errorString}
  </p>
  <Button on:click={onSave}>Save</Button>
</form>
