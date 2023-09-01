'use client'

import React, { useState } from 'react'
import { Button, Card, Form, Input, Space, Typography } from 'antd'

const { Text } = Typography

export const LoginForm: React.FC = () => {
  const [input, setInput] = useState('')

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
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
            <Form.Item>
              <Input
                placeholder="Email address"
                onChange={(e) => setInput(e.target.value)}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" block disabled={!(input !== '')}>
                Sign in
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </Card>
    </div>
  )
}
