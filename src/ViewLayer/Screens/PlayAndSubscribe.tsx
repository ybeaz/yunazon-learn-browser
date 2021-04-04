import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ModalFrame } from '../Modals/ModalFrame'
import { RootStore } from '../../@types/RootStore'
import { RouterScreenProps } from '../../@types/RouterScreenProps'

import { MainFrame } from '../Components/MainFrame'
import { Player } from '../Components/Player'
import { QuestionColumn } from '../Components/QuestionColumn'

export const PlayAndSubscribe: Function = (
  props: RouterScreenProps = { routeProps: {}, rootPath: '' }
) => {
  const store = useSelector((store: RootStore) => store)
  const contentID = props?.routeProps.match.params.contentID
  console.info('PlayAndSubscribe [17]', { store })

  const playerProps = {
    isShowingPanel: true,
    videoId: contentID,
    width: '640',
    height: '390',
  }

  const questionColumnProps = { contentID }
  //  console.info('PlayAndSubscribe.screen [72]', { props })
  return (
    <div className='PlayAndSubscribe'>
      <MainFrame>
        <Player {...playerProps} />
        <QuestionColumn {...questionColumnProps} />
      </MainFrame>
      <ModalFrame />
    </div>
  )
}
