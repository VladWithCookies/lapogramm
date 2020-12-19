import { Form, Button, Input } from 'antd'

const SignUpForm = () => (
  <div className='sign-up-form'>
    <Form.Item>
      <Input />
    </Form.Item>
    <Form.Item>
      <Input.Password />
    </Form.Item>
    <Form.Item>
      <Button
        block
        size='large'
        type='primary'
      >
        Sign Up
      </Button>
    </Form.Item>
  </div>
)

export default SignUpForm
