import React from 'react'

import { Upload, Icon } from 'antd'

const UploadField = ({ name, onChange, className, hidden }) => !hidden && (
  <Upload
    name={name}
    onChange={onChange}
    className={className}
    showUploadList={false}
    listType='picture-card'
    supportServerRender
  >
    <Icon type='plus' />
    <p className='ant-upload-text'>
      Upload
    </p>
  </Upload>
)

export default UploadField
