<script lang="ts">
  import { parsePhoneNumber } from 'libphonenumber-js'
  import authStore from '$stores/auth'
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
    $authStore.loginValues.phone.countryCode as CountryCode
  )
  const email: Email = {
    id: 0,
    type: AttributeType.EMAIL,
    name: 'Email',
    value: { email: $authStore.loginValues.email },
    sortOrder: 1
  }

  const phone: Phone = {
    id: 1,
    type: AttributeType.PHONE,
    name: 'Phone',
    value: {
      number: parseInt((parsedPhone.number as string).slice(1), 10),
      smsEnabled: true
    },
    sortOrder: 2
  }

  let emailCode = ''
  let emailPromise: Promise<number>
  $: emailVerified = !!$authStore.session.emailVerifiedAt

  let phoneCode = ''
  let phonePromise: Promise<number>

  async function submitEmailCode(verificationToken: number): Promise<number> {
    const session = await client.verifyEmail({ verificationToken })
    if (!session.emailVerifiedAt) throw Error('Verification code did not work')

    authStore.update((auth) => ({ ...auth, session }))
    return session.emailVerifiedAt
  }

  async function submitPhoneCode(verificationToken: number): Promise<number> {
    const session = await client.verifyPhone({ verificationToken })
    if (!session.phoneVerifiedAt) throw Error('Verification code did not work')

    authStore.update((auth) => ({ ...auth, session }))
    return session.phoneVerifiedAt
  }

  $: {
    emailCode = emailCode.toUpperCase().substring(0, CODE_LENGTH)
    if (emailCode.length >= CODE_LENGTH) {
      emailPromise = submitEmailCode(parseInt(emailCode, 10))
    }
  }
  $: {
    phoneCode = phoneCode.toUpperCase().substring(0, CODE_LENGTH)
    if (phoneCode.length >= CODE_LENGTH) {
      phonePromise = submitPhoneCode(parseInt(emailCode, 10))
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
