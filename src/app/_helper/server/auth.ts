import { cookies } from 'next/headers'

export const auth = {
  isAuthenticated,
}

function isAuthenticated(): boolean {
  const loggedIn = cookies().get('logged_in')?.value ?? ''
  return loggedIn == 'true'
}
