import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'

import { getInitialTeachContentLoading } from '../Hooks/getInitialTeachContentLoading'
import { SITE_META_DATA } from '../../Constants/siteMetaData'
import { getContentComponentName } from '../../Shared/getContentComponentName'
import { SearchGroup } from '../Components/SearchGroup'
import { IDurationObj } from '../../Interfaces/IDurationObj'
import { getMultipliedTimeStr } from '../../Shared/getMultipliedTimeStr'
import { MainFrame } from '../Frames/MainFrame'
import { IRouterScreenProps } from '../../Interfaces/IRouterScreenProps'
import { IRootStore } from '../../Interfaces/IRootStore'
import { ContentPlate } from '../Components/ContentPlate'

export const MatrixHome: React.FunctionComponent<any> = (
  props: IRouterScreenProps
): JSX.Element => {
  getInitialTeachContentLoading()

  const { titleSite, descriptionSite, canonicalUrlSite, langSite } =
    SITE_META_DATA

  const store = useSelector((store: IRootStore) => store)
  const {
    globalVars: { durationMultiplier },
    courses,
    isLoaded: { isLoadedGlobalVars, isLoadedCourses },
    forms: { searchInput },
  } = store

  const getPlateMatix: Function = (courses: any[]): JSX.Element => {
    const plates = courses.map((item, i) => {
      const { courseID, capture: courseCapture, modules } = item
      const {
        moduleID,
        capture: moduleCapture,
        contentType,
        contentID,
        duration,
      } = modules[0]
      const screenType = 'MatrixHome'
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
    return <div className='MatrixHome__plates'>{plates}</div>
  }

  const coursesFiltered = courses.filter(item =>
    item.searchString.includes(searchInput)
  )

  return (
    <div className='MatrixHome'>
      <Helmet>
        <html lang={langSite} />
        <meta charSet='utf-8' />
        <title>{titleSite}</title>
        <link rel='canonical' href={canonicalUrlSite} />
        <meta name='description' content={descriptionSite} />
      </Helmet>
      <MainFrame>
        <SearchGroup />
        {courses.length && isLoadedGlobalVars && isLoadedCourses ? (
          <div>{getPlateMatix(coursesFiltered)}</div>
        ) : null}
        {null}
      </MainFrame>
    </div>
  )
}
