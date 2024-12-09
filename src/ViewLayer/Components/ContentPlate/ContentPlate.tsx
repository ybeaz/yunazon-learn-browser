import React, { FunctionComponent } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Tooltip } from 'antd'

import { ImageYrl, IconYrl, withPropsYrl } from 'yourails_common'
import { DICTIONARY } from 'yourails_common'
import { getSlug } from 'yourails_common'
import { PlayerPanel } from '../PlayerPanel/PlayerPanel'
import { LoaderBlurhash } from '../LoaderBlurhash'
import { useYouTubePlayerWork } from '../../Hooks/useYouTubePlayerWork'
import { VIDEO_RESOLUTION } from 'yourails_common'
import { ReaderIframe } from '../../Frames/ReaderIframe/ReaderIframe'
import { PlayerYoutubeIframe } from '../../Frames/PlayerYoutubeIframe/PlayerYoutubeIframe'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { withStoreStateSelectedYrl } from 'yourails_common'
import { getSizeWindow } from 'yourails_common'
import { getClasses } from 'yourails_common'
import { TooltipImageContent } from '../../Components/TooltipImageContent/TooltipImageContent'

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
        screenType,
        tags,
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
        tags,
      },
    },
    // iconCompletedProps: {
    //   classAdded: 'Icon_isCompleted',
    //   icon: 'MdCheckCircle',
    //   isDisplaying: isCompleted,
    // },
    tooltipIsCompletedProps: {
      classAdded: '_contentPlate_tooltipIsCompleted',
      tooltipTitleContent: (
        <div className='_contentPlateTooltipContentIsCompleted'>
          {DICTIONARY['Completed'][language]}
        </div>
      ),
      tooltipIconProps: {
        classAdded: 'Icon_isCompleted',
        icon: 'MdCheckCircle',
        isDisplaying: isCompleted,
      },
      isTooltip: isCompleted,
    },
    tooltipTagsProps: {
      classAdded: '_contentPlate_tooltipTags',
      tooltipTitleContent: (
        <div className='_contentPlateTooltipContentTags'>
          {!!tags?.length && tags.map((tag: string) => <div key={`tag-${tag}`}>{tag}</div>)}
        </div>
      ),
      tooltipIconProps: {
        classAdded: 'Icon_TagsTooltip',
        icon: 'MdOutlineTag',
        isDisplaying: true,
      },
      isTooltip: !!tags?.length && getSizeWindow().width > 480,
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
    // playerPanelProps: {
    //   capture,
    //   durationObj,
    //   screenType,
    //   isShowingPlay,
    //   isActionButtonDisplaying: true,
    //   tags,
    // },
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

  const tooltipTitleContent = (
    <div className='_contentPlateTooltipContentIsCompleted'>
      {DICTIONARY['Completed'][language]}
    </div>
  )

  return (
    <div className={getClasses('ContentPlate')} key={moduleID}>
      <CONTENT_ASSIGNED_COMPONENT {...propsOut.contentComponentProps[contentComponentName]}>
        <>
          {/* {isCompleted ? (
            <Tooltip className='_tooltip' title={tooltipTitleContent}>
              <div className='_isCompleted'>
                <div className='_cycle' />
                <IconYrl {...propsOut.iconCompletedProps} />
              </div>
            </Tooltip>
          ) : null} */}
          <TooltipImageContent {...propsOut.tooltipIsCompletedProps} />
          <TooltipImageContent {...propsOut.tooltipTagsProps} />
        </>

        {plateImageSrc ? (
          <ImageYrl {...propsOut.loaderImageProps} />
        ) : (
          <LoaderBlurhash {...propsOut.loaderBlurhashProps} />
        )}

        {/* TODO: remove <PlayerPanel {...propsOut.playerPanelProps} /> */}
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
