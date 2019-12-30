import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { Card, Avatar, Icon, Statistic } from 'antd'

import { API_URL } from '../../constants'

const Post = ({
  id,
  filename,
  className,
  description,
  hoverable = true
}) => (
  <Link
    href='/posts/[id]'
    as={`/posts/${id}`}
  >
    <Card
      className={clsx('post', className)}
      hoverable={hoverable}
    >
      <Card.Meta
        title='Vlad V'
        avatar={<Avatar src='https://picsum.photos/50' />}
        description='a few seconds ago'
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
  </Link>
)

export default Post
