/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useState } from 'react'
import { Card, Tag, Typography, Space } from 'antd'
import numeral from 'numeral'
import { useSearchParams } from 'next/navigation'

import { awardTypes } from '../../../components'
import { Award, AwardListFilter } from '../../../models'

import { useAwardService } from '../../../services'

const { Text } = Typography

export default function Page() {
  const [awards, setAwards] = useState<Award[]>([])
  const awardService = useAwardService()
  const searchParams = useSearchParams()

  const getFilter = (): AwardListFilter => {
    return {
      type: searchParams.get('type'),
      minPoint: searchParams.get('minPoint'),
      maxPoint: searchParams.get('maxPoint'),
    }
  }

  useEffect(() => {
    ;(async () => {
      const awards = await awardService.list(getFilter())
      setAwards(awards)
    })()
  }, [])

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
