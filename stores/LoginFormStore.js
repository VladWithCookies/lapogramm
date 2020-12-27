import { BaseStore, getOrCreateStore } from 'next-mobx-wrapper'
import 'mobx-react-lite/batchingForReactDom'

import { logIn } from 'api';

class LoginFormStore extends BaseStore {
  logIn = (values) => {
    logIn({ password: values.password });
  }
}

export const getLoginFormStore = getOrCreateStore('LoginFormStoreStore', LoginFormStore)
