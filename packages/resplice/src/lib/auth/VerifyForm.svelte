<script lang="ts">
  import { CountryCode, parsePhoneNumber } from 'libphonenumber-js'
  import authStore from '$stores/auth'
  import AttributeItem from '$lib/attributes/AttributeItem.svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import LockClosedIcon from '$lib/icons/LockClosedIcon.svelte'
  import ShieldCheckmarkIcon from '$lib/icons/ShieldCheckmarkIcon.svelte'
  import Spinner from '$lib/common/skeleton/Spinner.svelte'
  import type { Email, Phone } from '$types/attribute'
  import { AttributeType } from '$types/attribute'

  const parsedPhone = parsePhoneNumber(
    $authStore.loginValues.phone.value,
    $authStore.loginValues.phone.countryCallingCode as CountryCode
  )
  const email: Email = {
    uuid: 'email',
    type: AttributeType.EMAIL,
    name: 'Email',
    value: { email: $authStore.loginValues.email },
    sort_order: 1
  }
  const phone: Phone = {
    uuid: 'phone',
    type: AttributeType.PHONE,
    name: 'Phone',
    value: {
      countryCallingCode: parsedPhone.countryCallingCode as string,
      number: parsedPhone.nationalNumber as string,
      isSms: true
    },
    sort_order: 2
  }

  let emailCode = ''
  let emailLoading = false
  let emailVerified = true

  let phoneCode = ''
  let phoneLoading = false
  let phoneVerified = false

  async function submitEmailCode(code: string) {
    console.log(code)
  }

  async function submitPhoneCode(code: string) {
    console.log(code)
  }

  $: {
    emailCode = emailCode.toUpperCase().substring(0, 6)
    if (emailCode.length >= 6) submitEmailCode(emailCode)
  }
  $: {
    phoneCode = phoneCode.toUpperCase().substring(0, 6)
    if (phoneCode.length >= 6) submitPhoneCode(phoneCode)
  }
</script>

<div class="flex-1 space-y-16">
  <div class="flex flex-col space-y-4 items-center">
    <AttributeItem
      attribute={email}
      itemType="disabled"
      showSecondAction={false}
    />
    <div class="w-56 flex items-center">
      <div class="w-44 mr-4">
        <TextField
          name="email-code"
          label="Enter Code"
          bind:value={emailCode}
          disabled={emailCode.length >= 6}
          Icon={LockClosedIcon}
        />
      </div>
      {#if emailLoading}
        <span class="text-brand-primary"><Spinner /></span>
      {:else if emailVerified}
        <span class="text-brand-primary">
          <ShieldCheckmarkIcon width={24} height={24} />
        </span>
      {/if}
    </div>
  </div>
  <div class="flex flex-col space-y-4 items-center">
    <AttributeItem
      attribute={phone}
      itemType="disabled"
      showSecondAction={false}
    />
    <div class="w-56 flex items-center">
      <div class="w-44 mr-4">
        <TextField
          name="phone-code"
          label={emailVerified ? 'Enter Code' : 'Verify Email'}
          bind:value={phoneCode}
          disabled={!emailVerified || phoneCode.length >= 6}
          Icon={LockClosedIcon}
        />
      </div>
      {#if phoneLoading}
        <span class="text-brand-primary"><Spinner /></span>
      {:else if phoneVerified}
        <span class="text-brand-primary">
          <ShieldCheckmarkIcon width={24} height={24} />
        </span>
      {/if}
    </div>
  </div>
</div>
