import { ModuleType } from '../../../@types/GraphqlTypes'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { DurationObjType } from '../../../Interfaces/DurationObjType'
import { PlayerPanelPropsType } from '../PlayerPanel/PlayerPanel'
import { ImageYrlPropsType, IconYrlPropsType } from 'yourails_view_layer_web'
import { HandleEventType } from '../../../Interfaces/HandleEventType'

export type ContentPlateComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  key: string
  contentComponentName: string
  capture: string
  isCompleted: boolean
  durationObj: DurationObjType
  moduleID: string
  contentID: string
  screenType: string
  storeStateSlice: {
    language: RootStoreType['language']
    mediaLoaded: RootStoreType['isLoaded']['mediaLoaded']
  }
  handleEvents: HandleEventType
  tags?: ModuleType['tags']
  thumbnails?: ModuleType['thumbnails']
}

export type ContentPlatePropsType = Omit<
  ContentPlateComponentPropsType,
  'storeStateSlice' | 'handleEvents'
>

export type ContentPlatePropsOutType = {
  contentComponentProps: Record<string, any>
  iconCompletedProps: IconYrlPropsType
  iconTagsTooltipProps: IconYrlPropsType
  loaderBlurhashProps: any
  loaderImageProps: ImageYrlPropsType
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
