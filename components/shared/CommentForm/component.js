import { Form, Button, Input } from 'antd'

const CommentForm = ({ onAddComment }) => (
  <div className='comment-form'>
    <Form.Item>
      <Input.TextArea autoSize={{ minRows: 2 }} />
    </Form.Item>
    <Form.Item>
      <Button
        block
        size='large'
        type='primary'
        onClick={onAddComment}
      >
        Leave a comment
      </Button>
    </Form.Item>
  </div>
)

export default CommentForm
