import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { SELECT_COURSE_MODULE } from '../../DataLayer/index.action'
import { handleEvents } from '../Hooks/handleEvents'
import { MainFrame } from '../Components/MainFrame'
import { RouterScreenProps } from '../../@types/RouterScreenProps'
import { RootStore } from '../../@types/RootStore'
import { Player } from '../Components/Player'

export const MatrixHome: Function = (props: RouterScreenProps): JSX.Element => {
  const store = useSelector((store: RootStore) => store)
  const { courses } = store

  const getPlateMatix: Function = (courses: any[]): JSX.Element => {
    // console.info('MatrixHome [15]', { courses })

    const output = courses.map((item, i) => {
      const { courseID, modules } = item
      const { moduleID, ytID } = modules[0]
      const playerProps = {
        isShowingPanel: false,
        videoId: ytID,
        width: '640',
        height: '390',
      }

      return (
        <div className={`MatrixHome__plates_plate`} key={courseID}>
          <Player {...playerProps} />
          <Link
            className='MatrixHome__plates_plate_shield'
            to={{
              pathname: `/c/${ytID}`,
            }}
            onClick={event =>
              handleEvents(
                event,
                SELECT_COURSE_MODULE({ courseID, moduleID, ytID })
              )
            }
          />
        </div>
      )
    })
    return <div className='MatrixHome__plates'>{output}</div>
  }

  return (
    <div className='MatrixHome'>
      <MainFrame>
        {courses.length ? <div>{getPlateMatix(courses)}</div> : null}
        {null}
      </MainFrame>
    </div>
  )
}
