import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import { SELECT_COURSE_MODULE_CONTENTID } from '../../DataLayer/index.action'
import { handleEvents } from '../Hooks/handleEvents'
import { ModalFrame } from '../Modals/ModalFrame'
import { RootStore } from '../../@types/RootStore'
import { RouterScreenProps } from '../../@types/RouterScreenProps'

import { MainFrame } from '../Components/MainFrame'
import { Player } from '../Components/Player'
import { QuestionColumn } from '../Components/QuestionColumn'

export const PlayAndSubscribe: Function = (
  props: RouterScreenProps = { routeProps: {}, rootPath: '' }
) => {
  const contentID = props?.routeProps.match.params.contentID
  const store = useSelector((store: RootStore) => store)
  const { courses } = store
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (courses.length && isLoaded === false) {
      handleEvents(
        {},
        { type: 'SELECT_COURSE_MODULE_CONTENTID', data: { contentID } }
      )
      setIsLoaded(true)
    }
  }, [courses])

  // console.info('PlayAndSubscribe [31]', { courses, store })

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
