import { cookies } from 'next/headers'

function isAuthenticated(): boolean {
  const loggedIn = cookies().get('token')?.value ?? ''
  return loggedIn !== ''
}

export const auth = {
  isAuthenticated,
}
