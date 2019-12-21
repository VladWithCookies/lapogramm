import React from 'react'

const toCSSFilter = (filters) => {
  const hue = filters['hue-rotate']

  if (hue) {
    filters['hue-rotate'] = `${hue}deg`
  }

  return Object
    .keys(filters)
    .map((filterName) => `${filterName}(${filters[filterName]})`)
    .join(' ')
}

const Image = ({ imageSrc, ...filters }) => (
  <img
    src={imageSrc}
    className='editor__image'
    style={{ filter: toCSSFilter(filters) }}
  />
)

export default Image
