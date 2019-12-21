import React from 'react'
import { Field } from 'formik'
import { Row, Col, Tabs, Button, Icon } from 'antd'

import Image from './Image'
import SliderField from '../Fields/SliderField'
import UploadField from '../Fields/UploadField'

const Editor = ({ handleSubmit, values }) => (
  <Row>
    <Col
      sm={24}
      md={{ span: 16, offset: 4 }}
    >
      <form onSubmit={handleSubmit} className='editor'>
        <div className='editor__buttons'>
          <Button size='large'>
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
        <div className='editor__uploader'>
          {values.imageSrc && <Image {...values} />}
          <Field
            name='imageSrc'
            component={UploadField}
            hidden={!!values.imageSrc}
          />
        </div>
        <Tabs
          size='large'
          tabPosition='bottom'
          className='editor__tools'
        >
          <Tabs.TabPane key='brightness' tab='Brightness'>
            <Field
              min={0}
              max={2}
              step={0.01}
              name='brightness'
              component={SliderField}
              className='editor__slider'
            />
          </Tabs.TabPane>
          <Tabs.TabPane key='contrast' tab='Contrast'>
            <Field
              min={0}
              max={2}
              step={0.01}
              name='contrast'
              component={SliderField}
              className='editor__slider'
            />
          </Tabs.TabPane>
          <Tabs.TabPane key='saturation' tab='Saturation'>
            <Field
              min={0}
              max={2}
              step={0.01}
              name='saturate'
              component={SliderField}
              className='editor__slider'
            />
          </Tabs.TabPane>
          <Tabs.TabPane key='hue' tab='Hue'>
            <Field
              min={0}
              max={360}
              step={1}
              name='hue-rotate'
              component={SliderField}
              className='editor__slider'
            />
          </Tabs.TabPane>
          <Tabs.TabPane key='grayscale' tab='Grayscale'>
            <Field
              min={0}
              max={1}
              step={0.01}
              name='grayscale'
              component={SliderField}
              className='editor__slider'
            />
          </Tabs.TabPane>
          <Tabs.TabPane key='sepia' tab='Sepia'>
            <Field
              min={0}
              max={1}
              step={0.01}
              name='sepia'
              component={SliderField}
              className='editor__slider'
            />
          </Tabs.TabPane>
        </Tabs>
      </form>
    </Col>
  </Row>
)

export default Editor
