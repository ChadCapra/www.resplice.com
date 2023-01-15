type FetchOptions = {
  endpoint: string
  headers?: Record<string, string>
  useBinary?: boolean
}

type FetchParams = FetchOptions & { data: unknown }

export interface Fetch {
  get: <T = unknown>(params: FetchOptions) => Promise<T>
  post: <T = unknown>(params: FetchParams) => Promise<T>
  patch: <T = unknown>(params: FetchParams) => Promise<T>
  put: <T = unknown>(params: FetchParams) => Promise<T>
  delete: <T = unknown>(params: FetchParams) => Promise<T>
}

function fetchFactory(baseUrl: string): Fetch {
  return {
    get: ({ endpoint, headers, useBinary = true }) =>
      commonFetch({
        URL: baseUrl + endpoint,
        method: 'GET',
        headers,
        useBinary
      }),
    post: async ({ endpoint, headers, useBinary = true, data }) =>
      commonFetch({
        URL: baseUrl + endpoint,
        method: 'POST',
        headers,
        useBinary,
        data
      }),
    patch: async ({ endpoint, headers, useBinary = true, data }) =>
      commonFetch({
        URL: baseUrl + endpoint,
        method: 'PATCH',
        headers,
        useBinary,
        data
      }),
    put: async ({ endpoint, headers, useBinary = true, data }) =>
      commonFetch({
        URL: baseUrl + endpoint,
        method: 'PUT',
        headers,
        useBinary,
        data
      }),
    delete: async ({ endpoint, headers, useBinary = true, data }) =>
      commonFetch({
        URL: baseUrl + endpoint,
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
  data?: unknown
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
    body: data as BodyInit
  })
  if (!res.ok) throw res
  if (res.status === 204) return

  const parsedBody = useBinary ? res.arrayBuffer() : res.json()
  return parsedBody
}

export default fetchFactory
