import React from 'react'
import { List } from 'antd'

import Comment from '../Comment'

const Comments = ({ comments }) => (
  <List
    renderItem={Comment}
    dataSource={comments}
    itemLayout='horizontal'
    className='comment-list'
  />
)

export default Comments
