import Head from 'next/head'
import { PageHeader } from 'antd'

const MainLayout = ({ title, children }) => (
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

export default MainLayout
