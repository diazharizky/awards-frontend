import { useRouter } from 'next/navigation'

const useFetch = () => {
  const router = useRouter()

  const handleResponse = async (resp: any) => {
    const isJson = resp.headers
      ?.get('content-type')
      ?.includes('application/json')
    const res: { ok: boolean; data: { error?: string } } = isJson
      ? await resp.json()
      : null

    if (!resp.ok) {
      if (resp.status === 401) {
        router.push('/')
      }

      const error = (res && res.data.error) || resp.statusText
      return Promise.reject(error)
    }

    return res
  }

  const request = (method: string) => {
    return (url: string, body?: any) => {
      const reqOptions: any = { method }

      if (body) {
        reqOptions.headers = { 'Content-Type': 'application/json' }
        reqOptions.body = JSON.stringify(body)
      }

      return fetch(url, reqOptions).then(handleResponse)
    }
  }

  return {
    get: request('GET'),
    post: request('POST'),
  }
}

export { useFetch }
