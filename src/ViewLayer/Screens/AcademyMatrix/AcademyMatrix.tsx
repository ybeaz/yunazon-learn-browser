import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import { ScreensEnumType } from 'yourails_common'
import { DICTIONARY } from 'yourails_common'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { useEffectedInitialRequests } from '../../Hooks/useEffectedInitialRequests'
import { useLoadedInitialTeachContent } from '../../Hooks/useLoadedInitialTeachContent'
import { MainFrame } from '../../Frames/MainFrame/MainFrame'
import { SITE_META_DATA } from 'yourails_common'
import { SERVERS_MAIN } from 'yourails_common'
import { withStoreStateSelectedYrl, withPropsYrl } from 'yourails_common'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { AcademyMatrixBody } from '../../Components/AcademyMatrixBody/AcademyMatrixBody'
import { getTagLine } from 'yourails_common'
import {
  AcademyMatrixPropsType,
  AcademyMatrixPropsOutType,
  AcademyMatrixComponentType,
  AcademyMatrixType,
} from './AcademyMatrixTypes'

/**
 * @description Component to render AcademyMatrix
 * @import import { AcademyMatrix, AcademyMatrixPropsType, AcademyMatrixPropsOutType, AcademyMatrixType } 
             from '../Components/AcademyMatrix/AcademyMatrix'
 */
const AcademyMatrixComponent: AcademyMatrixComponentType = (props: AcademyMatrixPropsType) => {
  const {
    storeStateSlice: { language },
  } = props

  const screenType = ScreensEnumType['AcademyMatrix']
  const { titleSite, descriptionSite, canonicalUrlSite, langSite } = SITE_META_DATA
  const canonicalUrl = `${SERVERS_MAIN.remote}${decodeURIComponent(location.pathname)}`

  useEffectedInitialRequests(
    [
      { type: 'SET_SCREEN_ACTIVE', data: { screenActive: screenType } },
      { type: 'SET_PARAMS_FROM_QUERY_URL_TO_STATE' },
      { type: 'GET_TAGS_CONNECTION' },
      { type: 'GET_MODULES_CONNECTION' },
    ],
    []
    /* This provides consistentgo back experience, but with flickering/ twinkle/ blinking
    [JSON.stringify({ allParams, 'location.search': location.search })] */
  )

  useLoadedInitialTeachContent({ isSkipping: false })

  const propsOut: AcademyMatrixPropsOutType = {
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
      screenType,
    },
  }

  return (
    <div className='AcademyMatrix'>
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
        <AcademyMatrixBody />
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
  'queryUrl',
  'tagsPick',
  'componentsState',
  'urlParamsQuery',
]
const AcademyMatrix: AcademyMatrixType = withPropsYrl({
  handleEvents: handleEventsIn,
})(withStoreStateSelectedYrl(storeStateSliceProps, React.memo(AcademyMatrixComponent)))

export { AcademyMatrix as default }

export type {
  AcademyMatrixPropsType,
  AcademyMatrixPropsOutType,
  AcademyMatrixComponentType,
  AcademyMatrixType,
}
