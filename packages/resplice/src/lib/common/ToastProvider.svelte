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
      if (differenceInSeconds(new Date(), toast.created) < 5)
        toastQueue.push(toast)
    })
  }

  $: {
    if (toastQueue.length) {
      currentToast = toastQueue.shift()
      console.log(currentToast)
      // toastTimeout = setTimeout(() => {
      //   currentToast = null
      // }, 2500)
    }
  }

  onDestroy(() => {
    clearTimeout(toastTimeout)
  })
</script>

{#if currentToast}
  <div class="fixed w-full h-full top-0 left-0">
    <ToastView toast={currentToast} />
  </div>
{/if}

<slot />
