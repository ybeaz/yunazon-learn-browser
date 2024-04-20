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
const PlayerIframeComponent: PlayerIframeComponentType = (props: PlayerIframePropsType) => {
  const { contentID, isIframe, children } = props

  console.info('PlayerIframe [18]', { children })

  return (
    <div className='PlayerIframe'>
      <div className='_isCompleted'>{children[0]}</div>
      <div className='_wrapper'>
        {isIframe && <div className='_player' id={'contentID'}></div>}
        {children[1]}
      </div>

      <div className='_panel'>{children[2]}</div>
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
