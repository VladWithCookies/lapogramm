import { Form, Button, Input,  } from 'antd'

const LogInForm = () => (
  <Form>
    <Form.Item name="username">
      <Input
        size="large"
        placeholder="Username"
      />
    </Form.Item>
    <Form.Item name="password">
      <Input
        size="large"
        type="password"
        placeholder="Password"
      />
    </Form.Item>
    <Form.Item>
      <Button
        block
        size='large'
        type='primary'
      >
        Log In
      </Button>
    </Form.Item>
  </Form>
)

export default LogInForm
