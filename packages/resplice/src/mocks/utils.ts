// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function returnPromise(data: any, timeout = 300): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), timeout)
  })
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function returnPromiseError(_data: any, timeout = 300): Promise<any> {
  return new Promise((_resolve, reject) => {
    setTimeout(() => reject(new Error('Network Error')), timeout)
  })
}
