import { RootStoreType } from '../../../Interfaces/RootStoreType'

import { HeaderFramePropsType } from '../../Frames/HeaderFrame/HeaderFrame'
import { MainFramePropsType } from '../../Frames/MainFrame/MainFrame'
import { LoaderBlurhashPropsType } from '../../Components/LoaderBlurhash'
import { PlayerPanelPropsType } from '../../Components/PlayerPanel/PlayerPanel'
import { TextStructuredPropsType } from '../../Components/TextStructured/TextStructured'

export type AcademyPresentComponentPropsType = {
  storeStateSlice: {
    language: RootStoreType['language']
    durationMultiplier: RootStoreType['scorm']['durationMultiplier']
    moduleIDActive: RootStoreType['scorm']['courseIDActive']
    courses: RootStoreType['courses']
    mediaLoaded: RootStoreType['isLoaded']['mediaLoaded']
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
  summaryProps: TextStructuredPropsType
  objectionsProps: TextStructuredPropsType
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
