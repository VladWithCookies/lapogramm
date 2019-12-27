import React from 'react'

const Image = React.forwardRef((_, ref) => (
  <div className='editor__preview'>
    <canvas ref={ref} className='editor__image' />
  </div>
))

export default Image
