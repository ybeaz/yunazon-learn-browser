import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import makeAsyncScriptLoader from 'react-async-script'

import { getYouTubePlayerWorkHook } from '../Hooks/getYouTubePlayerWorkHook'

const PlayerComponent = () => {
  const videoProps = { videoId: 'YukDNIPy3sY', width: '640', height: '390' }
  const {
    playVideoHandler,
    pauseVideoHandler,
    stopVideoHandler,
  } = getYouTubePlayerWorkHook(videoProps)

  return (
    <div className='Player'>
      <div className='Player_wrapper'>
        <div className='Player_wrapper_playerDiv' id='playerDiv'></div>
      </div>
      <div className='Player__panel'>
        <button onClick={event => playVideoHandler()}>Play</button>
        <button onClick={event => pauseVideoHandler()}>Pause</button>
        <button onClick={event => stopVideoHandler()}>Stop</button>
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
