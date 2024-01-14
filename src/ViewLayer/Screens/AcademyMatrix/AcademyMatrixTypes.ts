import { HeaderFramePropsType } from '../../Frames/HeaderFrame/HeaderFrame'
import { MainFramePropsType } from '../../Frames/MainFrame/MainFrame'
import { RootStoreType, HandleEventType } from '../../../Interfaces/'
import { PaginationNavigationPropsType } from '../../Components/'

export type AcademyMatrixPropsType = {
  storeStateSlice: {
    language: RootStoreType['language']
    durationMultiplier: RootStoreType['scorm']['durationMultiplier']
    courses: RootStoreType['courses']
    isLoadedGlobalVars: RootStoreType['isLoaded']['isLoadedGlobalVars']
    isLoadedCourses: RootStoreType['isLoaded']['isLoadedCourses']
    inputSearch: RootStoreType['forms']['inputSearch']
  }
  handleEvents: HandleEventType
}

export type AcademyMatrixPropsOutType = {
  headerFrameProps: Omit<HeaderFramePropsType, 'storeStateSlice'>
  mainFrameProps: Omit<MainFramePropsType, 'children'>
  paginationNavigationProps: PaginationNavigationPropsType
}

/**
 * @import import { AcademyMatrixType } from './AcademyMatrixType'
 */
export interface AcademyMatrixComponentType
  extends React.FunctionComponent<AcademyMatrixPropsType> {
  (props: AcademyMatrixPropsType): React.ReactElement
}

export type AcademyMatrixType = React.FunctionComponent<AcademyMatrixPropsType>
