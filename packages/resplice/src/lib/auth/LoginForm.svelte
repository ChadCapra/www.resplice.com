<script>
  import { onMount } from 'svelte'
  import CryptoWorker from '$workers/crypto?worker'
  import Button from '$lib/common/Button.svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import PhoneField from '$lib/common/form/PhoneField.svelte'
  import MailIcon from '$lib/icons/MailIcon.svelte'
  import PhoneIcon from '$lib/icons/PhoneIcon.svelte'
  import { validateEmail } from '$lib/utils'
  import Toggle from '$lib/common/form/Toggle.svelte'

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

  $: {
    console.log(keys)
  }

  let phone = ''
  let email = ''
  let rememberMe = false
  let formErrs: Record<string, string> = {}

  type SubmitEvent = Event & {
    currentTarget: EventTarget & HTMLFormElement
  }
  async function onSubmit(e: SubmitEvent) {
    e.preventDefault()
    formErrs = {}
    const errs: Record<string, string> = {}
    if (!/^[a-zA-Z]/.test(phone)) errs.phone = 'Invalid Phone'
    if (!validateEmail(email)) errs.email = 'Invalid Email'
    if (Object.keys(errs).length) {
      formErrs = errs
      return
    }
  }
</script>

<form
  class="flex-1 flex flex-col justify-between items-center w-full"
  on:submit={onSubmit}
>
  <div class="w-full flex flex-col space-y-6">
    <PhoneField
      name="phone"
      label="Enter Phone"
      bind:value={phone}
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
    <Button type="submit">Continue</Button>
  </div>
</form>
