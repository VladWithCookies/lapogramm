import { formatDistanceToNow } from 'date-fns'
import { Card, Avatar, Icon, Statistic } from 'antd'
import { MessageOutlined, HeartOutlined } from '@ant-design/icons';

import { API_URL } from 'constants/api'

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
        prefix={<HeartOutlined />}
      />
      <Statistic
        value={42}
        className='stats-item'
        prefix={<MessageOutlined />}
      />
    </div>
  </Card>
)

export default Post
