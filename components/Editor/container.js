import { withFormik } from 'formik'

import Editor from './component'

const handleSubmit = (values) => {
  console.log(values) // TODO
}

const mapPropsToValues = () => ({
  brightness: 1,
  contrast: 1,
  saturate: 1,
})

export default withFormik({ handleSubmit, mapPropsToValues })(Editor)
