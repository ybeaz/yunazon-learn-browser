import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { PlayerPanel } from './PlayerPanel'
import { IRootStore } from '../../Interfaces/IRootStore'
import { LoaderBlurhash } from './LoaderBlurhash'
import { IDurationObj } from '../../Interfaces/IDurationObj'
import { getYouTubePlayerWorkHook } from '../Hooks/getYouTubePlayerWorkHook'
import { VIDEO_RESOLUTION } from '../../Constants/videoResolution.const'
import { ReaderIframe } from '../Frames/ReaderIframe'
import { PlayerIframe } from '../Frames/PlayerIframe'
import { handleEvents } from '../Hooks/handleEvents'

const COMPONENT = {
  ReaderIframe,
  PlayerIframe,
}

interface IContentPlateInput {
  contentComponentName: string
  courseID: string
  courseCapture: string
  moduleCapture: string
  durationObj: IDurationObj
  moduleID: string
  contentID: string
  screenType: string
}

export const ContentPlate: React.FunctionComponent<any> = (
  props: IContentPlateInput
): JSX.Element => {
  const {
    contentComponentName,
    courseID,
    courseCapture,
    moduleCapture,
    durationObj,
    moduleID,
    contentID,
    screenType,
  } = props

  const store = useSelector((store: IRootStore) => store)
  const {
    isLoaded: { mediaLoading },
  } = store
  const isVisible = mediaLoading[contentID]

  const { width, height } = VIDEO_RESOLUTION
  const { isShowingPlay } = getYouTubePlayerWorkHook({
    contentComponentName,
    contentID,
    width,
    height,
  })

  const contentComponentProps = {
    ReaderIframe: {
      contentID,
      isVisible,
    },
    PlayerIframe: {
      contentID,
      isVisible,
    },
  }

  const playerPanelProps = {
    courseCapture,
    moduleCapture,
    durationObj,
    screenType,
    isShowingPlay,
    isActionButtonDisplaying: true,
  }

  const CONTENT_ASSIGNED_COMPONENT = COMPONENT[contentComponentName]

  return (
    <div className={`ContentPlate`} key={courseID}>
      <CONTENT_ASSIGNED_COMPONENT
        {...contentComponentProps[contentComponentName]}
      >
        <LoaderBlurhash isVisible={isVisible} />
        <PlayerPanel {...playerPanelProps} />
      </CONTENT_ASSIGNED_COMPONENT>
      <Link
        className='__shield'
        to={{
          pathname: `/c/${courseID}`,
        }}
        onClick={event =>
          handleEvents(event, {
            typeEvent: 'SELECT_COURSE_MODULE',
            data: { courseID, moduleID, contentID },
          })
        }
      />
    </div>
  )
}
