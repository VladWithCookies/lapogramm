import { observable, action } from 'mobx';

class CommentsStore {
  constructor(comments = []) {
    this.comments = comments;
  }

  @observable comments = [];

  @action addComment(comment) {
    this.comments.push(comment);
  }

  @action removeComment(comment) {
    this.comments.remove(comment)
  }
}

export default CommentsStore;
