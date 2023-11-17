export type FooterFramePropsType = {
  children: React.ReactElement
}

export type FooterFramePropsOutType = Record<string, any>

/**
 * @import import { FooterFrameType } from './FooterFrameType'
 */
export interface FooterFrameComponentType
  extends React.FunctionComponent<FooterFramePropsType> {
  (props: FooterFramePropsType): React.ReactElement
}

export type FooterFrameType = React.FunctionComponent<FooterFramePropsType>
