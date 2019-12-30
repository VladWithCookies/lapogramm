import React from 'react'
import clsx from 'clsx'
import { formatDistanceToNow } from 'date-fns'
import { Card, Avatar, Icon, Statistic } from 'antd'

import { API_URL } from '../../constants'

const Post = ({
  filename,
  className,
  createdAt,
  description,
  hoverable = true
}) => (
  <Card
    className={clsx('post', className)}
    hoverable={hoverable}
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
)

export default Post
