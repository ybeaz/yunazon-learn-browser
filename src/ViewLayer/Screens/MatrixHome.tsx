import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IDurationObj } from '../../Interfaces/IDurationObj'
import { getMultipliedTimeStr } from '../../Shared/getMultipliedTimeStr'
import { MainFrame } from '../Components/MainFrame'
import { IRouterScreenProps } from '../../Interfaces/IRouterScreenProps'
import { IRootStore } from '../../Interfaces/IRootStore'
import { PlayerPlate } from '../Components/PlayerPlate'

export const MatrixHome: React.FunctionComponent<any> = (
  props: IRouterScreenProps
): JSX.Element => {
  const store = useSelector((store: IRootStore) => store)
  const {
    courses,
    isLoaded: { isLoadedGlobalVars, isLoadedCourses },
  } = store

  const getPlateMatix: Function = (courses: any[]): JSX.Element => {
    const plates = courses.map((item, i) => {
      const { courseID, capture: captureCourse, modules } = item
      const { moduleID, ytID, duration } = modules[0]
      const screenType = 'MatrixHome'
      const isShowingPlay = false

      const durationObj: IDurationObj = getMultipliedTimeStr(duration, 1.5)
      const playerPlateProps = {
        courseID,
        captureCourse,
        durationObj,
        moduleID,
        ytID,
        isShowingPlay,
        screenType,
      }
      return <PlayerPlate {...playerPlateProps} />
    })
    return <div className='MatrixHome__plates'>{plates}</div>
  }

  return (
    <div className='MatrixHome'>
      <MainFrame>
        {courses.length && isLoadedGlobalVars && isLoadedCourses ? (
          <div>{getPlateMatix(courses)}</div>
        ) : null}
        {null}
      </MainFrame>
    </div>
  )
}
