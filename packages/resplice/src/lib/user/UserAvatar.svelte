<script lang="ts">
  import type { User } from '$types/user'
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
  <Modal let:close on:close={() => (showUploadModal = false)}>
    <div
      class="w-full p-4 flex flex-col justify-between space-y-8 overflow-scroll"
    >
      <div class="flex items-center space-x-4">
        <button
          class="w-full rounded-lg shadow-lg flex flex-col p-4 items-center active:scale-95"
          on:click={() => dispatch('upload')}
        >
          <span class="text-brand-primary">
            <UploadIcon width={32} height={32} />
          </span>
          <p class="text-gray-800 font-semibold">Upload Picture</p>
        </button>

        <button
          class="w-full rounded-lg shadow-lg flex flex-col p-4 items-center active:scale-95"
          on:click={() => dispatch('picture')}
        >
          <span class="text-brand-primary">
            <CameraIcon width={32} height={32} />
          </span>
          <p class="text-gray-800 font-semibold">Take Picture</p>
        </button>
      </div>
      <div class="m-auto">
        <Button color="gray" on:click={close}>Cancel</Button>
      </div>
    </div>
  </Modal>
{/if}
