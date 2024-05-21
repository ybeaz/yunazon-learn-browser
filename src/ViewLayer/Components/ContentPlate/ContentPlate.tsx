import React, { FunctionComponent } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { ImageYrl, IconYrl, withPropsYrl } from '../../ComponentsLibrary/'
import { DICTIONARY } from '../../../Constants/dictionary.const'
import { getSlug } from '../../../Shared/getSlug'
import { PlayerPanel } from '../PlayerPanel/PlayerPanel'
import { LoaderBlurhash } from '../LoaderBlurhash'
import { useYouTubePlayerWork } from '../../Hooks/useYouTubePlayerWork'
import { VIDEO_RESOLUTION } from '../../../Constants/videoResolution.const'
import { ReaderIframe } from '../../Frames/ReaderIframe/ReaderIframe'
import { PlayerIframe } from '../../Frames/PlayerIframe/PlayerIframe'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { withStoreStateSelectedYrl } from '../../ComponentsLibrary/'

import { getClasses } from '../../../Shared/getClasses'

const COMPONENT: Record<string, FunctionComponent<any>> = {
  ReaderIframe,
  PlayerIframe,
}

import {
  ContentPlateComponentPropsType,
  ContentPlatePropsType,
  ContentPlatePropsOutType,
  ContentPlateComponentType,
  ContentPlateType,
} from './ContentPlateTypes'

/**
 * @description Component to render ContentPlate
 * @import import { ContentPlate, ContentPlatePropsType, ContentPlatePropsOutType, ContentPlateType } 
             from '../Components/ContentPlate/ContentPlate'
 */
const ContentPlateComponent: ContentPlateComponentType = (
  props: ContentPlateComponentPropsType
) => {
  const {
    classAdded,
    contentComponentName,
    capture,
    isCompleted,
    durationObj,
    moduleID,
    contentID,
    screenType,
    storeStateSlice: { language, mediaLoaded },
    handleEvents,
    thumbnails,
  } = props

  const navigate = useNavigate()
  const isVisible = mediaLoaded[moduleID] || false

  const { width, height } = VIDEO_RESOLUTION
  const { isShowingPlay } = useYouTubePlayerWork({
    contentComponentName,
    moduleID,
    contentID,
    width,
    height,
  })

  const slug = getSlug(capture)
  const pathname = `/m/${moduleID}/${slug}`

  const CONTENT_ASSIGNED_COMPONENT: FunctionComponent = COMPONENT[contentComponentName]

  const plateImageSrc: string =
    thumbnails?.maxres?.url ||
    thumbnails?.high?.url ||
    thumbnails?.medium?.url ||
    thumbnails?.standard?.url ||
    thumbnails?.default?.url ||
    ''

  const propsOut: ContentPlatePropsOutType = {
    contentComponentProps: {
      ReaderIframe: {
        moduleID,
        contentID,
        isVisible,
        isIframe: true,
      },
      PlayerIframe: {
        moduleID,
        contentID,
        isVisible,
        isIframe: !plateImageSrc,
      },
    },
    iconCompletedProps: {
      classAdded: 'Icon_isCompleted',
      icon: 'MdCheckCircle',
      isDisplaying: isCompleted,
    },
    loaderBlurhashProps: {
      textTooltip: DICTIONARY['pleaseWait'][language],
      isTextTooltip: true,
      delay: 500,
      contentComponentName,
      isVisibleBlurHash: !isVisible,
    },
    loaderImageProps: {
      classAdded: 'Image_loaderPlayerFrame',
      src: plateImageSrc,
      opacity: !isVisible ? 1 : 0,
    },
    playerPanelProps: {
      capture,
      durationObj,
      screenType,
      isShowingPlay,
      isActionButtonDisplaying: true,
    },
    linkProps: {
      className: '__shield',
      to: { pathname },
      onClick: (event: any) => {
        handleEvents(event, {
          typeEvent: 'SELECT_MODULE',
          data: { capture, moduleID, contentID, navigate },
        })
        handleEvents(event, {
          typeEvent: 'GO_LINK_PATH',
          data: { navigate, pathname },
        })
      },
    },
  }

  return (
    <div className={getClasses('ContentPlate')} key={moduleID} id={moduleID}>
      <CONTENT_ASSIGNED_COMPONENT {...propsOut.contentComponentProps[contentComponentName]}>
        {isCompleted ? (
          <div className='_isCompleted'>
            <div className='_cycle' />
            <IconYrl {...propsOut.iconCompletedProps} />
          </div>
        ) : null}

        {plateImageSrc ? (
          <ImageYrl {...propsOut.loaderImageProps} />
        ) : (
          <LoaderBlurhash {...propsOut.loaderBlurhashProps} />
        )}

        <PlayerPanel {...propsOut.playerPanelProps} />
      </CONTENT_ASSIGNED_COMPONENT>
      <NavLink {...propsOut.linkProps} />
    </div>
  )
}

const storeStateSliceProps: string[] = ['language', 'mediaLoaded']
export const ContentPlate = React.memo(
  withPropsYrl({ handleEvents: handleEventsIn })(
    withStoreStateSelectedYrl(storeStateSliceProps, ContentPlateComponent)
  )
)

export type {
  ContentPlatePropsType,
  ContentPlatePropsOutType,
  ContentPlateComponentType,
  ContentPlateType,
}
