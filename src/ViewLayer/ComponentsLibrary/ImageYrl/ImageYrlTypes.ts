import { ActionReduxType } from '../../../Interfaces/ActionReduxType'

export type ImageYrlPropsType = {
  classAdded: string
  src: string | undefined
  action?: ActionReduxType
  handleEvents?: Function
}

export type ImageYrlPropsOutType = Record<string, any>

/**
 * @import import { ImageYrlType } from './ImageYrlType'
 */
export interface ImageYrlComponentType
  extends React.FunctionComponent<ImageYrlPropsType> {
  (props: ImageYrlPropsType): React.ReactElement
}

export type ImageYrlType = React.FunctionComponent<ImageYrlPropsType>
