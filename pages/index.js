import React from 'react'
import Head from 'next/head'
import { Row, Col, Tabs } from 'antd'

import SliderField from '../components/Fields/SliderField'
import UploadField from '../components/Fields/UploadField'
import 'antd/dist/antd.css'
import '../stylesheets/applications.scss'

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="main-container">
      <Row>
        <Col
          sm={24}
          md={{ span: 16, offset: 4 }}
          className='editor'
        >
          <div className='editor__uploader'>
            <UploadField />
          </div>
          <Tabs
            size='large'
            tabPosition='bottom'
            className='editor__tools'
          >
            {['Brightness', 'Contract', 'Saturation', 'Hue', 'Grayscale', 'Sepia'].map((tab) => (
              <Tabs.TabPane key={tab} tab={tab}>
                <SliderField className='editor__slider' />
              </Tabs.TabPane>
            ))}
          </Tabs>
        </Col>
      </Row>
    </main>
  </>
)

export default Home
