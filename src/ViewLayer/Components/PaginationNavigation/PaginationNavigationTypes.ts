import { ButtonYrlPropsType } from '../../ComponentsLibrary/'
import { PaginationType } from '../../../Interfaces'

export type PaginationNavigationPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    pagesCourses: PaginationType
  }
}

export type PaginationNavigationPropsOutType = {
  buttonCoursesBackwardProps: ButtonYrlPropsType
  buttonCoursesForwardProps: ButtonYrlPropsType
}

/**
 * @import import { PaginationNavigationType } from './PaginationNavigationType'
 */
export interface PaginationNavigationComponentType
  extends React.FunctionComponent<PaginationNavigationPropsType> {
  (props: PaginationNavigationPropsType): React.ReactElement
}

export type PaginationNavigationType =
  React.FunctionComponent<PaginationNavigationPropsType>
