import { useSearchParams, useRouter } from 'next/navigation'
import axios from 'axios'

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

  return {
    login: async (email: string) => {
      const res = await axios.post('/api/accounts/login', { email })

      const returnUrl = searchParams.get('returnUrl') || '/awards'
      router.push(returnUrl)
    },
    logout: async () => {
      await axios.post('/api/accounts/logout')

      router.push('/')
    },
  }
}

export { useAccountService }
