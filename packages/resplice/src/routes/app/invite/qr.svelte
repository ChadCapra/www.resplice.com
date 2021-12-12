<script lang="ts">
  import QrCode from '$lib/common/QRCode.svelte'
  import Header from '$lib/user/Header.svelte'
  import ShareContext from '$lib/sharing/ShareContext.svelte'

  let shares: Set<string>
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
  <Header showUser />
  <main class="bg-white rounded-t-3xl flex-1 flex flex-col p-8 overflow-auto">
    <div class="flex items-center justify-center mb-8">
      <QrCode data="http://marcusv.me" scale={9} />
    </div>
    <ShareContext bind:shares />
  </main>
</div>
