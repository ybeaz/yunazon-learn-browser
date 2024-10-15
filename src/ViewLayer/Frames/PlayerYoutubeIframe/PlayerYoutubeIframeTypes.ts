import { DurationObjType } from 'yourails_common'
import { PlayerPanelPropsType } from '../../Components/PlayerPanel/PlayerPanel'

export type PlayerYoutubeIframePropsType = {
  contentComponentName: string
  moduleID: string
  contentID: string
  isVisible: boolean
  isIframe: boolean
  capture: string
  durationObj: DurationObjType
  screenType: string
  questionsTotal: number
  children: React.ReactElement[]
}

export type PlayerYoutubeIframePropsOutType = {
  playerPanelProps: PlayerPanelPropsType
}

/**
 * @import import { PlayerYoutubeIframeType } from './PlayerYoutubeIframeType'
 */
export interface PlayerYoutubeIframeComponentType
  extends React.FunctionComponent<PlayerYoutubeIframePropsType> {
  (props: PlayerYoutubeIframePropsType): React.ReactElement
}

export type PlayerYoutubeIframeType = React.FunctionComponent<PlayerYoutubeIframePropsType>
