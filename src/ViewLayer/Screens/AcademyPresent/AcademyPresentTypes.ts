import { HeaderFramePropsType } from '../../Frames/HeaderFrame/HeaderFrame'
import { MainFramePropsType } from '../../Frames/MainFrame/MainFrame'
import { LoaderBlurhashPropsType } from '../../Components/LoaderBlurhash'
import { PlayerPanelPropsType } from '../../Components/PlayerPanel'

export type AcademyPresentPropsType = any

export type AcademyPresentPropsOutType = {
  headerFrameProps: HeaderFramePropsType
  mainFrameProps: Omit<MainFramePropsType, 'children'>
  contentComponentProps: Record<string, any>
  loaderBlurhashProps: LoaderBlurhashPropsType
  playerPanelProps: PlayerPanelPropsType
}

/**
 * @import import { AcademyPresentType } from './AcademyPresentType'
 */
export interface AcademyPresentComponentType
  extends React.FunctionComponent<AcademyPresentPropsType> {
  (props: AcademyPresentPropsType): React.ReactElement
}

export type AcademyPresentType =
  React.FunctionComponent<AcademyPresentPropsType>
