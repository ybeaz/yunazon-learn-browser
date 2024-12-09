import React from 'react'
import { DurationObjType } from 'yourails_common'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { TooltipImageContentPropsType } from '../../Components/TooltipImageContent/TooltipImageContent'

export type PlayerPanelComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  capture: string
  durationObj: DurationObjType
  screenType: string
  isShowingPlay: boolean
  buttonPlayProps?: any
  buttonPauseProps?: any
  buttonStopProps?: any
  isActionButtonDisplaying: boolean
  questionsTotal?: number
  tags: string[]
  storeStateSlice: {
    language: RootStoreType['language']
  }
}

export type PlayerPanelPropsType = Omit<PlayerPanelComponentPropsType, 'storeStateSlice'>

export type PlayerPanelPropsOutType = {
  tooltipIsCompletedProps: TooltipImageContentPropsType
  tooltipTagsProps: TooltipImageContentPropsType
}

/**
 * @import import { PlayerPanelComponentPropsType, PlayerPanelPropsType, PlayerPanelPropsOutType, PlayerPanelComponentType, PlayerPanelType } from './PlayerPanelTypes'
 */
export interface PlayerPanelComponentType
  extends React.FunctionComponent<PlayerPanelComponentPropsType> {
  (props: PlayerPanelComponentPropsType): React.ReactElement
}

export type PlayerPanelType = React.FunctionComponent<PlayerPanelPropsType>
