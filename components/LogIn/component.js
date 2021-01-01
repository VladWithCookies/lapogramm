import { Form, Button, Input } from 'antd'

const LogIn = ({ onSubmit, onChange, values }) => (
  <Form onFinish={onSubmit}>
    <Form.Item name="username">
      <Input
        size="large"
        name="username"
        onChange={onChange}
        placeholder="Username"
        values={values.username}
      />
    </Form.Item>
    <Form.Item name="password">
      <Input
        size="large"
        name="password"
        type="password"
        onChange={onChange}
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

export default LogIn
