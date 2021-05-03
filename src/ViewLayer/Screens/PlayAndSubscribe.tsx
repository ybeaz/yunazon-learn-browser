import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import { getMultipliedTimeStr } from '../../Shared/getMultipliedTimeStr'
import { getModuleByContentID } from '../../Shared/getModuleByContentID'
import { getYouTubePlayerWorkHook } from '../Hooks/getYouTubePlayerWorkHook'
import { VIDEO_RESOLUTION } from '../../Constants/videoResolution.const'
import { handleEvents } from '../Hooks/handleEvents'
import { QuestionScores } from '../Components/QuestionScores'
import { ModalFrame } from '../Frames/ModalFrame'
import { IRootStore } from '../../Interfaces/IRootStore'
import { IRouterScreenProps } from '../../Interfaces/IRouterScreenProps'
import { IDurationObj } from '../../Interfaces/IDurationObj'
import { LoaderOverlay } from '../Components/LoaderOverlay'
import { MainFrame } from '../Frames/MainFrame'
import { Player } from '../Components/Player'
import { CarouselQuestions } from '../Components/CarouselQuestions'

export const PlayAndSubscribe: React.FunctionComponent<any> = (
  props: IRouterScreenProps = { routeProps: {}, rootPath: '' }
) => {
  const contentID = props?.routeProps.match.params.contentID
  const store = useSelector((store: IRootStore) => store)
  const {
    globalVars: { durationMultiplier },
    courses,
    componentsState: { isModalFrameVisible },
  } = store
  const [isLoaded, setIsLoaded] = useState(false)
  const [moduleState, setModuleState] = useState({
    courseCapture: '',
    moduleCapture: '',
    duration: '',
    units: '',
    index: 0,
    modulesTotal: 0,
  })

  useEffect(() => {
    if (courses.length && isLoaded === false) {
      handleEvents({}, { type: 'TOGGLE_START_COURSE', data: false })

      handleEvents(
        {},
        { type: 'SELECT_COURSE_MODULE_CONTENTID', data: { contentID } }
      )
      setIsLoaded(true)

      const {
        courseCapture,
        capture: moduleCapture,
        duration,
        index,
        modulesTotal,
      } = getModuleByContentID(courses, 'ytID', contentID)

      const durationObj: IDurationObj = getMultipliedTimeStr(
        duration,
        durationMultiplier
      )
      setModuleState({
        courseCapture,
        moduleCapture,
        index,
        modulesTotal,
        ...durationObj,
      })
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

  const {
    courseCapture,
    moduleCapture,
    duration,
    units,
    index,
    modulesTotal,
  } = moduleState

  const buttonMdMenuProps = {
    icon: 'MdMenu',
    classAdded: 'Button_MdMenu',
    action: {
      typeEvent: 'TOGGLE_SIDE_NAVIGATION',
    },
  }

  const playerProps = {
    courseCapture,
    moduleCapture,
    videoId: contentID,
    playVideoHandler,
    pauseVideoHandler,
    stopVideoHandler,
    isShowingPlay,
    screenType: 'PlayAndSubscribe',
    durationObj: moduleState,
    isActionButtonDisplaying: false,
    index,
    modulesTotal,
  }

  const carouselQuestionsProps = {
    durationObj: { duration, units },
  }

  const questionScoresProps = { stopVideoHandler, routeProps: props.routeProps }

  return (
    <div className='PlayAndSubscribe'>
      {isLoaded === true ? (
        <>
          <MainFrame>
            {null}
            <Player {...playerProps} />
            <CarouselQuestions {...carouselQuestionsProps} />
          </MainFrame>

          <ModalFrame>
            <QuestionScores {...questionScoresProps} />
          </ModalFrame>

          <LoaderOverlay />
        </>
      ) : null}
    </div>
  )
}
