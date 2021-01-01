import React from 'react'
import Head from 'next/head'
import Link from 'next/link';

const MainLayout = ({ title, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Link href="/">
      <a>
        <h1 className='header'>
          lapogramm
        </h1>
      </a>
    </Link>
    {children}
  </>
)

export default MainLayout
