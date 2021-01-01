import MainLayout from 'components/layouts/MainLayout'
import PostList from 'components/PostList'

const HomePage = ({ posts }) => (
  <MainLayout title='Home'>
    <PostList posts={posts} />
  </MainLayout>
)

HomePage.getInitialProps = async (context) => {
  const { store: { postListStore } } = context

  await postListStore.getPosts(context)

  return { posts: postListStore }
}

export default HomePage
