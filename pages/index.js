import React from 'react'
import Head from 'next/head'
import 'antd/dist/antd.css'

import Editor from '../components/Editor'
import '../stylesheets/applications.scss'

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="main-container">
      <Editor />
    </main>
  </>
)

export default Home
