const BASE_URL = 'http://localhost:8000'
const ENABLE_ENCRYPTION = false

interface Api {
  get: (endpoint: string, headers?: Record<string, string>) => Promise<any>
  post: (
    endpoint: string,
    data: any,
    headers?: Record<string, string>
  ) => Promise<any>
  patch: (
    endpoint: string,
    data: any,
    headers?: Record<string, string>
  ) => Promise<any>
  put: (
    endpoint: string,
    data: any,
    headers?: Record<string, string>
  ) => Promise<any>
  delete: (
    endpoint: string,
    data: any,
    headers?: Record<string, string>
  ) => Promise<any>
}

const api: Api = {
  get: (endpoint, headers) =>
    commonFetch({
      URL: BASE_URL + endpoint,
      method: 'GET',
      headers
    }),
  post: async (endpoint, data, headers) =>
    commonFetch({
      URL: BASE_URL + endpoint,
      method: 'POST',
      headers,
      data
    }),
  patch: async (endpoint, data, headers) =>
    commonFetch({
      URL: BASE_URL + endpoint,
      method: 'PATCH',
      headers,
      data
    }),
  put: async (endpoint, data, headers) =>
    commonFetch({
      URL: BASE_URL + endpoint,
      method: 'PUT',
      headers,
      data
    }),
  delete: async (endpoint, headers) =>
    commonFetch({
      URL: BASE_URL + endpoint,
      method: 'DELETE',
      headers
    })
}

type FetchConfig = {
  URL: string
  method: string
  headers?: Record<string, string>
  data?: any
}
async function commonFetch({ URL, method, headers = {}, data }: FetchConfig) {
  const contentType = ENABLE_ENCRYPTION
    ? 'application/octet-stream'
    : 'application/json'
  const body = await processRequestData(data, ENABLE_ENCRYPTION)

  const res = await fetch(URL, {
    method,
    credentials: 'same-origin',
    headers: {
      'Content-Type': contentType,
      ...headers
    },
    body
  })
  if (!res.ok) throw res
  if (res.status === 204) return

  const parser = (() => {
    if (ENABLE_ENCRYPTION) return res.arrayBuffer
    return res.json
  })()
  return parser()
}

async function processRequestData(data: any, encrypt = false) {
  if (!data) return
  const json = JSON.stringify(data)
  if (encrypt) {
    // TODO: encrypt json
    return json
  }

  return json
}

export default api
