import React, { useEffect, useRef } from 'react'

import { toCSSFilter } from '../../../utils'
import ImagePreviewComponent from './component'

const ImagePreview = ({
  field: {
    name,
  },
  form: {
    setFieldValue,
    values: {
      image,
      filters,
    },
  },
}) => {
  const ref = useRef(null)

  useEffect(() => {
    const context = ref.current.getContext('2d')
    const reader = new FileReader()

    reader.onload = (event) => {
      const preview = new Image()

      preview.onload = () => {
        ref.current.width = preview.width
        ref.current.height = preview.height
        context.filter = toCSSFilter(filters)
        context.drawImage(preview, 0, 0)

        ref.current.toBlob((blob) => {
          setFieldValue(name, blob)
        })
      }

      preview.src = event.target.result
    }

    reader.readAsDataURL(image)
  }, [filters])

  return (
    <ImagePreviewComponent ref={ref} />
  )
}

export default ImagePreview
