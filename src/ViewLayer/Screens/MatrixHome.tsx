import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RouterScreenProps } from '../../@types/RouterScreenProps'
import { RootState } from '../../@types/RootState'
import { Player } from '../Components/Player'

export const MatrixHome: Function = (props: RouterScreenProps): JSX.Element => {
  const store = useSelector((store: RootState) => store)
  const { content } = store

  const getPlateMatix: Function = (content: any[]): JSX.Element => {
    // console.info('MatrixHome [72]', { content })

    const output = content.map((item, i) => {
      const playerProps = {
        isShowingPanel: false,
        videoId: item.ytID,
        width: '640',
        height: '390',
      }
      return <Player {...playerProps} />
    })
    return <div className='MatrixHome__plates'>{output}</div>
  }

  return (
    <div className='MatrixHome'>
      {content.length ? <div>{getPlateMatix(content)}</div> : null}
    </div>
  )
}
