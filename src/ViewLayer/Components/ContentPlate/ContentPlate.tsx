import React, { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'

import { ImageYrl, withPropsYrl } from 'yourails_common'
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
import { NavLinkWithQuery } from '../../Components/NavLinkWithQuery/NavLinkWithQuery'

import { getParsedUrlQueryBrowserApi } from 'yourails_common'

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
    storeStateSlice: { language, mediaLoaded, urlParamsQuery },
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
  const queryUrl = getParsedUrlQueryBrowserApi()

  const CONTENT_ASSIGNED_COMPONENT: FunctionComponent = COMPONENT[contentComponentName]

  const plateImageSrc: string =
    thumbnails?.standard?.url ||
    thumbnails?.medium?.url ||
    thumbnails?.default?.url ||
    thumbnails?.high?.url ||
    thumbnails?.maxres?.url ||
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
    iconCompletedProps: {
      classAdded: 'Icon_isCompleted',
      icon: 'MdCheckCircle',
      isDisplaying: isCompleted,
    },
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
      alt: 'loading, please wait',
      handleEvents,
      opacity: !isVisible ? 1 : 0,
    },
    linkProps: {
      className: '__shield',
      to: { pathname, search: queryUrl },
      onClick: (event: any) => {},
    },
  }

  return (
    <div className={getClasses('ContentPlate')} key={moduleID}>
      <CONTENT_ASSIGNED_COMPONENT {...propsOut.contentComponentProps[contentComponentName]}>
        <>
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
      <NavLinkWithQuery {...propsOut.linkProps} />
    </div>
  )
}

const storeStateSliceProps: string[] = ['language', 'mediaLoaded', 'urlParamsQuery']
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
