import { Form, Button, Input } from 'antd'

const LogInForm = ({ onSubmit, values }) => (
  <Form onFinish={onSubmit}>
    <Form.Item name="username">
      <Input
        size="large"
        name="username"
        placeholder="Username"
        values={values.username}
      />
    </Form.Item>
    <Form.Item name="password">
      <Input
        size="large"
        name="password"
        type="password"
        placeholder="Password"
        values={values.password}
      />
    </Form.Item>
    <Form.Item>
      <Button
        block
        size='large'
        type='primary'
        htmlType='submit'
      >
        Log In
      </Button>
    </Form.Item>
  </Form>
)

export default LogInForm
