import React from 'react'
import { Row, Col } from 'antd'

import Post from '../Post'

const PostList = ({ posts }) => (
  <Row>
    <Col
      sm={24}
      md={{ span: 10, offset: 7 }}
    >
      {posts.map((post) => <Post key={post.id} {...post} />)}
    </Col>
  </Row>
)

export default PostList
