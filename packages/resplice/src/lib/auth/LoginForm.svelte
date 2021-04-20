<script>
  import { onMount } from 'svelte'
  import CryptoWorker from '$workers/crypto?worker'
  import Button from '$lib/common/Button.svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import PhoneField from '$lib/common/form/PhoneField.svelte'
  import MailIcon from '$lib/icons/MailIcon.svelte'
  import PhoneIcon from '$lib/icons/PhoneIcon.svelte'

  let keys

  onMount(() => {
    const cryptoWorker = new CryptoWorker()
    cryptoWorker.onmessage = (e) => {
      const cmd = e.data
      switch (cmd.type) {
        case 'GENERATE_KEYS':
          keys = cmd.data.keys
          break
      }
    }
    cryptoWorker.postMessage({ type: 'GENERATE_KEYS' })
  })

  $: {
    console.log(keys)
  }

  let phone = ''
  let email = ''
</script>

<div class="w-full flex flex-col space-y-6">
  <PhoneField
    name="phone"
    label="Enter Phone"
    bind:value={phone}
    Icon={PhoneIcon}
  />
  <TextField
    name="email"
    label="Enter Email"
    bind:value={email}
    Icon={MailIcon}
  />
</div>

<div class="w-40 flex flex-col"><Button>Continue</Button></div>
