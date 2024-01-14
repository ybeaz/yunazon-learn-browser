import React, { useEffect, ReactElement } from 'react'
import { Helmet } from 'react-helmet'

import { DICTIONARY } from '../../../Constants/dictionary.const'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { useEffectedInitialRequests } from '../../Hooks/useEffectedInitialRequests'
import { useLoadedInitialTeachContent } from '../../Hooks/useLoadedInitialTeachContent'
import { ContentPlate } from '../../Components/ContentPlate/ContentPlate'
import { getContentComponentName } from '../../../Shared/getContentComponentName'
import { getMultipliedTimeStr } from '../../../Shared/getMultipliedTimeStr'
import { DurationObjType } from '../../../Interfaces/DurationObjType'
import { MainFrame } from '../../Frames/MainFrame/MainFrame'
import { SITE_META_DATA } from '../../../Constants/siteMetaData.const'
import { SERVERS_MAIN } from '../../../Constants/servers.const'
import { PaginationNavigation } from '../../Components/PaginationNavigation/PaginationNavigation'
import {
  withStoreStateSelectedYrl,
  withPropsYrl,
} from '../../ComponentsLibrary/'
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
const AcademyMatrixComponent: AcademyMatrixComponentType = (
  props: AcademyMatrixPropsType
) => {
  const {
    storeStateSlice: {
      language,
      durationMultiplier,
      courses,
      isLoadedGlobalVars,
      isLoadedCourses,
      inputSearch,
    },
    handleEvents,
  } = props

  useEffect(() => {
    handleEvents(
      {},
      { type: 'SET_SCREEN_ACTIVE', data: { screenActive: 'AcademyMatrix' } }
    )
  }, [])

  const coursesFiltered = courses
  const redirectAuthFrom = getLocalStorageReadKeyObj('redirectAuthFrom')

  let actionsToMount: any[] = []
  if (!redirectAuthFrom) actionsToMount = [{ type: 'GET_MATRIX_DATA' }]

  useEffectedInitialRequests(actionsToMount)
  useLoadedInitialTeachContent({ isSkipping: redirectAuthFrom })

  const screenType = 'AcademyMatrix'

  const { titleSite, descriptionSite, canonicalUrlSite, langSite } =
    SITE_META_DATA

  const getPlateMatix: Function = (courses2: any[]): ReactElement => {
    const plates = courses2.map((item, i) => {
      const { courseID, capture: courseCapture, modules } = item
      const {
        moduleID,
        capture: moduleCapture,
        contentType,
        contentID,
        duration,
      } = modules[0]

      const isShowingPlay = false
      const contentComponentName = getContentComponentName(contentType)

      const durationObj: DurationObjType = getMultipliedTimeStr(
        duration,
        durationMultiplier
      )
      const contentPlateProps = {
        key: moduleID,
        contentComponentName,
        courseID,
        courseCapture,
        moduleCapture,
        durationObj,
        moduleID,
        contentID,
        isShowingPlay,
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
  }

  return (
    <div className='AcademyMatrix'>
      <Helmet>
        <html lang={langSite} />
        <meta charSet='utf-8' />
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
        {courses.length && isLoadedGlobalVars && isLoadedCourses ? (
          <div className='PlateMatrixPagination'>
            <div className='PlateMatrixWrapper'>
              {getPlateMatix(coursesFiltered)}
            </div>
            <div className='PaginationNavigationWrapper'>
              <PaginationNavigation />
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
  'courses',
  'isLoadedGlobalVars',
  'isLoadedCourses',
  'inputSearch',
]
export const AcademyMatrix: AcademyMatrixType = withPropsYrl({
  handleEvents: handleEventsIn,
})(
  withStoreStateSelectedYrl(
    storeStateSliceProps,
    React.memo(AcademyMatrixComponent)
  )
)

export type {
  AcademyMatrixPropsType,
  AcademyMatrixPropsOutType,
  AcademyMatrixComponentType,
  AcademyMatrixType,
}
