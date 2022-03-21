<script lang="ts">
  import parsePhoneNumber, { isValidPhoneNumber } from 'libphonenumber-js'
  import { createEventDispatcher } from 'svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import PhoneField from '$lib/common/form/PhoneField.svelte'
  import Toggle from '$lib/common/form/Toggle.svelte'
  import FormButtons from '$lib/attributes/form/FormButtons.svelte'

  import type { CountryCode } from 'libphonenumber-js'

  const dispatch = createEventDispatcher()

  export let name = ''
  export let countryCallingCode = ''
  export let number = ''
  export let extension = ''
  export let isSms = true

  let formErrs: any = {}
  let phone = { countryCallingCode: 'US' as CountryCode, value: '' }

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
    if (phone.value) {
      // Country code is not optional
      const ph = parsePhoneNumber(
        phone.value,
        phone.countryCallingCode as CountryCode
      )
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

<form class="flex flex-col items-center justify-between mt-4 px-2 flex-1">
  <div class="w-full flex flex-col space-y-6">
    <TextField
      name="attribute-name"
      label="Name"
      bind:value={name}
      error={formErrs.name}
    />
    <PhoneField name="phone" label="Phone" bind:phone error={formErrs.phone} />
    <Toggle name="isSms" label="Allow SMS" bind:isActive={isSms} />
  </div>

  <FormButtons on:save={onSave} />
</form>
