import React, { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'

import { ScreensEnumType } from 'yourails_common'
import { DICTIONARY } from 'yourails_common'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { FooterFrame } from '../../Frames/FooterFrame/FooterFrame'
import { MainFrame } from '../../Frames/MainFrame/MainFrame'
import { SERVERS_MAIN } from 'yourails_common'
import { SITE_META_DATA } from 'yourails_common'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { MyDocumentsBody } from '../../Components/'
import { PAGINATION_OFFSET } from 'yourails_common'
import { getTagLine } from 'yourails_common'
import { withPropsYrl, withStoreStateSelectedYrl } from 'yourails_common'
import { useEffectedInitialRequests } from '../../Hooks/useEffectedInitialRequests'
import { getClasses } from 'yourails_common'
import { getParsedUrlQueryBrowserApi } from 'yourails_common'
import { getNestedProp } from 'yourails_common'
import {
  MyDocumentsComponentPropsType,
  MyDocumentsPropsType,
  MyDocumentsPropsOutType,
  MyDocumentsComponentType,
  MyDocumentsType,
} from './MyDocumentsTypes'

/**
 * @description Component to render MyDocuments
 * @import import { MyDocuments, MyDocumentsPropsType, MyDocumentsPropsOutType, MyDocumentsType } 
             from '../Components/MyDocuments/MyDocuments'
 */
const MyDocumentsComponent: MyDocumentsComponentType = (props: MyDocumentsComponentPropsType) => {
  const {
    classAdded,
    storeStateSlice: { language, sub, documents, tagsCloud, pageDocuments, pageTags },
    handleEvents,
  } = props

  const screenType = ScreensEnumType['MyDocuments']
  const { titleSite, descriptionSite, canonicalUrlSite, langSite } = SITE_META_DATA
  const canonicalUrl = `${SERVERS_MAIN.remote}${decodeURIComponent(location.pathname)}`
  const firstRender = useRef(true)

  const query = getParsedUrlQueryBrowserApi()
  const documentsSearchQuery = getNestedProp({
    entity: query,
    path: 'documentsSearch',
    resDefault: '',
  })
  const tagsSearchQuery = getNestedProp({ entity: query, path: 'tagsSearch', resDefault: '' })

  console.info('MyDocuments [49]', { tagsSearchQuery, documentsSearchQuery })

  useEffectedInitialRequests([{ type: 'SET_SCREEN_ACTIVE', data: { screenActive: screenType } }])

  useEffect(() => {
    if (firstRender) {
      handleEvents(
        {},
        {
          type: 'ONCHANGE_INPUT_SEARCH',
          data: { storeFormProp: 'documentsSearch', value: '' },
        }
      )
    }
    if (sub) {
      handleEvents({}, { type: 'SET_PARAMS_FROM_QUERY_URL_TO_STATE' })
      handleEvents({}, { typeEvent: 'GET_DOCUMENTS' })
      handleEvents(
        {},
        {
          type: 'GET_TAGS_CONNECTION',
          data: { offset: 1000, minCount: 3, minCompleted: 3, isLoaderOverlay: true },
        }
      )
    }
  }, [JSON.stringify({ tagsSearchQuery, documentsSearchQuery, sub })])

  const propsOut: MyDocumentsPropsOutType = {
    headerFrameProps: {
      contentComponentName: 'SearchFormSep',
      isButtonSideMenuLeft: true,
      isLogoGroup: true,
      isButtonAddCourse: true,
      isButtonAuthUser: true,
      isSelectLanguage: true,
      isButtonThemeToggle: true,
      isSeachGroup: true,
      isButtonBack: false,
      isPageActionsGroup: false,
      isButtonsShare: false,
    },
    mainFrameProps: {
      screenType: 'MyDocuments',
    },
    myMyDocumentsBodyProps: {
      language,
      documents,
      tagsCloud,
      pageDocuments,
      pageTags,
    },
  }

  return (
    <div className={getClasses('MyDocuments', classAdded)}>
      <Helmet>
        <html lang={langSite} />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <meta name='google' content='notranslate' />
        <title>{titleSite}</title>
        <link rel='canonical' href={canonicalUrl} />
        <meta name='description' content={descriptionSite} />
      </Helmet>
      <MainFrame {...propsOut.mainFrameProps}>
        {/* header */}
        <HeaderFrame {...propsOut.headerFrameProps} />
        {/* middle-left */}
        {null}
        {/* middle-main */}
        <MyDocumentsBody {...propsOut.myMyDocumentsBodyProps} />
        {/* <ProfileBody {...propsOut.profileBodyProps} /> */}
        {/* middle-right */}
        {null}
        {/* footer */}
        {null}
      </MainFrame>
    </div>
  )
}

const storeStateSliceProps: string[] = [
  'language',
  'sub',
  'documents',
  'tagsCloud',
  'pageDocuments',
  'pageTags',
]
const MyDocuments = withPropsYrl({ handleEvents: handleEventsIn })(
  withStoreStateSelectedYrl(storeStateSliceProps, React.memo(MyDocumentsComponent))
)

export { MyDocuments as default }

export type {
  MyDocumentsPropsType,
  MyDocumentsPropsOutType,
  MyDocumentsComponentType,
  MyDocumentsType,
}
