import Router from 'next/router'
import { withFormik } from 'formik'

import { createPost } from '../../api'
import Editor from './component'

const handleSubmit = async (values, { setSubmitting }) => {
  const formData = new FormData()

  formData.append('image', values.result)
  createPost(formData)
  Router.push('/')
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
