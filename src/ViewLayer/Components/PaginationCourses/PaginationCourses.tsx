import React from 'react'

import { withPropsYrl } from '../../ComponentsLibrary'
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
  const { classAdded } = props

  const propsOut: PaginationCoursesPropsOutType = {
    buttonSlideBackwardProps: {
      icon: 'MdForward',
      classAdded: 'Button_MdBackward2',
      action: {
        typeEvent: 'SET_PAGE_CURSOR',
        data: { step: -1 },
      },
      isDisplaying: true, // isButtonSlideBackward,
    },
    buttonSlideForwardProps: {
      icon: 'MdForward',
      classAdded: 'Button_MdForward2',
      action: {
        typeEvent: 'SET_PAGE_CURSOR',
        data: { step: 1 },
      },
      isDisplaying: true, // isButtonSlideForward,
    },
  }

  return <div className={getClasses('PaginationCourses', classAdded)}></div>
}

export const PaginationCourses = withPropsYrl({})(
  React.memo(PaginationCoursesComponent)
)

export type {
  PaginationCoursesPropsType,
  PaginationCoursesPropsOutType,
  PaginationCoursesComponentType,
  PaginationCoursesType,
}
