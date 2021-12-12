<script lang="ts">
  import { CountryCode, isValidPhoneNumber } from 'libphonenumber-js'
  import Button from '$lib/common/Button.svelte'
  import PhoneField from '$lib/common/form/PhoneField.svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import PhoneIcon from '$lib/icons/PhoneIcon.svelte'
  import PeopleIcon from '$lib/icons/PeopleIcon.svelte'
  import ShareContext from '$lib/sharing/ShareContext.svelte'

  let name: string
  let phone = {
    value: '',
    countryCallingCode: 'US' as CountryCode
  }
  let shares: Set<string>
  let formErrs: Record<string, string> = {}

  function onInvite(_e: Event) {
    formErrs = {}
    const errs: Record<string, string> = {}
    if (!name) errs.name = 'Please enter your full name'
    if (!isValidPhoneNumber(phone.value, phone.countryCallingCode))
      errs.phone = 'Please enter a valid phone number'
    if (!shares.size)
      errs.shares = 'Please share at least one attribute before inviting'
    if (Object.keys(errs).length) {
      formErrs = errs
      return
    }
    console.log(name, phone, shares)
  }
</script>

<form
  class="flex-1 flex flex-col justify-between items-center space-y-8"
  on:submit|preventDefault={onInvite}
>
  <div class="flex flex-col space-y-4 w-full">
    <TextField
      name="name"
      label="Full Name"
      bind:value={name}
      Icon={PeopleIcon}
      error={formErrs.name}
    />
    <PhoneField
      name="phone"
      label="Enter Phone"
      bind:phone
      Icon={PhoneIcon}
      error={formErrs.phone}
    />
  </div>

  <ShareContext bind:shares />
  {#if formErrs.shares}
    <p class="text-sm text-red-600 h-4 my-1 mx-2">{formErrs.shares}</p>
  {/if}

  <Button class="w-48" type="submit">Send</Button>
</form>
