import { observer } from 'mobx-react';
import { TweenOneGroup } from 'rc-tween-one';

import Comment from '../Comment';

const CommentList = observer(({ comments, onDeleteComment }) => {
  const enter = [
    {
      y: -30,
      opacity: 0,
      duration: 0,
      backgroundColor: '#e0f7fa',
    },
    {
      delay: 250,
      type: 'from',
      duration: 200,
    },
    {
      y: 0,
      opacity: 1,
      duration: 200,
    },
    {
      delay: 500,
      backgroundColor: '#ffffff',
    },
  ];

  const leave = [
    {
      duration: 200,
      opacity: 0,
    },
    {
      height: 0,
      duration: 200,
    },
  ];

  return (
    <TweenOneGroup
      exclusive
      enter={enter}
      leave={leave}
      appear={false}
    >
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onDelete={onDeleteComment}
        />
      ))}
    </TweenOneGroup>
  );
});

export default CommentList;
