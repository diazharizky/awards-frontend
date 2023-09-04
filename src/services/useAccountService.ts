import { useSearchParams, useRouter } from 'next/navigation'

import { useFetch } from '../helpers/client'

interface IAccountService {
  login(email: string): Promise<{ error?: string } | void>
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
  }
}

export { useAccountService }
