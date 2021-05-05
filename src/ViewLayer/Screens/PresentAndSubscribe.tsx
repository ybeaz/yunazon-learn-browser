import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import { getContentComponentName } from '../../Shared/getContentComponentName'
import { ReaderIframe } from '../Components/ReaderIframe'
import { getMultipliedTimeStr } from '../../Shared/getMultipliedTimeStr'
import { getModuleByContentID } from '../../Shared/getModuleByContentID'
import { getModuleByCourseIDIndex } from '../../Shared/getModuleByCourseIDIndex'
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
import { PlayerIframe } from '../Components/PlayerIframe'
import { CarouselQuestions } from '../Components/CarouselQuestions'

const COMPONENT = {
  ReaderIframe,
  PlayerIframe,
}

export const PresentAndSubscribe: React.FunctionComponent<any> = (
  props: IRouterScreenProps = { routeProps: {}, rootPath: '' }
) => {
  const courseID = props?.routeProps.match.params.courseID

  const store = useSelector((store: IRootStore) => store)
  const {
    globalVars: { durationMultiplier },
    courses,
    componentsState: { isModalFrameVisible },
  } = store

  const [isLoaded, setIsLoaded] = useState(false)
  const [moduleState, setModuleState] = useState({
    ContentComponent: null,
    contentComponentName: '',
    courseCapture: '',
    moduleCapture: '',
    contentID: '',
    durationObj: {},
    moduleIndex: 0,
    modulesTotal: 0,
    questionsTotal: 0,
  })

  useEffect(() => {
    if (courses.length && isLoaded === false) {
      handleEvents({}, { type: 'TOGGLE_START_COURSE', data: false })

      const index = 0

      handleEvents(
        {},
        { type: 'SELECT_COURSE_MODULE_CONTENTID', data: { courseID, index } }
      )
      setIsLoaded(true)

      const {
        courseCapture,
        capture: moduleCapture,
        contentType,
        contentID,
        duration,
        index: moduleIndex,
        modulesTotal,
        questionsTotal,
      } = getModuleByCourseIDIndex({ courses, courseID, index })

      const durationObj: IDurationObj = getMultipliedTimeStr(
        duration,
        durationMultiplier
      )

      const contentComponentName = getContentComponentName(contentType)

      setModuleState({
        ContentComponent: COMPONENT[contentComponentName],
        contentComponentName,
        courseCapture,
        moduleCapture,
        contentID,
        moduleIndex,
        modulesTotal,
        questionsTotal,
        durationObj,
      })
    }
  }, [courses])

  const {
    ContentComponent,
    contentComponentName,
    courseCapture,
    moduleCapture,
    contentID,
    durationObj,
    moduleIndex,
    modulesTotal,
    questionsTotal,
  } = moduleState

  const { width, height } = VIDEO_RESOLUTION
  const {
    onPlayerReady,
    playVideoHandler,
    pauseVideoHandler,
    stopVideoHandler,
    isShowingPlay,
  } = getYouTubePlayerWorkHook({
    contentComponentName,
    contentID,
    width,
    height,
  })

  const contentComponentProps = {
    ReaderIframe: {
      contentID,
      durationObj: { duration: '10:30', units: 'min' },
    },
    PlayerIframe: {
      courseCapture,
      moduleCapture,
      contentID,
      playVideoHandler,
      pauseVideoHandler,
      stopVideoHandler,
      isShowingPlay,
      screenType: 'PresentAndSubscribe',
      durationObj,
      isActionButtonDisplaying: false,
      moduleIndex,
      modulesTotal,
      questionsTotal,
    },
  }

  const buttonMdMenuProps = {
    icon: 'MdMenu',
    classAdded: 'Button_MdMenu',
    action: {
      typeEvent: 'TOGGLE_SIDE_NAVIGATION',
    },
  }

  const carouselQuestionsProps = { durationObj }

  const questionScoresProps = { stopVideoHandler, routeProps: props.routeProps }

  return (
    <div className='PresentAndSubscribe'>
      {isLoaded === true ? (
        <>
          <MainFrame>
            {null}
            <ContentComponent
              {...contentComponentProps[contentComponentName]}
            />
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
