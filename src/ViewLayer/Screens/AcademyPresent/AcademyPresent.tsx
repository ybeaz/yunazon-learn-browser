import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate, useParams } from 'react-router-dom'

import { useflagsDebug } from '../../Hooks/useflagsDebug'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { useEffectedInitialRequests } from '../../Hooks/useEffectedInitialRequests'
import { CarouselQuestions } from '../../Components/CarouselQuestions/CarouselQuestions'
import { DICTIONARY } from '../../../Constants/dictionary.const'
import { getContentComponentName } from '../../../Shared/getContentComponentName'
import { useLoadedInitialTeachContent } from '../../Hooks/useLoadedInitialTeachContent'
import { getMultipliedTimeStr } from '../../../Shared/getMultipliedTimeStr'
import { useYouTubePlayerWork } from '../../Hooks/useYouTubePlayerWork'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { DurationObjType } from '../../../Interfaces/DurationObjType'
import { LoaderBlurhash } from '../../Components/LoaderBlurhash'
import { MainFrame } from '../../Frames/MainFrame/MainFrame'
import { PlayerIframe } from '../../Frames/PlayerIframe/PlayerIframe'
import { PlayerPanel } from '../../Components/PlayerPanel/PlayerPanel'
import { ReaderIframe } from '../../Frames/ReaderIframe/ReaderIframe'
import { VIDEO_RESOLUTION } from '../../../Constants/videoResolution.const'
import { SERVERS_MAIN } from '../../../Constants/servers.const'
import { getModuleByModuleID } from '../../../Shared/getModuleByModuleID'
import { withStoreStateSelectedYrl } from '../../ComponentsLibrary/'
import { Summary } from '../../Components/Summary/Summary'

const COMPONENT: Record<string, React.FunctionComponent<any>> = {
  ReaderIframe,
  PlayerIframe,
}

import {
  AcademyPresentComponentPropsType,
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
  props: AcademyPresentComponentPropsType
) => {
  const {
    storeStateSlice: {
      language: languageStore,
      durationMultiplier,
      moduleIDActive,
      courses,
      mediaLoaded,
      // @ts-expect-error
      preferred_username,
    },
  } = props

  const params = useParams()
  const moduleID = params.moduleID || ''
  const canonicalUrl = `${SERVERS_MAIN.remote}${location.pathname}`
  const screenType = 'AcademyPresent'

  const mediaLoadedCoursesString = JSON.stringify([mediaLoaded, courses])

  useEffectedInitialRequests([{ type: 'GET_MODULE_DATA', data: { moduleID } }])

  useLoadedInitialTeachContent()
  useflagsDebug(mediaLoadedCoursesString)

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
    summary: [],
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
    summary,
  } = moduleState

  useEffect(() => {
    if (courses.length && isLoaded === false) {
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
        summary: summary2,
      } = getModuleByModuleID({ courses, moduleID: moduleIDActive || moduleID })

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
        summary: summary2,
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
  } = useYouTubePlayerWork({
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
      isButtonSideMenuLeft: true,
      isLogoGroup: true,
      isButtonAddCourse: true,
      isButtonAuthUser: true,
      isSelectLanguage: true,
      isButtonThemeToggle: true,
      isSeachGroup: false,
      isButtonBack: false,
      isPageActionsGroup: false,
      isButtonsShare: false,
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
    summaryProps: {
      summary,
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
            <>
              <CONTENT_ASSIGNED_COMPONENT
                {...propsOut.contentComponentProps[contentComponentName]}
              >
                <LoaderBlurhash {...propsOut.loaderBlurhashProps} />
                <PlayerPanel {...propsOut.playerPanelProps} />
              </CONTENT_ASSIGNED_COMPONENT>
              {summary && summary.length ? (
                <Summary {...propsOut.summaryProps} />
              ) : null}
            </>
            {/* middle-right */}
            <CarouselQuestions />
            {/* footer */}
            {null}
          </MainFrame>
        </>
      ) : null}
    </div>
  )
}

const storeStateSliceProps: string[] = [
  'language',
  'durationMultiplier',
  'moduleIDActive',
  'courses',
  'mediaLoaded',
  'preferred_username',
]
export const AcademyPresent: AcademyPresentType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(AcademyPresentComponent)
)

export type {
  AcademyPresentPropsType,
  AcademyPresentPropsOutType,
  AcademyPresentComponentType,
  AcademyPresentType,
}
