import { observable, action } from 'mobx'
import { BaseStore, getOrCreateStore } from 'next-mobx-wrapper'
import 'mobx-react-lite/batchingForReactDom'

import dataFormatter from 'lib/dataFormatter'
import { getPosts } from 'api/post'

class PostList extends BaseStore {
  @observable items = []

  getPosts = async () => {
    const { data } = await getPosts()
    const items = dataFormatter.deserialize(data)

    this.setPosts(items)
  }

  @action setPosts = posts => {
    this.items = items
  }
}

export const getPostListStore = getOrCreateStore('PostListStore', PostList)
