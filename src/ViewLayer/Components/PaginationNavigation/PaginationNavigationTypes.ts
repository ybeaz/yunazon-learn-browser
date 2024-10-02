import { ButtonYrlPropsType } from 'yourails_view_layer_web'
import { RootStoreType, PaginationNameEnumType } from '../../../Interfaces'
import { HandleEventType } from '../../../DataLayer/index.handleEvents'

export type PaginationNavigationComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    pagination: RootStoreType['componentsState']['pagination']
  }
  paginationName: PaginationNameEnumType
  handleEvents: HandleEventType
}

export type PaginationNavigationPropsOutType = {
  buttonCoursesBackwardProps: ButtonYrlPropsType
  buttonCoursesForwardProps: ButtonYrlPropsType
}

export type PaginationNavigationPropsType = Omit<
  PaginationNavigationComponentPropsType,
  'storeStateSlice' | 'handleEvents'
>

/**
 * @import import { PaginationNavigationType } from './PaginationNavigationType'
 */
export interface PaginationNavigationComponentType
  extends React.FunctionComponent<PaginationNavigationComponentPropsType> {
  (props: PaginationNavigationComponentPropsType): React.ReactElement
}

export type PaginationNavigationType = React.FunctionComponent<PaginationNavigationPropsType>
