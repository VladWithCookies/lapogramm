import { withFormik } from 'formik'

import Editor from './component'

const handleSubmit = async (values, { setSubmitting, props }) => {
  props.onSubmit(values);
  setSubmitting(false)
}

const mapPropsToValues = () => ({
  filters: {
    brightness: 1,
    contrast: 1,
    saturate: 1,
  }
})

export default withFormik({ handleSubmit, mapPropsToValues })(Editor)
