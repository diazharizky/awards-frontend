'use client'

import { Card, Tag, Typography, Space } from 'antd'
import numeral from 'numeral'

import { awardTypes } from '../../../components'

const { Text } = Typography

export default function Page() {
  const awards: { name: string; type: string; point: number }[] = []

  for (let i = 1; i <= 20; i++) {
    awards.push({
      name: `Award ${i}`,
      type: i % 2 == 0 ? 'voucher' : 'product',
      point: 500 * i,
    })
  }

  return (
    <Space
      direction="vertical"
      size="large"
      style={{
        display: 'flex',
        padding: '16px 64px',
      }}
    >
      {awards.map((v, i) => (
        <Card title={v.name} key={i}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              background: '#fff',
            }}
          >
            <Text strong>{numeral(v.point).format('0,0')} Point</Text>
            <div>
              <Tag color={v.type == 'voucher' ? 'blue' : 'red'}>
                {awardTypes[v.type]}
              </Tag>
            </div>
          </div>
        </Card>
      ))}
    </Space>
  )
}
