import SliderFieldComponent from './component'

const SliderField = ({
  min,
  max,
  step,
  form,
  field,
  className,
  tooltipVisible,
}) => {
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
      tooltipVisible={tooltipVisible}
    />
  )
}

export default SliderField
