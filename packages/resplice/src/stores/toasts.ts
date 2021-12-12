import { writable } from 'svelte/store'
import { ToastType } from '$types/common'
import type { Toast } from '$types/common'

const toastStore = writable<Toast[]>([
  {
    id: 1,
    type: ToastType.SUCCESS,
    title: 'Test Toast',
    detail: 'Here is my successful toast',
    created: new Date()
  }
])

export type ToastStore = typeof toastStore

export default toastStore
