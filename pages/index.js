import { getPosts } from 'api'
import dataFormatter from 'lib/dataFormatter'
import MainLayout from 'components/layouts/MainLayout'
import PostList from 'components/PostList'

const HomePage = ({ posts }) => (
  <MainLayout title='Home'>
    <PostList posts={posts} />
  </MainLayout>
)

HomePage.getInitialProps = async () => {
  const response = await getPosts()
  const data = await response.json()
  const posts = dataFormatter.deserialize(data)

  return { posts }
}

export default HomePage
