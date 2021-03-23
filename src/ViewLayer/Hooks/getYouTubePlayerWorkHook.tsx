import React, { useState, useEffect, useRef, ReactElement } from 'react'

export const getYouTubePlayerWorkHook = ({ videoId, height, width }) => {
  const playerDefault = {
    playVideo: () => {},
    pauseVideo: () => {},
    stopVideo: () => {},
  }

  const [player, setPlayer] = useState(playerDefault)

  function playVideoHandler(playerIn = player) {
    playerIn && playerIn.playVideo()
  }

  function pauseVideoHandler(playerIn = player) {
    playerIn && playerIn.pauseVideo()
  }

  function stopVideoHandler(playerIn = player) {
    playerIn && playerIn.stopVideo()
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {}

  const onChangePlayerStateHandler = state => {
    console.info('PlayAndSubscribe.screen [19] ', { state })
    if (state.data === 0) {
      console.info('PlayAndSubscribe.screen [21] ', { state })
    }
  }

  const getLoadedPlayerScript = () => {
    var tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
  }

  function onYouTubeIframeAPIReady() {
    const Player = new window['YT'].Player('playerDiv', {
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
  }

  useEffect(() => {
    window.onload = function () {
      onYouTubeIframeAPIReady()
    }
  }, [])

  return {
    playVideoHandler,
    pauseVideoHandler,
    stopVideoHandler,
  }
}
