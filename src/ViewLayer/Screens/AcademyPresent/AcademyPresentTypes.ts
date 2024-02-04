import { RootStoreType } from '../../../Interfaces/RootStoreType'

import { HeaderFramePropsType } from '../../Frames/HeaderFrame/HeaderFrame'
import { MainFramePropsType } from '../../Frames/MainFrame/MainFrame'
import { LoaderBlurhashPropsType } from '../../Components/LoaderBlurhash'
import { PlayerPanelPropsType } from '../../Components/PlayerPanel/PlayerPanel'
import { TextStructuredPropsType } from '../../Components/TextStructured/TextStructured'
import { TextStructuredColumnsPropsType } from '../../Components/TextStructuredColumns/TextStructuredColumns'

export type AcademyPresentComponentPropsType = {
  storeStateSlice: {
    language: RootStoreType['language']
    durationMultiplier: RootStoreType['scorm']['durationMultiplier']
    moduleIDActive: RootStoreType['scorm']['courseIDActive']
    modules: RootStoreType['modules']
    mediaLoaded: RootStoreType['isLoaded']['mediaLoaded']
    isObjections: RootStoreType['componentsState']['isObjections']
    isSummary: RootStoreType['componentsState']['isSummary']
  }
}

export type AcademyPresentPropsType = Omit<
  AcademyPresentComponentPropsType,
  'storeStateSlice'
>

export type AcademyPresentPropsOutType = {
  headerFrameProps: HeaderFramePropsType
  mainFrameProps: Omit<MainFramePropsType, 'children'>
  contentComponentProps: Record<string, any>
  loaderBlurhashProps: LoaderBlurhashPropsType
  playerPanelProps: PlayerPanelPropsType
  textStructuredColumnsProps: TextStructuredColumnsPropsType
}

/**
 * @import import { AcademyPresentType } from './AcademyPresentType'
 */
export interface AcademyPresentComponentType
  extends React.FunctionComponent<AcademyPresentComponentPropsType> {
  (props: AcademyPresentComponentPropsType): React.ReactElement
}

export type AcademyPresentType =
  React.FunctionComponent<AcademyPresentPropsType>
