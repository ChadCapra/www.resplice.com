<script>
  import { createEventDispatcher, onMount } from 'svelte'
  import { spring } from 'svelte/motion'
  import { clamp } from '@resplice/utils'

  const dispatch = createEventDispatcher()

  export let initialY = window.innerHeight - window.innerHeight / 3
  const topAnchor = 56
  const bottomAnchor = window.innerHeight - 56
  let isPressing = false
  let yPos = spring(window.innerHeight, {
    stiffness: 0.1,
    damping: 0.25
  })
  let moveStartY: number
  let moveStartPointerY: number
  let modal: HTMLDivElement

  onMount(() => {
    yPos.set(initialY)
  })

  const close = () => {
    yPos.set(window.innerHeight)
    setTimeout(() => dispatch('close'), 225)
  }

  const snapContainer = (swipeDirection: 'up' | 'down') => {
    if (swipeDirection === 'up') {
      if ($yPos > initialY) {
        yPos.set(initialY)
      } else if ($yPos < initialY) {
        yPos.set(topAnchor)
      }
    } else if (swipeDirection === 'down') {
      if ($yPos > initialY) {
        close()
      } else if ($yPos < initialY) {
        yPos.set(initialY)
      }
    }
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close()
    }
  }
  const onPointerDown: svelte.JSX.PointerEventHandler<HTMLDivElement> = (e) => {
    moveStartY = $yPos
    moveStartPointerY = e.y
    isPressing = true
  }
  const onPointerMove: svelte.JSX.PointerEventHandler<HTMLDivElement> = (e) => {
    if (!isPressing) return
    const offset = moveStartPointerY - e.y
    const clampedY = clamp(moveStartY - offset, topAnchor, bottomAnchor)
    yPos.set(clampedY)
  }
  const onPointerUp: svelte.JSX.PointerEventHandler<HTMLDivElement> = (e) => {
    const pointerDistance = moveStartPointerY - e.y
    const isSwipe = Math.abs(pointerDistance) >= 50
    const swipeDirection: 'up' | 'down' = pointerDistance > 0 ? 'up' : 'down'
    isPressing = false
    isSwipe ? snapContainer(swipeDirection) : yPos.set(moveStartY)
  }
</script>

<svelte:window on:keydown={onKeyDown} />

<div
  class="fixed top-0 left-0 w-full h-full backdrop"
  style="margin: 0; padding: 0"
>
  <div
    class="absolute left-0 top-0 w-full h-full bg-gray-700 opacity-30"
    on:click={close}
  />
  <div
    class="bg-white absolute bottom-0 w-full flex flex-col items-center rounded-t-xl h-full"
    style="will-change: transform; transform: translateY({$yPos}px);"
    role="dialog"
    aria-modal="true"
    bind:this={modal}
    on:pointerdown={onPointerDown}
    on:pointermove={onPointerMove}
    on:pointerup={onPointerUp}
  >
    <div class="bg-gray-700 h-1 w-12 rounded-lg mt-1" />
    <slot />
  </div>
</div>

<style>
  .backdrop {
    backdrop-filter: blur(5px);
    touch-action: none;
  }
</style>
