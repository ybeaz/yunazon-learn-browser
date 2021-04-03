import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { MainFrame } from '../Components/MainFrame'
import { RouterScreenProps } from '../../@types/RouterScreenProps'
import { RootStore } from '../../@types/RootStore'
import { Player } from '../Components/Player'

export const MatrixHome: Function = (props: RouterScreenProps): JSX.Element => {
  const store = useSelector((store: RootStore) => store)
  const { content } = store

  const getPlateMatix: Function = (content: any[]): JSX.Element => {
    console.info('MatrixHome [15]', { content })

    const output = content.map((item, i) => {
      const { courseID, ytID } = item
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
          />
        </div>
      )
    })
    return <div className='MatrixHome__plates'>{output}</div>
  }

  return (
    <div className='MatrixHome'>
      <MainFrame>
        {content.length ? <div>{getPlateMatix(content)}</div> : null}
        {null}
      </MainFrame>
    </div>
  )
}
