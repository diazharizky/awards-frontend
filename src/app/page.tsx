import { redirect } from 'next/navigation'

import { LoginForm } from '../components'
import { auth } from '../helpers/server/auth'

export default function Login() {
  if (auth.isAuthenticated()) {
    redirect('/awards')
  }

  return <LoginForm />
}
