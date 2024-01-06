import React from 'react'

import {
  withPropsYrl,
  withStoreStateSelectedYrl,
} from '../../ComponentsLibrary/'

import { DICTIONARY } from '../../../Constants/dictionary.const'
import { getClasses } from '../../../Shared/getClasses'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import {
  CourseCreateBodyComponentPropsType,
  CourseCreateBodyPropsType,
  CourseCreateBodyPropsOutType,
  CourseCreateBodyComponentType,
  CourseCreateBodyType,
} from './CourseCreateBodyTypes'

/**
 * @description Component to render CourseCreateBody
 * @import import { CourseCreateBody, CourseCreateBodyPropsType, CourseCreateBodyPropsOutType, CourseCreateBodyType } 
             from '../Components/CourseCreateBody/CourseCreateBody'
 */
const CourseCreateBodyComponent: CourseCreateBodyComponentType = (
  props: CourseCreateBodyComponentPropsType
) => {
  const {
    classAdded,
    storeStateSlice: { language },
    handleEvents,
  } = props

  const propsOut: CourseCreateBodyPropsOutType = {
    buttonMetaDataProps: {
      icon: 'MdForward',
      classAdded: 'Button_MdForward2',
      action: {
        typeEvent: 'PLUS_QUESTION_SLIDE',
        data: {},
      },
      isDisplaying: true,
    },
    buttonTranscriptProps: {
      icon: 'MdForward',
      classAdded: 'Button_MdForward2',
      action: {
        typeEvent: 'PLUS_QUESTION_SLIDE',
        data: {},
      },
      isDisplaying: true,
    },
    buttonSummaryProps: {
      icon: 'MdForward',
      classAdded: 'Button_MdForward2',
      action: {
        typeEvent: 'PLUS_QUESTION_SLIDE',
        data: {},
      },
      isDisplaying: true,
    },
    buttonQuestionsProps: {
      icon: 'MdForward',
      classAdded: 'Button_MdForward2',
      action: {
        typeEvent: 'PLUS_QUESTION_SLIDE',
        data: {},
      },
      isDisplaying: true,
    },
    buttonObjectionsProps: {
      icon: 'MdForward',
      classAdded: 'Button_MdForward2',
      action: {
        typeEvent: 'PLUS_QUESTION_SLIDE',
        data: {},
      },
      isDisplaying: true,
    },
    buttonFinalisedProps: {
      icon: 'MdForward',
      classAdded: 'Button_MdForward2',
      action: {
        typeEvent: 'PLUS_QUESTION_SLIDE',
        data: {},
      },
      isDisplaying: true,
    },
  }

  return (
    <div className={getClasses('CourseCreateBody', classAdded)}>
      <h2 className='_h2'>{DICTIONARY.Create_course[language]}</h2>
    </div>
  )
}

const storeStateSliceProps: string[] = ['language']
export const CourseCreateBody: CourseCreateBodyType = withPropsYrl({
  handleEvents: handleEventsIn,
})(
  withStoreStateSelectedYrl(
    storeStateSliceProps,
    React.memo(CourseCreateBodyComponent)
  )
)

export type {
  CourseCreateBodyPropsType,
  CourseCreateBodyPropsOutType,
  CourseCreateBodyComponentType,
  CourseCreateBodyType,
}
