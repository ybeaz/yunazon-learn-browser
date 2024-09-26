import React from 'react'

import {
  PlayerYoutubePropsType,
  PlayerYoutubePropsOutType,
  PlayerYoutubeComponentType,
  PlayerYoutubeType,
} from './PlayerYoutubeTypes'

/**
 * @description Component to render PlayerYoutube
 * @import import { PlayerYoutube, PlayerYoutubePropsType, PlayerYoutubePropsOutType, PlayerYoutubeType } 
             from '../Components/PlayerYoutube/PlayerYoutube'
 */
const PlayerYoutubeComponent: PlayerYoutubeComponentType = (props: PlayerYoutubePropsType) => {
  const { contentID, isIframe, children } = props

  return (
    <div className='PlayerYoutube'>
      {children[0]}
      <div className='_wrapper'>
        {isIframe && <div className='_player' id={contentID}></div>}
        {children[1]}
      </div>

      <div className='_panel'>{children[2]}</div>
    </div>
  )
}

export const PlayerYoutube: PlayerYoutubeType = React.memo(PlayerYoutubeComponent)

export type {
  PlayerYoutubePropsType,
  PlayerYoutubePropsOutType,
  PlayerYoutubeComponentType,
  PlayerYoutubeType,
}
