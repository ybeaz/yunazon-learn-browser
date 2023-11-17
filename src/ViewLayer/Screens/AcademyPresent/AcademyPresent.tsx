import React, {
  useState,
  useEffect,
  ReactElement,
  FunctionComponent,
} from 'react'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'

import { SideNavigation } from '../../Components/SideNavigation'
import { HeaderFrame, HeaderFramePropsType } from '../../Frames/HeaderFrame'
import { getEffectedRequests } from '../../Hooks/getEffectedRequests'
import { CarouselQuestions } from '../../Components/CarouselQuestions'
import { DICTIONARY } from '../../../Constants/dictionary.const'
import { getContentComponentName } from '../../../Shared/getContentComponentName'
import { getInitialTeachContentLoading } from '../../Hooks/getInitialTeachContentLoading'
import { getMultipliedTimeStr } from '../../../Shared/getMultipliedTimeStr'
import { getYouTubePlayerWorkHook } from '../../Hooks/getYouTubePlayerWorkHook'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { DurationObjType } from '../../../Interfaces/DurationObjType'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { LoaderBlurhash } from '../../Components/LoaderBlurhash'
import { LoaderOverlay } from '../../ComponentsLibrary/LoaderOverlay'
import { MainFrame } from '../../Frames/MainFrame'
import { PlayerIframe } from '../../Frames/PlayerIframe'
import { PlayerPanel } from '../../Components/PlayerPanel'
import { ReaderIframe, ReaderArgs } from '../../Frames/ReaderIframe'
import { VIDEO_RESOLUTION } from '../../../Constants/videoResolution.const'
import { SERVERS_MAIN } from '../../../Constants/servers.const'
import { getModuleByModuleID } from '../../../Shared/getModuleByModuleID'

const COMPONENT: Record<string, React.FunctionComponent<any>> = {
  ReaderIframe,
  PlayerIframe,
}

import {
  AcademyPresentPropsType,
  AcademyPresentPropsOutType,
  AcademyPresentComponentType,
  AcademyPresentType,
} from './AcademyPresentTypes'

/**
 * @description Component to render AcademyPresent
 * @import import { AcademyPresent, AcademyPresentPropsType, AcademyPresentPropsOutType, AcademyPresentType } 
             from '../Components/AcademyPresent/AcademyPresent'
 */
const AcademyPresentComponent: AcademyPresentComponentType = (
  props: AcademyPresentPropsType
) => {
  const params = useParams()
  const moduleID = params.moduleID || ''
  const canonicalUrl = `${SERVERS_MAIN.remote}${location.pathname}`
  const screenType = 'AcademyPresent'

  getEffectedRequests([
    { type: 'INIT_LOADING', data: { params } },
    { type: 'GET_MODULE_DATA', data: { moduleID } },
  ])
  getInitialTeachContentLoading()

  const store = useSelector((store2: RootStoreType) => store2)
  const {
    language: languageStore,
    scorm: { durationMultiplier },
    courses,
    isLoaded: { mediaLoaded },
  } = store

  const [isLoaded, setIsLoaded] = useState(false)
  const [moduleState, setModuleState] = useState({
    CONTENT_ASSIGNED_COMPONENT: PlayerIframe,
    contentComponentName: '',
    courseCapture: '',
    language: '',
    moduleCapture: '',
    moduleDescription: '',
    contentID: '',
    durationObj: { duration: '', units: '' },
    moduleIndex: 0,
    modulesTotal: 0,
    questionsTotal: 0,
  })

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

  const mediaLoadedCoursesString = JSON.stringify([mediaLoaded, courses])

  useEffect(() => {
    if (courses.length && isLoaded === false) {
      handleEvents(
        {},
        { type: 'TOGGLE_START_COURSE', data: { isStarting: false } }
      )

      handleEvents(
        {},
        {
          type: 'GET_COURSE_QUERY_PR_QN',
          data: { moduleID },
        }
      )

      const {
        courseCapture: courseCapture2,
        language: language2,
        moduleCapture: moduleCapture2,
        moduleDescription: moduleDescription2,
        contentType,
        contentID: contentID2,
        duration,
        index: moduleIndex2,
        modulesTotal: modulesTotal2,
        questionsTotal: questionsTotal2,
      } = getModuleByModuleID({ courses, moduleID })

      const durationObj2: DurationObjType = getMultipliedTimeStr(
        duration,
        durationMultiplier
      )

      const contentComponentName2 = getContentComponentName(contentType)

      setIsLoaded(true)

      setModuleState({
        CONTENT_ASSIGNED_COMPONENT: COMPONENT[contentComponentName2],
        contentComponentName: contentComponentName2,
        courseCapture: courseCapture2,
        language: language2,
        moduleCapture: moduleCapture2,
        moduleDescription: moduleDescription2,
        contentID: contentID2,
        moduleIndex: moduleIndex2,
        modulesTotal: modulesTotal2,
        questionsTotal: questionsTotal2,
        durationObj: durationObj2,
      })
    }
  }, [mediaLoadedCoursesString])

  const isVisible = mediaLoaded[contentID]

  const { width, height } = VIDEO_RESOLUTION
  const {
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

  const textTooltip = DICTIONARY['pleaseRefreshWindow'][languageStore]

  const propsOut: AcademyPresentPropsOutType = {
    headerFrameProps: {
      brandName: 'YouRails Academy',
      moto: DICTIONARY['Together_know_everything'][languageStore],
      logoPath: `${SERVERS_MAIN.remote}/images/logoYouRails.png`,
      contentComponentName: 'SearchFormSep',
      isButtonSideMenu: true,
      isLogoGroup: true,
      isButtonAddCourse: true,
      isButtonAuthUser: true,
      isSelectLanguage: true,
      isButtonThemeToggle: true,
      isSeachGroup: false,
      isButtonBack: false,
      isPageActionsGroup: false,
      isButtonsShare: false,
      isInstallMobileAppGroup: false,
    },
    mainFrameProps: {
      screenType,
    },
    contentComponentProps: {
      ReaderIframe: {
        contentID,
        isVisible,
        screenType,
      },
      PlayerIframe: {
        contentID,
        isVisible,
      },
    },
    loaderBlurhashProps: {
      isVisibleBlurHash: !isVisible,
      textTooltip,
      isTextTooltip: true,
      delay: 5000,
      contentComponentName,
    },
    playerPanelProps: {
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
    },
  }

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
          <MainFrame {...propsOut.mainFrameProps}>
            {/* header */}
            <HeaderFrame {...propsOut.headerFrameProps} />
            {/* middle-left */}
            {null}
            {/* middle-main */}
            <CONTENT_ASSIGNED_COMPONENT
              {...propsOut.contentComponentProps[contentComponentName]}
            >
              <LoaderBlurhash {...propsOut.loaderBlurhashProps} />
              <PlayerPanel {...propsOut.playerPanelProps} />
            </CONTENT_ASSIGNED_COMPONENT>
            {/* middle-right */}
            <CarouselQuestions />
            {/* footer */}
            {null}
          </MainFrame>
          <SideNavigation />
          <LoaderOverlay />
        </>
      ) : null}
    </div>
  )
}

export const AcademyPresent: AcademyPresentType = React.memo(
  AcademyPresentComponent
)

export type {
  AcademyPresentPropsType,
  AcademyPresentPropsOutType,
  AcademyPresentComponentType,
  AcademyPresentType,
}
