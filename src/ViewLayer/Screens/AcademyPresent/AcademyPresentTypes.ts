import { HeaderFramePropsType } from '../../Frames/HeaderFrame'
import { MainFramePropsType } from '../../Frames/MainFrame'

export type AcademyPresentPropsType = any

export type AcademyPresentPropsOutType = {
  headerFrameProps: HeaderFramePropsType
  mainFrameProps: Omit<MainFramePropsType, 'children'>
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
