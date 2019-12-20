import React from 'react'
import { Upload, Icon } from 'antd'

const UploadField = ({ className }) => (
  <Upload.Dragger className={className}>
    <p>
      <Icon type='inbox' />
    </p>
    <p>
      Click or drag file here to upload
    </p>
  </Upload.Dragger>
)

export default UploadField
