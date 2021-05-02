import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Blurhash } from 'react-blurhash'

import { IRootStore } from '../../Interfaces/IRootStore'
import { PlayerPanel } from '../Components/PlayerPanel'
import { IDurationObj } from '../../Interfaces/IDurationObj'
// import { getYouTubePlayerWorkHook } from '../Hooks/getYouTubePlayerWorkHook'

interface IPlayerComponentInput {
  courseCapture: string
  moduleCapture: string
  videoId: string
  captureCourse: string
  durationObj: IDurationObj
  playVideoHandler: Function
  pauseVideoHandler: Function
  stopVideoHandler: Function
  screenType: string
  isShowingPlay: boolean
  isActionButtonDisplaying: boolean
}

export const Player: React.FunctionComponent<any> = (
  props: IPlayerComponentInput
): JSX.Element => {
  const {
    courseCapture,
    moduleCapture,
    videoId,
    captureCourse,
    durationObj,
    playVideoHandler,
    pauseVideoHandler,
    stopVideoHandler,
    screenType,
    isShowingPlay,
    isActionButtonDisplaying,
  } = props

  const store = useSelector((store: IRootStore) => store)
  const {
    isLoaded: { mediaLoading },
  } = store

  const isVisible = mediaLoading[videoId]

  // const [isVisible, setIsVisible] = useState(false)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsVisible(true)
  //   }, 3000)
  // }, [])

  const buttonPlayProps = {
    icon: 'MdPlayArrow',
    classAdded: 'Button_MdPlayArrow',
    handleEvents: playVideoHandler,
    action: {},
  }
  const buttonPauseProps = {
    icon: 'MdPause',
    classAdded: 'Button_MdPause',
    handleEvents: pauseVideoHandler,
    action: {},
  }
  const buttonStopProps = {
    icon: 'MdRemoveCircle',
    classAdded: 'Button_MdRemoveCircle',
    handleEvents: stopVideoHandler,
    action: {},
  }
  const playerPanelProps = {
    courseCapture,
    moduleCapture,
    durationObj,
    screenType,
    isShowingPlay,
    buttonPlayProps,
    buttonPauseProps,
    buttonStopProps,
    isActionButtonDisplaying,
  }

  let videoVisibleClass = isVisible ? '_blockVisible' : '_blockHided'
  let blurHashClass = !isVisible ? '_blockVisible' : '_blockHided'

  return (
    <div className='Player'>
      <div className={`__wrapper video-responsive ${videoVisibleClass}`}>
        <div className='_player' id={videoId}></div>
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

      <div className='__panel'>
        <PlayerPanel {...playerPanelProps} />
      </div>
    </div>
  )
}

// const URL = 'https://www.youtube.com/iframe_api'
// const globalYouTubeVar = 'YT'
// export const Player = makeAsyncScriptLoader(URL, {
//   // callbackName: onYouTubeIframeAPIReady,
//   globalYouTubeVar,
// })(PlayerComponent)
