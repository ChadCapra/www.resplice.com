<script lang="ts">
  import { onMount } from 'svelte'
  import * as reproto from '$lib/reproto'
  import { encrypt, generateAesKey } from '$services/crypto'
  import { encode, encodeClientMessageWrapper } from '$services/proto'
  import Code from '$lib/common/Code.svelte'
  import type { ApiRequest } from '@resplice/proto/dist/api_request'

  let aesKey: { key: CryptoKey; raw: ArrayBuffer }

  let clientMessage: ApiRequest

  // const ServerMessageType = reproto.api_response.ResponseType
  const ClientMessageType = reproto.api_request.RequestType

  $: clientMessageEncoded =
    clientMessage && encodeClientMessageWrapper(clientMessage)

  $: {
    console.log(bytesToB64(clientMessageEncoded))
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
    const createAccountBytes = encode({
      type: ClientMessageType.ACCOUNT_CREATE,
      data: {
        name: 'Bastilla Shan',
        avatar: new Uint8Array(),
        handle: 'bastilla-shan'
      }
    })
    const encryptedMessage = await encrypt(aesKey.key, createAccountBytes)
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
      <h3 class="font-semibold text-lg">Client Message Result</h3>
      <table>
        <tr>
          <td>Request Type</td>
          <td>Request ID</td>
          <td>IV</td>
        </tr>
        <tr>
          <td>{clientMessage.requestType}</td>
          <td>{clientMessage.requestId}</td>
          <td>{bytesToB64(clientMessage.iv.buffer)}</td>
        </tr>
      </table>
      <div class="max-w-4xl p-4 overflow-auto">
        <Code>{bytesToB64(clientMessageEncoded)}</Code>
      </div>
    {/if}
  {:else}
    <p>Generating AES key</p>
  {/if}
</div>
