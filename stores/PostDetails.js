import { uniqueId } from 'lodash'
import { observable, action } from 'mobx'
import { BaseStore, getOrCreateStore } from 'next-mobx-wrapper'
import 'mobx-react-lite/batchingForReactDom'

import dataFormatter from 'lib/dataFormatter'
import { getPost } from 'api/post'

class PostDetails extends BaseStore {
  @observable comments = []

  getPost = async (id) => {
    const { data } = await getPost(id)
    const post = dataFormatter.deserialize(data)

    this.setPost(post)
  }

  @action setPost = ({ id, filename, createdAt }) => {
    this.id = id
    this.filename = filename
    this.createdAt = createdAt
  }

  @action addComment = () => {
    const id = uniqueId()

    this.comments.push({
      id: id,
      content: id,
      author: 'Han Solo',
      datetime: 'a few seconds ago',
      avatar: 'https://picsum.photos/50',
    })
  }

  @action removeComment = (comment) => {
    this.comments.remove(comment)
  }
}

export const getPostDetailsStore = getOrCreateStore('postDetailsStore', PostDetails)
