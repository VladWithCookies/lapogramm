import React from 'react'

import SliderFieldComponent from './component'

function SliderField({
  min,
  max,
  step,
  form,
  field,
  className,
}) {
  const handleChange = (value) => {
    const { setFieldValue } = form

    setFieldValue(field.name, value)
  }

  return (
    <SliderFieldComponent
      min={min}
      max={max}
      step={step}
      name={field.name}
      value={field.value}
      className={className}
      onChange={handleChange}
    />
  )
}

export default SliderField
