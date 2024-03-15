import React, { useEffect, ReactElement } from 'react'
import { Helmet } from 'react-helmet'

import { ModuleType } from '../../../@types/GraphqlTypes'
import { DICTIONARY } from '../../../Constants/dictionary.const'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { useEffectedInitialRequests } from '../../Hooks/useEffectedInitialRequests'
import { useLoadedInitialTeachContent } from '../../Hooks/useLoadedInitialTeachContent'
import { ContentPlate, ContentPlatePropsType } from '../../Components/ContentPlate/ContentPlate'
import { getContentComponentName } from '../../../Shared/getContentComponentName'
import { getMultipliedTimeStr } from '../../../Shared/getMultipliedTimeStr'
import { DurationObjType, PaginationNameEnumType } from '../../../Interfaces/'
import { MainFrame } from '../../Frames/MainFrame/MainFrame'
import { SITE_META_DATA } from '../../../Constants/siteMetaData.const'
import { SERVERS_MAIN } from '../../../Constants/servers.const'
import { PaginationNavigation } from '../../Components/PaginationNavigation/PaginationNavigation'
import { withStoreStateSelectedYrl, withPropsYrl } from '../../ComponentsLibrary/'
import { getLocalStorageReadKeyObj } from '../../../Shared/getLocalStorageReadKeyObj'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'

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
    storeStateSlice: { language, durationMultiplier, modules, isLoadedGlobalVars },
    handleEvents,
  } = props

  useEffect(() => {
    handleEvents({}, { type: 'SET_SCREEN_ACTIVE', data: { screenActive: 'AcademyMatrix' } })
  }, [])

  const redirectAuthFrom = getLocalStorageReadKeyObj('redirectAuthFrom')

  let actionsToMount: any[] = []
  if (!redirectAuthFrom) actionsToMount = [{ type: 'GET_MATRIX_DATA' }]

  useEffectedInitialRequests([{ type: 'GET_MATRIX_DATA' }])
  useLoadedInitialTeachContent({ isSkipping: false })

  const screenType = 'AcademyMatrix'

  const { titleSite, descriptionSite, canonicalUrlSite, langSite } = SITE_META_DATA

  const getPlateMatix: Function = (modules2: ModuleType[]): ReactElement => {
    const plates = modules2.map((module: ModuleType) => {
      const { moduleID, capture, contentType, contentID, duration } = module

      const contentComponentName = getContentComponentName(contentType)

      const durationObj: DurationObjType = getMultipliedTimeStr(duration, durationMultiplier)
      const contentPlateProps: ContentPlatePropsType = {
        key: moduleID,
        contentComponentName,
        capture,
        durationObj,
        moduleID,
        contentID,
        screenType,
      }

      return <ContentPlate {...contentPlateProps} />
    })
    return <div className='AcademyMatrix__plates'>{plates}</div>
  }

  const propsOut: AcademyMatrixPropsOutType = {
    headerFrameProps: {
      brandName: 'YouRails Academy',
      moto: DICTIONARY['Together_know_everything'][language],
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
      screenType,
    },
    paginationNavigationProps: {
      paginationName: PaginationNameEnumType['pageModules'],
    },
  }

  return (
    <div className='AcademyMatrix'>
      <Helmet>
        <html lang={langSite} />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <title>{titleSite}</title>
        <link rel='canonical' href={canonicalUrlSite} />
        <meta name='description' content={descriptionSite} />
      </Helmet>
      <MainFrame {...propsOut.mainFrameProps}>
        {/* header */}
        <HeaderFrame {...propsOut.headerFrameProps} />
        {/* middle-left */}
        {null}
        {/* middle-main */}
        {modules.length && isLoadedGlobalVars ? (
          <div className='_plateMatrixPagination'>
            <div className='_plateMatrixWrapper'>{getPlateMatix(modules)}</div>
            <div className='_paginationNavigationWrapper'>
              <PaginationNavigation {...propsOut.paginationNavigationProps} />
            </div>
          </div>
        ) : null}
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
  'durationMultiplier',
  'modules',
  'isLoadedGlobalVars',
  'isLoadedCourses',
]
export const AcademyMatrix: AcademyMatrixType = withPropsYrl({
  handleEvents: handleEventsIn,
})(withStoreStateSelectedYrl(storeStateSliceProps, React.memo(AcademyMatrixComponent)))

export type {
  AcademyMatrixPropsType,
  AcademyMatrixPropsOutType,
  AcademyMatrixComponentType,
  AcademyMatrixType,
}
