import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as action from '../../DataLayer/index.action'
import { RouterScreenProps } from '../../@types/RouterScreenProps'

import { MainFrame } from '../Components/MainFrame'
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
      <MainFrame>
        <Player {...playerProps} />
        <QuestionsColumn />
      </MainFrame>
    </div>
  )
}
