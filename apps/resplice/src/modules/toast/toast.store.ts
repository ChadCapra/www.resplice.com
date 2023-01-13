import { writable } from 'svelte/store'
import type { Toast } from '$modules/toast/toast.types'

const toastStore = writable<Toast[]>([])

export type ToastStore = typeof toastStore

export default toastStore
