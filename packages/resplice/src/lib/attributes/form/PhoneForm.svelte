<script>
  import parsePhoneNumber, { isValidPhoneNumber } from 'libphonenumber-js'
  import { createEventDispatcher } from 'svelte'
  import Button from '$lib/common/Button.svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import PhoneField from '$lib/common/form/PhoneField.svelte'
  import Toggle from '$lib/common/form/Toggle.svelte'

  const dispatch = createEventDispatcher()

  export let name = ''
  export let countryCallingCode = ''
  export let number = ''
  export let extension = ''
  export let sms = true

  let formErrs: any = {}
  let phone = ''

  function onSave() {
    formErrs = {}
    if (!name) formErrs.name = 'A name is required'
    if (!isValidPhoneNumber(number))
      formErrs.phone = 'Please enter a valid phone number'

    if (!Object.keys(formErrs).length) {
      dispatch('save')
    }
  }

  $: {
    if (phone) {
      // Country code is not optional
      const ph = parsePhoneNumber(phone, 'US')
      if (ph) {
        countryCallingCode = ph.countryCallingCode.toString()
        number = ph.number.toString()
        extension = ph.ext?.toString()
      }
    } else {
      countryCallingCode = ''
      number = ''
      extension = ''
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
    <PhoneField
      name="phone"
      label="Phone"
      bind:value={phone}
      error={formErrs.phone}
    />
    <Toggle name="sms" label="Allow SMS" bind:isActive={sms} />

    {#each Object.values(formErrs) as err}
      <p class="text-red-600 h-6 w-full" style={'margin-top: 0.25rem'}>
        {err}
      </p>
    {/each}
  </div>

  <div class="flex flex-col space-y-4">
    <Button color="danger-light" on:click={() => window.history.back()}>
      Cancel
    </Button>
    <Button on:click={onSave}>Save</Button>
  </div>
</form>
