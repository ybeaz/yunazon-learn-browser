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
import { TextStructuredColumns } from '../../Components/TextStructuredColumns/TextStructuredColumns'
import { getParsedUrlQuery } from '../../../Shared/getParsedUrlQuery'
import { getDurationFromYoutubeSnippet } from '../../../Shared/getDurationFromYoutubeSnippet'

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
      language: languageSite,
      durationMultiplier,
      moduleIDActive,
      modules,
      mediaLoaded,
      isSummary: isSummaryStore,
      isObjections,
    },
  } = props

  const params = useParams()
  const moduleID = params.moduleID || ''
  const canonicalUrl = `${SERVERS_MAIN.remote}${decodeURIComponent(location.pathname)}`
  const screenType = 'AcademyPresent'

  const mediaLoadedModulesString = JSON.stringify([mediaLoaded, modules])

  useEffectedInitialRequests([{ type: 'GET_MODULE', data: { moduleID } }])

  useLoadedInitialTeachContent()
  useflagsDebug(mediaLoadedModulesString)

  /* Hide summary by url settings */
  let isSummaryButton = true
  let isSummary = isSummaryStore
  const { isSummary: isSummaryUrlQuery } = getParsedUrlQuery()
  if (isSummaryUrlQuery === 'false') {
    isSummaryButton = false
    isSummary = false
  }

  const [isLoaded, setIsLoaded] = useState(false)
  const [moduleState, setModuleState] = useState({
    CONTENT_ASSIGNED_COMPONENT: PlayerIframe,
    contentComponentName: '',
    capture: '',
    language: '',
    description: '',
    contentID: '',
    durationObj: { duration: '', units: '' },
    index: 0,
    questionsTotal: 0,
    summary: [],
    objections: [],
  })

  const {
    CONTENT_ASSIGNED_COMPONENT,
    contentComponentName,
    capture,
    language,
    description,
    contentID,
    durationObj,
    questionsTotal,
    summary,
    objections,
  } = moduleState

  useEffect(() => {
    if (modules.length && isLoaded === false) {
      const {
        capture: capture2,
        language: language2,
        description: description2,
        contentType,
        contentID: contentID2,
        duration: duration2,
        index: index2,
        questionsTotal: questionsTotal2,
        summary: summary2,
        objections: objections2,
      } = getModuleByModuleID(
        { modules, moduleID: moduleIDActive || moduleID },
        { parentFunction: 'AcademyPresentComponent' }
      )

      const durationObj = getDurationFromYoutubeSnippet(duration2)
      const { timeReadable: duration } = durationObj
      const durationObj2: DurationObjType = getMultipliedTimeStr(duration, durationMultiplier)

      const contentComponentName2 = getContentComponentName(contentType)

      setIsLoaded(true)

      setModuleState({
        CONTENT_ASSIGNED_COMPONENT: COMPONENT[contentComponentName2],
        contentComponentName: contentComponentName2,
        capture: capture2,
        language: language2,
        description: description2,
        contentID: contentID2,
        index: index2,
        questionsTotal: questionsTotal2,
        durationObj: durationObj2,
        summary: summary2,
        objections: objections2,
      })
    }
  }, [mediaLoadedModulesString])

  const isVisible = mediaLoaded[moduleID] || false

  const { width, height } = VIDEO_RESOLUTION
  const { playVideoHandler, pauseVideoHandler, stopVideoHandler, isShowingPlay } =
    useYouTubePlayerWork({
      contentComponentName,
      moduleID,
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

  const textTooltip = DICTIONARY['pleaseRefreshWindow'][languageSite]

  const propsOut: AcademyPresentPropsOutType = {
    headerFrameProps: {
      brandName: 'YouRails Academy',
      moto: DICTIONARY['Watch_Videos_With_a_Purpose'][languageSite],
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
        moduleID,
        contentID,
        isVisible,
        isIframe: true,
        screenType,
      },
      PlayerIframe: {
        contentID,
        isVisible,
        isIframe: true,
      },
    },
    loaderBlurhashProps: {
      isVisibleBlurHash: !isVisible,
      textTooltip,
      isTextTooltip: true,
      delay: 500,
      contentComponentName,
    },
    playerPanelProps: {
      capture,
      durationObj,
      screenType,
      isShowingPlay,
      buttonPlayProps,
      buttonPauseProps,
      buttonStopProps,
      isActionButtonDisplaying: false,
      questionsTotal,
    },
    textStructuredColumnsProps: {
      summary,
      objections,
      isSummaryButton,
      isSummary,
      isObjectionsButton: true,
      isObjections,
      language: languageSite,
      titleSummary: 'Summary',
      titleObjections: 'Objections',
    },
  }

  return (
    <div className='AcademyPresent' id={`moduleID-${moduleID}`}>
      {isLoaded === true ? (
        <>
          <Helmet>
            <html lang={language} />
            <meta charSet='utf-8' />
            <meta name='viewport' content='width=device-width,initial-scale=1' />
            <title>{capture}</title>
            <link rel='canonical' href={canonicalUrl} />
            <meta name='description' content={description} />
          </Helmet>
          <MainFrame {...propsOut.mainFrameProps}>
            {/* header */}
            <HeaderFrame {...propsOut.headerFrameProps} />
            {/* middle-left */}
            {null}
            {/* middle-main */}
            <div className='AcademyPresent__middle-main'>
              <CONTENT_ASSIGNED_COMPONENT {...propsOut.contentComponentProps[contentComponentName]}>
                <LoaderBlurhash {...propsOut.loaderBlurhashProps} />
                <PlayerPanel {...propsOut.playerPanelProps} />
              </CONTENT_ASSIGNED_COMPONENT>
            </div>
            {/* middle-right */}
            <CarouselQuestions />
            {/* footer */}
            <TextStructuredColumns {...propsOut.textStructuredColumnsProps} />
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
  'modules',
  'mediaLoaded',
  'isSummary',
  'isObjections',
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
