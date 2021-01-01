import { MobXProviderContext } from 'mobx-react'

import EditorComponent from './component'

const Editor = () => {
  const { editorStore: { createPost } } = React.useContext(MobXProviderContext)

  return <EditorComponent createPost={createPost} />
}

export default Editor
