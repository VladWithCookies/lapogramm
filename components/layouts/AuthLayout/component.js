import { Row, Col } from 'antd'

import MainLayout from 'components/layouts/MainLayout'

const AuthLayout = ({ children, ...props }) => (
  <MainLayout {...props}>
    <Row className="mt-100">
      <Col
        xs={{ span: 22, offset: 1 }}
        lg={{ span: 6, offset: 9 }}
      >
        {children}
      </Col>
    </Row>
  </MainLayout>
)

export default AuthLayout
