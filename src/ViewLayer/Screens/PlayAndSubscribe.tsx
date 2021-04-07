import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import { getYouTubePlayerWorkHook } from '../Hooks/getYouTubePlayerWorkHook'
import { VIDEO_RESOLUTION } from '../../Constants/videoResolution.const'
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
  const {
    courses,
    modalsState: { modalGetScores },
  } = store
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

  const { width, height } = VIDEO_RESOLUTION
  const {
    playVideoHandler,
    pauseVideoHandler,
    stopVideoHandler,
    isShowingPlay,
  } = getYouTubePlayerWorkHook({
    videoId: contentID,
    width,
    height,
  })

  const playerProps = {
    videoId: contentID,
    isShowingPanel: true,
    playVideoHandler,
    pauseVideoHandler,
    stopVideoHandler,
    isShowingPlay,
  }

  const questionColumnProps = { contentID }
  const modalFrameProps = { stopVideoHandler }
  //  console.info('PlayAndSubscribe.screen [72]', { props })
  return (
    <div className='PlayAndSubscribe'>
      {isLoaded === true ? (
        <>
          <MainFrame>
            <Player {...playerProps} />
            <QuestionColumn {...questionColumnProps} />
          </MainFrame>
          {modalGetScores === true ? <ModalFrame {...modalFrameProps} /> : null}
        </>
      ) : null}
    </div>
  )
}
