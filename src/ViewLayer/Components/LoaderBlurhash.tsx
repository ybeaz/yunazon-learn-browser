import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector } from 'react-redux'

import { IRootStore } from '../../Interfaces/IRootStore'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { Blurhash } from 'react-blurhash'

export const LoaderBlurhash: React.FunctionComponent<any> = (
  props: any
): JSX.Element => {
  const { isVisible, isTextUsed = false } = props

  const store = useSelector((store: IRootStore) => store)

  const { language } = store

  const pleaseRefreshWindow = DICTIONARY['pleaseRefreshWindow'][language]
  const [isTextVisible, setIsTextVisible] = useState(false)

  setTimeout(() => {
    setIsTextVisible(true)
  }, 5000)

  let blurHashClass = !isVisible ? '_blockVisible' : '_blockHided'

  return (
    <div className='LoaderBlurhash'>
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
      {isTextUsed && !isVisible && isTextVisible && (
        <div className='__text'>{pleaseRefreshWindow}</div>
      )}
    </div>
  )
}
