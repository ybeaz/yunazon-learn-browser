import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

import { getEffectedRequests } from '../Hooks/getEffectedRequests'
import { CarouselQuestions } from '../Components/CarouselQuestions'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { getContentComponentName } from '../../Shared/getContentComponentName'
import { getInitialTeachContentLoading } from '../Hooks/getInitialTeachContentLoading'
import { getModuleByCourseIDIndex } from '../../Shared/getModuleByCourseIDIndex'
import { getMultipliedTimeStr } from '../../Shared/getMultipliedTimeStr'
import { getYouTubePlayerWorkHook } from '../Hooks/getYouTubePlayerWorkHook'
import { handleEvents } from '../Hooks/handleEvents'
import { IDurationObj } from '../../Interfaces/IDurationObj'
import { IRootStore } from '../../Interfaces/IRootStore'
import { IRouterScreenProps } from '../../Interfaces/IRouterScreenProps'
import { LoaderBlurhash } from '../Components/LoaderBlurhash'
import { LoaderOverlay } from '../Components/LoaderOverlay'
import { MainFrame } from '../Frames/MainFrame'
import { PlayerIframe } from '../Frames/PlayerIframe'
import { PlayerPanel } from '../Components/PlayerPanel'
import { ReaderIframe } from '../Frames/ReaderIframe'
import { VIDEO_RESOLUTION } from '../../Constants/videoResolution.const'

const COMPONENT = {
  ReaderIframe,
  PlayerIframe,
}

export const AcademyPresent: React.FunctionComponent<any> = (
  props: IRouterScreenProps = { routeProps: {}, rootPath: '' }
) => {
  const courseID = props?.routeProps.match.params.courseID

  const canonicalUrl = `https://yourails.com${props?.routeProps.location.pathname}`
  const screenType = 'AcademyPresent'

  getEffectedRequests(['GET_GLOBAL_VARS', 'GET_CONTENT_DATA'])
  getInitialTeachContentLoading()

  const store = useSelector((store2: IRootStore) => store2)
  const {
    language: languageStore,
    globalVars: { durationMultiplier },
    courses,
    componentsState: { isLoaderOverlayVisible },
    isLoaded: { mediaLoading },
  } = store

  const [isLoaded, setIsLoaded] = useState(false)
  const [moduleState, setModuleState] = useState({
    CONTENT_ASSIGNED_COMPONENT: null,
    contentComponentName: '',
    courseCapture: '',
    language: '',
    moduleCapture: '',
    moduleDescription: '',
    contentID: '',
    durationObj: {},
    moduleIndex: 0,
    modulesTotal: 0,
    questionsTotal: 0,
  })

  useEffect(() => {
    if (courses.length && isLoaded === false) {
      handleEvents(
        {},
        { type: 'TOGGLE_START_COURSE', data: { isStarting: false } }
      )

      const index = 0

      handleEvents(
        {},
        { type: 'SELECT_COURSE_MODULE_CONTENTID', data: { courseID, index } }
      )

      handleEvents(
        {},
        {
          type: 'GET_COURSE_QUERY_PR_QN',
          data: { courseID, index },
        }
      )

      setIsLoaded(true)

      const {
        courseCapture,
        language,
        moduleCapture,
        moduleDescription,
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
        CONTENT_ASSIGNED_COMPONENT: COMPONENT[contentComponentName],
        contentComponentName,
        courseCapture,
        language,
        moduleCapture,
        moduleDescription,
        contentID,
        moduleIndex,
        modulesTotal,
        questionsTotal,
        durationObj,
      })
    }
  }, [mediaLoading, courses])

  const {
    CONTENT_ASSIGNED_COMPONENT,
    contentComponentName,
    courseCapture,
    language,
    moduleCapture,
    moduleDescription,
    contentID,
    durationObj,
    moduleIndex,
    modulesTotal,
    questionsTotal,
  } = moduleState

  const isVisible = mediaLoading[contentID]

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

  const mainFrameProps = { contentComponentName }

  const contentComponentProps = {
    ReaderIframe: {
      contentID,
      isVisible,
      screenType,
    },
    PlayerIframe: {
      contentID,
      isVisible,
    },
  }

  const buttonPlayProps = {
    icon: 'MdPlayArrow',
    classAdded: 'Button_MdPlayArrow',
    handleEvents: playVideoHandler,
    action: {},
  }
  const buttonPauseProps = {
    icon: 'MdPause',
    classAdded: 'Button_MdPause',
    handleEvents: pauseVideoHandler,
    action: {},
  }
  const buttonStopProps = {
    icon: 'MdRemoveCircle',
    classAdded: 'Button_MdRemoveCircle',
    handleEvents: stopVideoHandler,
    action: {},
  }

  const playerPanelProps = {
    courseCapture,
    moduleCapture,
    durationObj,
    screenType,
    isShowingPlay,
    buttonPlayProps,
    buttonPauseProps,
    buttonStopProps,
    isActionButtonDisplaying: false,
    moduleIndex,
    modulesTotal,
    questionsTotal,
  }

  const textTooltip = DICTIONARY['pleaseRefreshWindow'][languageStore]

  const loaderBlurhashProps = {
    isVisibleBlurHash: !isVisible,
    textTooltip,
    isTextTooltip: true,
    delay: 5000,
    contentComponentName,
  }
  const carouselQuestionsProps = { durationObj }

  return (
    <div className='AcademyPresent'>
      {isLoaded === true ? (
        <>
          <Helmet>
            <html lang={language} />
            <meta charSet='utf-8' />
            <title>{moduleCapture}</title>
            <link rel='canonical' href={canonicalUrl} />
            <meta name='description' content={moduleDescription} />
          </Helmet>
          <MainFrame {...mainFrameProps}>
            {null}
            <CONTENT_ASSIGNED_COMPONENT
              {...contentComponentProps[contentComponentName]}
            >
              <LoaderBlurhash {...loaderBlurhashProps} />
              <PlayerPanel {...playerPanelProps} />
            </CONTENT_ASSIGNED_COMPONENT>
            <CarouselQuestions {...carouselQuestionsProps} />
          </MainFrame>
          <LoaderOverlay isLoaderOverlayVisible={isLoaderOverlayVisible} />
        </>
      ) : null}
    </div>
  )
}
