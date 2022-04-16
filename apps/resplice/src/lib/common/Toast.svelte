<script lang="ts">
  import cx from 'classnames'
  import { fly } from 'svelte/transition'
  import { ToastType } from '$types/common'
  import type { Toast } from '$types/common'

  export let toast: Toast
</script>

<div
  transition:fly={{ y: -50, delay: 50, duration: 150, opacity: 0.25 }}
  class={cx('w-full shadow-lg rounded-2xl z-50', {
    'bg-green-200': toast.type === ToastType.SUCCESS
  })}
>
  <p class="uppercase p-2 rounded-full text-white">
    {toast.title}
  </p>
</div>
