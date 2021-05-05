import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Blurhash } from 'react-blurhash'

import { LoaderBlurhash } from './LoaderBlurhash'
import { IRootStore } from '../../Interfaces/IRootStore'
import { PlayerPanel } from '../Components/PlayerPanel'
import { IDurationObj } from '../../Interfaces/IDurationObj'
// import { getYouTubePlayerWorkHook } from '../Hooks/getYouTubePlayerWorkHook'

interface IPlayerComponentInput {
  contentID: string
  isVisible: boolean
  children: React.ReactChildren
}

export const PlayerIframe: React.FunctionComponent<any> = (
  props: IPlayerComponentInput
): JSX.Element => {
  const { contentID, isVisible } = props

  let isVisibleClass = isVisible ? '_blockVisible' : '_blockHided'

  return (
    <div className='PlayerIframe'>
      <div className={`__wrapper video-responsive ${isVisibleClass}`}>
        <div className='_player' id={contentID}></div>
        {props.children[0]}
      </div>

      <div className='__panel'>{props.children[1]}</div>
    </div>
  )
}

// const URL = 'https://www.youtube.com/iframe_api'
// const globalYouTubeVar = 'YT'
// export const PlayerIframe = makeAsyncScriptLoader(URL, {
//   // callbackName: onYouTubeIframeAPIReady,
//   globalYouTubeVar,
// })(PlayerComponent)
