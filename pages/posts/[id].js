import React from 'react'

import Layout from '../../components/Layout'
import PostDetails from '../../components/PostDetails'

const PostPage = ({ post }) => (
  <Layout title='Post'>
    <PostDetails post={post} />
  </Layout>
)

PostPage.getInitialProps = async (context) => {
  const {
    query: { id },
    store: { postDetailsStore },
  } = context

  await postDetailsStore.getPost(id)

  return { post: postDetailsStore }
}

export default PostPage
