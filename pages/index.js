import React from 'react'
import Head from 'next/head'

import '../stylesheets/applications.scss';

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="main-container">
      <h1>Hello World</h1>
    </main>
  </>
)

export default Home
