import { HeaderFramePropsType } from '../../Frames/HeaderFrame/HeaderFrame'
import { MainFramePropsType } from '../../Frames/MainFrame/MainFrame'
import { RootStoreType } from '../../../Interfaces/RootStoreType'

export type AcademyMatrixPropsType = {
  storeStateSlice: {
    language: RootStoreType['language']
    durationMultiplier: RootStoreType['scorm']['durationMultiplier']
    courses: RootStoreType['courses']
    isLoadedGlobalVars: RootStoreType['isLoaded']['isLoadedGlobalVars']
    isLoadedCourses: RootStoreType['isLoaded']['isLoadedCourses']
    inputSearch: RootStoreType['forms']['inputSearch']
  }
}

export type AcademyMatrixPropsOutType = {
  headerFrameProps: Omit<HeaderFramePropsType, 'storeStateSlice'>
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
