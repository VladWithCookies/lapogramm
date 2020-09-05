import { MobXProviderContext } from 'mobx-react';

import CommentListComponent from './component';

const CommentList = () => {
  const { postDetailsStore: { comments, removeComment } } = React.useContext(MobXProviderContext);

  return (
    <CommentListComponent
      comments={comments}
      onDeleteComment={removeComment}
    />
  );
};

export default CommentList;
