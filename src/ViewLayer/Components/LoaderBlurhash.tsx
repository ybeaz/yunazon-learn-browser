import React, { useState, useEffect, useRef, ReactElement } from 'react'

import { Blurhash } from 'react-blurhash'

export const LoaderBlurhash: React.FunctionComponent<any> = (
  props: any
): JSX.Element => {
  const {
    isVisible,
    textTooltip,
    isTextTooltip = false,
    delay = 500000,
    contentComponentName,
  } = props

  const [isTextVisible, setIsTextVisible] = useState(false)

  setTimeout(() => {
    setIsTextVisible(true)
  }, delay)

  let blurHashClass = !isVisible ? '_blockVisible' : '_blockHided'

  return (
    <div className={`LoaderBlurhash LoaderBlurhash_${contentComponentName}`}>
      <div className={`__blurhash ${blurHashClass} _pulse`}>
        <Blurhash
          hash='LEHV6nWB2yk8pyo0adR*.7kCMdnj'
          width={'100%'}
          height={'100%'}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      {isTextTooltip && !isVisible && isTextVisible && (
        <div className='__text'>{textTooltip}</div>
      )}
    </div>
  )
}
