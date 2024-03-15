import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { DurationObjType } from '../../../Interfaces/DurationObjType'
import { PlayerPanelPropsType } from '../PlayerPanel/PlayerPanel'
import { HandleEventType } from '../../../Interfaces/HandleEventType'

export type ContentPlateComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  key: string
  contentComponentName: string
  capture: string
  durationObj: DurationObjType
  moduleID: string
  contentID: string
  screenType: string
  storeStateSlice: {
    language: RootStoreType['language']
    mediaLoaded: RootStoreType['isLoaded']['mediaLoaded']
  }
  handleEvents: HandleEventType
}

export type ContentPlatePropsType = Omit<
  ContentPlateComponentPropsType,
  'storeStateSlice' | 'handleEvents'
>

export type ContentPlatePropsOutType = {
  contentComponentProps: Record<string, any>
  loaderBlurhashProps: any
  playerPanelProps: PlayerPanelPropsType
  linkProps: any
}

/**
 * @import import { ContentPlateType } from './ContentPlateType'
 */
export interface ContentPlateComponentType
  extends React.FunctionComponent<ContentPlateComponentPropsType> {
  (props: ContentPlateComponentPropsType): React.ReactElement
}

export type ContentPlateType = React.FunctionComponent<ContentPlatePropsType>
