import App from 'next/app'
import { configure } from 'mobx'
import { withMobx } from 'next-mobx-wrapper'
import { Provider, useStaticRendering } from 'mobx-react'
import 'antd/dist/antd.css'

import * as stores from 'stores';
import 'stylesheets/applications.scss'

const isServer = !process.browser;

configure({ enforceActions: 'observed' });
useStaticRendering(isServer);

class Lapogramm extends App {
  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider {...store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withMobx(stores)(Lapogramm);
