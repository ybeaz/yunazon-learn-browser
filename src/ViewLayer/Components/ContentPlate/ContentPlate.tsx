import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import { DICTIONARY } from '../../../Constants/dictionary.const'
import { getSlug } from '../../../Shared/getSlug'
import { PlayerPanel } from '../PlayerPanel/PlayerPanel'
import { LoaderBlurhash } from '../LoaderBlurhash'
import { useYouTubePlayerWork } from '../../Hooks/useYouTubePlayerWork'
import { VIDEO_RESOLUTION } from '../../../Constants/videoResolution.const'
import { ReaderIframe } from '../../Frames/ReaderIframe/ReaderIframe'
import { PlayerIframe } from '../../Frames/PlayerIframe/PlayerIframe'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
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
    durationObj,
    moduleID,
    contentID,
    screenType,
    storeStateSlice: { language, mediaLoaded },
  } = props

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

  const propsOut: ContentPlatePropsOutType = {
    contentComponentProps: {
      ReaderIframe: {
        moduleID,
        contentID,
        isVisible,
      },
      PlayerIframe: {
        moduleID,
        contentID,
        isVisible,
      },
    },
    loaderBlurhashProps: {
      isVisibleBlurHash: !isVisible,
      textTooltip: DICTIONARY['pleaseWait'][language],
      isTextTooltip: true,
      delay: 500,
      contentComponentName: 'AcademyMatrix',
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
      onClick: (event: any) =>
        handleEvents(event, {
          typeEvent: 'SELECT_MODULE',
          data: { capture, moduleID, contentID },
        }),
    },
  }

  return (
    <div className={getClasses('ContentPlate')} key={moduleID}>
      <CONTENT_ASSIGNED_COMPONENT {...propsOut.contentComponentProps[contentComponentName]}>
        <LoaderBlurhash {...propsOut.loaderBlurhashProps} />
        <PlayerPanel {...propsOut.playerPanelProps} />
      </CONTENT_ASSIGNED_COMPONENT>
      <Link {...propsOut.linkProps}>
        <div> </div>
      </Link>
    </div>
  )
}

const storeStateSliceProps: string[] = ['language', 'mediaLoaded']
export const ContentPlate = React.memo(
  withStoreStateSelectedYrl(storeStateSliceProps, ContentPlateComponent)
)

export type {
  ContentPlatePropsType,
  ContentPlatePropsOutType,
  ContentPlateComponentType,
  ContentPlateType,
}
