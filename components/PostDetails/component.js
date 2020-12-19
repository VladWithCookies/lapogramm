import { formatDistanceToNow } from 'date-fns'
import { Row, Col, Card, Avatar, Icon } from 'antd'

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
      className='bordered mb-20'
      sm={24}
      md={{ span: 10, offset: 7 }}
    >
      <Card
        hoverable={false}
        className="post"
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
            prefix={<Icon type='heart' />}
          />
          <Statistic
            value={42}
            className='stats-item'
            prefix={<Icon type='message' />}
          />
        </div>
      </Card>
      <CommentForm />
      <CommentList />
    </Col>
  </Row>
)

export default PostDetails
