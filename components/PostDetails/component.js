import React from 'react'
import { formatDistanceToNow } from 'date-fns'
import { Row, Col, Card, Avatar, Icon } from 'antd'

import { API_URL } from '../../constants'
import CommentList from '../CommentList'
import CommentForm from '../CommentForm'
import Statistic from '../Statistic';

const PostDetails = ({
  post: {
    filename,
    createdAt,
    description,
  },
}) => (
  <Row>
    <Col
      className='bordered'
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
