<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { fly } from 'svelte/transition'
  import cx from 'classnames'
  import CloseIcon from '$lib/icons/CloseIcon.svelte'
  import { ToastType, type Toast } from '$types/common'

  const dispatch = createEventDispatcher()

  export let toast: Toast
</script>

<div
  transition:fly={{ y: -100, delay: 50, duration: 150, opacity: 0.75 }}
  class="w-full p-4"
>
  <div class="shadow-lg rounded-lg bg-white">
    <div
      class={cx('rounded-t-lg px-4 py-2 flex justify-between', {
        'bg-green-200 text-green-600': toast.type === ToastType.SUCCESS,
        'bg-red-200 text-red-600': toast.type === ToastType.DANGER
      })}
    >
      <h2 class="uppercase">{toast.title}</h2>
      <button
        class="active:bg-gray-200 rounded-full"
        on:click={() => dispatch('close')}
      >
        <CloseIcon width={24} height={24} />
      </button>
    </div>

    <p class="text-gray-700 px-4 py-2">{toast.detail}</p>
  </div>
</div>
