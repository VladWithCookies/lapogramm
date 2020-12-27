import Link from 'next/link'
import { map } from 'lodash'
import { Row, Col } from 'antd'

import Post from 'components/shared/Post'

const PostList = ({ posts: { items } }) => (
  <Row>
    <Col
      sm={24}
      md={{ span: 10, offset: 7 }}
    >
      {map(items, item => (
        <Link
          key={item.id}
          href='/posts/[id]'
          as={`/posts/${item.id}`}
        >
          <a>
            <Post {...item} />
          </a>
        </Link>
      ))}
    </Col>
  </Row>
)

export default PostList
