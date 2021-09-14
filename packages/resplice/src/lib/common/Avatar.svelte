<script lang="ts">
  import { createAvatar } from '@dicebear/avatars'
  import * as style from '@dicebear/avatars-gridy-sprites'
  export let uuid: string
  export let src = ''
  // export let isEditable = false
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'md'

  const avatarWidthMap = {
    xs: 18,
    sm: 24,
    md: 32,
    lg: 48,
    xl: 144,
    '2xl': 256
  }
  const imageWidthMap = {
    xs: '1.5em',
    sm: '2em',
    md: '3em',
    lg: '4.5em',
    xl: '7em',
    '2xl': '10em'
  }
  const avatarWidth = avatarWidthMap[size]
  const imageWidth = imageWidthMap[size]
  const svg = createAvatar(style, { seed: uuid, width: avatarWidth })
</script>

<div class="bg-gray-100 rounded-full w-max" class:p-2={!src} on:click>
  {#if src}
    <img {src} width={imageWidth} alt={uuid} />
  {:else}
    {@html svg}
  {/if}
</div>
