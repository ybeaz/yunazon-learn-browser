import { useRef, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { actionSync } from '../../DataLayer/index.action'

interface UseYouTubePlayerWorkPropsType {
  contentComponentName: string
  moduleID: string
  contentID: string
  height: string
  width: string
}

interface UseYouTubePlayerWorkType {
  onPlayerReady: Function | undefined
  playVideoHandler: Function | undefined
  pauseVideoHandler: Function | undefined
  stopVideoHandler: Function | undefined
  isShowingPlay: boolean
}

export const useYouTubePlayerWork = ({
  contentComponentName,
  moduleID,
  contentID,
  height,
  width,
}: UseYouTubePlayerWorkPropsType): UseYouTubePlayerWorkType => {
  const playerRef = useRef(null)

  const dispatch = useDispatch()

  // const [player, setPlayer] = useState(playerDefault)
  const [isShowingPlay, setIsShowingPlay] = useState(true)
  const [playerState, setPlayerState] = useState({ data: 1000 })

  /** Does not work properly */
  function playVideoHandler(event = {}, action = {}, playerIn = playerRef.current) {
    try {
      playerIn && playerIn.playVideo()
      setIsShowingPlay(false)
    } catch (error) {
      console.info('useYouTubePlayerWork [43]', {
        error,
      })
    }
  }

  /** Does not work properly */
  function pauseVideoHandler(event = {}, action = {}, playerIn = playerRef.current) {
    try {
      playerIn && playerIn.pauseVideo()
      setIsShowingPlay(true)
    } catch (error) {
      console.info('useYouTubePlayerWork [55]', {
        error,
      })
    }
  }

  /** Does not work properly */
  function stopVideoHandler(event = {}, action = {}, playerIn = playerRef.current) {
    try {
      playerIn && playerIn.stopVideo()
      setIsShowingPlay(true)
    } catch (error) {
      console.info('useYouTubePlayerWork [67]', {
        error,
      })
    }
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event: any) {
    console.info('useYouTubePlayerWork [75]', { mediaKey: moduleID, isMediaLoaded: true })
    dispatch(
      actionSync.TOGGLE_MEDIA_LOADED({
        mediaKey: moduleID,
        isMediaLoaded: true,
      })
    )
  }

  const onChangePlayerStateHandler = (state: any) => {
    if (state.data === 0) {
      // console.info('useYouTubePlayerWork [21] PlayerYoutubeIframe event on end is captured', { state })
    }
    setPlayerState(state)
  }

  async function onYouTubeIframeAPIReady(videoId: string) {
    if (contentComponentName === 'PlayerYoutubeIframe') {
      try {
        const newPlayer = document.createElement('div')
        newPlayer.id = videoId

        const removeContents = function (element) {
          while (element.firstChild) {
            element.removeChild(element.firstChild)
          }
        }

        // Append the new tag to the desired parent element
        // const parentELement = document.getElementsByClassName('_wrapperForPlayerYoutubeIframe')[0]
        // removeContents(parentELement)
        // parentELement.appendChild(newPlayer)
        // document.body.appendChild(newPlayer)

        // Store the reference
        // playerRef.current = newPlayer

        window['YT'].ready(function () {
          playerRef.current = new window['YT'].Player(videoId, {
            videoId,
            height,
            width,
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
        })
        console.info('useYouTubePlayerWork [120]', {
          videoId,
          contentID,
          'window.location.origin': window.location.origin,
          "window['YT']": window['YT'],
        })

        return () => {}
      } catch (error: any) {
        console.error('useYouTubePlayerWork [121]', error.name + ': ' + error.message)
      }
    }
  }

  useEffect(() => {
    // window['onYouTubeIframeAPIReady'] = async () => await onYouTubeIframeAPIReady(contentID)
    setTimeout(async () => await onYouTubeIframeAPIReady(contentID), 1000)

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy()
      }
    }
  }, [contentID])

  useEffect(() => {
    if (stopVideoHandler && playerState.data === 0) stopVideoHandler({}, {}, playerRef.current)
  }, [playerState.data, contentID])

  return {
    onPlayerReady,
    playVideoHandler,
    pauseVideoHandler,
    stopVideoHandler,
    isShowingPlay,
  }
}
