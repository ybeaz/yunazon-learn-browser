import React, { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'

import { ScreensEnumType } from '../../../Interfaces/ScreensEnumType'
import { DICTIONARY } from '../../../Constants/dictionary.const'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { FooterFrame } from '../../Frames/FooterFrame/FooterFrame'
import { MainFrame } from '../../Frames/MainFrame/MainFrame'
import { SERVERS_MAIN } from '../../../Constants/servers.const'
import { SITE_META_DATA } from '../../../Constants/siteMetaData.const'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { MyDocumentsBody } from '../../Components/'
import { PAGINATION_OFFSET } from '../../../Constants/pagination.const'
import { PaginationNameEnumType } from '../../../Interfaces/RootStoreType'
import { withPropsYrl, withStoreStateSelectedYrl } from '../../ComponentsLibrary/'
import { useEffectedInitialRequests } from '../../Hooks/useEffectedInitialRequests'
import { getClasses, getParsedUrlQueryBrowserApi } from '../../../Shared/'
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
    storeStateSlice: { language, sub, documents },
    handleEvents,
  } = props

  const screenType = ScreensEnumType['MyDocuments']
  const { titleSite, descriptionSite, canonicalUrlSite, langSite } = SITE_META_DATA
  const canonicalUrl = `${SERVERS_MAIN.remote}${decodeURIComponent(location.pathname)}`
  const firstRender = useRef(true)

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
      handleEvents({}, { typeEvent: 'GET_DOCUMENTS' })
      handleEvents({}, { type: 'GET_TAGS_CONNECTION', data: { isLoaderOverlay: true } })
    }
  }, [sub])

  const propsOut: MyDocumentsPropsOutType = {
    headerFrameProps: {
      brandName: 'YouRails Academy',
      moto: DICTIONARY['Watch_Videos_With_a_Purpose'][language],
      logoPath: `${SERVERS_MAIN.remote}/images/logoYouRails.png`,
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
      documents,
      language,
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
        <div>
          <MyDocumentsBody {...propsOut.myMyDocumentsBodyProps} />
        </div>
        {/* <ProfileBody {...propsOut.profileBodyProps} /> */}
        {/* middle-right */}
        {null}
        {/* footer */}
        {null}
      </MainFrame>
    </div>
  )
}

const storeStateSliceProps: string[] = ['language', 'sub', 'documents']
export const MyDocuments = withPropsYrl({ handleEvents: handleEventsIn })(
  withStoreStateSelectedYrl(storeStateSliceProps, React.memo(MyDocumentsComponent))
)

export type {
  MyDocumentsPropsType,
  MyDocumentsPropsOutType,
  MyDocumentsComponentType,
  MyDocumentsType,
}
