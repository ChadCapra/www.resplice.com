import { locale, waitLocale } from 'svelte-i18n'
import { browser } from '$app/environment'
import '$common/i18n'
import type { LayoutLoad } from './$types'

export const prerender = true

export const load = (async () => {
	if (browser) {
		locale.set(window.navigator.language)
	}
	await waitLocale()
}) satisfies LayoutLoad
