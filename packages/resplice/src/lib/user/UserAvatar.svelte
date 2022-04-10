<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { Profile } from '$types/user'
  import Avatar from '$lib/common/Avatar.svelte'
  import UploadIcon from '$lib/icons/UploadIcon.svelte'
  import Modal from '$lib/common/Modal.svelte'
  import Cropper from '$lib/common/Cropper.svelte'

  const dispatch = createEventDispatcher()

  export let profile: Pick<Profile, 'uuid' | 'avatar'>

  let imageInput: HTMLInputElement
  let rawImage: File | null = null

  function onCrop(image: Blob) {
    rawImage = null
    dispatch('crop', image)
  }
</script>

<div class="w-full flex flex-col items-center">
  <div class="relative active:scale-95" on:click={() => imageInput.click()}>
    <!-- TODO: Fix profile id -->
    <Avatar id={1} src={profile.avatar} size="xl" />
    <div
      class="absolute right-2 bottom-0 bg-white rounded-full p-2 text-gray-600"
    >
      <UploadIcon width={24} height={24} />
    </div>
    <input
      bind:this={imageInput}
      class="hidden"
      type="file"
      accept="image/*"
      on:change={(e) => (rawImage = e.currentTarget.files[0])}
    />
  </div>
</div>

{#if !!rawImage}
  <Modal let:close on:close={() => (rawImage = null)} initialY={48}>
    <Cropper image={rawImage} {close} on:crop={(e) => onCrop(e.detail)} />
  </Modal>
{/if}
