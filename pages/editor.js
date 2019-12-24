import React from 'react'
import 'antd/dist/antd.css'

import Layout from '../components/Layout'
import Editor from '../components/Editor'
import '../stylesheets/applications.scss'

const EditorPage = () => (
  <Layout title='Editor'>
    <Editor />
  </Layout>
)

export default EditorPage
