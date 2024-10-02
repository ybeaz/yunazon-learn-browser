import React, { FunctionComponent } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Tooltip } from 'antd'

import { ImageYrl, IconYrl, withPropsYrl } from 'yourails_view_layer_web'
import { DICTIONARY } from '../../../Constants/dictionary.const'
import { getSlug } from '../../../Shared/getSlug'
import { PlayerPanel } from '../PlayerPanel/PlayerPanel'
import { LoaderBlurhash } from '../LoaderBlurhash'
import { useYouTubePlayerWork } from '../../Hooks/useYouTubePlayerWork'
import { VIDEO_RESOLUTION } from '../../../Constants/videoResolution.const'
import { ReaderIframe } from '../../Frames/ReaderIframe/ReaderIframe'
import { PlayerYoutubeIframe } from '../../Frames/PlayerYoutubeIframe/PlayerYoutubeIframe'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { withStoreStateSelectedYrl } from 'yourails_view_layer_web'
import { getSizeWindow } from '../../../Shared/getSizeWindow'
import { getClasses } from '../../../Shared/getClasses'

const COMPONENT: Record<string, FunctionComponent<any>> = {
  ReaderIframe,
  PlayerYoutubeIframe,
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
    tags,
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
  const { width: widthSizeWindow } = getSizeWindow()

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
      PlayerYoutubeIframe: {
        contentComponentName,
        moduleID,
        contentID,
        isVisible,
        isIframe: !plateImageSrc,
        capture,
        durationObj,
        screenType,
        questionsTotal: 0,
      },
    },
    iconCompletedProps: {
      classAdded: 'Icon_isCompleted',
      icon: 'MdCheckCircle',
      isDisplaying: isCompleted,
    },
    iconTagsTooltipProps: {
      classAdded: 'Icon_TagsTooltip',
      icon: 'MdOutlineTag',
      isDisplaying: true,
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
      handleEvents,
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
          typeEvent: 'SET_MODULES',
          data: [],
        })
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

  const contentPlateTooltipContentIsCompleted = (
    <div className='_contentPlateTooltipContentIsCompleted'>
      {DICTIONARY['Completed'][language]}
    </div>
  )

  const contentPlateTooltipContentTags = (
    <div className='_contentPlateTooltipContentTags'>
      {!!tags?.length && tags.map((tag: string) => <div key={`tag-${tag}`}>{tag}</div>)}
    </div>
  )

  return (
    <div className={getClasses('ContentPlate')} key={moduleID}>
      <CONTENT_ASSIGNED_COMPONENT {...propsOut.contentComponentProps[contentComponentName]}>
        <>
          {isCompleted ? (
            <Tooltip className='_tooltip' title={contentPlateTooltipContentIsCompleted}>
              <div className='_isCompleted'>
                <div className='_cycle' />
                <IconYrl {...propsOut.iconCompletedProps} />
              </div>
            </Tooltip>
          ) : null}

          {!!tags?.length && widthSizeWindow > 480 ? (
            <Tooltip className='_tooltip' title={contentPlateTooltipContentTags}>
              <div className='_tagsTooltip'>
                <div className='_cycle' />
                <IconYrl {...propsOut.iconTagsTooltipProps} />
              </div>
            </Tooltip>
          ) : null}
        </>

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
