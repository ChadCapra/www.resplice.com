export function mockPromise<T>({
  data,
  timeout = 300,
  rejectPromise = false
}: {
  data: T
  timeout?: number
  rejectPromise?: boolean
}): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rejectPromise) {
        reject(new Error('Network Error'))
        return
      }
      console.info(data)
      resolve(data)
    }, timeout)
  })
}
