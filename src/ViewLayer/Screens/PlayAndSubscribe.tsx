import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as action from '../../DataLayer/index.action'
import { SideNavigation } from '../Components/SideNavigation'
import { Header } from '../Components/Header'
import { Player } from '../Components/Player'
import { QuestionsColumn } from '../Components/QuestionsColumn'
interface IPlayAndSubScribe {
  routeProps: any
  rootPath: any
}

export const PlayAndSubscribeScreen: Function = (
  props: IPlayAndSubScribe = { routeProps: {}, rootPath: '' }
) => {
  const dispatch = useDispatch()

  // console.info('PlayAndSubscribe.screen [72]', { props })
  return (
    <div className='PlayAndSubscribe'>
      <Header />
      <SideNavigation />

      {/* <!-- Navigation Bar --> */}
      {/* <div className='navbar'>
        <a href='#'>Link</a>
        <a href='#'>Link</a>
        <a href='#'>Link</a>
        <a href='#'>Link</a>
      </div> */}

      {/* <!-- The flexible grid (content) --> */}
      <div className='PlayAndSubscribe__play'>
        <div className='PlayAndSubscribe__play_left'></div>
        <div className='PlayAndSubscribe__play_main'>
          <div className='PlayAndSubscribe__play_main_wrapper'>
            <Player />
          </div>
        </div>
        <div className='PlayAndSubscribe__play_right'>
          <QuestionsColumn />
        </div>
      </div>

      {/* <!-- Footer --> */}
      <div className='PlayAndSubscribe__comments'>
        <div className='PlayAndSubscribe__comments_in'></div>
      </div>
    </div>
  )
}
