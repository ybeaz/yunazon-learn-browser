import React from 'react'
import { Link } from 'react-router-dom'

import { IDurationObj } from '../../Interfaces/IDurationObj'
import { getYouTubePlayerWorkHook } from '../Hooks/getYouTubePlayerWorkHook'
import { VIDEO_RESOLUTION } from '../../Constants/videoResolution.const'
import { Player } from '../Components/Player'
import * as action from '../../DataLayer/index.action'
import { handleEvents } from '../Hooks/handleEvents'

interface IPlayerPlateInput {
  courseID: string
  courseCapture: string
  moduleCapture: string
  durationObj: IDurationObj
  moduleID: string
  contentID: string
  screenType: string
}

export const PlayerPlate: React.FunctionComponent<any> = (
  props: IPlayerPlateInput
): JSX.Element => {
  const {
    courseID,
    courseCapture,
    moduleCapture,
    durationObj,
    moduleID,
    contentID,
    screenType,
  } = props

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
    courseCapture,
    moduleCapture,
    durationObj,
    playVideoHandler,
    pauseVideoHandler,
    stopVideoHandler,
    screenType,
    isShowingPlay,
  }

  return (
    <div className={`PlayerPlate`} key={courseID}>
      <Player {...playerProps} />
      <Link
        className='__shield'
        to={{
          pathname: `/c/${contentID}`,
        }}
        onClick={event =>
          handleEvents(
            event,
            action.SELECT_COURSE_MODULE({ courseID, moduleID, contentID })
          )
        }
      />
    </div>
  )
}
