import React from 'react'
import { List } from 'antd'

import Comment from '../Comment'

const Comments = () => (
  <List
    dataSource={[
      {
        author: 'Han Solo',
        avatar: 'https://picsum.photos/50',
        content: 'Hello',
        datetime: 'a few seconds ago',
      },
    ]}
    renderItem={Comment}
    itemLayout='horizontal'
    className='comment-list'
  />
)

export default Comments
