import { observable, action } from 'mobx'
import { BaseStore, getOrCreateStore } from 'next-mobx-wrapper';

import dataFormatter from '../utils/dataFormatter'
import { getPost } from '../api/post'

class PostDetails extends BaseStore {
  @observable comments = []

  getPost = async (id) => {
    const response = await getPost(id)
    const json = await response.json()
    const data = dataFormatter.deserialize(json)

    this.setPost(data)
  }

  @action setPost = ({ id, filename, createdAt }) => {
    this.id = id
    this.filename = filename
    this.createdAt = createdAt
  }

  @action addComment = () => {
    this.comments.push({
      content: 'Test',
      author: 'Han Solo',
      datetime: 'a few seconds ago',
      avatar: 'https://picsum.photos/50',
    })
  }
}

export const getPostDetailsStore = getOrCreateStore('postDetailsStore', PostDetails);
