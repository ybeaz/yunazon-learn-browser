export type ModalFramesPropsType = {
  children: React.ReactElement
}

export type ModalFramesPropsOutType = Record<string, any>

/**
 * @import import { ModalFramesType } from './ModalFramesType'
 */
export interface ModalFramesComponentType
  extends React.FunctionComponent<ModalFramesPropsType> {
  (props: ModalFramesPropsType): React.ReactElement
}

export type ModalFramesType = React.FunctionComponent<ModalFramesPropsType>
