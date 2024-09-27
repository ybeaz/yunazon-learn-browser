import React from 'react'
import { VIDEO_RESOLUTION } from '../../../Constants/videoResolution.const'
import { useYouTubePlayerWork } from '../../Hooks/useYouTubePlayerWork'
import { PlayerPanel } from '../../Components/PlayerPanel/PlayerPanel'
import {
  PlayerYoutubeIframePropsType,
  PlayerYoutubeIframePropsOutType,
  PlayerYoutubeIframeComponentType,
  PlayerYoutubeIframeType,
} from './PlayerYoutubeIframeTypes'

/**
 * @description Component to render PlayerYoutubeIframe
 * @import import { PlayerYoutubeIframe, PlayerYoutubeIframePropsType, PlayerYoutubeIframePropsOutType, PlayerYoutubeIframeType } 
             from '../Components/PlayerYoutubeIframe/PlayerYoutubeIframe'
 */
const PlayerYoutubeIframeComponent: PlayerYoutubeIframeComponentType = (
  props: PlayerYoutubeIframePropsType
) => {
  const {
    contentComponentName,
    moduleID,
    contentID,
    isIframe,
    children,
    capture,
    durationObj,
    screenType,
    questionsTotal,
  } = props
  const { width, height } = VIDEO_RESOLUTION

  const { playVideoHandler, pauseVideoHandler, stopVideoHandler, isShowingPlay } =
    useYouTubePlayerWork({
      contentComponentName,
      moduleID,
      contentID,
      width,
      height,
    })

  const buttonPlayProps = {
    icon: 'MdPlayArrow',
    classAdded: 'Button_MdPlayArrow',
    handleEvents: playVideoHandler,
    action: {},
  }
  const buttonPauseProps = {
    icon: 'MdPause',
    classAdded: 'Button_MdPause',
    handleEvents: pauseVideoHandler,
    action: {},
  }
  const buttonStopProps = {
    icon: 'MdRemoveCircle',
    classAdded: 'Button_MdRemoveCircle',
    handleEvents: stopVideoHandler,
    action: {},
  }

  const propsOut: PlayerYoutubeIframePropsOutType = {
    playerPanelProps: {
      capture,
      durationObj,
      screenType,
      isShowingPlay,
      buttonPlayProps,
      buttonPauseProps,
      buttonStopProps,
      isActionButtonDisplaying: false,
      questionsTotal,
    },
  }

  return (
    <div className='PlayerYoutubeIframe'>
      {children[0]}
      <div className='_wrapper'>
        {isIframe && <div className='_player' id={contentID}></div>}
        {children[1]}
      </div>

      <div className='_panel'>
        <PlayerPanel {...propsOut.playerPanelProps} />
      </div>
    </div>
  )
}

export const PlayerYoutubeIframe: PlayerYoutubeIframeType = React.memo(PlayerYoutubeIframeComponent)

export type {
  PlayerYoutubeIframePropsType,
  PlayerYoutubeIframePropsOutType,
  PlayerYoutubeIframeComponentType,
  PlayerYoutubeIframeType,
}
