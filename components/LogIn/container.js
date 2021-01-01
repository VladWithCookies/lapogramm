import { useFormik } from 'formik'
import { MobXProviderContext } from 'mobx-react'

import LoginFormComponent from './component'

const LogIn = (props) => {
  const { logInStore: { logIn } } = React.useContext(MobXProviderContext)

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: logIn,
  })

  return (
    <LoginFormComponent
      {...props}
      values={values}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  )
}

export default LogIn
