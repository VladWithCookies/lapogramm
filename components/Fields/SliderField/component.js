import React from 'react'
import { Slider } from 'antd'

const SliderField = ({
  min,
  max,
  step,
  name,
  value,
  onChange,
  className,
  tooltipVisible,
}) => (
  <Slider
    min={min}
    max={max}
    step={step}
    name={name}
    value={value}
    onChange={onChange}
    className={className}
    tooltipVisible={tooltipVisible}
  />
)

export default SliderField
