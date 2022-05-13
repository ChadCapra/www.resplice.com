<script lang="ts">
  import { onMount } from 'svelte'
  import * as reproto from '@resplice/proto'
  import { btob64 } from '@resplice/utils'
  import { calculateClientIV, encrypt, ReCrypto } from '$services/crypto'
  import { encode, encodeClientMessageWrapper } from '$services/proto'
  import Code from '$lib/common/Code.svelte'
  import Button from '$lib/common/Button.svelte'

  let recrypto: ReCrypto | null = null

  let clientMessage: reproto.client_request.ClientRequest
  let iv: Uint8Array | null = null

  // const ServerMessageType = reproto.server_message.ServerMessageType
  const ClientMessageType = reproto.client_request.ClientRequestType

  $: clientMessageEncoded =
    clientMessage && encodeClientMessageWrapper(clientMessage)

  onMount(async () => {
    recrypto = await ReCrypto.generateAesKey()
  })

  async function handleClick() {
    const encodedMessage = encode({
      type: ClientMessageType.ACCOUNT_CREATE,
      data: {
        name: 'Chad Capra',
        avatar: new Uint8Array(),
        handle: 'hockey4life'
      }
    })
    const counter = recrypto.counter
    iv = calculateClientIV(recrypto.baseIV, counter)
    const encryptedMessage = await encrypt(recrypto.key, iv, encodedMessage)

    console.log('Encoded Message:', encodedMessage)
    console.log('Encrypted Message:', encryptedMessage)

    clientMessage = {
      requestType: ClientMessageType.ACCOUNT_CREATE,
      requestId: 0,
      encryptedPayload: encryptedMessage
    }
  }
</script>

<div class="flex flex-col items-center p-8">
  {#if !!recrypto}
    <h3 class="font-semibold text-lg">Base64 Encoded AES Key</h3>
    <Code>{btob64(recrypto.rawKey)}</Code>

    <Button class="mt-8" on:click={handleClick}
      >Test Create Account Message</Button
    >

    {#if !!clientMessage}
      <h3 class="font-semibold text-lg mt-8">Client Message Result</h3>
      <table class="my-4">
        <tr>
          <th class="font-semibold">Request Type</th>
          <td>
            {reproto.client_request.clientRequestTypeToJSON(
              clientMessage.requestType
            )}
          </td>
        </tr>
        <tr>
          <th class="font-semibold">Request ID</th>
          <td>{clientMessage.requestId}</td>
        </tr>
        <tr>
          <th class="font-semibold">IV</th>
          <td><Code>{btob64(iv)}</Code></td>
        </tr>
      </table>
      <div class="max-w-4xl p-4 overflow-auto">
        <h3 class="font-semibold text-lg mb-6">
          Base64 Encoded Client Message
        </h3>
        <Code>{btob64(clientMessageEncoded)}</Code>
      </div>
    {/if}
  {:else}
    <p>Generating AES key</p>
  {/if}
</div>
