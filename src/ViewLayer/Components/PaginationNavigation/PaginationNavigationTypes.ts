import { ButtonYrlPropsType } from '../../ComponentsLibrary/'
import { PaginationType } from '../../../Interfaces'

export type PaginationNavigationComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    pagesCourses: PaginationType
  }
  paginationName: 'pagesCourses' | 'pagesMyCourses' | 'pagesMyDocuments'
}

export type PaginationNavigationPropsOutType = {
  buttonCoursesBackwardProps: ButtonYrlPropsType
  buttonCoursesForwardProps: ButtonYrlPropsType
}

export type PaginationNavigationPropsType = Omit<
  PaginationNavigationComponentPropsType,
  'storeStateSlice'
>

/**
 * @import import { PaginationNavigationType } from './PaginationNavigationType'
 */
export interface PaginationNavigationComponentType
  extends React.FunctionComponent<PaginationNavigationComponentPropsType> {
  (props: PaginationNavigationComponentPropsType): React.ReactElement
}

export type PaginationNavigationType =
  React.FunctionComponent<PaginationNavigationPropsType>
