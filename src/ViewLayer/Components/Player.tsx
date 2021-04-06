import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { PlayerPanel } from '../Components/PlayerPanel'
// import { getYouTubePlayerWorkHook } from '../Hooks/getYouTubePlayerWorkHook'

interface IPlayerComponent {
  isShowingPanel: boolean
  videoId: string
  width: string
  height: string
}

export const Player: Function = (props: any): JSX.Element => {
  const {
    videoId,
    playVideoHandler,
    pauseVideoHandler,
    stopVideoHandler,
    isShowingPanel,
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
    isShowingPanel,
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
