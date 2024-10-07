import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { HandleEventType } from '../../../DataLayer/index.handleEvents'

export type ModalFramesComponentPropsType = {
  children?: React.ReactElement
  storeStateSlice: {
    modalFrames: RootStoreType['componentsState']['modalFrames']
    isConfetti: RootStoreType['componentsState']['isConfetti']
  }
  handleEvents: HandleEventType
}

export type ModalFramesPropsType = Omit<
  ModalFramesComponentPropsType,
  'storeStateSlice' | 'children' | 'handleEvents'
>

export type ModalFramesPropsOutType = Record<string, any>

/**
 * @import import { ModalFramesType } from './ModalFramesType'
 */
export interface ModalFramesComponentType
  extends React.FunctionComponent<ModalFramesComponentPropsType> {
  (props: ModalFramesComponentPropsType): React.ReactElement
}

export type ModalFramesType = React.FunctionComponent<ModalFramesPropsType>
