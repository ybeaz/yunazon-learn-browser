import { HeaderFramePropsType } from '../../Frames/HeaderFrame/HeaderFrame'
import { MainFramePropsType } from '../../Frames/MainFrame/MainFrame'

export type AcademyMatrixPropsType = any

export type AcademyMatrixPropsOutType = {
  headerFrameProps: HeaderFramePropsType
  mainFrameProps: Omit<MainFramePropsType, 'children'>
}

/**
 * @import import { AcademyMatrixType } from './AcademyMatrixType'
 */
export interface AcademyMatrixComponentType
  extends React.FunctionComponent<AcademyMatrixPropsType> {
  (props: AcademyMatrixPropsType): React.ReactElement
}

export type AcademyMatrixType = React.FunctionComponent<AcademyMatrixPropsType>
