import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import {
  withPropsYrl,
  withStoreStateSelectedYrl,
  ButtonYrl,
  ArticleStructuredYrl,
} from 'yourails_common'
import { getSizeWindow } from 'yourails_common'
import { ScreensEnumType } from 'yourails_common'
import { useflagsDebug } from '../../Hooks/useflagsDebug'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { useEffectedInitialRequests } from '../../Hooks/useEffectedInitialRequests'
import { CarouselQuestions } from '../../Components/CarouselQuestions/CarouselQuestions'
import { DICTIONARY } from 'yourails_common'
import { getContentComponentName } from 'yourails_common'
import { useLoadedInitialTeachContent } from '../../Hooks/useLoadedInitialTeachContent'
import { getMultipliedTimeStr } from 'yourails_common'
import { DurationObjType } from 'yourails_common'
import { LoaderBlurhash } from '../../Components/LoaderBlurhash'
import { MainFrame } from '../../Frames/MainFrame/MainFrame'
import { PlayerYoutubeIframe } from '../../Frames/PlayerYoutubeIframe/PlayerYoutubeIframe'
import { ReaderIframe } from '../../Frames/ReaderIframe/ReaderIframe'
import { SERVERS_MAIN } from 'yourails_common'
import { getModuleByModuleID } from 'yourails_common'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { getDurationFromYoutubeSnippet } from 'yourails_common'
import { isOnLandScape } from 'yourails_common'
import { isMobile } from 'yourails_common'
import { GenreEnumType } from 'yourails_common'
import { getRearrangedArrayByIndex } from 'yourails_common'
import {
  ContentSection,
  ContentArrayItemType,
} from '../../Components/ContentSection/ContentSection'
import { ReaderIframeType } from '../../Frames/ReaderIframe/ReaderIframe'
import { PlayerYoutubeIframeType } from '../../Frames/PlayerYoutubeIframe/PlayerYoutubeIframe'
import { TooltipTags } from '../../Components/TooltipTags/TooltipTags'

const COMPONENT: Record<string, React.FunctionComponent<any>> = {
  ReaderIframe,
  PlayerYoutubeIframe,
}

import {
  ContentComponentPropsType,
  AcademyPresentPropsM1OutType,
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
    },
  } = props

  const params = useParams()
  const counterRef = useRef(0)
  const { width: widthSizeWindow } = getSizeWindow()

  const moduleID = params.moduleID || ''
  const canonicalUrl = `${SERVERS_MAIN.remote}${decodeURIComponent(location.pathname)}`

  const screenType = ScreensEnumType['AcademyPresent']

  const mediaLoadedModulesString = JSON.stringify([mediaLoaded, modules])

  const [windowWidth, setWindowWidth] = useState(widthSizeWindow)
  const [isHeaderFrame, setIsHeaderFrame] = useState(!(isMobile() && isOnLandScape()))

  useEffectedInitialRequests([{ type: 'GET_MODULE', data: { moduleID } }], [moduleID])

  useLoadedInitialTeachContent()
  useflagsDebug(mediaLoadedModulesString)

  const [moduleState, setModuleState] = useState({
    CONTENT_ASSIGNED_COMPONENT: PlayerYoutubeIframe as PlayerYoutubeIframeType | ReaderIframeType,
    contentComponentName: '',
    capture: '',
    language: '',
    description: '',
    contentID: '',
    durationObj: { duration: '', units: '' },
    tags: [],
    index: 0,
    questionsTotal: 0,
    summary: [],
    objections: [],
    article: [],
  })

  const {
    CONTENT_ASSIGNED_COMPONENT,
    contentComponentName,
    capture,
    language,
    description,
    contentID,
    durationObj,
    tags,
    questionsTotal,
    summary,
    objections,
    article,
  } = moduleState

  useEffect(() => {
    if (modules.length) {
      const {
        capture: capture2,
        language: language2,
        description: description2,
        contentType,
        contentID: contentID2,
        duration: duration2,
        tags: tags2,
        index: index2,
        questionsTotal: questionsTotal2,
        summary: summary2,
        objections: objections2,
        article: article2,
      } = getModuleByModuleID(
        { modules, moduleID: moduleIDActive || moduleID },
        { parentFunction: 'AcademyPresentComponent' }
      )

      const durationObj = getDurationFromYoutubeSnippet(duration2)
      const { timeReadable: duration } = durationObj
      const durationObj2: DurationObjType = getMultipliedTimeStr(duration, durationMultiplier)

      const contentComponentName2 = getContentComponentName(contentType)

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
        tags: tags2,
        summary: summary2,
        objections: objections2,
        article: article2,
      })
    }
  }, [mediaLoadedModulesString])

  const isVisible = mediaLoaded[moduleIDActive || moduleID] || false

  useEffect(() => {
    const reportWindowSize = () => {
      setWindowWidth(window.innerWidth)

      if (isMobile())
        if (isOnLandScape()) setIsHeaderFrame(false)
        else setIsHeaderFrame(true)
    }
    /* Trigger this function on resize */
    window.addEventListener('resize', reportWindowSize)

    /* Cleanup for componentWillUnmount */
    return () => window.removeEventListener('resize', reportWindowSize)
  }, [])

  const textTooltip = DICTIONARY['pleaseRefreshWindow'][languageSite]
  const contentComponentProps: ContentComponentPropsType = {
    ReaderIframe: {
      moduleID,
      contentID,
      isVisible,
      isIframe: true,
      screenType,
    },
    PlayerYoutubeIframe: {
      contentComponentName,
      moduleID,
      contentID,
      isVisible,
      isIframe: true,
      capture,
      durationObj,
      screenType,
      questionsTotal,
    },
  }

  const propsM1Out: AcademyPresentPropsM1OutType = {
    CONTENT_ASSIGNED_COMPONENT,
    contentAssignedComponentProps: contentComponentProps[contentComponentName],
    loaderBlurhashProps: {
      isVisibleBlurHash: !isVisible,
      textTooltip,
      isTextTooltip: true,
      delay: 500,
      contentComponentName,
    },
    tooltipTagsProps: {
      tags,
      widthSizeWindow,
    },
    articleProps: {
      classAdded: undefined,
      scriptID: undefined,
      genre: GenreEnumType['article'],
      // @ts-expect-error
      module: moduleState,
      organization: undefined,
      creator: undefined,
      isSeo: false,
      isNoSeoIndexing: false,
    },
    summaryProps: {
      classAdded: undefined,
      scriptID: undefined,
      genre: GenreEnumType['summary'],
      // @ts-expect-error
      module: { ...moduleState, capture: 'Summary' },
      organization: undefined,
      creator: undefined,
      isSeo: false,
      isNoSeoIndexing: true,
    },
    objectionsProps: {
      classAdded: undefined,
      scriptID: undefined,
      genre: GenreEnumType['objections'],
      // @ts-expect-error
      module: { ...moduleState, capture: 'Objections' },
      organization: undefined,
      creator: undefined,
      isSeo: false,
      isNoSeoIndexing: true,
    },
  }

  const contentPlateTooltipContentTags = (
    <div className='_contentPlateTooltipContentTags'>
      {!!tags?.length && tags.map((tag: string) => <div key={`tag-${tag}`}>{tag}</div>)}
    </div>
  )

  const contentArrayIn: ContentArrayItemType[] = [
    {
      typeIn: 'player',
      component: (
        <CONTENT_ASSIGNED_COMPONENT {...propsM1Out.contentAssignedComponentProps}>
          <TooltipTags {...propsM1Out.tooltipTagsProps} />
          <LoaderBlurhash {...propsM1Out.loaderBlurhashProps} />
          <></>
        </CONTENT_ASSIGNED_COMPONENT>
      ),
    },
    {
      typeIn: 'summary',
      component:
        summary && summary.length ? <ArticleStructuredYrl {...propsM1Out.summaryProps} /> : null,
    },
    {
      typeIn: 'article',
      component:
        article && article.length ? <ArticleStructuredYrl {...propsM1Out.articleProps} /> : null,
    },
    {
      typeIn: 'objections',
      component:
        objections && objections.length ? (
          <ArticleStructuredYrl {...propsM1Out.objectionsProps} />
        ) : null,
    },
  ]

  const [contentArray, setContentArray] = useState<any[]>([])

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
    contentSectionProps: {
      contentArray: (counterRef.current === 0 ? contentArrayIn : contentArray).map(
        (item: ContentArrayItemType, index: number) =>
          index === 0 && isMobile()
            ? {
                ...item,
                component: (
                  <div>
                    {item.component as React.ReactElement<any>}
                    <CarouselQuestions />
                  </div>
                ),
              }
            : item
      ),
    },
    buttonPlayerUpProps: {
      icon: '',
      classAdded: 'Button_playerUp',
      captureLeft: DICTIONARY.media[languageSite],
      handleEvents: () => {
        const contentArrayNext = getRearrangedArrayByIndex({
          arrayIn: contentArrayIn,
          typeIn: 'player',
        })
        counterRef.current = 1
        setContentArray(contentArrayNext)
      },
      isDisplaying: true,
    },
    buttonSummaryUpProps: {
      icon: '',
      classAdded: 'Button_summaryUp',
      captureLeft: DICTIONARY.summary[languageSite],
      handleEvents: () => {
        const contentArrayNext = getRearrangedArrayByIndex({
          arrayIn: contentArrayIn,
          typeIn: 'summary',
        })
        counterRef.current = 1
        setContentArray(contentArrayNext)
      },
      isDisplaying: summary && summary.length ? true : false,
    },
    buttonArticleUpProps: {
      icon: '',
      classAdded: 'Button_articleUp',
      captureLeft: DICTIONARY.article[languageSite],
      handleEvents: () => {
        const contentArrayNext = getRearrangedArrayByIndex({
          arrayIn: contentArrayIn,
          typeIn: 'article',
        })
        counterRef.current = 1
        setContentArray(contentArrayNext)
      },
      isDisplaying: article && article.length ? true : false,
    },
    buttonObjectionsUpProps: {
      icon: '',
      captureLeft: DICTIONARY.objections[languageSite],
      classAdded: 'Button_objectionsUp',
      handleEvents: () => {
        const contentArrayNext = getRearrangedArrayByIndex({
          arrayIn: contentArrayIn,
          typeIn: 'objections',
        })
        counterRef.current = 1
        setContentArray(contentArrayNext)
      },
      isDisplaying: objections && objections.length ? true : false,
    },
  }

  return (
    <div className='AcademyPresent' id={`moduleID-${moduleID}`}>
      {modules.length ? (
        <>
          <Helmet>
            <html lang={language} />
            <meta charSet='utf-8' />
            <meta name='viewport' content='width=device-width,initial-scale=1' />
            <meta name='google' content='notranslate' />
            <title>{capture}</title>
            <link rel='canonical' href={canonicalUrl} />
            <meta name='description' content={description} />
          </Helmet>
          <MainFrame {...propsOut.mainFrameProps}>
            {/* header */}
            {isHeaderFrame ? <HeaderFrame {...propsOut.headerFrameProps} /> : null}
            {/* middle-left */}
            {null}
            {/* middle-main */}
            <div className='_middleWrapper'>
              <div className='_buttonsWrapper'>
                <ButtonYrl {...propsOut.buttonPlayerUpProps} />
                <ButtonYrl {...propsOut.buttonSummaryUpProps} />
                <ButtonYrl {...propsOut.buttonArticleUpProps} />
                <ButtonYrl {...propsOut.buttonObjectionsUpProps} />
              </div>
              {contentComponentName && <ContentSection {...propsOut.contentSectionProps} />}
            </div>
            {/* middle-right */}
            {!isMobile() && <CarouselQuestions />}
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
  'modules',
  'mediaLoaded',
]

export const AcademyPresent: AcademyPresentType = withPropsYrl({ handleEvents: handleEventsIn })(
  withStoreStateSelectedYrl(storeStateSliceProps, React.memo(AcademyPresentComponent))
)

export type {
  AcademyPresentPropsType,
  AcademyPresentPropsOutType,
  AcademyPresentComponentType,
  AcademyPresentType,
}
