<script lang="ts">
  import CameraReverseIcon from '$lib/icons/CameraReverseIcon.svelte'
  import CloseIcon from '$lib/icons/CloseIcon.svelte'

  import { createEventDispatcher, onDestroy, onMount } from 'svelte'

  const dispatch = createEventDispatcher()

  export let showControls = true

  let stream: HTMLVideoElement
  let streamError: Error | null
  let facingMode: 'user' | 'environment' = 'user'

  const cameraClickAudio = new Audio('/sounds/camera_click.mp3')
  cameraClickAudio.volume = 0.25

  async function initCamera() {
    try {
      const video = await navigator.mediaDevices.getUserMedia({
        video: {
          height: { ideal: window.screen.height },
          width: { ideal: window.screen.width },
          facingMode
        },
        audio: false
      })
      if (stream) {
        stream.srcObject = video
        stream.play()
      }
    } catch (err) {
      streamError = err
    }
  }

  function stopCamera() {
    if (stream) {
      const player: MediaStream = stream.srcObject as MediaStream
      player.getVideoTracks().forEach((track) => track.stop())
    }
    cameraClickAudio.pause()
  }

  function toggleFacingMode() {
    if (facingMode === 'user') facingMode = 'environment'
    if (facingMode === 'environment') facingMode = 'user'
  }

  function takePicture() {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    const { height, width } = stream.getBoundingClientRect()
    canvas.height = height
    canvas.width = width
    context.drawImage(stream, 0, 0, width, height)
    canvas.toBlob((blob) => dispatch('picture', blob))
    cameraClickAudio.play()
    // dispatch('close')
  }

  onMount(initCamera)

  onDestroy(stopCamera)
</script>

<div
  class="fixed top-0 left-0 w-full h-full z-10 bg-gray-900"
  style="margin: 0; padding: 0"
>
  <video bind:this={stream} playsInline autoPlay>
    <track default kind="captions" srclang="en" />
    Sorry, your browser doesn't support embedded videos.
  </video>

  {#if showControls}
    <div
      class="absolute bottom-0 z-20 flex items-center justify-around w-full p-4"
    >
      <button
        class="h-12 w-12 p-2 rounded-full bg-gray-800 bg-opacity-50 transform transition duration-75 ease-in-out active:scale-90"
        on:click={() => dispatch('close')}
      >
        <CloseIcon width={32} height={32} />
      </button>
      <button
        class="outline-none ring-4 ring-brand-primary bg-brand-primary bg-opacity-25 h-14 w-14 rounded-full transform transition duration-75 ease-in-out active:scale-90"
        on:click={takePicture}
      />
      <button
        class="h-12 w-12 p-2 rounded-full bg-gray-800 bg-opacity-50 transform transition duration-75 ease-in-out active:scale-90"
        on:click={toggleFacingMode}
      >
        <CameraReverseIcon width={32} height={32} />
      </button>
    </div>
  {/if}
</div>
