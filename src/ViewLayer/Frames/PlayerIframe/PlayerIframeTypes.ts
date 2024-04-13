import { Children, ReactNode } from 'react'

export type PlayerIframePropsType = {
  moduleID: string
  contentID: string
  isVisible: boolean
  isIframe: boolean
  children: React.ReactElement[]
}

export type PlayerIframePropsOutType = Record<string, any>

/**
 * @import import { PlayerIframeType } from './PlayerIframeType'
 */
export interface PlayerIframeComponentType extends React.FunctionComponent<PlayerIframePropsType> {
  (props: PlayerIframePropsType): React.ReactElement
}

export type PlayerIframeType = React.FunctionComponent<PlayerIframePropsType>
