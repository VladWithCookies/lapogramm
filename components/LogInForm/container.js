import { useFormik } from 'formik'
import { MobXProviderContext } from 'mobx-react'

import LoginFormComponent from './component'

const LoginFrom = (props) => {
  const { loginFormStore: { logIn } } = React.useContext(MobXProviderContext)

  const { handleSubmit, values } = useFormik({
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
      onSubmit={handleSubmit}
    />
  )
}

export default LoginFrom
