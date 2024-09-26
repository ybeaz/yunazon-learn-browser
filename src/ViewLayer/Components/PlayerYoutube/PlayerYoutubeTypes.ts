import { Children, ReactNode } from 'react'

export type PlayerYoutubePropsType = {
  moduleID: string
  contentID: string
  isVisible: boolean
  isIframe: boolean
  children: React.ReactElement[]
}

export type PlayerYoutubePropsOutType = Record<string, any>

/**
 * @import import { PlayerYoutubeType } from './PlayerYoutubeType'
 */
export interface PlayerYoutubeComponentType
  extends React.FunctionComponent<PlayerYoutubePropsType> {
  (props: PlayerYoutubePropsType): React.ReactElement
}

export type PlayerYoutubeType = React.FunctionComponent<PlayerYoutubePropsType>
