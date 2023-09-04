'use client'

import { useState } from 'react'
import { Button, Card, Form, Input, Space, Typography, Alert } from 'antd'

import { useAccountService } from '../services'

const { Text } = Typography

export const LoginForm: React.FC = () => {
  const [input, setInput] = useState('')
  const [loginErr, setLoginErr] = useState('')

  const accountService = useAccountService()

  const onFinish = async ({ email }: { email: string }) => {
    const res = await accountService.login(email)
    if (res instanceof Object) {
      setLoginErr(res.error!)
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Card style={{ minWidth: 400 }}>
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Text>Enter your email address to sign in and continue</Text>
          <Form onFinish={onFinish}>
            <Form.Item name="email">
              <Input
                placeholder="Email address"
                onChange={(e) => setInput(e.target.value)}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                disabled={!(input !== '')}
              >
                Sign in
              </Button>
            </Form.Item>
            {loginErr !== '' && <Alert message={loginErr} type="warning" />}
          </Form>
        </Space>
      </Card>
    </div>
  )
}
