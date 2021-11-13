import React from 'react'

interface ImageSvgArgs {
  classAdded: string
  src: string
}

export const ImageSvg: React.FunctionComponent<ImageSvgArgs> = (
  props: ImageSvgArgs
): JSX.Element => {
  const { classAdded, src } = props
  return (
    <div className={`ImageSvg ${classAdded}`}>
      <img className={`_image`} src={src} />
    </div>
  )
}
