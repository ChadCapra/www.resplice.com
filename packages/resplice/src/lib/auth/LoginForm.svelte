<script lang="ts">
  import { onMount } from 'svelte'
  import { CountryCode, isValidPhoneNumber } from 'libphonenumber-js'
  import CryptoWorker from '$workers/crypto?worker'
  import authStore from '$stores/auth'
  import useAuthClient from '$lib/hooks/useAuthClient'
  import Button from '$lib/common/Button.svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import PhoneField from '$lib/common/form/PhoneField.svelte'
  import MailIcon from '$lib/icons/MailIcon.svelte'
  import PhoneIcon from '$lib/icons/PhoneIcon.svelte'
  import { validateEmail } from '$lib/utils'
  import Toggle from '$lib/common/form/Toggle.svelte'

  const client = useAuthClient()

  let keys

  onMount(() => {
    const cryptoWorker = new CryptoWorker()
    cryptoWorker.onmessage = ({ data: cmd }) => {
      switch (cmd.type) {
        case 'GENERATE_KEYS':
          keys = cmd.data.keys
          break
      }
    }
    // cryptoWorker.postMessage({ type: 'GENERATE_KEYS' })
  })

  // $: {
  //   console.log(keys)
  // }

  let phone = {
    value: '',
    countryCallingCode: 'US' as CountryCode
  }
  let email = ''
  let rememberMe = false
  let formErrs: Record<string, string> = {}
  let networkErr: Error
  let isLoading = false

  type SubmitEvent = Event & {
    currentTarget: EventTarget & HTMLFormElement
  }
  async function onSubmit(_e: SubmitEvent) {
    formErrs = {}
    const errs: Record<string, string> = {}
    if (!isValidPhoneNumber(phone.value, phone.countryCallingCode))
      errs.phone = 'Invalid Phone'
    if (!validateEmail(email)) errs.email = 'Invalid Email'
    if (Object.keys(errs).length) {
      formErrs = errs
      return
    }
    try {
      isLoading = true
      const session = await client.createSession({ phone, email, rememberMe })
      authStore.set({
        loginValues: {
          phone,
          email
        },
        session: session,
        public_key: {},
        private_key: {}
      })
    } catch (err) {
      networkErr = err
      isLoading = false
    }
  }
</script>

<form
  class="flex-1 flex flex-col justify-between items-center w-full p-2 overflow-auto"
  on:submit|preventDefault={onSubmit}
>
  <div class="w-full flex flex-col space-y-6">
    <PhoneField
      name="phone"
      label="Enter Phone"
      bind:phone
      Icon={PhoneIcon}
      error={formErrs.phone}
    />
    <TextField
      name="email"
      label="Enter Email"
      bind:value={email}
      Icon={MailIcon}
      error={formErrs.email}
    />
    <Toggle name="remember-me" label="Remember Me" bind:isActive={rememberMe} />
  </div>

  <div class="w-40 flex flex-col">
    <Button type="submit" {isLoading}>Continue</Button>
    {#if networkErr}
      <p>{networkErr.message}</p>
    {/if}
  </div>
</form>
