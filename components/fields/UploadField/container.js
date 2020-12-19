import UploadFieldComponent from './component'

const UploadField = ({ field, form, className }) => {
  const handleChange = (event) => {
    const { setFieldValue } = form
    const { name } = field

    setFieldValue(name, event.currentTarget.files[0])
  }

  return (
    <UploadFieldComponent
      name={field.name}
      className={className}
      onChange={handleChange}
    />
  )
}

export default UploadField
