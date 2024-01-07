import { ActionReduxType } from '../../../Interfaces/ActionReduxType'

export type ImageYrlPropsType = {
  classAdded: string
  src: string | undefined
  action?: ActionReduxType
  handleEvents?: Function
  isDisplaying?: boolean // is element present on the page and visible/ displaying?
  isVisible?: boolean // element is present on the page, but if it is visible/ displaying?
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
