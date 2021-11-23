import React from 'react'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

import { getEffectedRequests } from '../Hooks/getEffectedRequests'
import { ContentPlate } from '../Components/ContentPlate'
import { getContentComponentName } from '../../Shared/getContentComponentName'
import { getInitialTeachContentLoading } from '../Hooks/getInitialTeachContentLoading'
import { getMultipliedTimeStr } from '../../Shared/getMultipliedTimeStr'
import { IDurationObj } from '../../Interfaces/IDurationObj'
import { IRootStore } from '../../Interfaces/IRootStore'
import { MainFrame } from '../Frames/MainFrame'
import { SearchGroup } from '../Components/SearchGroup'
import { SITE_META_DATA } from '../../Constants/siteMetaData.const'

export const AcademyMatrix: React.FunctionComponent = (): JSX.Element => {
  getEffectedRequests(['GET_GLOBAL_VARS', 'GET_CONTENT_DATA'])
  getInitialTeachContentLoading()

  const { titleSite, descriptionSite, canonicalUrlSite, langSite } =
    SITE_META_DATA

  const store = useSelector((store2: IRootStore) => store2)
  const {
    globalVars: { durationMultiplier },
    courses,
    isLoaded: { isLoadedGlobalVars, isLoadedCourses },
    forms: { searchInput },
  } = store

  const getPlateMatix: Function = (courses2: any[]): JSX.Element => {
    const plates = courses2.map((item, i) => {
      const { courseID, capture: courseCapture, modules } = item
      const {
        moduleID,
        capture: moduleCapture,
        contentType,
        contentID,
        duration,
      } = modules[0]
      const screenType = 'AcademyMatrix'
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

  const mainFrameProps = {
    contentComponentName: 'AcademyMatrix',
    brandName: 'YourRails Academy',
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
        <SearchGroup />
        {null}
        {courses.length && isLoadedGlobalVars && isLoadedCourses ? (
          <div>{getPlateMatix(coursesFiltered)}</div>
        ) : null}
        {null}
        {null}
      </MainFrame>
    </div>
  )
}
