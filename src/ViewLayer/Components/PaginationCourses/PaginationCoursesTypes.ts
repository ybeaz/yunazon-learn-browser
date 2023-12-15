import { ButtonYrlPropsType } from '../../ComponentsLibrary'
import { PaginationType } from '../../../Interfaces'

export type PaginationCoursesPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    pagesCourses: PaginationType
  }
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
