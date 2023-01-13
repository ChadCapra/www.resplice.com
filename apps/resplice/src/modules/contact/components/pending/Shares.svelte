<script lang="ts">
  import { goto } from '$app/navigation'
  import attributeStore from '$stores/attributes'
  import contactStores from '$stores/contacts'
  import useAppClient from '$lib/hooks/useAppClient'
  import AttributeItem from '$lib/attributes/Item.svelte'
  import SkeletonList from '$lib/common/skeleton/SkeletonList.svelte'
  import AddIcon from '$lib/icons/AddIcon.svelte'
  import Toggle from '$lib/common/form/Toggle.svelte'
  import Button from '$lib/common/Button.svelte'
  import { sortUserAttributes } from '$lib/attributes/utils'

  const client = useAppClient()

  export let contactId: number

  $: userAttributes = sortUserAttributes($attributeStore)
  let shareMap: Record<number, boolean> = {}
  let isLoading: boolean = false

  function handleShareToggle(attributeId: number) {
    if (shareMap[attributeId]) {
      shareMap = { ...shareMap, [attributeId]: false }
    } else {
      shareMap = { ...shareMap, [attributeId]: true }
    }
  }

  async function handleConnect() {
    if (!Object.values(shareMap).length) {
      // TODO: Use toast
      alert('One share is required')
      return
    }

    isLoading = true
    const contact = await client.contacts.acceptPending(contactId)

    contactStores.contacts.update((contacts) => {
      const newContacts = new Map(contacts)
      newContacts.set(contact.id, contact)
      return newContacts
    })

    goto(`/app/contact/${contact.id}/attributes`)
  }
</script>

<div class="flex-1 flex flex-col space-y-4 w-full px-8 pb-4">
  {#if userAttributes}
    {#each userAttributes as attribute}
      <div class="flex">
        <AttributeItem itemType="user" {attribute} />
        <Toggle
          name={`share-${attribute.id}`}
          label=""
          isActive={shareMap[attribute.id]}
          on:toggle={() => handleShareToggle(attribute.id)}
        />
      </div>
    {/each}
    <button class="flex items-center">
      <div
        class="bg-brand-primary text-brand-primary outline-none border-none p-3 bg-opacity-20 rounded-lg focus:outline-none transform transition duration-75 ease-in-out active:scale-90"
      >
        <AddIcon width={24} height={24} />
      </div>
      <p class="ml-4">New Attribute</p>
    </button>
    <Button {isLoading} on:click={handleConnect}>Connect</Button>
  {:else}
    <SkeletonList count={8} height="3em" width="100%" />
  {/if}
</div>
