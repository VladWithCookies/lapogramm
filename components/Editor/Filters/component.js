import React from 'react'
import { Tabs } from 'antd'
import { Field } from 'formik'

import SliderField from '../../Fields/SliderField'

const Filters = () => (
  <Tabs
    size='large'
    animated={false}
    tabPosition='bottom'
    className='editor__tools'
  >
    <Tabs.TabPane key='brightness' tab='Brightness'>
      <Field
        min={0}
        max={2}
        step={0.01}
        name='brightness'
        tooltipVisible={false}
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
        tooltipVisible={false}
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
        tooltipVisible={false}
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
        tooltipVisible={false}
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
        tooltipVisible={false}
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
        tooltipVisible={false}
        component={SliderField}
        className='editor__slider'
      />
    </Tabs.TabPane>
  </Tabs>
)

export default Filters
