export enum ToastType {
	SUCCESS = 'SUCCESS',
	WARNING = 'WARNING',
	INFO = 'INFO',
	DANGER = 'DANGER'
}

export type Toast = {
	id: string | number
	type: ToastType
	title: string
	detail: any
	created: Date
}
export type ToastParams = Pick<Toast, 'type' | 'title' | 'detail'>
