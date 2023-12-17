import React from 'react'

import { ButtonYrl, withStoreStateSliceYrl } from '../../ComponentsLibrary/'
import { getClasses } from '../../../Shared/getClasses'

import {
  PaginationCoursesPropsType,
  PaginationCoursesPropsOutType,
  PaginationCoursesComponentType,
  PaginationCoursesType,
} from './PaginationCoursesTypes'

/**
 * @description Component to render PaginationCourses
 * @import import { PaginationCourses, PaginationCoursesPropsType, PaginationCoursesPropsOutType, PaginationCoursesType } 
             from '../Components/PaginationCourses/PaginationCourses'
 */
const PaginationCoursesComponent: PaginationCoursesComponentType = (
  props: PaginationCoursesPropsType
) => {
  const {
    classAdded,
    storeStateSlice: { pagesCourses },
  } = props

  const hasNextPage = pagesCourses.hasNextPage
  const first = pagesCourses?.first || 0
  const last = first + pagesCourses.offset

  const propsOut: PaginationCoursesPropsOutType = {
    buttonCoursesBackwardProps: {
      icon: 'MdArrowBackIos',
      classAdded: 'Button_PaginationCoursesBackward',
      captureRight: 'Prev',
      action: {
        typeEvent: 'SET_PAGE_CURSOR',
        data: { paginationName: 'pagesCourses', direction: 'prev' },
      },
      isDisplaying: !!first,
    },
    buttonCoursesForwardProps: {
      icon: 'MdArrowForwardIos',
      classAdded: 'Button_PaginationCoursesForward',
      captureLeft: 'Next',
      action: {
        typeEvent: 'SET_PAGE_CURSOR',
        data: { paginationName: 'pagesCourses', direction: 'next' },
      },
      isDisplaying: hasNextPage,
    },
  }

  return (
    <div className={getClasses('PaginationCourses', classAdded)}>
      <ButtonYrl {...propsOut.buttonCoursesBackwardProps} />
      <div className='_pages'>{`${first} ... ${last}`}</div>
      <ButtonYrl {...propsOut.buttonCoursesForwardProps} />
    </div>
  )
}

export const PaginationCourses = withStoreStateSliceYrl(
  ['pagesCourses'],
  React.memo(PaginationCoursesComponent)
)

export type {
  PaginationCoursesPropsType,
  PaginationCoursesPropsOutType,
  PaginationCoursesComponentType,
  PaginationCoursesType,
}
