import MainLayout from 'components/layouts/MainLayout'
import PostDetails from 'components/PostDetails'

const PostPage = ({ post }) => (
  <MainLayout title='Post'>
    <PostDetails post={post} />
  </MainLayout>
)

PostPage.getInitialProps = async (context) => {
  const {
    query: { id },
    store: { postDetailsStore },
  } = context

  await postDetailsStore.getPost(context, id)

  return { post: postDetailsStore }
}

export default PostPage
