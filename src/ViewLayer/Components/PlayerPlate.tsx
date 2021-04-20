import React from 'react'
import { Link } from 'react-router-dom'

import { getYouTubePlayerWorkHook } from '../Hooks/getYouTubePlayerWorkHook'
import { VIDEO_RESOLUTION } from '../../Constants/videoResolution.const'
import { Player } from '../Components/Player'
import * as action from '../../DataLayer/index.action'
import { handleEvents } from '../Hooks/handleEvents'

export const PlayerPlate: React.FunctionComponent<any> = (
  props: any
): JSX.Element => {
  const { courseID, moduleID, ytID } = props

  const { width, height } = VIDEO_RESOLUTION
  const {
    playVideoHandler,
    pauseVideoHandler,
    stopVideoHandler,
    isShowingPlay,
  } = getYouTubePlayerWorkHook({
    videoId: ytID,
    width,
    height,
  })

  const playerProps = {
    videoId: ytID,
    playVideoHandler,
    pauseVideoHandler,
    stopVideoHandler,
    isShowingPlay,
    isShowingPanel: false,
  }

  return (
    <div className={`PlayerPlate`} key={courseID}>
      <Player {...playerProps} />
      <Link
        className='PlayerPlate__shield'
        to={{
          pathname: `/c/${ytID}`,
        }}
        onClick={event =>
          handleEvents(
            event,
            action.SELECT_COURSE_MODULE({ courseID, moduleID, ytID })
          )
        }
      />
    </div>
  )
}
