<script>
  import Avatars from '@dicebear/avatars'
  import sprites from '@dicebear/avatars-gridy-sprites'
  export let uuid: string
  export let src = ''
  // export let isEditable = false
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md'

  const avatarWidthMap = {
    xs: '1em',
    sm: '2em',
    md: '3em',
    lg: '4em',
    xl: '6em'
  }
  const imageWidthMap = {
    xs: '1.5em',
    sm: '2em',
    md: '3em',
    lg: '4.5em',
    xl: '7em'
  }
  const avatarWidth = avatarWidthMap[size]
  const imageWidth = imageWidthMap[size]
  const avatars = new Avatars(sprites, { width: avatarWidth })
  const svg = avatars.create(uuid)
</script>

<div class="bg-gray-200 rounded-full active:scale-95" class:p-1={!src} on:click>
  {#if src}
    <img {src} width={imageWidth} alt={uuid} />
  {:else}
    {@html svg}
  {/if}
</div>
