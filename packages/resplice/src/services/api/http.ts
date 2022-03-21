type ApiParams = {
  endpoint: string
  headers?: Record<string, string>
  useBinary?: boolean
}

// TODO: Find better name
type ApiParamsData = ApiParams & { data: any }

export interface Api {
  get: (params: ApiParams) => Promise<any>
  post: (params: ApiParamsData) => Promise<any>
  patch: (params: ApiParamsData) => Promise<any>
  put: (params: ApiParamsData) => Promise<any>
  delete: (params: ApiParamsData) => Promise<any>
}

function apiFactory(server_endpoint: string): Api {
  const BASE_URL = server_endpoint
  return {
    get: ({ endpoint, headers, useBinary = true }) =>
      commonFetch({
        URL: BASE_URL + endpoint,
        method: 'GET',
        headers,
        useBinary
      }),
    post: async ({ endpoint, headers, useBinary = true, data }) =>
      commonFetch({
        URL: BASE_URL + endpoint,
        method: 'POST',
        headers,
        useBinary,
        data
      }),
    patch: async ({ endpoint, headers, useBinary = true, data }) =>
      commonFetch({
        URL: BASE_URL + endpoint,
        method: 'PATCH',
        headers,
        useBinary,
        data
      }),
    put: async ({ endpoint, headers, useBinary = true, data }) =>
      commonFetch({
        URL: BASE_URL + endpoint,
        method: 'PUT',
        headers,
        useBinary,
        data
      }),
    delete: async ({ endpoint, headers, useBinary = true, data }) =>
      commonFetch({
        URL: BASE_URL + endpoint,
        method: 'DELETE',
        headers,
        useBinary,
        data
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
