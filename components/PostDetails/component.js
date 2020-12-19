import { formatDistanceToNow } from 'date-fns'
import { Row, Col, Card, Avatar } from 'antd'
import { MessageOutlined, HeartOutlined } from '@ant-design/icons';

import { API_URL } from 'constants/api'
import CommentList from 'components/shared/CommentList'
import CommentForm from 'components/shared/CommentForm'
import Statistic from 'components/shared/Statistic';

const PostDetails = ({
  post: {
    filename,
    createdAt,
    description,
  },
}) => (
  <Row>
    <Col
      sm={24}
      md={{ span: 10, offset: 7 }}
    >
      <Card
        hoverable={false}
        className="post bordered"
      >
        <Card.Meta
          title='Vlad V'
          description={`${formatDistanceToNow(new Date(createdAt))} ago`}
          avatar={<Avatar src='https://picsum.photos/50' />}
        />
        <img
          src={`${API_URL}/${filename}`}
          className='post__image'
        />
        <Card.Meta
          description={description}
          className='post__description'
        />
        <div className='post__stats'>
          <Statistic
            value={42}
            className='stats-item'
            prefix={<HeartOutlined />}
          />
          <Statistic
            value={42}
            className='stats-item'
            prefix={<MessageOutlined />}
          />
        </div>
      </Card>
      <CommentForm />
      <CommentList />
    </Col>
  </Row>
)

export default PostDetails
