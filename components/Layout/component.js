import React from 'react'
import Head from 'next/head'
import { PageHeader } from 'antd'

const Layout = ({ title, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <PageHeader title='lapogramm' className='header' />
    <main className="main-container">
      {children}
    </main>
  </>
)

export default Layout
