import React from 'react'

import {
  PlayerIframePropsType,
  PlayerIframePropsOutType,
  PlayerIframeComponentType,
  PlayerIframeType,
} from './PlayerIframeTypes'

/**
 * @description Component to render PlayerIframe
 * @import import { PlayerIframe, PlayerIframePropsType, PlayerIframePropsOutType, PlayerIframeType } 
             from '../Components/PlayerIframe/PlayerIframe'
 */
const PlayerIframeComponent: PlayerIframeComponentType = (
  props: PlayerIframePropsType
) => {
  const { moduleID, contentID, isVisible, children } = props

  let isVisibleClass = isVisible ? '_blockVisible' : '_blockHided'

  const propsOut: PlayerIframePropsOutType = {}

  return (
    <div className='PlayerIframe'>
      <div className={`_wrapper ${isVisibleClass}`}>
        <div className='_player' id={contentID}></div>
        {children[0]}
      </div>

      <div className='_panel'>{children[1]}</div>
    </div>
  )
}

export const PlayerIframe: PlayerIframeType = React.memo(PlayerIframeComponent)

export type {
  PlayerIframePropsType,
  PlayerIframePropsOutType,
  PlayerIframeComponentType,
  PlayerIframeType,
}
