import React, { useState, useEffect, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootState } from '../../Interfaces/RootState'
import * as action from '../../DataLayer/index.action'
import './PlayAndSubscribe.style.less'

export const PlayAndSubscribeScreen: Function = (props = { rootPath: '' }) => {
  const { rootPath } = props

  const { globalVars } = useSelector((store: RootState) => store)
  const dispatch = useDispatch()

  console.info('PlayAndSubscribe [22]', { globalVars })
  return (
    <div className='PlayAndSubscribe'>
      <div>ScreenPlayAndSubscribe :-)</div>
      <div className='PlayAndSubscribe__logo_div'>
        {' '}
        <Link {...{ to: `${rootPath}/home` }}>About</Link>
      </div>
      <div className='PlayAndSubscribe__logo_div'>
        {' '}
        <Link {...{ to: `${rootPath}/home1` }}>About false</Link>
      </div>
      <div>
        {/* <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/i7VAC69Kr80'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe> */}
      </div>
    </div>
  )
}
