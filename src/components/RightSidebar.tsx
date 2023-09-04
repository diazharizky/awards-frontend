'use client'

import React, { useState } from 'react'
import {
  Drawer,
  Typography,
  Checkbox,
  Row,
  Col,
  Slider,
  Space,
  Tag,
  Button,
} from 'antd'
import numeral from 'numeral'

import { SidebarProps, awardTypes } from '.'

const { Text } = Typography

const pointSliderRange: { min: number; max: number } = {
  min: 2,
  max: 100,
}

const pointUnit = 5000
const originalFilter: {
  type: string[]
  minPoint: number
  maxPoint: number
} = {
  type: [],
  minPoint: pointSliderRange.min * pointUnit,
  maxPoint: pointSliderRange.max * pointUnit,
}

export const RightSidebar: React.FC<SidebarProps> = ({ onClose, open }) => {
  const [filter, setFilter] = useState(originalFilter)

  const onAwardTypeFilterChange = (val: string) => {
    if (filter.type.includes(val)) {
      return setFilter({
        ...filter,
        type: filter.type.filter((item) => item !== val),
      })
    }
    setFilter({
      ...filter,
      type: [...filter.type, val],
    })
  }

  const applyFilter = () => {
    const qs: string[] = []

    let k: keyof typeof filter
    for (k in filter) {
      qs.push(`${k}=${filter[k]}`)
    }

    const url = '/awards' + (qs.length > 0 ? '?' + qs.join('&') : '')
    window.location.href = url
  }

  const isPointFilterChanged =
    filter.minPoint > originalFilter.minPoint ||
    filter.maxPoint < originalFilter.maxPoint

  const isFilterEmpty =
    filter.type.length <= 0 &&
    filter.minPoint == originalFilter.minPoint &&
    filter.maxPoint == originalFilter.maxPoint

  return (
    <Drawer
      title={
        <Text strong style={{ fontSize: 16 }}>
          Filter
        </Text>
      }
      placement="right"
      onClose={onClose}
      open={open}
      closeIcon={true}
    >
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        {isPointFilterChanged && (
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Text strong>Point</Text>
            <Tag color="blue">
              {numeral(filter.minPoint).format('0,0')}&nbsp;-&nbsp;
              {numeral(filter.maxPoint).format('0,0')}
            </Tag>
          </Space>
        )}
        {filter.type.length > 0 && (
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Text strong>Types</Text>
            <div>
              {filter.type.map((v, i) => (
                <Tag key={i} color="blue">
                  {awardTypes[v]}
                </Tag>
              ))}
            </div>
          </Space>
        )}
        {!isFilterEmpty && (
          <Button
            type="primary"
            size="small"
            onClick={() => {
              setFilter(originalFilter)
            }}
          >
            Clear filter
          </Button>
        )}
        <Text strong>Point Needed</Text>
        <div>
          <Slider
            range
            min={pointSliderRange.min}
            max={pointSliderRange.max}
            defaultValue={[pointSliderRange.min, pointSliderRange.max]}
            value={[filter.minPoint / pointUnit, filter.maxPoint / pointUnit]}
            tooltip={{
              // @ts-ignore
              formatter: (value: number) => `${value * pointUnit}`,
            }}
            onChange={(v) =>
              setFilter({
                ...filter,
                minPoint: v[0] * pointUnit,
                maxPoint: v[1] * pointUnit,
              })
            }
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              background: '#fff',
            }}
          >
            <Text strong>{numeral(originalFilter.minPoint).format('0,0')}</Text>
            <Text strong>{numeral(originalFilter.maxPoint).format('0,0')}</Text>
          </div>
        </div>
        <Text strong>Award Type</Text>
        <Row>
          <Col span={16}>
            <Checkbox
              value="voucher"
              style={{ lineHeight: '32px' }}
              onChange={(e) => onAwardTypeFilterChange(e.target.value)}
              checked={filter.type.includes('voucher')}
            >
              {awardTypes['voucher']}
            </Checkbox>
          </Col>
          <Col span={16}>
            <Checkbox
              value="product"
              style={{ lineHeight: '32px' }}
              onChange={(e) => onAwardTypeFilterChange(e.target.value)}
              checked={filter.type.includes('product')}
            >
              {awardTypes['product']}
            </Checkbox>
          </Col>
        </Row>
        <Button
          type="primary"
          block
          disabled={isFilterEmpty}
          onClick={applyFilter}
        >
          Apply filter
        </Button>
      </Space>
    </Drawer>
  )
}
