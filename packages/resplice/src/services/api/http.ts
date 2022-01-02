export interface Api {
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

function apiFactory(server_endpoint: string, useBinary = false): Api {
  const BASE_URL = server_endpoint
  return {
    get: (endpoint, headers) =>
      commonFetch({
        URL: BASE_URL + endpoint,
        method: 'GET',
        headers,
        useBinary
      }),
    post: async (endpoint, data, headers) =>
      commonFetch({
        URL: BASE_URL + endpoint,
        method: 'POST',
        headers,
        useBinary,
        data
      }),
    patch: async (endpoint, data, headers) =>
      commonFetch({
        URL: BASE_URL + endpoint,
        method: 'PATCH',
        headers,
        useBinary,
        data
      }),
    put: async (endpoint, data, headers) =>
      commonFetch({
        URL: BASE_URL + endpoint,
        method: 'PUT',
        headers,
        useBinary,
        data
      }),
    delete: async (endpoint, headers) =>
      commonFetch({
        URL: BASE_URL + endpoint,
        method: 'DELETE',
        headers,
        useBinary
      })
  }
}

type FetchConfig = {
  URL: string
  method: string
  headers?: Record<string, string>
  useBinary?: boolean
  data?: any
}
async function commonFetch({
  URL,
  method,
  headers = {},
  useBinary = false,
  data
}: FetchConfig) {
  const contentType = useBinary
    ? 'application/octet-stream'
    : 'application/json'

  const res = await fetch(URL, {
    method,
    credentials: 'same-origin',
    headers: {
      'Content-Type': contentType,
      ...headers
    },
    body: data
  })
  if (!res.ok) throw res
  if (res.status === 204) return

  const parser = useBinary ? res.arrayBuffer : res.json
  return parser()
}

export default apiFactory
