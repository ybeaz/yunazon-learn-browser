import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import { getYouTubePlayerWorkHook } from '../Hooks/getYouTubePlayerWorkHook'
import { VIDEO_RESOLUTION } from '../../Constants/videoResolution.const'
import { handleEvents } from '../Hooks/handleEvents'
import { ModalFrame } from '../Modals/ModalFrame'
import { RootStore } from '../../@types/RootStore'
import { RouterScreenProps } from '../../@types/RouterScreenProps'

import { LoaderOverlay } from '../Components/LoaderOverlay'
import { MainFrame } from '../Components/MainFrame'
import { Player } from '../Components/Player'
import { CarouselQuestions } from '../Components/CarouselQuestions'

export const PlayAndSubscribe: React.FunctionComponent<any> = (
  props: RouterScreenProps = { routeProps: {}, rootPath: '' }
) => {
  const contentID = props?.routeProps.match.params.contentID
  const store = useSelector((store: RootStore) => store)
  const {
    courses,
    componentsState: { modalGetScores },
  } = store
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (courses.length && isLoaded === false) {
      handleEvents(
        {},
        { type: 'SELECT_COURSE_MODULE_CONTENTID', data: { contentID } }
      )
      setIsLoaded(true)
    }
  }, [courses])

  const { width, height } = VIDEO_RESOLUTION
  const {
    playVideoHandler,
    pauseVideoHandler,
    stopVideoHandler,
    isShowingPlay,
  } = getYouTubePlayerWorkHook({
    videoId: contentID,
    width,
    height,
  })

  const playerProps = {
    videoId: contentID,
    playVideoHandler,
    pauseVideoHandler,
    stopVideoHandler,
    isShowingPlay,
    screenType: 'PlayAndSubscribe',
  }

  const modalFrameProps = { stopVideoHandler, routeProps: props.routeProps }

  return (
    <div className='PlayAndSubscribe'>
      {isLoaded === true ? (
        <>
          <MainFrame>
            <Player {...playerProps} />
            <CarouselQuestions />
          </MainFrame>
          {modalGetScores === true ? <ModalFrame {...modalFrameProps} /> : null}
          <LoaderOverlay />
        </>
      ) : null}
    </div>
  )
}
