import { goto } from '$app/navigation'
import { base } from '$app/paths'

export default {
	auth: () => goto(base),
	verify: () => goto(`${base}/verify`),
	register: () => goto(`${base}/register`),
	app: () => goto('/app')
}
