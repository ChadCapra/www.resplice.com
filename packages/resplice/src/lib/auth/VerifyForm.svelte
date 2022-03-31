<script lang="ts">
  import { parsePhoneNumber } from 'libphonenumber-js'
  import authStore from '$lib/auth/store'
  import useAuthClient from '$lib/auth/useAuthClient'
  import AttributeItem from '$lib/attributes/AttributeItem.svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import LockClosedIcon from '$lib/icons/LockClosedIcon.svelte'
  import ShieldCheckmarkIcon from '$lib/icons/ShieldCheckmarkIcon.svelte'
  import Spinner from '$lib/common/skeleton/Spinner.svelte'
  import { AttributeType } from '$types/attribute'
  import type { CountryCode } from 'libphonenumber-js'
  import type { Email, Phone } from '$types/attribute'

  const CODE_LENGTH = 6

  const client = useAuthClient()

  const parsedPhone = parsePhoneNumber(
    $authStore.loginValues.phone.value,
    $authStore.loginValues.phone.countryCallingCode as CountryCode
  )
  const email: Email = {
    id: 0,
    type: AttributeType.EMAIL,
    name: 'Email',
    value: { email: $authStore.loginValues.email },
    sortOrder: 1
  }
  // TODO: Fix phone type
  const phone: Phone = {
    id: 1,
    type: AttributeType.PHONE,
    name: 'Phone',
    value: {
      countryCallingCode: parsedPhone.countryCallingCode as string,
      number: parsedPhone.nationalNumber as string,
      isSms: true
    },
    sortOrder: 2
  }

  let emailCode = ''
  let emailPromise: Promise<Date>
  $: emailVerified = !!$authStore.session.email_verified_at

  let phoneCode = ''
  let phonePromise: Promise<Date>

  async function submitEmailCode(verification_token: string): Promise<Date> {
    const session = await client.verifyEmail({ verification_token })
    if (!session.email_verified_at)
      throw Error('Verification code did not work')

    authStore.update((auth) => ({ ...auth, session }))
    return session.email_verified_at
  }

  async function submitPhoneCode(verification_token: string): Promise<Date> {
    const session = await client.verifyPhone({ verification_token })
    if (!session.phone_verified_at)
      throw Error('Verification code did not work')

    authStore.update((auth) => ({ ...auth, session }))
    return session.phone_verified_at
  }

  $: {
    emailCode = emailCode.toUpperCase().substring(0, CODE_LENGTH)
    if (emailCode.length >= CODE_LENGTH) {
      emailPromise = submitEmailCode(emailCode)
    }
  }
  $: {
    phoneCode = phoneCode.toUpperCase().substring(0, CODE_LENGTH)
    if (phoneCode.length >= CODE_LENGTH) {
      phonePromise = submitPhoneCode(phoneCode)
    }
  }
</script>

<div class="flex-1 space-y-16">
  <div class="flex flex-col space-y-4 items-center">
    <AttributeItem
      attribute={email}
      itemType="disabled"
      showSecondAction={false}
    />
    <div class="w-full flex items-center">
      <div class="w-full mr-4">
        <TextField
          name="email-code"
          label="Enter Code"
          autoComplete="one-time-code"
          bind:value={emailCode}
          disabled={emailCode.length >= CODE_LENGTH}
          Icon={LockClosedIcon}
        />
      </div>
      <span class="text-brand-primary w-7 h-full">
        {#await emailPromise}
          <Spinner />
        {:then verified_at}
          {#if verified_at}
            <ShieldCheckmarkIcon width={24} height={24} />
          {/if}
        {/await}
      </span>
    </div>
  </div>
  <div class="flex flex-col space-y-4 items-center">
    <AttributeItem
      attribute={phone}
      itemType="disabled"
      showSecondAction={false}
    />
    <div class="w-full flex items-center">
      <div class="w-full mr-4">
        <TextField
          name="phone-code"
          label={emailVerified ? 'Enter Code' : 'Verify Email'}
          autoComplete="one-time-code"
          bind:value={phoneCode}
          disabled={!emailVerified || phoneCode.length >= CODE_LENGTH}
          Icon={LockClosedIcon}
        />
      </div>
      <span class="text-brand-primary w-7 h-full">
        {#await phonePromise}
          <Spinner />
        {:then session}
          {#if session}
            <ShieldCheckmarkIcon width={24} height={24} />
          {/if}
        {/await}
      </span>
    </div>
  </div>
</div>
