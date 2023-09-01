import React from 'react'
import { Drawer, Typography, Checkbox, Row, Col, Slider } from 'antd'
import type { SliderMarks } from 'antd/es/slider'

import { SidebarProps } from '.'

const { Text } = Typography

const marks: SliderMarks = {
  0: {
    label: 10000,
    style: { textAlign: 'left' },
  },
  100: {
    label: 500000,
  },
}

export const RightSidebar: React.FC<SidebarProps> = ({ onClose, open }) => {
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
      <Slider
        range
        min={0}
        max={100}
        defaultValue={[25, 50]}
        marks={marks}
        tooltip={{
          // @ts-ignore
          formatter: (value: number) => `${value * 5000}`,
        }}
      />
      <Checkbox.Group>
        <Row>
          <Col span={16}>
            <Checkbox value="B" style={{ lineHeight: '32px' }}>
              Vouchers
            </Checkbox>
          </Col>
          <Col span={16}>
            <Checkbox value="C" style={{ lineHeight: '32px' }}>
              Products
            </Checkbox>
          </Col>
          <Col span={16}>
            <Checkbox value="A" style={{ lineHeight: '32px' }}>
              Others
            </Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>{' '}
    </Drawer>
  )
}
