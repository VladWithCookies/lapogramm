import { Field } from 'formik'
import { Row, Col, Button, Icon } from 'antd'

import UploadField from 'components/fields/UploadField'
import Preview from './Preview'
import Filters from './Filters'

const Editor = ({ handleSubmit, values, resetForm }) => (
  <Row>
    <Col
      sm={24}
      md={{ span: 16, offset: 4 }}
    >
      <form
        onSubmit={handleSubmit}
        className='bordered editor mb-20'
      >
        {values.image ? (
          <>
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
    </Col>
  </Row>
)

export default Editor
