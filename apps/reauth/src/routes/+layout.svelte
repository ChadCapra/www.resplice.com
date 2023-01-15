<script lang="ts">
	import { setContext, onMount } from 'svelte'
	import { goto } from '$app/navigation'
	import { contextKey } from '$common/auth-protocol'
	import MockAuthClient from '$common/auth-protocol/authProtocol.mocks'
	import cache from '$common/db'
	import authStore from '$common/auth.store'
	import appConfig from '$common/config'
	import AppLoading from '@resplice/components/skeleton/AppLoading.svelte'
	import PageTransition from '@resplice/components/skeleton/PageTransition.svelte'
	import '../app.css'
	import '@resplice/components/lib.css'

	console.log('Reauth layout rendering')

	// let isLoading = Promise.resolve(false)

	setContext(contextKey, new MockAuthClient())

	// onMount(() => (isLoading = P))

	// function routeGuard(auth: typeof $authStore) {
	//   if (!auth) {
	//     goto('/auth/start')
	//     return
	//   }

	//   switch (auth.session.status) {
	//     case SessionStatus.EXPIRED:
	//       goto('/auth/start')
	//       break
	//     case SessionStatus.PENDING_EMAIL_VERIFICATION:
	//     case SessionStatus.PENDING_PHONE_VERIFICATION:
	//       goto('/auth/verify')
	//       break
	//     case SessionStatus.PENDING_USER_REGISRATION:
	//       goto('/auth/sign-up')
	//       break
	//     case SessionStatus.AUTHENTICATED:
	//       goto('/app/list/contacts')
	//       break
	//     default:
	//       throw new Error(`Session status ${auth.session.status} not handled`)
	//   }
	// }

	// $: {
	//   if (browser) routeGuard($authStore)
	// }
</script>

<PageTransition>
	<slot />
</PageTransition>
