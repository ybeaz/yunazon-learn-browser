import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

import { SideNavigation } from '../Components/SideNavigation'
import { HeaderFrame } from '../Frames/HeaderFrame'
import { getEffectedRequests } from '../Hooks/getEffectedRequests'
import { ContentPlate } from '../Components/ContentPlate'
import { getContentComponentName } from '../../Shared/getContentComponentName'
import { getInitialTeachContentLoading } from '../Hooks/getInitialTeachContentLoading'
import { getMultipliedTimeStr } from '../../Shared/getMultipliedTimeStr'
import { IDurationObj } from '../../Interfaces/IDurationObj'
import { IRootStore } from '../../Interfaces/IRootStore'
import { MainFrame } from '../Frames/MainFrame'
import { SITE_META_DATA } from '../../Constants/siteMetaData.const'

export const AcademyMatrix: React.FunctionComponent = (): ReactElement => {
  getEffectedRequests(['GET_GLOBAL_VARS', 'GET_CONTENT_DATA'])
  getInitialTeachContentLoading()

  const screenType = 'AcademyMatrix'

  const { titleSite, descriptionSite, canonicalUrlSite, langSite } =
    SITE_META_DATA

  const store = useSelector((store2: IRootStore) => store2)
  const {
    globalVars: { durationMultiplier },
    courses,
    isLoaded: { isLoadedGlobalVars, isLoadedCourses },
    forms: { searchInput },
  } = store

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

      const durationObj: IDurationObj = getMultipliedTimeStr(
        duration,
        durationMultiplier
      )
      const contentPlateProps = {
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

  const coursesFiltered = courses.filter(item =>
    item.searchString.includes(searchInput)
  )

  const headerFrameProps = {
    brandName: 'YourRails Academy',
    contentComponentName: 'SearchFormSep',
    isButtonSideMenu: true,
    isLogoGroup: true,
    isButtonAddCourse: true,
    isButtonAuthUser: true,
    selectLanguage: true,
    isButtonThemeToggle: true,
    isSeachGroup: true,
    isButtonBack: false,
    isPageActionsGroup: false,
    isButtonsShare: false,
    isInstallMobileAppGroup: false,
  }

  const mainFrameProps = {
    screenType,
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
      <MainFrame {...mainFrameProps}>
        {/* header */}
        <HeaderFrame {...headerFrameProps} />
        {/* middle-left */}
        {null}
        {/* middle-main */}
        {courses.length && isLoadedGlobalVars && isLoadedCourses ? (
          <div>{getPlateMatix(coursesFiltered)}</div>
        ) : null}
        {/* middle-right */}
        {null}
        {/* footer */}
        {null}
      </MainFrame>
      <SideNavigation />
    </div>
  )
}
