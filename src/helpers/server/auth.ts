import { cookies } from 'next/headers'

function isAuthenticated(): boolean {
  const loggedIn = cookies().get('logged_in')?.value ?? ''
  return loggedIn === 'true'
}

export const auth = {
  isAuthenticated,
}
