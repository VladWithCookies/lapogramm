import { Row, Col } from 'antd'

import MainLayout from 'components/layouts/MainLayout'

const AuthLayout = ({ children, ...props }) => (
  <MainLayout {...props}>
    <Row>
      <Col
        span={6}
        offset={9}
      >
        {children}
      </Col>
    </Row>
  </MainLayout>
)

export default AuthLayout
