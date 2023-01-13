<script lang="ts">
  import { onMount } from 'svelte'
  import QRCode from 'qrcode'

  let canvas: HTMLCanvasElement
  export let data: string
  export let scale: number

  onMount(() => {
    QRCode.toCanvas(canvas, data, {
      errorCorrectionLevel: 'medium',
      scale
    })
  })
</script>

<canvas bind:this={canvas}>Canvas not supported</canvas>
