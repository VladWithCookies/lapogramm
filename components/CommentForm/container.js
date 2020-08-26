import { inject } from 'mobx-react'

import CommentFormComponent from './component'

@inject('postDetailsStore')
class CommentForm extends React.Component {
  render() {
    return (
      <CommentFormComponent onSubmit={this.props.postDetailsStore.addComment} />
    );
  }
}

export default CommentForm;
