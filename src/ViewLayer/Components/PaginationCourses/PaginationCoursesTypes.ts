export type PaginationCoursesPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
}

export type PaginationCoursesPropsOutType = Record<string, any>

/**
 * @import import { PaginationCoursesType } from './PaginationCoursesType'
 */
export interface PaginationCoursesComponentType
  extends React.FunctionComponent<PaginationCoursesPropsType> {
  (props: PaginationCoursesPropsType): React.ReactElement
}

export type PaginationCoursesType =
  React.FunctionComponent<PaginationCoursesPropsType>
