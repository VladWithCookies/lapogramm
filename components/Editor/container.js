import { withFormik } from 'formik'

import { createPost } from '../../api'
import Editor from './component'

const handleSubmit = (values, { setSubmitting }) => {
  // createPost(values)

  setSubmitting(false)
}

const mapPropsToValues = () => ({
  brightness: 1,
  contrast: 1,
  saturate: 1,
})

export default withFormik({ handleSubmit, mapPropsToValues })(Editor)
