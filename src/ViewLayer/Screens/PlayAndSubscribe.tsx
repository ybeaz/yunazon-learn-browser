import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../@types/RootState'
import * as action from '../../DataLayer/index.action'
import { RouterScreenProps } from '../../@types/RouterScreenProps'

import { MainFrame } from '../Components/MainFrame'
import { Player } from '../Components/Player'
import { QuestionColumn } from '../Components/QuestionColumn'

export const PlayAndSubscribe: Function = (
  props: RouterScreenProps = { routeProps: {}, rootPath: '' }
) => {
  const dispatch = useDispatch()
  const store = useSelector((store: RootState) => store)
  const { content } = store
  const contentID = props?.routeProps.match.params.contentID

  const getQuestionsByContentID: Function = (
    content: any,
    contentID: string
  ): any[] => {
    if (!content.length) return []
    const contentIDBody = content.find(item => item.ytID === contentID)
      .questions
    return contentIDBody ? contentIDBody : []
  }

  const questions = getQuestionsByContentID(content, contentID)

  const playerProps = {
    isShowingPanel: true,
    videoId: contentID,
    width: '640',
    height: '390',
  }

  const questionColumnProps = { questions }
  // console.info('PlayAndSubscribe.screen [72]', { props })
  return (
    <div className='PlayAndSubscribe'>
      <MainFrame>
        <Player {...playerProps} />
        <QuestionColumn {...questionColumnProps} />
      </MainFrame>
    </div>
  )
}
