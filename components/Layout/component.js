import React from 'react'
import Head from 'next/head'

const Layout = ({ title, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="main-container">
      {children}
    </main>
  </>
)

export default Layout
