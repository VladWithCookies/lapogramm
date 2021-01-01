import Router from 'next/router'
import { BaseStore, getOrCreateStore } from 'next-mobx-wrapper'
import 'mobx-react-lite/batchingForReactDom'

import httpClient from 'lib/httpClient'

class Editor extends BaseStore {
  createPost = (values) => {
    const formData = new FormData()

    formData.append('image', values.result)
    httpClient().post('/posts', { body: formData })
    Router.push('/')
  }
}

export const getEditorStore = getOrCreateStore('editorStore', Editor)
