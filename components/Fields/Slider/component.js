import React from 'react'
import { RangeInput } from 'grommet'

const Slider = ({ field, min, max, step }) => (
  <RangeInput
    {...field}
    min={min}
    max={max}
    step={step}
  />
)

export default Slider
