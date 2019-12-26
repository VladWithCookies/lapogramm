import React from 'react'
import { Row, Col } from 'antd'

import Post from '../Post'
import CommentList from '../CommentList'
import CommentForm from '../CommentForm'

const PostDetails = ({ description }) => (
  <Row>
    <Col
      className='bordered post'
      sm={24}
      md={{ span: 10, offset: 7 }}
    >
      <Post
        hoverable={false}
        description={description}
      />
      <CommentForm />
      <CommentList />
    </Col>
  </Row>
)

export default PostDetails
