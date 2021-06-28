<script>
  import { createEventDispatcher, onDestroy, onMount } from 'svelte'

  const dispatch = createEventDispatcher()

  let stream: HTMLVideoElement
  let streamError: Error | null
  let facingMode: 'user' | 'environment' = 'user'

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
    // TODO: Play snap sound
    dispatch('close')
  }

  onMount(initCamera)

  onDestroy(stopCamera)
</script>

<div
  class="fixed top-0 left-0 w-full h-full z-10 bg-black"
  style="margin: 0; padding: 0"
>
  <video bind:this={stream} playsInline autoPlay>
    <track default kind="captions" srclang="en" />
    Sorry, your browser doesn't support embedded videos.
  </video>

  <div />
</div>
