import { useSearchParams, useRouter } from 'next/navigation'

import { useFetch } from '../helpers/client'

type errorResp = {
  error?: string
}

interface IAccountService {
  login(email: string): Promise<errorResp | void>
  logout(): Promise<errorResp | void>
}

const useAccountService = (): IAccountService => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const fetch = useFetch()

  return {
    login: async (email: string) => {
      const res = await fetch.post('/api/accounts/login', { email })
      if (!res.ok) {
        return { error: res.data?.error }
      }

      const returnUrl = searchParams.get('returnUrl') || '/awards'
      router.push(returnUrl)
    },
    logout: async () => {
      const res = await fetch.post('/api/accounts/logout')
      if (!res.ok) {
        return { error: res.data?.error }
      }

      router.push('/')
    },
  }
}

export { useAccountService }
