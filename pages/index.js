import React from 'react'
import 'antd/dist/antd.css'

import { getPosts } from '../api'
import { dataFormatter } from '../utils'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import '../stylesheets/applications.scss'

const HomePage = ({ posts }) => (
  <Layout title='Home'>
    <PostList posts={posts} />
  </Layout>
)

HomePage.getInitialProps = async () => {
  const response = await getPosts()
  const data = await response.json()
  const posts = dataFormatter.deserialize(data)

  return { posts }
}

export default HomePage
