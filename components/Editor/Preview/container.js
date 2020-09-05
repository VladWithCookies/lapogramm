import React, { useEffect, useRef, useState } from 'react'

import toCSSFilter from '../../../utils/toCSSFilter'
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
  const [imageSrc, setImageSrc] = useState(null)

  useEffect(() => {
    const reader = new FileReader()

    reader.onload = (event) => {
      setImageSrc(event.target.result)
    }

    reader.readAsDataURL(image)
  }, [image])

  useEffect(() => {
    const context = ref.current.getContext('2d')
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

    preview.src = imageSrc
  }, [filters, imageSrc])

  return (
    <ImagePreviewComponent ref={ref} />
  )
}

export default ImagePreview
