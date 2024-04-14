export type ReaderIframePropsType = {
  moduleID: string
  contentID: string
  isVisible: boolean
  isIframe: boolean
  screenType: string
  children: React.ReactElement[]
}

export type ReaderIframePropsOutType = Record<string, any>

/**
 * @import import { ReaderIframeType } from './ReaderIframeType'
 */
export interface ReaderIframeComponentType extends React.FunctionComponent<ReaderIframePropsType> {
  (props: ReaderIframePropsType): React.ReactElement
}

export type ReaderIframeType = React.FunctionComponent<ReaderIframePropsType>
