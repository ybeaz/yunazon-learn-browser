import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Blurhash } from 'react-blurhash'

import { IRootStore } from '../../Interfaces/IRootStore'

export const LoaderBlurhash: React.FunctionComponent<any> = (
  props: any
): JSX.Element => {
  const { isVisible } = props

  let blurHashClass = !isVisible ? '_blockVisible' : '_blockHided'

  return (
    <div className='LoaderBlurhash'>
      <div className={`_blurhash ${blurHashClass} _pulse`}>
        <Blurhash
          hash='LEHV6nWB2yk8pyo0adR*.7kCMdnj'
          width={'100%'}
          height={'100%'}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
    </div>
  )
}
