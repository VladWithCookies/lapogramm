import Link from 'next/link'
import { map } from 'lodash'
import { Row, Col } from 'antd'

import Post from 'components/shared/Post'

const PostList = ({ posts }) => (
  <Row>
    <Col
      sm={24}
      md={{ span: 10, offset: 7 }}
    >
      {map(posts, (post) => (
        <Link
          key={post.id}
          href='/posts/[id]'
          as={`/posts/${post.id}`}
        >
          <a>
            <Post {...post} />
          </a>
        </Link>
      ))}
    </Col>
  </Row>
)

export default PostList
