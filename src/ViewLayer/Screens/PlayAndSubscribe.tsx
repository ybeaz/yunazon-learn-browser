import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as action from '../../DataLayer/index.action'
import { RouterScreenProps } from '../../@types/RouterScreenProps'
import { SideNavigation } from '../Components/SideNavigation'
import { Header } from '../Components/Header'
import { Player } from '../Components/Player'
import { QuestionsColumn } from '../Components/QuestionsColumn'

export const PlayAndSubscribe: Function = (
  props: RouterScreenProps = { routeProps: {}, rootPath: '' }
) => {
  const dispatch = useDispatch()

  const contentID = props?.routeProps.match.params.contentID
  // console.info('PlayAndSubscribe [15]', { contentID, props })

  const playerProps = {
    isShowingPanel: true,
    videoId: contentID,
    width: '640',
    height: '390',
  }
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
            <Player {...playerProps} />
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
