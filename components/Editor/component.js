import { Row, Col } from 'antd'

import Form from './Form'

const Editor = ({ createPost }) => (
  <Row>
    <Col
      sm={24}
      md={{ span: 16, offset: 4 }}
    >
      <Form onSubmit={createPost} />
    </Col>
  </Row>
)

export default Editor
