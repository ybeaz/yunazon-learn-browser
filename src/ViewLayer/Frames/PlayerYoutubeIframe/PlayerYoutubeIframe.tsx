import React, { useState, useRef, useEffect } from 'react'
import { VIDEO_RESOLUTION } from 'yourails_common'
import { useYouTubePlayerWork } from '../../Hooks/useYouTubePlayerWork'
import { PlayerPanel } from '../../Components/PlayerPanel/PlayerPanel'
import { withConditionalWrapperYrl, NoSeoIndexingYrl } from 'yourails_common'
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
    tags,
  } = props
  const { width, height } = VIDEO_RESOLUTION

  const [playerDivTags, setPlayerDivTags] = useState([
    { contentID, isActive: true, tag: <div className='_player' id={contentID} /> },
  ])

  useEffect(() => {
    console.info('PlayerYoutubeIframe [23]', { contentID })
    if (!playerDivTags.find((item: any) => item.contentID === contentID)) {
      let playerDivTagsNext = playerDivTags.map((item, index) => ({
        ...item,
        isActive: false,
      }))

      setPlayerDivTags([
        ...playerDivTagsNext,
        { contentID, isActive: true, tag: <div className='_player' id={contentID} /> },
      ])
      console.info('PlayerYoutubeIframe [51]', { contentID })
    }
  }, [contentID])

  console.info('PlayerYoutubeIframe [35]', {
    isIframe,
    contentComponentName,
    moduleID,
    contentID,
    width,
    height,
  })

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
      tags,
    },
  }

  const getPlayers = (playersArray: any) => {
    return playersArray.map((item: any, index: number) => {
      const { contentID, isActive, tag } = item
      if (isActive) {
        return (
          <div key={contentID} style={{ display: isActive ? 'block' : 'none' }}>
            {tag}
          </div>
        )
      }
    })
  }

  console.info('PlayerYoutubeIframe [87]', { contentID, playerDivTags })
  return (
    <div className='PlayerYoutubeIframe'>
      {children[0]}
      <div className='_wrapperForPlayerYoutubeIframe'>
        {isIframe && (
          <>
            <div
              className={contentID}
              style={{ zIndex: 100, display: 'block', position: 'absolute' }}
            >
              We are here
            </div>
            {getPlayers(playerDivTags)}
            {/* <div className='_player' id={contentID} /> */}
          </>
        )}
        {children[1]}
      </div>

      <div className='_panel'>
        <PlayerPanel {...propsOut.playerPanelProps} />
      </div>
    </div>
  )
}

export const PlayerYoutubeIframe: PlayerYoutubeIframeType = withConditionalWrapperYrl(
  (props: any) => (props?.isNoSeoIndexing === undefined ? true : !!props.isNoSeoIndexing),
  NoSeoIndexingYrl
)(React.memo(PlayerYoutubeIframeComponent))

export type {
  PlayerYoutubeIframePropsType,
  PlayerYoutubeIframePropsOutType,
  PlayerYoutubeIframeComponentType,
  PlayerYoutubeIframeType,
}
