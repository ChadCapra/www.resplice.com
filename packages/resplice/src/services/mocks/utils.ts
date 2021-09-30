export function returnPromise<T>(
  data: T,
  timeout = 300,
  rejectPromise = false
): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        rejectPromise ? reject(new Error('Network Error')) : resolve(data),
      timeout
    )
  })
}
