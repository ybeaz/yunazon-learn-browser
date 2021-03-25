import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import makeAsyncScriptLoader from 'react-async-script'

import { getYouTubePlayerWorkHook } from '../Hooks/getYouTubePlayerWorkHook'
import { Button } from './Button'

const PlayerComponent = () => {
  const videoProps = { videoId: 'GQplO4weJTg', width: '640', height: '390' }
  const {
    playVideoHandler,
    pauseVideoHandler,
    stopVideoHandler,
  } = getYouTubePlayerWorkHook(videoProps)

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

  return (
    <div className='Player'>
      <div className='Player__wrapper video-responsive'>
        <div className='Player__wrapper_player' id='player'></div>
      </div>
      <div className='Player__panel'>
        <Button {...buttonPlayProps} />
        <Button {...buttonPauseProps} />
        <Button {...buttonStopProps} />
        {/* <button
          className='Player__panel_play'
          onClick={event => playVideoHandler(event)}
        >
          Play
        </button>
        <button
          className='Player__panel_pause'
          onClick={event => pauseVideoHandler()}
        >
          Pause
        </button>
        <button
          className='Player__panel_stop'
          onClick={event => stopVideoHandler()}
        >
          Stop
        </button> */}
      </div>
    </div>
  )
}

const URL = 'https://www.youtube.com/iframe_api'
const globalName = 'YT'
export const Player = makeAsyncScriptLoader(URL, {
  // callbackName: onYouTubeIframeAPIReady,
  globalName,
})(PlayerComponent)
