import React, { useEffect, ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'

import { ScreensEnumType } from 'yourails_common'
import { DICTIONARY } from 'yourails_common'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { useEffectedInitialRequests } from '../../Hooks/useEffectedInitialRequests'
import { useLoadedInitialTeachContent } from '../../Hooks/useLoadedInitialTeachContent'
import { MainFrame } from '../../Frames/MainFrame/MainFrame'
import { SITE_META_DATA } from 'yourails_common'
import { PAGINATION_OFFSET } from 'yourails_common'
import { SERVERS_MAIN } from 'yourails_common'
import { withStoreStateSelectedYrl, withPropsYrl } from 'yourails_common'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { ModulesBody } from '../../Components/ModulesBody/ModulesBody'
import { PaginationNameEnumType } from 'yourails_common'
import { getTagLine } from 'yourails_common'
import {
  ModulesPresentPropsType,
  ModulesPresentPropsOutType,
  ModulesPresentComponentType,
  ModulesPresentType,
} from './ModulesPresentTypes'

/**
 * @description Component to render ModulesPresent
 * @import import { ModulesPresent, ModulesPresentPropsType, ModulesPresentPropsOutType, ModulesPresentType } 
             from '../Components/ModulesPresent/ModulesPresent'
 */
const ModulesPresentComponent: ModulesPresentComponentType = (props: ModulesPresentPropsType) => {
  const {
    storeStateSlice: { language },
    handleEvents,
  } = props

  const screenType = ScreensEnumType['ModulesPresent']
  const { titleSite, descriptionSite, canonicalUrlSite, langSite } = SITE_META_DATA
  const canonicalUrl = `${SERVERS_MAIN.remote}${decodeURIComponent(location.pathname)}`

  const pageModulesOffset = PAGINATION_OFFSET['pageModules']
  const pageTagsOffset = PAGINATION_OFFSET['pageTags']

  useEffectedInitialRequests([
    { type: 'SET_SCREEN_ACTIVE', data: { screenActive: screenType } },
    {
      type: 'SET_PAGINATION_OFFSET',
      data: { paginationName: PaginationNameEnumType['pageModules'], offset: pageModulesOffset },
    },
    {
      type: 'SET_PAGINATION_OFFSET',
      data: { paginationName: PaginationNameEnumType['pageTags'], offset: pageTagsOffset },
    },
    { type: 'GET_MODULES_CONNECTION', data: { isLoaderOverlay: true } },
  ])
  useLoadedInitialTeachContent({ isSkipping: false })

  const propsOut: ModulesPresentPropsOutType = {
    headerFrameProps: {
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
    modulesBodyProps: {
      headline: DICTIONARY['See_all'][language],
    },
  }

  return (
    <div className='ModulesPresent'>
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
        <ModulesBody {...propsOut.modulesBodyProps} />
        {/* middle-right */}
        {null}
        {/* footer */}
        {null}
      </MainFrame>
    </div>
  )
}

const storeStateSliceProps: string[] = ['language']
const ModulesPresent: ModulesPresentType = withPropsYrl({
  handleEvents: handleEventsIn,
})(withStoreStateSelectedYrl(storeStateSliceProps, React.memo(ModulesPresentComponent)))

export { ModulesPresent as default }

export type {
  ModulesPresentPropsType,
  ModulesPresentPropsOutType,
  ModulesPresentComponentType,
  ModulesPresentType,
}
