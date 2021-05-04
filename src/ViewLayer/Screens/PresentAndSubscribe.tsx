import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import { getContentComponentName } from '../../Shared/getContentComponentName'
import { Reader } from '../Components/Reader'
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

const COMPONENT = {
  Reader,
  Player,
}

export const PresentAndSubscribe: React.FunctionComponent<any> = (
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
    ContentComponent: null,
    contentComponentName: '',
    courseCapture: '',
    moduleCapture: '',
    duration: '',
    units: '',
    muduleIndex: 0,
    modulesTotal: 0,
    questionsTotal: 0,
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
        contentType,
        duration,
        index: muduleIndex,
        modulesTotal,
        questionsTotal,
      } = getModuleByContentID(courses, 'contentID', contentID)

      const durationObj: IDurationObj = getMultipliedTimeStr(
        duration,
        durationMultiplier
      )

      const contentComponentName = getContentComponentName(contentType)

      // I stopped here
      // const contentComponentName = 'Reader' // getContentComponentName(contentType)

      setModuleState({
        ContentComponent: COMPONENT[contentComponentName],
        contentComponentName,
        courseCapture,
        moduleCapture,
        muduleIndex,
        modulesTotal,
        questionsTotal,
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
    contentID,
    width,
    height,
  })

  const {
    ContentComponent,
    contentComponentName,
    courseCapture,
    moduleCapture,
    duration,
    units,
    muduleIndex,
    modulesTotal,
    questionsTotal,
  } = moduleState

  const contentComponentProps = {
    Reader: {
      contentID: 'http://arbir.ru/articles/a_3360.htm?1',
      durationObj: { duration: '10:30', units: 'min' },
    },
    Player: {
      courseCapture,
      moduleCapture,
      contentID,
      playVideoHandler,
      pauseVideoHandler,
      stopVideoHandler,
      isShowingPlay,
      screenType: 'PresentAndSubscribe',
      durationObj: moduleState,
      isActionButtonDisplaying: false,
      muduleIndex,
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

  const carouselQuestionsProps = {
    durationObj: { duration, units },
  }

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
