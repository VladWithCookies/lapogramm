import React from 'react'
import Link from 'next/link'
import { Card, Avatar, Icon } from 'antd'

const Post = ({ id, description }) => (
  <Link
    href='/posts/[id]'
    as={`/posts/${id}`}
  >
    <Card
      hoverable
      className='post'
      actions={[
        <Icon type='heart' />,
        <Icon type='message' />
      ]}
    >
      <Card.Meta
        title='Vlad V'
        avatar={<Avatar src='https://picsum.photos/50' />}
        description='a few seconds ago'
      />
      <img
        src='https://picsum.photos/500'
        className='post__image'
      />
      <Card.Meta
        description={description}
        className='post__description'
      />
    </Card>
  </Link>
)

export default Post
