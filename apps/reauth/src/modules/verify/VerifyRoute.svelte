<script lang="ts">
	import { _ as t } from 'svelte-i18n'
	import authStore from '$common/auth.store'
	import RespliceWide from '@resplice/components/icons/RespliceWide.svelte'
	import VerifyForm from '$modules/verify/components/VerifyForm.svelte'
	import { AuthStatus } from '$common/common.types'
</script>

<svelte:head>
	<title>{$t('verify')}</title>
</svelte:head>

{#if [AuthStatus.PENDING_EMAIL_VERIFICATION, AuthStatus.PENDING_PHONE_VERIFICATION].includes($authStore.status)}
	<main class="w-full h-full p-8 flex flex-col justify-between m-auto max-w-lg overflow-auto">
		<header class="flex-none w-full mb-8">
			<RespliceWide width="100%" />
			<p class="text-lg font-semibold mt-4">
				{$t('verify.header')}
			</p>
		</header>

		<VerifyForm />
	</main>
{/if}
