import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { MainFrame } from '../Components/MainFrame'
import { RouterScreenProps } from '../../@types/RouterScreenProps'
import { RootStore } from '../../@types/RootStore'
import { PlayerPlate } from '../Components/PlayerPlate'

export const MatrixHome: React.FunctionComponent<any> = (
  props: RouterScreenProps
): JSX.Element => {
  const store = useSelector((store: RootStore) => store)
  const {
    courses,
    isLoaded: { isLoadedGlobalVars, isLoadedCourses },
  } = store

  const getPlateMatix: Function = (courses: any[]): JSX.Element => {
    const plates = courses.map((item, i) => {
      const { courseID, modules } = item
      const { moduleID, ytID } = modules[0]

      const playerPlateProps = { courseID, moduleID, ytID }
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
