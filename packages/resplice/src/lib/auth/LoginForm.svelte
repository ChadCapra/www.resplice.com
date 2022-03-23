<script lang="ts">
  import { parsePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js'
  import authStore from '$stores/auth'
  import useAuthClient from '$lib/hooks/useAuthClient'
  import Button from '$lib/common/Button.svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import PhoneField from '$lib/common/form/PhoneField.svelte'
  import MailIcon from '$lib/icons/MailIcon.svelte'
  import PhoneIcon from '$lib/icons/PhoneIcon.svelte'
  import { validateEmail } from '$lib/utils'
  import Toggle from '$lib/common/form/Toggle.svelte'

  import type { CountryCode } from 'libphonenumber-js'

  const client = useAuthClient()

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
    isLoading = true
    const grecaptcha: any = (window as any).grecaptcha
    grecaptcha.ready(async () => {
      const token = await grecaptcha.execute(
        '6Ld2U9YdAAAAABa8tuPRJDPJCWfJpl4UXvdmEMwG',
        { action: 'auth' }
      )
      const isBot = await client.submitRecaptchaToken(token)
      if (isBot) {
        networkErr = new Error(
          'We detected some bot behavior, you must be a robot?'
        )
      } else {
        createSession()
      }
    })
  }
  async function createSession() {
    try {
      const phoneNumber = parsePhoneNumber(
        phone.value,
        phone.countryCallingCode
      ).number as string
      const session = await client.createSession({
        phone: phoneNumber,
        email,
        remember_me: rememberMe
      })
      authStore.set({
        loginValues: {
          phone,
          email
        },
        session
      })
    } catch (err) {
      networkErr = err
      isLoading = false
    }
  }
</script>

<svelte:head>
  <script
    src="https://www.google.com/recaptcha/api.js?render=6Ld2U9YdAAAAABa8tuPRJDPJCWfJpl4UXvdmEMwG"
    async
    defer>
  </script>
</svelte:head>

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
      autoComplete="email"
      bind:value={email}
      Icon={MailIcon}
      error={formErrs.email}
    />
    <Toggle
      name="remember-me"
      label="Remember Me"
      isActive={rememberMe}
      on:toggle={() => (rememberMe = !rememberMe)}
    />
  </div>

  <div class="flex flex-col items-center justify-center">
    <div class="w-40 flex flex-col">
      <Button type="submit" {isLoading}>Continue</Button>
      {#if networkErr}
        <p>{networkErr.message}</p>
      {/if}
    </div>
    <!-- We have to have this text according to google :( -->
    <!-- https://developers.google.com/recaptcha/docs/faq#id-like-to-hide-the-recaptcha-badge.-what-is-allowed -->
    <p class="text-xs text-gray-400 mt-4 w-full">
      This site is protected by reCAPTCHA and the Google
      <a
        class="underline text-brand-primary"
        href="https://policies.google.com/privacy">Privacy Policy</a
      >
      and
      <a
        class="underline text-brand-primary"
        href="https://policies.google.com/terms">Terms of Service</a
      > apply.
    </p>
  </div>
</form>

<style>
  :global(.grecaptcha-badge) {
    visibility: hidden;
  }
</style>
