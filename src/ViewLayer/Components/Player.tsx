import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import makeAsyncScriptLoader from 'react-async-script'

import { getYouTubePlayerWorkHook } from '../Hooks/getYouTubePlayerWorkHook'

const PlayerComponent = () => {
  const videoProps = { videoId: 'GQplO4weJTg', width: '640', height: '390' }
  const {
    playVideoHandler,
    pauseVideoHandler,
    stopVideoHandler,
  } = getYouTubePlayerWorkHook(videoProps)

  return (
    <div className='Player'>
      <div className='Player__wrapper video-responsive'>
        <div className='Player__wrapper_player' id='player'></div>
      </div>
      <div className='Player__panel'>
        <button
          className='Player__panel_play'
          onClick={event => playVideoHandler()}
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
        </button>
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
