import { App } from 'antd'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { auth } from '../helpers/server/auth'

export const metadata: Metadata = {
  title: 'Awards App',
  description: 'Some description',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  if (auth.isAuthenticated()) {
    return redirect(`/awards`)
  }

  return (
    <html lang="en">
      <body>
        <App>{children}</App>
      </body>
    </html>
  )
}

export default RootLayout
