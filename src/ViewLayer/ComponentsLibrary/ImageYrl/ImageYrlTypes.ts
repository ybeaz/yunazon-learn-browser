export type ImageYrlPropsType = any

export type ImageYrlPropsOutType = Record<string, any>

/**
 * @import import { ImageYrlType } from './ImageYrlType'
 */
export interface ImageYrlComponentType
  extends React.FunctionComponent<ImageYrlPropsType> {
  (props: ImageYrlPropsType): React.ReactElement
}

export type ImageYrlType = React.FunctionComponent<ImageYrlPropsType>
