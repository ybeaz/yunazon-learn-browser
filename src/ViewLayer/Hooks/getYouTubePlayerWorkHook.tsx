import { useState, useEffect } from 'react'

export const getYouTubePlayerWorkHook = ({ videoId, height, width }) => {
  const playerDefault = {
    playVideo: () => {},
    pauseVideo: () => {},
    stopVideo: () => {},
  }

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
  function onPlayerReady(event) {}

  const onChangePlayerStateHandler = state => {
    if (state.data === 0) {
      // console.info('getYouTubePlayerWorkHook [21] Player event on end is captured', { state })
    }
    setPlayerState(state)
  }

  async function onYouTubeIframeAPIReady() {
    try {
      const Player = await new window['YT'].Player(videoId, {
        height,
        width,
        videoId,
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
      })
      setPlayer(Player)
    } catch (error) {
      console.error(
        'getYouTubePlayerWorkHook [68]',
        error.name + ': ' + error.message
      )
    }
  }

  useEffect(() => {
    setTimeout(() => onYouTubeIframeAPIReady(), 500)
  }, [])

  useEffect(() => {
    if (playerState.data === 0) stopVideoHandler({}, {}, player)
  }, [playerState.data])

  return {
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
