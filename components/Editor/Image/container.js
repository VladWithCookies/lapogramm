import React, { useEffect, useRef } from 'react'

import ImagePreviewComponent from './component'

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

const ImagePreview = ({ imageSrc, ...filters }) => {
  const ref = useRef(null)

  useEffect(() => {
    const context = ref.current.getContext('2d')
    const image = document.createElement('img')

    image.onload = () => {
      ref.current.width = image.naturalWidth
      ref.current.height = image.naturalHeight

      context.filter = toCSSFilter(filters)
      context.drawImage(image, 0, 0)
    }

    image.src = imageSrc
  }, [imageSrc, filters])

  return (
    <ImagePreviewComponent ref={ref} />
  )
}

export default ImagePreview
