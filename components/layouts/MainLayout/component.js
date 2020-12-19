import React from 'react'
import Head from 'next/head'
import { PageHeader } from 'antd'

const MainLayout = ({ title, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1 className='header'>
      lapogramm
    </h1>
    {children}
  </>
)

export default MainLayout
