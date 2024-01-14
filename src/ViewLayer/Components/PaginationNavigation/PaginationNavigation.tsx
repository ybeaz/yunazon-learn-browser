import React from 'react'

import { ButtonYrl, withStoreStateSelectedYrl } from '../../ComponentsLibrary/'
import { getClasses } from '../../../Shared/getClasses'

import {
  PaginationNavigationPropsType,
  PaginationNavigationPropsOutType,
  PaginationNavigationComponentType,
  PaginationNavigationType,
} from './PaginationNavigationTypes'

/**
 * @description Component to render PaginationNavigation
 * @import import { PaginationNavigation, PaginationNavigationPropsType, PaginationNavigationPropsOutType, PaginationNavigationType } 
             from '../Components/PaginationNavigation/PaginationNavigation'
 */
const PaginationNavigationComponent: PaginationNavigationComponentType = (
  props: PaginationNavigationPropsType
) => {
  const {
    classAdded,
    storeStateSlice: { pagesCourses },
  } = props

  const hasNextPage = pagesCourses.hasNextPage
  const first = pagesCourses?.first || 0
  const last = first + pagesCourses.offset

  const propsOut: PaginationNavigationPropsOutType = {
    buttonCoursesBackwardProps: {
      icon: 'MdArrowBackIos',
      classAdded: 'Button_PaginationNavigationBackward',
      captureRight: 'Prev',
      action: {
        typeEvent: 'SET_PAGE_CURSOR',
        data: { paginationName: 'pagesCourses', direction: 'prev' },
      },
      isDisplaying: !!first,
    },
    buttonCoursesForwardProps: {
      icon: 'MdArrowForwardIos',
      classAdded: 'Button_PaginationNavigationForward',
      captureLeft: 'Next',
      action: {
        typeEvent: 'SET_PAGE_CURSOR',
        data: { paginationName: 'pagesCourses', direction: 'next' },
      },
      isDisplaying: hasNextPage,
    },
  }

  return (
    <div className={getClasses('PaginationNavigation', classAdded)}>
      <ButtonYrl {...propsOut.buttonCoursesBackwardProps} />
      <div className='_pages'>{`${first} ... ${last}`}</div>
      <ButtonYrl {...propsOut.buttonCoursesForwardProps} />
    </div>
  )
}

export const PaginationNavigation = withStoreStateSelectedYrl(
  ['pagesCourses'],
  React.memo(PaginationNavigationComponent)
)

export type {
  PaginationNavigationPropsType,
  PaginationNavigationPropsOutType,
  PaginationNavigationComponentType,
  PaginationNavigationType,
}
