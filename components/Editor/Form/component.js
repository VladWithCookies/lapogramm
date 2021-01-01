import { Field } from 'formik'
import { Button } from 'antd'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

import UploadField from 'components/fields/UploadField'
import Preview from './Preview'
import Filters from './Filters'

const Form = ({ handleSubmit, values, resetForm }) => (
  <form
    onSubmit={handleSubmit}
    className='bordered editor'
  >
    {values.image ? (
      <>
        <div className='editor__buttons'>
          <Button
            size='large'
            onClick={resetForm}
          >
            <CloseOutlined />
            Cancel
          </Button>
          <Button
            size='large'
            type='primary'
            htmlType='submit'
          >
            <CheckOutlined />
            Save
          </Button>
        </div>
        <Field
          name='result'
          component={Preview}
          className='editor__uploader'
        />
        <Filters />
      </>
    ) : (
      <Field
        name='image'
        component={UploadField}
        className='editor__uploader'
      />
    )}
  </form>
)

export default Form
