import React from 'react'
import { Field } from 'formik'
import { Row, Col, Button, Icon } from 'antd'

import Image from './Image'
import Filters from './Filters'
import UploadField from '../Fields/UploadField'

const Editor = ({ handleSubmit, values, resetForm }) => (
  <Row>
    <Col
      sm={24}
      md={{ span: 16, offset: 4 }}
    >
      <form onSubmit={handleSubmit} className='editor'>
        {values.imageSrc && (
          <div className='editor__buttons'>
            <Button
              size='large'
              onClick={resetForm}
            >
              <Icon type='close' />
              Cancel
            </Button>
            <Button
              size='large'
              type='primary'
              htmlType='submit'
            >
              <Icon type='check' />
              Save
            </Button>
          </div>
        )}
        <div className='editor__uploader'>
          {values.imageSrc && <Image {...values} />}
          <Field
            name='imageSrc'
            component={UploadField}
            hidden={!!values.imageSrc}
            className='editor__uploader-field'
          />
        </div>
        {values.imageSrc && <Filters />}
      </form>
    </Col>
  </Row>
)

export default Editor
