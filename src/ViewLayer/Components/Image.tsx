import React from 'react'

interface ImageArgs {
  classAdded: string
  src: string
}

export const Image: React.FunctionComponent<ImageArgs> = (
  props: ImageArgs
): JSX.Element => {
  const { classAdded, src } = props
  return (
    <div className={`Image ${classAdded}`}>
      <img className={`_image`} src={src} />
    </div>
  )
}
