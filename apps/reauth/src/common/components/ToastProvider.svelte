<script lang="ts">
  import { onDestroy } from 'svelte'

  import { differenceInSeconds } from 'date-fns'
  import toasts from '$stores/toasts'
  import type { Toast } from '$types/common'
  import ToastView from './Toast.svelte'

  let toastQueue: Toast[] = []
  let toastTimeout: NodeJS.Timeout
  $: currentToast = toastQueue.length ? toastQueue[0] : null

  $: {
    $toasts.forEach((toast) => {
      if (differenceInSeconds(new Date(), toast.created) < 20) {
        toastQueue.push(toast)
        toastQueue = toastQueue
      }
    })
  }

  $: {
    if (toastQueue.length) {
      currentToast = toastQueue.shift()
      console.log(currentToast)
      toastTimeout = setTimeout(() => {
        currentToast = null
      }, 4500)
    }
  }

  function clear() {
    clearTimeout(toastTimeout)
    currentToast = null
  }

  onDestroy(clear)
</script>

{#if currentToast}
  <div class="fixed w-full top-0 left-0">
    <ToastView toast={currentToast} on:close={clear} />
  </div>
{/if}

<slot />
