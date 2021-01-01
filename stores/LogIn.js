import { BaseStore, getOrCreateStore } from 'next-mobx-wrapper'
import 'mobx-react-lite/batchingForReactDom'
import httpClient from 'lib/httpClient'

class LogIn extends BaseStore {
  logIn = values => httpClient().post('login', { password: values.password })
}

export const getLogInStore = getOrCreateStore('LogInStore', LogIn)
