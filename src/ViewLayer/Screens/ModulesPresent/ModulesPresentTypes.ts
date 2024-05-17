import { HeaderFramePropsType } from '../../Frames/HeaderFrame/HeaderFrame'
import { MainFramePropsType } from '../../Frames/MainFrame/MainFrame'
import { RootStoreType, HandleEventType } from '../../../Interfaces/'
import { PaginationNavigationPropsType } from '../../Components/'

export type ModulesPresentPropsType = {
  storeStateSlice: {
    language: RootStoreType['language']
    durationMultiplier: RootStoreType['scorm']['durationMultiplier']
    modules: RootStoreType['modules']
    isLoadedGlobalVars: RootStoreType['isLoaded']['isLoadedGlobalVars']
  }
  handleEvents: HandleEventType
}

export type ModulesPresentPropsOutType = {
  headerFrameProps: Omit<HeaderFramePropsType, 'storeStateSlice'>
  mainFrameProps: Omit<MainFramePropsType, 'children'>
  paginationNavigationProps: PaginationNavigationPropsType
}

/**
 * @import import { ModulesPresentType } from './ModulesPresentType'
 */
export interface ModulesPresentComponentType
  extends React.FunctionComponent<ModulesPresentPropsType> {
  (props: ModulesPresentPropsType): React.ReactElement
}

export type ModulesPresentType = React.FunctionComponent<ModulesPresentPropsType>
