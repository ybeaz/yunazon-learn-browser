import { HeaderFramePropsType } from '../../Frames/HeaderFrame/HeaderFrame'
import { MainFramePropsType } from '../../Frames/MainFrame/MainFrame'
import { RootStoreType, HandleEventType } from '../../../Interfaces/'
import { ModulesBodyPropsType } from '../../Components/ModulesBody/ModulesBody'

export type ModulesPresentPropsType = {
  storeStateSlice: {
    language: RootStoreType['language']
  }
  handleEvents: HandleEventType
}

export type ModulesPresentPropsOutType = {
  headerFrameProps: Omit<HeaderFramePropsType, 'storeStateSlice'>
  mainFrameProps: Omit<MainFramePropsType, 'children'>
  modulesBodyProps: ModulesBodyPropsType
}

/**
 * @import import { ModulesPresentType } from './ModulesPresentType'
 */
export interface ModulesPresentComponentType
  extends React.FunctionComponent<ModulesPresentPropsType> {
  (props: ModulesPresentPropsType): React.ReactElement
}

export type ModulesPresentType = React.FunctionComponent<ModulesPresentPropsType>
