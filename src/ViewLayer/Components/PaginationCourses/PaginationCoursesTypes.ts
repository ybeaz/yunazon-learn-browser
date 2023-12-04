import { ButtonYrlPropsType } from '../../ComponentsLibrary'

export type PaginationCoursesPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
}

export type PaginationCoursesPropsOutType = {
  buttonCoursesBackwardProps: ButtonYrlPropsType
  buttonCoursesForwardProps: ButtonYrlPropsType
}

/**
 * @import import { PaginationCoursesType } from './PaginationCoursesType'
 */
export interface PaginationCoursesComponentType
  extends React.FunctionComponent<PaginationCoursesPropsType> {
  (props: PaginationCoursesPropsType): React.ReactElement
}

export type PaginationCoursesType =
  React.FunctionComponent<PaginationCoursesPropsType>
