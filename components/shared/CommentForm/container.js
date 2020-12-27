import { defer } from 'lodash'
import { MobXProviderContext } from 'mobx-react'

import CommentFormComponent from './component'

const CommentForm = () => {
  const { postDetailsStore: { addComment } } = React.useContext(MobXProviderContext)

  const handleAddComment = () => {
    addComment();
    defer(window.scrollTo, 0, document.body.scrollHeight);
  }

  return <CommentFormComponent onAddComment={handleAddComment} />
}

export default CommentForm
