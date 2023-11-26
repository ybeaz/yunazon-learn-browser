import { DurationObjType } from '../../../Interfaces/DurationObjType'

export type ContentPlatePropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  key: string
  contentComponentName: string
  courseID: string
  courseCapture: string
  moduleCapture: string
  durationObj: DurationObjType
  moduleID: string
  contentID: string
  screenType: string
}

export type ContentPlatePropsOutType = {
  contentComponentProps: Record<string, any>
  loaderBlurhashProps: any
  playerPanelProps: any
  linkProps: any
}

/**
 * @import import { ContentPlateType } from './ContentPlateType'
 */
export interface ContentPlateComponentType
  extends React.FunctionComponent<ContentPlatePropsType> {
  (props: ContentPlatePropsType): React.ReactElement
}

export type ContentPlateType = React.FunctionComponent<ContentPlatePropsType>
