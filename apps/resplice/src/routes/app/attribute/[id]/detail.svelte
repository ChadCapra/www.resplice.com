<script lang="ts" context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export async function load({ params }) {
    return {
      props: {
        id: parseInt(params.id, 10)
      }
    }
  }
</script>

<script lang="ts">
  import {
    formatRespliceDatetime,
    formatRespliceDatetimeDistance,
    getRespliceNow
  } from '$services/datetime'
  import attributeStore from '$stores/attributes'
  import useAppClient from '$lib/hooks/useAppClient'
  import attributeTypes from '$lib/attributes/attributeTypes'
  import AttributeItem from '$lib/attributes/Item.svelte'
  import IconButton from '$lib/common/IconButton.svelte'
  import BackIcon from '$lib/icons/BackIcon.svelte'
  import EllipsisHorizontalIcon from '$lib/icons/EllipsisHorizontalIcon.svelte'
  import ContextMenu from '$lib/attributes/ContextMenu.svelte'
  import ShieldCheckmarkIcon from '$lib/icons/ShieldCheckmarkIcon.svelte'
  import Button from '$lib/common/Button.svelte'
  import ShieldHalfIcon from '$lib/icons/ShieldHalfIcon.svelte'
  import Contacts from '$lib/attributes/Contacts.svelte'
  import Verify from '$lib/attributes/Verify.svelte'

  const client = useAppClient()

  export let id: number
  $: attribute = $attributeStore ? $attributeStore.get(id) : null
  $: attributeType = attributeTypes[attribute.type]

  let showContextMenu = false
  let sendingVerification = false
  let showVerification = false

  async function sendAttributeVerification() {
    sendingVerification = true
    await client.attributes.sendAttributeVerification(attribute.id)
    sendingVerification = false
  }
</script>

<svelte:head>
  <title>{attribute.name}</title>
</svelte:head>

<div class="flex flex-col w-full h-full bg-gray-100">
  <nav class="flex-none flex items-center justify-between p-4">
    <IconButton Icon={BackIcon} on:click={() => window.history.back()} />
    <IconButton
      Icon={EllipsisHorizontalIcon}
      on:click={() => (showContextMenu = true)}
    />
    {#if showContextMenu}
      <ContextMenu
        attributeId={attribute.id}
        on:close={() => (showContextMenu = false)}
      />
    {/if}
  </nav>
  <main
    class="bg-white rounded-t-3xl flex-1 flex flex-col overflow-auto space-y-4 p-8"
  >
    <AttributeItem {attribute} itemType="user" disableActions />

    {#if attributeType.verifiable}
      <div class="flex space-x-2 items-center">
        {#if attribute.verifiedAt}
          <div class="text-brand-primary">
            <ShieldCheckmarkIcon />
          </div>
        {:else}
          <div class="text-red-500">
            <ShieldHalfIcon />
          </div>
        {/if}
        <div>
          <h4 class="text-lg">
            {#if attribute.verifiedAt}
              Verified
            {:else}
              Unverified
            {/if}
          </h4>
          {#if attribute.verifiedAt}
            <p class="text-gray-700 text-sm">
              on {formatRespliceDatetime(
                attribute.verifiedAt,
                "MMMM do',' yyyy"
              )}
            </p>
          {/if}
        </div>
      </div>

      <div class="w-full flex flex-col space-y-2">
        {#if attribute.verifyExpiry}
          <p class="text-gray-700 text-sm">
            Expiring in {formatRespliceDatetimeDistance(
              getRespliceNow(),
              attribute.verifyExpiry
            )}
          </p>
        {/if}
        <Button
          variant="secondary"
          isLoading={sendingVerification}
          on:click={sendAttributeVerification}>Re-Verify</Button
        >
      </div>
    {/if}

    <Contacts attributeId={attribute.id} />
  </main>
</div>

{#if showVerification}
  <Verify attributeId={attribute.id} />
{/if}
