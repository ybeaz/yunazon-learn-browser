import React from 'react'
import { nanoid } from 'nanoid'

import {
  IconYrl,
  ImageYrl,
  ButtonYrl,
  withPropsYrl,
  withStoreStateSelectedYrl,
} from '../../ComponentsLibrary/'

import { DICTIONARY } from '../../../Constants/dictionary.const'
import { getClasses } from '../../../Shared/getClasses'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import {
  StagesType,
  StagespropsOut,
  CourseCreateBodyComponentPropsType,
  CourseCreateBodyPropsType,
  CourseCreateBodyPropsOutType,
  CourseCreateBodyComponentType,
  CourseCreateBodyType,
} from './CourseCreateBodyTypes'
import { getCourseCreateStages } from './getCourseCreateStages'

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

  const stages: StagesType[] = getCourseCreateStages()

  const getStages = (stagesIn: StagesType[]) => {
    return stagesIn.map((stage: StagesType) => {
      const {
        name: stageName,
        action,
        isToDo,
        isPending,
        isSuccess,
        isFailed,
        isRepeat,
      } = stage

      const propsOut: StagespropsOut = {
        iconToDoProps: {
          classAdded: 'Icon_toDo',
          icon: 'MdCheckBoxOutlineBlank',
          isVisible: isToDo,
        },
        imagePendingProps: {
          classAdded: 'Image_pending',
          src: 'https://yourails.com/images/loading/loading01.gif',
          isVisible: isPending,
        },
        iconSuccessProps: {
          classAdded: 'Icon_success',
          icon: 'MdCheck',
          isVisible: isSuccess,
        },
        iconFailedProps: {
          classAdded: 'Icon_failed',
          icon: 'MdClear',
          isVisible: isSuccess,
        },
        buttonRepeatProps: {
          classAdded: 'Button_create_stage_repeat',
          icon: 'MdOutlineReplay',
          action,
          isVisible: isRepeat,
        },
      }

      const key = nanoid()

      return (
        <div key={key} className='_stage'>
          <IconYrl {...propsOut.iconToDoProps} />
          <ImageYrl {...propsOut.imagePendingProps} />
          <IconYrl {...propsOut.iconSuccessProps} />
          <IconYrl {...propsOut.iconFailedProps} />
          <ButtonYrl {...propsOut.buttonRepeatProps} />
        </div>
      )
    })
  }

  return (
    <div className={getClasses('CourseCreateBody', classAdded)}>
      <h2 className='_h2'>{DICTIONARY.Create_course[language]}</h2>
      <div className='_stagesWrapper'>{getStages(stages)}</div>
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
