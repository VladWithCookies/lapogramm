import { observable, action } from 'mobx'
import { BaseStore, getOrCreateStore } from 'next-mobx-wrapper'
import 'mobx-react-lite/batchingForReactDom'

import dataFormatter from 'lib/dataFormatter'
import httpClient from 'lib/httpClient'

class PostList extends BaseStore {
  @observable items = []

  getPosts = async (context) => {
    const { data } = await httpClient(context).get('/posts')
    const items = dataFormatter.deserialize(data)

    this.setPosts(items)
  }

  @action setPosts = items => {
    this.items = items
  }
}

export const getPostListStore = getOrCreateStore('PostListStore', PostList)
