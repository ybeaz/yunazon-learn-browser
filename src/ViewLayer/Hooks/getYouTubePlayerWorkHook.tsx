import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { actionSync } from '../../DataLayer/index.action'

interface IGetYouTubePlayerWorkHookInput {
  contentComponentName: string
  contentID: string
  height: string
  width: string
}

interface IGetYouTubePlayerWorkHook {
  onPlayerReady: Function | undefined
  playVideoHandler: Function | undefined
  pauseVideoHandler: Function | undefined
  stopVideoHandler: Function | undefined
  isShowingPlay: boolean
}

export const getYouTubePlayerWorkHook = ({
  contentComponentName,
  contentID,
  height,
  width,
}: IGetYouTubePlayerWorkHookInput): IGetYouTubePlayerWorkHook => {
  const playerDefault = {
    playVideo: () => {},
    pauseVideo: () => {},
    stopVideo: () => {},
  }

  const dispatch = useDispatch()

  const [player, setPlayer] = useState(playerDefault)
  const [isShowingPlay, setIsShowingPlay] = useState(true)
  const [playerState, setPlayerState] = useState({ data: 1000 })

  function playVideoHandler(event = {}, action = {}, playerIn = player) {
    playerIn && playerIn.playVideo()
    setIsShowingPlay(false)
  }

  function pauseVideoHandler(event = {}, action = {}, playerIn = player) {
    playerIn && playerIn.pauseVideo()
    setIsShowingPlay(true)
  }

  function stopVideoHandler(event = {}, action = {}, playerIn = player) {
    playerIn && playerIn.stopVideo()
    setIsShowingPlay(true)
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    dispatch(
      actionSync.TOGGLE_MEDIA_LOADED({
        mediaKey: contentID,
        isMediaLoaded: true,
      })
    )
  }

  const onChangePlayerStateHandler = state => {
    if (state.data === 0) {
      // console.info('getYouTubePlayerWorkHook [21] PlayerIframe event on end is captured', { state })
    }
    setPlayerState(state)
  }

  async function onYouTubeIframeAPIReady() {
    if (contentComponentName === 'PlayerIframe') {
      try {
        window['YT'].ready(function () {
          const Player = new window['YT'].Player(contentID, {
            height,
            width,
            videoId: contentID,
            title: 'YouTube video player',
            frameBorder: '0',
            allow:
              'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
            allowFullScreen: true,
            autoplay: 1,
            autohide: 2,
            border: 0,
            wmode: 'opaque',
            enablejsapi: 1,
            modestbranding: 1,
            controls: 1,
            showinfo: 0,
            rel: 0,
            events: {
              onReady: onPlayerReady,
              onStateChange: onChangePlayerStateHandler,
            },
            host: 'https://www.youtube.com',
            origin: window.location.origin,
          })

          setPlayer(Player)
        })
      } catch (error) {
        console.error(
          'getYouTubePlayerWorkHook [68]',
          error.name + ': ' + error.message
        )
      }
    }
  }

  useEffect(() => {
    setTimeout(() => onYouTubeIframeAPIReady(), 1000)
  }, [contentID])

  useEffect(() => {
    if (stopVideoHandler && playerState.data === 0)
      stopVideoHandler({}, {}, player)
  }, [playerState.data])

  return {
    onPlayerReady,
    playVideoHandler,
    pauseVideoHandler,
    stopVideoHandler,
    isShowingPlay,
  }
}

// const getLoadedPlayerScript = () => {
//   var tag = document.createElement('script')
//   tag.src = 'https://www.youtube.com/iframe_api'
//   const firstScriptTag = document.getElementsByTagName('script')[0]
//   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
// }
