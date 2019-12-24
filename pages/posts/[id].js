import React from 'react'
import 'antd/dist/antd.css'

import { getPost } from '../../api'
import { dataFormatter } from '../../utils'
import Layout from '../../components/Layout'
import PostDetails from '../../components/PostDetails'
import '../../stylesheets/applications.scss'

const PostPage = ({ post }) => (
  <Layout title='Post'>
    <PostDetails {...post} />
  </Layout>
)

PostPage.getInitialProps = async (context) => {
  const { id } = context.query
  const response = await getPost(id)
  const data = await response.json()
  const post = dataFormatter.deserialize(data)

  return { post }
}

export default PostPage
