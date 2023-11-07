import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { DICTIONARY } from '../../Constants/dictionary.const'
import { getSlug } from '../../Shared/getSlug'
import { PlayerPanel } from './PlayerPanel'
import { IRootStore } from '../../Interfaces/IRootStore'
import { LoaderBlurhash } from './LoaderBlurhash'
import { IDurationObj } from '../../Interfaces/IDurationObj'
import { getYouTubePlayerWorkHook } from '../Hooks/getYouTubePlayerWorkHook'
import { VIDEO_RESOLUTION } from '../../Constants/videoResolution.const'
import { ReaderIframe } from '../Frames/ReaderIframe'
import { PlayerIframe } from '../Frames/PlayerIframe'
import { handleEvents } from '../../DataLayer/index.handleEvents'

const COMPONENT = {
  ReaderIframe,
  PlayerIframe,
}

interface ContentPlateArgs {
  contentComponentName: string
  courseID: string
  courseCapture: string
  moduleCapture: string
  durationObj: IDurationObj
  moduleID: string
  contentID: string
  screenType: string
}

export const ContentPlate: React.FunctionComponent<ContentPlateArgs> =
  props => {
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

    const store = useSelector((store2: IRootStore) => store2)
    const {
      language,
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

    const slug = getSlug(courseCapture)
    const pathname = `/c/${courseID}/${slug}`

    const CONTENT_ASSIGNED_COMPONENT = COMPONENT[contentComponentName]

    const textTooltip = DICTIONARY['pleaseWait'][language]
    const loaderBlurhashProps = {
      isVisibleBlurHash: !isVisible,
      textTooltip,
      isTextTooltip: true,
      delay: 10000,
      contentComponentName: 'AcademyMatrix',
    }

    return (
      <div className={`ContentPlate`} key={courseID}>
        <CONTENT_ASSIGNED_COMPONENT
          {...contentComponentProps[contentComponentName]}
        >
          <LoaderBlurhash {...loaderBlurhashProps} />
          <PlayerPanel {...playerPanelProps} />
        </CONTENT_ASSIGNED_COMPONENT>
        <Link
          className='__shield'
          to={{ pathname }}
          onClick={event =>
            handleEvents(event, {
              typeEvent: 'SELECT_COURSE_MODULE',
              data: { courseCapture, courseID, moduleID, contentID },
            })
          }
        />
      </div>
    )
  }
