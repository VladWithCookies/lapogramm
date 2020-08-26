import CommentsStore from '../../stores/comments';
import CommentListComponent from './component';

const CommentList = (props) => {
  const { comments } = new CommentsStore([
    {
      author: 'Han Solo',
      avatar: 'https://picsum.photos/50',
      content: 'Hello',
      datetime: 'a few seconds ago',
    },
    {
      author: 'Obi Wan',
      avatar: 'https://picsum.photos/60',
      content: 'Hello, there!',
      datetime: 'a few seconds ago',
    },
  ]);

  return (
    <CommentListComponent
      {...props}
      comments={comments}
    />
  );
};

export default CommentList;
