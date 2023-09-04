import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { auth } from '../../helpers/server/auth'

const Layout = ({ children }: { children: React.ReactNode }) => {
  if (!auth.isAuthenticated()) {
    const returnUrl = encodeURIComponent(headers().get('x-invoke-path') || '/')
    redirect(`/?returnUrl=${returnUrl}`)
  }

  return <div>{children}</div>
}

export default Layout
