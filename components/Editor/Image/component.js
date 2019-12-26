import React from 'react'

const Image = React.forwardRef((_, ref) => (
  <canvas ref={ref} className='editor__image' />
))

export default Image
