import { ModuleType } from 'yourails_common'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { DurationObjType } from 'yourails_common'
import { PlayerPanelPropsType } from '../PlayerPanel/PlayerPanel'
import { ReaderIframePropsType } from '../../Frames/ReaderIframe/ReaderIframe'
import { PlayerYoutubeIframePropsType } from '../../Frames/PlayerYoutubeIframe/PlayerYoutubeIframe'
import { ImageYrlPropsType, IconYrlPropsType } from 'yourails_common'
import { TooltipImageContentPropsType } from '../../Components/TooltipImageContent/TooltipImageContent'
import { HandleEventType } from 'yourails_common'

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
    urlParamsQuery: RootStoreType['urlParamsQuery']
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
  contentComponentProps: {
    ReaderIframe: ReaderIframePropsType
    PlayerYoutubeIframe: PlayerYoutubeIframePropsType
  }
  iconCompletedProps: IconYrlPropsType
  tooltipTagsProps: TooltipImageContentPropsType
  tooltipIsCompletedProps: TooltipImageContentPropsType
  loaderBlurhashProps: any
  loaderImageProps: ImageYrlPropsType
  // playerPanelProps: PlayerPanelPropsType
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
