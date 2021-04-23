import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import { getMultipliedTimeStr } from '../../Shared/getMultipliedTimeStr'
import { getModuleByContentID } from '../../Shared/getModuleByContentID'
import { getYouTubePlayerWorkHook } from '../Hooks/getYouTubePlayerWorkHook'
import { VIDEO_RESOLUTION } from '../../Constants/videoResolution.const'
import { handleEvents } from '../Hooks/handleEvents'
import { ModalFrame } from '../Modals/ModalFrame'
import { IRootStore } from '../../@types/IRootStore'
import { IRouterScreenProps } from '../../@types/IRouterScreenProps'

import { IDurationObj } from '../../@types/IDurationObj'
import { LoaderOverlay } from '../Components/LoaderOverlay'
import { MainFrame } from '../Components/MainFrame'
import { Player } from '../Components/Player'
import { CarouselQuestions } from '../Components/CarouselQuestions'

export const PlayAndSubscribe: React.FunctionComponent<any> = (
  props: IRouterScreenProps = { routeProps: {}, rootPath: '' }
) => {
  const contentID = props?.routeProps.match.params.contentID
  const store = useSelector((store: IRootStore) => store)
  const {
    courses,
    componentsState: { modalGetScores },
  } = store
  const [isLoaded, setIsLoaded] = useState(false)
  const [durationObjState, setDurationObjState] = useState({
    duration: '',
    units: '',
  })

  useEffect(() => {
    if (courses.length && isLoaded === false) {
      handleEvents(
        {},
        { type: 'SELECT_COURSE_MODULE_CONTENTID', data: { contentID } }
      )
      setIsLoaded(true)

      const { duration } = getModuleByContentID(courses, 'ytID', contentID)
      const durationObj: IDurationObj = getMultipliedTimeStr(duration, 1.5)
      setDurationObjState(durationObj)
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
    durationObj: durationObjState,
  }

  const carouselQuestionsProps = {
    durationObj: durationObjState,
  }

  const modalFrameProps = { stopVideoHandler, routeProps: props.routeProps }

  return (
    <div className='PlayAndSubscribe'>
      {isLoaded === true ? (
        <>
          <MainFrame>
            <Player {...playerProps} />
            <CarouselQuestions {...carouselQuestionsProps} />
          </MainFrame>
          {modalGetScores === true ? <ModalFrame {...modalFrameProps} /> : null}
          <LoaderOverlay />
        </>
      ) : null}
    </div>
  )
}
