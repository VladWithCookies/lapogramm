import React from 'react'
import { formatDistanceToNow } from 'date-fns'
import { Card, Avatar, Icon, Statistic } from 'antd'

import { API_URL } from '../../constants'

const Post = ({
  filename,
  createdAt,
  description,
}) => (
  <Card className="post bordered mb-20">
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
