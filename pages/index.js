import { getPosts } from '../api'
import { dataFormatter } from '../utils'
import Layout from '../components/Layout'
import PostList from '../components/PostList'

const HomePage = ({ posts }) => (
  <Layout title='Home'>
    <PostList posts={posts} />
  </Layout>
)

HomePage.getInitialProps = async () => {
  const response = await getPosts()
  const data = await response.json()
  const posts = dataFormatter.deserialize(data)
  console.log(posts)
  return { posts }
}

export default HomePage
