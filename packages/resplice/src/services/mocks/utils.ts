export function returnPromise<T>({
  data,
  timeout = 300,
  rejectPromise = false
}: {
  data: T
  timeout?: number
  rejectPromise?: boolean
}): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        rejectPromise ? reject(new Error('Network Error')) : resolve(data),
      timeout
    )
  })
}
