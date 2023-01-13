<script lang="ts">
  import { createAvatar } from '@dicebear/avatars'
  import * as style from '@dicebear/avatars-gridy-sprites'
  export let id: number
  export let src = ''
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'md'

  const svgWidthMap = {
    xs: 8,
    sm: 20,
    md: 32,
    lg: 48,
    xl: 128,
    '2xl': 240
  }
  const imageWidthMap = {
    xs: 24,
    sm: 36,
    md: 48,
    lg: 64,
    xl: 144,
    '2xl': 256
  }
  const seed = Number(id).toString()
  const svg = createAvatar(style, { seed, width: svgWidthMap[size] })
</script>

<div class="bg-gray-100 rounded-full w-max" class:p-2={!src} on:click>
  {#if src}
    <img {src} loading="lazy" width={imageWidthMap[size]} alt={seed} />
  {:else}
    {@html svg}
  {/if}
</div>
