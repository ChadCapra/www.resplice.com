<script lang="ts">
	import { setContext, onMount } from 'svelte'
	import { goto } from '$app/navigation'
	import { contextKey } from '$common/auth-protocol'
	import MockAuthClient from '$common/auth-protocol/authProtocol.mocks'
	import cache from '$common/db'
	import authStore from '$common/auth.store'
	import appConfig from '$common/config'
	import AppLoading from '$common/components/skeleton/AppLoading.svelte'
	import PageTransition from '$common/components/skeleton/PageTransition.svelte'
	import '../app.css'

	console.log('Reauth layout rendering')

	// let isLoading = Promise.resolve(false)

	setContext(contextKey, new MockAuthClient())

	// onMount(() => (isLoading = P))
</script>

<PageTransition>
	<slot />
</PageTransition>
