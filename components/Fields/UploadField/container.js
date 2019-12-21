import React, { useState } from 'react'

import UploadFieldComponent from './component'

function UploadField({ field, form, className, hidden }) {
  const [loading, setLoading] = useState(false)

  const handleChange = ({ file }) => {
    const { setFieldValue } = form

    if (file.status === 'uploading') {
      setLoading(true)
      return
    }

    if (file.status === 'done') {
      const reader = new FileReader()

      reader.addEventListener('load', () => {
        setFieldValue(field.name, reader.result)
        setLoading(false)
      })

      reader.readAsDataURL(file.originFileObj)
    }
  }

  return (
    <UploadFieldComponent
      hidden={hidden}
      name={field.name}
      loading={loading}
      className={className}
      onChange={handleChange}
    />
  )
}

export default UploadField
