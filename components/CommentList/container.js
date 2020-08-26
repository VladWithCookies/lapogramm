import { Comment } from 'antd';
import { observer, inject } from 'mobx-react'

@inject('postDetailsStore')
@observer
class CommentList extends React.Component {
  render() {
    return (
      <div className="comment-list">
        {this.props.postDetailsStore.comments.map((comment, index) => <Comment key={index} {...comment} />)}
      </div>
    )
  }
}

export default CommentList;
