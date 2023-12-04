import React from 'react'

import { ButtonYrl, withPropsYrl } from '../../ComponentsLibrary'
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
    buttonCoursesBackwardProps: {
      icon: 'MdForward',
      classAdded: 'Button_PaginationCoursesBackward',
      action: {
        typeEvent: 'SET_PAGE_CURSOR',
        data: { step: -1 },
      },
      isDisplaying: true, // isButtonSlideBackward,
    },
    buttonCoursesForwardProps: {
      icon: 'MdForward',
      classAdded: 'Button_PaginationCoursesForward',
      action: {
        typeEvent: 'SET_PAGE_CURSOR',
        data: { step: 1 },
      },
      isDisplaying: true, // isButtonSlideForward,
    },
  }

  return (
    <div className={getClasses('PaginationCourses', classAdded)}>
      <ButtonYrl {...propsOut.buttonCoursesBackwardProps}>Prev</ButtonYrl>
      <div>Pages</div>
      <ButtonYrl {...propsOut.buttonCoursesForwardProps}>Next</ButtonYrl>
    </div>
  )
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
