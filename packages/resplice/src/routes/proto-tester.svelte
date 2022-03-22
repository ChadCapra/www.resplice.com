<script lang="ts">
  import { onMount } from 'svelte'
  import * as reproto from '$lib/reproto'
  import { encrypt, generateAesKey } from '$services/crypto'
  import { encode, encodeClientMessageWrapper } from '$services/proto'
  import Code from '$lib/common/Code.svelte'

  let aesKey: { key: CryptoKey; raw: ArrayBuffer }

  let clientMessage: reproto.api_request.ApiRequest

  // const ServerMessageType = reproto.api_response.ResponseType
  const ClientMessageType = reproto.api_request.RequestType

  $: clientMessageEncoded =
    clientMessage && encodeClientMessageWrapper(clientMessage)

  $: {
    clientMessageEncoded && console.log('Client Message:', clientMessageEncoded)
  }

  onMount(async () => {
    aesKey = await generateAesKey()
    console.log(aesKey.key)
  })

  function bytesToB64(bytes: ArrayBuffer) {
    // NOTE: This won't work for large buffers, should be fine for keys and small messages
    return btoa(String.fromCharCode(...new Uint8Array(bytes)))
  }

  async function handleClick() {
    const encodedMessage = encode({
      type: ClientMessageType.ACCOUNT_CREATE,
      data: {
        name: 'Chad Capra',
        avatar: new Uint8Array(),
        handle: 'hockey4life'
      }
    })
    const encryptedMessage = await encrypt(aesKey.key, encodedMessage)

    console.log('Encoded Message:', encodedMessage)
    console.log('Encrypted Message:', encryptedMessage.bytes)
    clientMessage = {
      requestType: ClientMessageType.ACCOUNT_CREATE,
      requestId: 0,
      iv: encryptedMessage.iv,
      encryptedParameters: encryptedMessage.bytes
    }
  }
</script>

<div class="flex flex-col items-center p-8">
  {#if !!aesKey}
    <h3 class="font-semibold text-lg">Base64 Encoded AES Key</h3>
    <Code>{bytesToB64(aesKey.raw)}</Code>

    <button on:click={handleClick}>Test Create Message</button>

    {#if !!clientMessage}
      <h3 class="font-semibold text-lg mt-8">Client Message Result</h3>
      <table class="my-4">
        <tr>
          <th class="font-semibold">Request Type</th>
          <td>
            {reproto.api_request.requestTypeToJSON(clientMessage.requestType)}
          </td>
        </tr>
        <tr>
          <th class="font-semibold">Request ID</th>
          <td>{clientMessage.requestId}</td>
        </tr>
        <tr>
          <th class="font-semibold">IV</th>
          <td>{bytesToB64(clientMessage.iv.buffer)}</td>
        </tr>
      </table>
      <div class="max-w-4xl p-4 overflow-auto">
        <h3 class="font-semibold text-lg mb-6">
          Base64 Encoded Client Message
        </h3>
        <Code>{bytesToB64(clientMessageEncoded)}</Code>
      </div>
    {/if}
  {:else}
    <p>Generating AES key</p>
  {/if}
</div>
