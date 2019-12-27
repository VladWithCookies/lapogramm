import React from 'react'

const UploadField = ({ name, onChange, className }) => (
  <div className={className}>
    <input
      type='file'
      name={name}
      onChange={onChange}
    />
  </div>
)

export default UploadField
