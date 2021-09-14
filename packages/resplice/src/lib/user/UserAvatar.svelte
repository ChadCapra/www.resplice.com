<script lang="ts">
  import type { User } from '$types'
  import { createEventDispatcher } from 'svelte'
  import Avatar from '$lib/common/Avatar.svelte'
  import UploadIcon from '$lib/icons/UploadIcon.svelte'
  import CameraIcon from '$lib/icons/CameraIcon.svelte'
  import Modal from '$lib/common/Modal.svelte'
  import Button from '$lib/common/Button.svelte'

  const dispatch = createEventDispatcher()

  export let user: Pick<User, 'uuid' | 'avatar'>

  let showUploadModal = false
</script>

<div class="w-full flex flex-col items-center">
  <div
    class="relative active:scale-95"
    on:click={() => (showUploadModal = true)}
  >
    <Avatar uuid={user.uuid} src={user.avatar} size="xl" />
    <div
      class="absolute right-2 bottom-0 bg-white rounded-full p-2 text-gray-600"
    >
      <UploadIcon width={24} height={24} />
    </div>
  </div>
</div>

{#if showUploadModal}
  <Modal initialY={56} on:close={() => (showUploadModal = false)}>
    <div class="w-full h-full p-4 flex flex-col space-y-8 overflow-scroll">
      <button
        class="w-full rounded-lg shadow-lg flex flex-col p-8 items-center active:scale-95"
        on:click={() => dispatch('upload')}
      >
        <span class="text-brand-primary">
          <UploadIcon width={144} height={144} />
        </span>
        <h1 class="text-4xl text-gray-800 font-semibold mt-8">
          Upload Picture
        </h1>
      </button>

      <button
        class="w-full rounded-lg shadow-lg flex flex-col p-8 items-center active:scale-95"
        on:click={() => dispatch('picture')}
      >
        <span class="text-brand-primary">
          <CameraIcon width={144} height={144} />
        </span>
        <h1 class="text-4xl text-gray-800 font-semibold mt-8">Take Picture</h1>
      </button>

      <div class="m-auto">
        <Button color="gray" on:click={() => (showUploadModal = false)}>
          Cancel
        </Button>
      </div>
    </div>
  </Modal>
{/if}
