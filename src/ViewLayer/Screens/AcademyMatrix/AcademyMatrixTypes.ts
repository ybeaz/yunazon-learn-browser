import { HeaderFramePropsType } from '../../Frames/HeaderFrame/HeaderFrame'
import { MainFramePropsType } from '../../Frames/MainFrame/MainFrame'
import { RootStoreType, HandleEventType } from '../../../Interfaces/'
import { PaginationNavigationPropsType } from '../../Components/'

export type AcademyMatrixPropsType = {
  storeStateSlice: {
    language: RootStoreType['language']
    durationMultiplier: RootStoreType['scorm']['durationMultiplier']
    modules: RootStoreType['modules']
    isLoadedGlobalVars: RootStoreType['isLoaded']['isLoadedGlobalVars']
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
