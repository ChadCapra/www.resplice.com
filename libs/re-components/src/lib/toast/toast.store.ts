import { writable } from 'svelte/store'
import type { Toast } from '$lib/toast/toast.types'

const toastStore = writable<Toast[]>([])

export type ToastStore = typeof toastStore

export default toastStore
