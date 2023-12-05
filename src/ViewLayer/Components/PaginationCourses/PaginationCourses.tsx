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
      icon: 'MdArrowBackIos',
      classAdded: 'Button_PaginationCoursesBackward',
      captureRight: 'Prev',
      action: {
        typeEvent: 'SET_PAGE_CURSOR',
        data: { step: -1 },
      },
      isDisplaying: true, // isButtonSlideBackward,
    },
    buttonCoursesForwardProps: {
      icon: 'MdArrowForwardIos',
      classAdded: 'Button_PaginationCoursesForward',
      captureLeft: 'Next',
      action: {
        typeEvent: 'SET_PAGE_CURSOR',
        data: { step: 1 },
      },
      isDisplaying: true, //  isButtonSlideForward,
    },
  }

  return (
    <div className={getClasses('PaginationCourses', classAdded)}>
      <ButtonYrl {...propsOut.buttonCoursesBackwardProps} />
      <div className='_pages'>1 ... 10</div>
      <ButtonYrl {...propsOut.buttonCoursesForwardProps} />
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
