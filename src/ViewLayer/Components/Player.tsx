import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { PlayerPanel } from '../Components/PlayerPanel'
import { IDurationObj } from '../../@types/IDurationObj'
// import { getYouTubePlayerWorkHook } from '../Hooks/getYouTubePlayerWorkHook'

interface IPlayerComponentInput {
  videoId: string
  captureCourse: string
  durationObj: IDurationObj
  playVideoHandler: Function
  pauseVideoHandler: Function
  stopVideoHandler: Function
  screenType: string
  isShowingPlay: boolean
}

export const Player: React.FunctionComponent<any> = (
  props: IPlayerComponentInput
): JSX.Element => {
  const {
    videoId,
    captureCourse,
    durationObj,
    playVideoHandler,
    pauseVideoHandler,
    stopVideoHandler,
    screenType,
    isShowingPlay,
  } = props

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
    captureCourse,
    durationObj,
    screenType,
    isShowingPlay,
    buttonPlayProps,
    buttonPauseProps,
    buttonStopProps,
  }

  return (
    <div className='Player'>
      <div className='Player__wrapper video-responsive'>
        <div className='Player__wrapper_player' id={videoId}></div>
      </div>
      <div className='Player__panel'>
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
